/**
 * Los Baños 2055 Interactive Sector Explorer Module
 * Switches active zone, updates telemetry, photo records, and ecological governance dossiers.
 */

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
            tempDelta: "-4.8°C (Misting Domes)",
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
            tempDelta: "-3.2°C (Thermal Buffer)",
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
            tempDelta: "-2.5°C (Green Wall Cooling)",
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
            tempDelta: "-1.8°C (Lake Breeze Induction)",
            surveillance: "Moderate / Water Quality Satellites"
        },
        description: "Once severely contaminated by mid-century industrial runoff and agricultural eutrophication, Laguna de Bay was completely revitalized through a 20-year bio-filtration initiative. A 300-meter-wide ring of engineered wetlands with native reeds, cattails, and bio-char filters purifies runoff before it reaches the lake. Floating algae bio-reactors harvest clean hydrogen fuel.",
        keyProjects: [
            "300-hectare floating community aquaculture cooperative",
            "Biological de-eutrophication barriers with freshwater mussel beds",
            "Shoreline flood-resilient amphibious housing cooperative"
        ]
    }
};

export function initSectorExplorer() {
    const sectorTabs = document.querySelectorAll('.sector-pill-btn');
    if (sectorTabs.length === 0) return;

    sectorTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sectorTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const sectorKey = tab.getAttribute('data-sector');
            updateSectorView(sectorKey);
        });
    });
}

function updateSectorView(key) {
    const data = sectorData[key];
    if (!data) return;

    // Elements to update
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
        projectsList.innerHTML = data.keyProjects.map(p => `<li>${p}</li>`).join('');
    }
}
