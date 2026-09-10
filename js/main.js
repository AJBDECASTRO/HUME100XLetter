import { initPostcard } from './modules/postcard.js';
import { initSectorExplorer } from './modules/sectorExplorer.js';
import { initQuotaSimulator } from './modules/quotaSimulator.js';
import { initScrollReveal, initCountUp } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Postcard Console (index.html)
    initPostcard();

    // Initialize Interactive Sector Explorer (index.html)
    initSectorExplorer();

    // Initialize Household Bio-Quota Simulator (criteria.html)
    initQuotaSimulator();

    // Initialize Scroll Animations & Numbers (all pages)
    initScrollReveal();
    initCountUp();
});
