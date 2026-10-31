// Copperplate engraving engine from lemo-opuscar (styles/engraving/demo/engine, MIT, (c) 2026 LemoLab; see LICENSE).
// Copied unchanged except this entry, which leaves out copper.js (the copper close-ups are not used here).
//   burin.js  line engine: ordered strokes, hatching, cross-hatching, stipple, fur, tone fields, formTone, contourHatch
//   plate.js  paper, plate mark, border, engraved lettering, roundels, leader lines
//   wash.js   hand colouring (independent layer)
export * as B from './burin.js';
export * from './plate.js';
export { Wash } from './wash.js';
