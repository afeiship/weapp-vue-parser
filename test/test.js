const fs = require('fs');
const { resolve } = require('path');
const weappVueParser = require('../dist/index').default;
const dist_dir = resolve(__dirname, './card');
const html = fs.readFileSync(
  resolve(__dirname, './card.vue')
);

const result = weappVueParser(html.toString());

fs.writeFileSync(`${dist_dir}/card.html`, result.html);
fs.writeFileSync(`${dist_dir}/card.css`, result.style);
fs.writeFileSync(`${dist_dir}/card.js`, result.script);

