/**
 * HUME 100: Postcard from 2055 - Unified Standalone Script
 * Runs cleanly on local file:/// URLs and web servers without CORS restrictions.
 */

(function() {
    // ── 1. Postcard Dispatches Data (Clean, understandable dispatches) ──
    const dispatches = {
        official: {
            tag: "DISPATCH 01 // MUNICIPAL COUNCIL ARCHIVE",
            date: "SEPTEMBER 11, 2055",
            salutation: "Dearest Earth Citizen,",
            paragraphs: [
                "By 2055, Los Baños has transformed into a vertical, biophilic eco-city where compact urban hubs are closely integrated with restored Makiling forest corridors, yet resource sharing remains an active daily commitment for its residents.",
                "From the high-rise terraces of Sector 4, the separation between human shelter and wild nature has disappeared. Our buildings are constructed with self-healing bio-concrete that repairs its own fractures naturally, while vertical gardens feed and cool every neighborhood.",
                "Laguna de Bay gleams below—restored from decades of pollution by community-managed wetland reed filters. We invite you to see what human ecology can achieve when technology is guided by community values and environmental care."
            ],
            sign: "— Sector 4 Resident Council, Los Baños",
            recipient: "Human Ecology Archives, UPLB",
            zone: "Sector 04 • Makiling Shoreline Arc",
            classification: "Public Archival Record #2055-LB-0911"
        },
        personal: {
            tag: "DISPATCH 02 // CITIZEN CORRESPONDENCE",
            date: "SEPTEMBER 08, 2055",
            salutation: "Dear Clara (My Granddaughter in 2025),",
            paragraphs: [
                "I am writing this from our family home on Level 42 of the Narra Tower. I wish you could smell the air here today—it carries the fresh scent of mountain rain and leaves, completely free of the toxic traffic exhaust I breathed on my way to classes at UPLB thirty years ago.",
                "Living in balance takes daily mindfulness. Every morning, our home screen shows our family's fair water share for the day. If someone takes an extra-long shower, we have less water for our balcony vegetable garden. We have learned to share thoughtfully instead of wasting freely.",
                "In the evenings, when the cool breeze rolls down from Mount Makiling, neighbors gather on the open breezeway to talk, share food, and help each other. We survived the hard years because we chose community over greed. Do not lose hope."
            ],
            sign: "— Maria Santos, Retired Engineer (Age 79)",
            recipient: "Clara Santos, UPLB Student (Time Capsule)",
            zone: "Sector 03 • Level 42 Narra Tower",
            classification: "Personal Correspondence #PS-42-2055"
        },
        ranger: {
            tag: "DISPATCH 03 // FIELD EXPEDITION LOG",
            date: "SEPTEMBER 04, 2055",
            salutation: "Field Log: Mount Makiling Ridge Station,",
            paragraphs: [
                "Visual confirmation at dawn: A pair of native Philippine Spotted Deer walked safely across the elevated green corridor connecting Mount Makiling's forest canopy directly to the UPLB agro-gardens.",
                "Thirty years ago, this mountain slope was fragmented by concrete roads and cleared land. Today, living green bridges and protected forest corridors allow wildlife to roam freely across the entire mountain.",
                "Our lake and forest monitoring stations show healthy soil moisture and cool canopy shade even during summer. Human settlement and wildlife are finally thriving side by side."
            ],
            sign: "— Ranger J. Dalisay, UPLB Biosphere Ranger Service",
            recipient: "Department of Forest Biological Sciences, UPLB",
            zone: "Sector 01 • Makiling Forest Reserve",
            classification: "Ecosystem Field Log #MB-740-R"
        }
    };

    // ── 2. Sector Explorer Data (Expanded with 5 Sectors) ──
    const sectorData = {
        s1: {
            id: "SECTOR 01",
            name: "Mount Makiling Biosphere Core",
            elevation: "350m – 1,090m Above Sea Level",
            image: "images/hero.jpg",
            imageAlt: "Mount Makiling restored cloud forest and canopy skybridge",
            tagline: "Restricted wilderness reserve, endemic species sanctuary, and watershed guardian.",
            metrics: {
                canopyCover: "96.4%",
                speciesCount: "2,410 Species",
                tempDelta: "-4.8 C (Misting Domes)",
                surveillance: "High / Non-Invasive Drones"
            },
            description: "Sector 01 represents the primary biological engine of the Los Baños bioregion. Strictly protected under the 2038 Makiling Bio-Reserve Accord, human access is restricted to ecological researchers and indigenous steward guardians. Advanced canopy misting domes counteract extreme mid-century heat spikes, preserving the delicate cloud forest mosses and high-elevation flora.",
            keyProjects: [
                "Continuous canopy skybridges connecting to Sector 02 urban agro-towers",
                "Underground mycorrhizal fungi communication networks and sensor nodes",
                "Zero-human habitation zone; automated biodiversity acoustic monitoring"
            ]
        },
        s2: {
            id: "SECTOR 02",
            name: "UPLB Innovation Foothills",
            elevation: "80m – 350m Above Sea Level",
            image: "images/bio_concrete.jpg",
            imageAlt: "UPLB vertical agro-biotechnology research towers with bio-concrete",
            tagline: "Living laboratories, vertical aeroponic towers, and bio-concrete research hubs.",
            metrics: {
                canopyCover: "78.2%",
                speciesCount: "1,180 Species",
                tempDelta: "-3.2 C (Thermal Buffer)",
                surveillance: "Moderate / Academic Peer Mesh"
            },
            description: "The historical University of the Philippines Los Baños campus has morphed into an open-air agro-ecological research laboratory. Traditional horizontal lecture buildings were decommissioned by 2040 and consolidated into vertical modular spires built of calcite-healing bio-concrete. 60% of all food consumed in Los Baños is grown in these vertical aeroponic cylinders.",
            keyProjects: [
                "Faculty of Human Ecology Bio-Dynamic Policy Simulation Hub",
                "Bacterial spore (Bacillus pseudofirmus) cultivation labs for bio-concrete",
                "Open student-citizen experimental permaculture gardens"
            ]
        },
        s3: {
            id: "SECTOR 03",
            name: "Poblacion Biophilic Spines",
            elevation: "20m – 80m Above Sea Level",
            image: "images/eco_community.jpg",
            imageAlt: "High-density biophilic vertical community hubs in Sector 3",
            tagline: "Hyper-dense vertical habitats, elevated transit pods, and community council hubs.",
            metrics: {
                canopyCover: "64.0%",
                speciesCount: "640 Species",
                tempDelta: "-2.5 C (Green Wall Cooling)",
                surveillance: "Very High / Biometric Quota Grid"
            },
            description: "Where old single-family sprawl once caused flash floods and heat traps, Sector 03 now houses 280,000 residents within twelve high-density vertical eco-towers. Each tower functions as a self-contained vertical village with schools, community kitchens, medical pods, and greywater recycling. Elevated magnetic skyways connect towers without disturbing ground-level wildlife migration.",
            keyProjects: [
                "Elevated transit skyways with zero ground-level vehicular traffic",
                "Decentralized neighborhood solar-geothermal microgrids on every block",
                "Biometric Eco-Pass turnstiles managing daily communal resource quotas"
            ]
        },
        s4: {
            id: "SECTOR 04",
            name: "Laguna de Bay Shoreline Arc",
            elevation: "2m – 20m Above Sea Level",
            image: "images/laguna_de_bay.jpg",
            imageAlt: "Restored Laguna de Bay with bio-filtering engineered wetlands",
            tagline: "De-polluted lake ecosystem, floating solar arrays, and sustainable aqua-farms.",
            metrics: {
                canopyCover: "52.5%",
                speciesCount: "890 Aquatic/Riparian",
                tempDelta: "-1.8 C (Lake Breeze Induction)",
                surveillance: "Moderate / Water Quality Satellites"
            },
            description: "Once severely contaminated by mid-century industrial runoff and agricultural eutrophication, Laguna de Bay was completely revitalized through a 20-year bio-filtration initiative. A 300-meter-wide ring of engineered wetlands with native reeds, cattails, and bio-char filters purifies runoff before it reaches the lake. Floating algae bio-reactors harvest clean hydrogen fuel.",
            keyProjects: [
                "300-hectare floating community aquaculture cooperative",
                "Biological de-eutrophication barriers with freshwater mussel beds",
                "Shoreline flood-resilient amphibious housing cooperative"
            ]
        },
        s5: {
            id: "SECTOR 05",
            name: "Geothermal Micro-Grid Rift",
            elevation: "150m – 420m Above Sea Level",
            image: "images/bio_concrete.jpg",
            imageAlt: "Geothermal deep boreholes and closed-loop binary turbines",
            tagline: "Baseload subterranean energy generation powering municipal micro-grids.",
            metrics: {
                canopyCover: "82.0%",
                speciesCount: "940 Species",
                tempDelta: "-2.0 C (Subterranean Closed Loop)",
                surveillance: "High / Structural Telemetry"
            },
            description: "Located along Mount Makiling's volcanic fissure lines, Sector 05 taps closed-loop binary hydrothermal energy at 2,200 meters depth. Zero steam emissions reach ambient atmosphere; all condensed water is reinjected to prevent aquifer subsidence. The rift provides continuous, weather-independent electrical power to all vertical towers.",
            keyProjects: [
                "Closed-loop binary cycle geothermal turbines with zero toxic outgassing",
                "Deep aquifer pressure and seismic resonance early-warning sensors",
                "Underground municipal cold-storage and seed preservation vaults"
            ]
        }
    };

    // ── 3. Postcard Setup ──
    function initPostcard() {
        const flipBtn = document.getElementById('flip-btn');
        const postcardCard = document.getElementById('postcard-card');
        const dispatchSelectBtns = document.querySelectorAll('.dispatch-tab-btn');

        function toggleFlip(e) {
            if (e) e.stopPropagation();
            if (postcardCard) {
                postcardCard.classList.toggle('flipped');
                if (flipBtn) {
                    const isFlipped = postcardCard.classList.contains('flipped');
                    flipBtn.innerHTML = isFlipped ? 'View Visual Record (Front)' : 'View Archival Message (Back)';
                }
            }
        }

        if (flipBtn) flipBtn.addEventListener('click', toggleFlip);

        if (postcardCard) {
            postcardCard.addEventListener('click', function(e) {
                if (e.target.closest('button') || e.target.closest('a')) return;
                toggleFlip();
            });
        }

        if (dispatchSelectBtns.length > 0) {
            dispatchSelectBtns.forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    dispatchSelectBtns.forEach(function(b) { b.classList.remove('active'); });
                    btn.classList.add('active');

                    const key = btn.getAttribute('data-dispatch');
                    renderDispatch(key);

                    if (postcardCard && !postcardCard.classList.contains('flipped')) {
                        postcardCard.classList.add('flipped');
                        if (flipBtn) flipBtn.innerHTML = 'View Visual Record (Front)';
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
            bodyEl.innerHTML = data.paragraphs.map(function(p) {
                return '<p class="message-paragraph">' + p + '</p>';
            }).join('');
        }
    }

    // ── 4. Sector Explorer Setup ──
    function initSectorExplorer() {
        const sectorTabs = document.querySelectorAll('.sector-pill-btn');
        if (sectorTabs.length === 0) return;

        sectorTabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                sectorTabs.forEach(function(t) { t.classList.remove('active'); });
                tab.classList.add('active');

                const sectorKey = tab.getAttribute('data-sector');
                updateSectorView(sectorKey);
            });
        });
    }

    function updateSectorView(key) {
        const data = sectorData[key];
        if (!data) return;

        const idEl = document.getElementById('sector-id-badge');
        const nameEl = document.getElementById('sector-title');
        const elevEl = document.getElementById('sector-elevation');
        const taglineEl = document.getElementById('sector-tagline');
        const descEl = document.getElementById('sector-desc');
        const imgEl = document.getElementById('sector-img');
        const imgAltEl = document.getElementById('sector-img-alt');

        const mCanopy = document.getElementById('metric-canopy');
        const mSpecies = document.getElementById('metric-species');
        const mTemp = document.getElementById('metric-temp');
        const mSurv = document.getElementById('metric-surveillance');
        const projectsList = document.getElementById('sector-projects-list');

        if (idEl) idEl.textContent = data.id;
        if (nameEl) nameEl.textContent = data.name;
        if (elevEl) elevEl.textContent = data.elevation;
        if (taglineEl) taglineEl.textContent = data.tagline;
        if (descEl) descEl.textContent = data.description;

        if (imgEl) {
            imgEl.src = data.image;
            imgEl.alt = data.imageAlt;
        }
        if (imgAltEl) imgAltEl.textContent = data.imageAlt;

        if (mCanopy) mCanopy.textContent = data.metrics.canopyCover;
        if (mSpecies) mSpecies.textContent = data.metrics.speciesCount;
        if (mTemp) mTemp.textContent = data.metrics.tempDelta;
        if (mSurv) mSurv.textContent = data.metrics.surveillance;

        if (projectsList) {
            projectsList.innerHTML = data.keyProjects.map(function(p) {
                return '<li>' + p + '</li>';
            }).join('');
        }
    }

    // ── 5. Bio-Quota Simulator Setup (NO EMOJIS, NO DOTS) ──
    function initQuotaSimulator() {
        const waterSlider = document.getElementById('slider-water');
        const powerSlider = document.getElementById('slider-power');
        const transitSlider = document.getElementById('slider-transit');

        if (!waterSlider || !powerSlider || !transitSlider) return;

        function recalculate() {
            const water = parseFloat(waterSlider.value);
            const power = parseFloat(powerSlider.value);
            const transit = parseFloat(transitSlider.value);

            const valWater = document.getElementById('val-water');
            const valPower = document.getElementById('val-power');
            const valTransit = document.getElementById('val-transit');

            if (valWater) valWater.textContent = water + ' L';
            if (valPower) valPower.textContent = power.toFixed(1) + ' kWh';
            if (valTransit) valTransit.textContent = transit + ' km';

            const waterRatio = water / 65;
            const powerRatio = power / 3.8;
            const transitRatio = transit / 14;

            const compositeIndex = (waterRatio * 0.45) + (powerRatio * 0.35) + (transitRatio * 0.20);
            const scoreOutOf100 = Math.max(10, Math.min(100, Math.round(100 - ((compositeIndex - 1) * 60))));

            const scoreEl = document.getElementById('quota-score-display');
            const statusBadge = document.getElementById('quota-status-badge');
            const statusTitle = document.getElementById('quota-status-title');
            const statusDesc = document.getElementById('quota-status-desc');
            const meterFill = document.getElementById('quota-meter-fill');

            if (scoreEl) scoreEl.textContent = scoreOutOf100 + '/100';
            if (meterFill) {
                meterFill.style.width = scoreOutOf100 + '%';
            }

            if (compositeIndex <= 0.85) {
                if (meterFill) meterFill.style.background = 'var(--c-green-600)';
                if (statusBadge) {
                    statusBadge.className = 'badge';
                    statusBadge.textContent = 'STATUS: HIGH CONSERVATION';
                }
                if (statusTitle) statusTitle.textContent = 'High Savings and Generosity';
                if (statusDesc) {
                    statusDesc.textContent = 'Your household uses very little water and electricity today. Your extra savings are automatically shared with elderly neighbors and communal balcony gardens.';
                }
            } else if (compositeIndex <= 1.05) {
                if (meterFill) meterFill.style.background = 'var(--c-blue-600)';
                if (statusBadge) {
                    statusBadge.className = 'badge';
                    statusBadge.textContent = 'STATUS: BALANCED AND FAIR';
                }
                if (statusTitle) statusTitle.textContent = 'Balanced and Fair';
                if (statusDesc) {
                    statusDesc.textContent = 'Your family is using a healthy, responsible share of town resources. This perfectly matches what Mount Makiling and our solar panels regenerate each day.';
                }
            } else if (compositeIndex <= 1.35) {
                if (meterFill) meterFill.style.background = '#eab308';
                if (statusBadge) {
                    statusBadge.className = 'badge';
                    statusBadge.textContent = 'STATUS: SLIGHTLY HIGH';
                }
                if (statusTitle) statusTitle.textContent = 'Slightly Above Average';
                if (statusDesc) {
                    statusDesc.textContent = 'Your household is using slightly more water or power than average today. Try shortening your shower time so that local storage tanks remain full for tomorrow.';
                }
            } else {
                if (meterFill) meterFill.style.background = '#ef4444';
                if (statusBadge) {
                    statusBadge.className = 'badge';
                    statusBadge.textContent = 'STATUS: HIGH CONSUMPTION';
                }
                if (statusTitle) statusTitle.textContent = 'High Resource Use';
                if (statusDesc) {
                    statusDesc.textContent = 'Your current usage is putting heavy strain on community reserves. Turn off unused appliances and check taps to help keep our shared supply steady.';
                }
            }
        }

        waterSlider.addEventListener('input', recalculate);
        powerSlider.addEventListener('input', recalculate);
        transitSlider.addEventListener('input', recalculate);

        recalculate();
    }

    // ── 6. Stat Counter Setup ──
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        counters.forEach(function(el) {
            const target = parseInt(el.getAttribute('data-count'), 10);
            const display = el.getAttribute('data-display');
            if (display) {
                el.textContent = display;
                return;
            }
            let current = 0;
            const increment = Math.max(1, Math.ceil(target / 30));
            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(timer);
                } else {
                    el.textContent = current;
                }
            }, 30);
        });
    }

    // ── 7. DOM Ready Bootstrap ──
    function init() {
        initPostcard();
        initSectorExplorer();
        initQuotaSimulator();
        initCounters();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
