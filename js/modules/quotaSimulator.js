/**
 * Household Bio-Quota Simulator Module (criteria.html)
 * An interactive educational tool demonstrating the ethical and ecological
 * realities of living under 2055 Los Baños carrying capacity constraints.
 */

export function initQuotaSimulator() {
    const waterSlider = document.getElementById('slider-water');
    const powerSlider = document.getElementById('slider-power');
    const transitSlider = document.getElementById('slider-transit');

    if (!waterSlider || !powerSlider || !transitSlider) return;

    function recalculate() {
        const water = parseFloat(waterSlider.value);
        const power = parseFloat(powerSlider.value);
        const transit = parseFloat(transitSlider.value);

        // Display current values
        const valWater = document.getElementById('val-water');
        const valPower = document.getElementById('val-power');
        const valTransit = document.getElementById('val-transit');

        if (valWater) valWater.textContent = `${water} L`;
        if (valPower) valPower.textContent = `${power.toFixed(1)} kWh`;
        if (valTransit) valTransit.textContent = `${transit} km`;

        // Baseline targets
        // Water: 65 L baseline
        // Power: 3.8 kWh baseline
        // Transit: 14 km baseline
        const waterRatio = water / 65;
        const powerRatio = power / 3.8;
        const transitRatio = transit / 14;

        // Weighted Index (Water is critical 45%, Power 35%, Transit 20%)
        const compositeIndex = (waterRatio * 0.45) + (powerRatio * 0.35) + (transitRatio * 0.20);
        const scoreOutOf100 = Math.max(10, Math.min(100, Math.round(100 - ((compositeIndex - 1) * 60))));

        // Elements to update
        const scoreEl = document.getElementById('quota-score-display');
        const statusBadge = document.getElementById('quota-status-badge');
        const statusTitle = document.getElementById('quota-status-title');
        const statusDesc = document.getElementById('quota-status-desc');
        const meterFill = document.getElementById('quota-meter-fill');

        if (scoreEl) scoreEl.textContent = `${scoreOutOf100}/100`;
        if (meterFill) {
            meterFill.style.width = `${scoreOutOf100}%`;
        }

        if (compositeIndex <= 0.85) {
            // Surplus
            if (meterFill) meterFill.style.background = 'var(--gradient-green)';
            if (statusBadge) {
                statusBadge.className = 'badge badge-green';
                statusBadge.textContent = '● STATUS: ECO-SURPLUS STEWARD';
            }
            if (statusTitle) statusTitle.textContent = 'Optimal Ecological Harmony';
            if (statusDesc) {
                statusDesc.textContent = 'Household operates well within Sector 4 carrying capacity. Surplus credits are banked into the UPLB community resilience fund. Family earns priority cooling pod access during extreme thermal peaks.';
            }
        } else if (compositeIndex <= 1.05) {
            // Balanced
            if (meterFill) meterFill.style.background = 'var(--gradient-brand)';
            if (statusBadge) {
                statusBadge.className = 'badge badge-blue';
                statusBadge.textContent = '● STATUS: CARRYING CAPACITY BALANCED';
            }
            if (statusTitle) statusTitle.textContent = 'Compliant Sustainable Baseline';
            if (statusDesc) {
                statusDesc.textContent = 'Consumption matches the daily regenerated capacity of Makiling solar-geothermal grids and graywater bio-digesters. Zero penalties; full participation in Sector Resident Council.';
            }
        } else if (compositeIndex <= 1.35) {
            // Warning
            if (meterFill) meterFill.style.background = '#eab308';
            if (statusBadge) {
                statusBadge.className = 'badge';
                statusBadge.style.background = '#fef9c3';
                statusBadge.style.color = '#a16207';
                statusBadge.style.border = '1px solid #fde047';
                statusBadge.textContent = '▲ WARNING: RATION SURCHARGE ACTIVE';
            }
            if (statusTitle) statusTitle.textContent = 'Moderate Resource Strain';
            if (statusDesc) {
                statusDesc.textContent = 'Your consumption exceeds regenerative rate. Secondary water lines restricted to gravity-drip pressure. 15% surcharge deducted from monthly community energy dividend.';
            }
        } else {
            // Critical
            if (meterFill) meterFill.style.background = '#ef4444';
            if (statusBadge) {
                statusBadge.className = 'badge';
                statusBadge.style.background = '#fee2e2';
                statusBadge.style.color = '#b91c1c';
                statusBadge.style.border = '1px solid #fca5a5';
                statusBadge.textContent = '✕ ALERT: ECOLOGICAL BREACH';
            }
            if (statusTitle) statusTitle.textContent = 'Carrying Capacity Breach';
            if (statusDesc) {
                statusDesc.textContent = 'Immediate biometric throttle initiated on non-essential power outlets. Discretionary tap locks engage until next 24-hour cycle. Household flagged for mandatory peer council bio-audit.';
            }
        }
    }

    waterSlider.addEventListener('input', recalculate);
    powerSlider.addEventListener('input', recalculate);
    transitSlider.addEventListener('input', recalculate);

    // Initial calculation
    recalculate();
}
