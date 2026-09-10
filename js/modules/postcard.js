/**
 * 2055 Interactive Postcard Console Module
 * Supports 3D card flip, multi-perspective dispatch switching, and stamp inspection.
 */

const dispatches = {
    official: {
        tag: "DISPATCH 01 // OFFICIAL PUBLIC RECORD",
        date: "SEPTEMBER 11, 2055",
        salutation: "Dearest Earth Citizen,",
        paragraphs: [
            "By 2055, Los Baños has transformed into a vertical, biophilic eco-city where hyper-dense urban hubs are entirely integrated with restored Makiling forest corridors, yet resource equity remains a daily negotiation for its 420,000 residents.",
            "From the canopy terraces of Sector 4, the boundary between urban shelter and wild biodiversity has ceased to exist. Our bio-concrete towers host thousands of endemic plant species while calcite-precipitating bacteria quietly seal structural stress cracks in real time.",
            "Laguna de Bay gleams below—restored from decades of industrial hypoxia by community-managed wetland filters and renewable aquaculture arrays. We invite you to study what human ecology can achieve when technology is governed by ecological restraint."
        ],
        sign: "— Dispatch from Sector 4 Resident Council & Municipal Biome Office",
        recipient: "Human Ecology Archives, UPLB",
        zone: "Laguna Sector 04 • Makiling Shoreline Arc",
        classification: "Public Archival Record #2055-LB-0911"
    },
    personal: {
        tag: "DISPATCH 02 // PERSONAL CORRESPONDENCE",
        date: "SEPTEMBER 08, 2055",
        salutation: "Dear Clara (My Granddaughter in 2025),",
        paragraphs: [
            "I am writing this from our family flat on Level 42 of the Narra Biophilic Spine. I wish you could feel the air here today—it smells like damp earth and rainforest moss, completely free of the toxic exhaust and diesel smog I breathed when I was a college student at UPLB thirty years ago.",
            "Living here isn't simple, however. Every morning, our biometric monitor beeps softly to show our daily water allowance: 65 liters per person. If I take a long shower, my daughter cannot run the mist-growers on her balcony herb bed. We argue over liters like our grandparents argued over money.",
            "Yet when the evening misting dome activates across the foothills, shielding us from the 41°C heatwave outside, we gather at the communal breezeway. We survived the mid-century shocks because we learned to live as one organism. Do not lose hope."
        ],
        sign: "— Maria Santos, Retired Biophilic Structural Engineer (Age 79)",
        recipient: "Clara Santos (Historical Time-Capsule Repository)",
        zone: "Sector 03 • Level 42 Narra Vertical Village",
        classification: "Personal Archival Transmission #PS-42-2055"
    },
    ranger: {
        tag: "DISPATCH 03 // FIELD EXPEDITION LOG",
        date: "SEPTEMBER 04, 2055",
        salutation: "Field Log: Station Makiling Ridge Alpha,",
        paragraphs: [
            "Visual contact confirmed at 05:40: A breeding pair of Philippine Spotted Deer (Rusa alfredi) migrated across the Level 18 canopy skybridge linking Mount Makiling's southern ridge directly to the UPLB agro-corridor.",
            "Thirty years ago, this slope was fragmented by concrete highways, private subdivisions, and denuded scrubland. Today, our structural bio-concrete is coated in living bryophytes and bio-sensors that track root mycorrhizal connections directly through building foundations.",
            "Our primary challenge remains thermal spike mitigation. Peak canopy temperature reached 39.8°C at midday. Localized misting domes activated at 94% efficiency, sustaining soil moisture and preventing canopy dieback. The ecological carrying capacity is holding steady."
        ],
        sign: "— Ranger J. Dalisay, UPLB Biosphere Ranger Service",
        recipient: "Department of Forest Biological Sciences, UPLB",
        zone: "Sector 01 • Makiling Biosphere Core (Elev. 740m)",
        classification: "Scientific Telemetry Log #MB-740-R"
    }
};

export function initPostcard() {
    const flipBtn = document.getElementById('flip-btn');
    const flipBackBtn = document.getElementById('flip-back-btn');
    const postcardCard = document.getElementById('postcard-card');
    const dispatchSelectBtns = document.querySelectorAll('.dispatch-tab-btn');

    // Flip Card logic
    function toggleFlip(e) {
        if (e) e.stopPropagation();
        if (postcardCard) {
            postcardCard.classList.toggle('flipped');
            if (flipBtn) {
                const isFlipped = postcardCard.classList.contains('flipped');
                flipBtn.innerHTML = isFlipped ? '↻ View Visual Record (Front)' : '↻ View Archival Message (Back)';
            }
        }
    }

    if (flipBtn) flipBtn.addEventListener('click', toggleFlip);
    if (flipBackBtn) flipBackBtn.addEventListener('click', toggleFlip);

    // Click on card itself to flip
    if (postcardCard) {
        postcardCard.addEventListener('click', (e) => {
            // Avoid flipping when clicking buttons or links inside
            if (e.target.closest('button') || e.target.closest('a')) return;
            toggleFlip();
        });
    }

    // Switch Dispatches
    if (dispatchSelectBtns.length > 0) {
        dispatchSelectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                dispatchSelectBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const key = btn.getAttribute('data-dispatch');
                renderDispatch(key);

                // Auto flip to back if currently on front so user sees the message
                if (postcardCard && !postcardCard.classList.contains('flipped')) {
                    postcardCard.classList.add('flipped');
                    if (flipBtn) flipBtn.innerHTML = '↻ View Visual Record (Front)';
                }
            });
        });
    }
}

function renderDispatch(key) {
    const data = dispatches[key];
    if (!data) return;

    const tagEl = document.getElementById('msg-tag');
    const dateEl = document.getElementById('msg-date');
    const salutationEl = document.getElementById('msg-salutation');
    const bodyEl = document.getElementById('msg-body-paragraphs');
    const signEl = document.getElementById('msg-signature');
    const recipientEl = document.getElementById('meta-recipient');
    const zoneEl = document.getElementById('meta-zone');
    const classEl = document.getElementById('meta-classification');

    if (tagEl) tagEl.textContent = data.tag;
    if (dateEl) dateEl.textContent = data.date;
    if (salutationEl) salutationEl.textContent = data.salutation;
    if (signEl) signEl.textContent = data.sign;
    if (recipientEl) recipientEl.textContent = data.recipient;
    if (zoneEl) zoneEl.textContent = data.zone;
    if (classEl) classEl.textContent = data.classification;

    if (bodyEl) {
        bodyEl.innerHTML = data.paragraphs.map(p => `<p class="message-paragraph">${p}</p>`).join('');
    }
}
