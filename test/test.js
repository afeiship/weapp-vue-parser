const fs = require('fs');
const { resolve } = require('path');
const weappVueParser = require('../dist/index').default;
const dist_dir = resolve(__dirname, './card');
const html = fs.readFileSync(
  resolve(__dirname, './card.vue')
);

const result = weappVueParser(html.toString());
const { template, style, script } = result;

fs.writeFileSync(`${dist_dir}/card.wxml`, template);
fs.writeFileSync(`${dist_dir}/card.wxss`, style);
fs.writeFileSync(`${dist_dir}/card.js`, script);

