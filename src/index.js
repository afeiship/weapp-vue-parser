const DomParser = require('dom-parser');
const pretty = require('pretty');
const beautify = require('js-beautify');
const parser = new DomParser();
const DEFAULT_OPTIONS = { indent_size: 2 };

export default function (inHtml, inOptions) {
  const dom = parser.parseFromString(inHtml);
  const html = dom.getElementsByTagName('template')[0].innerHTML;
  const style = dom.getElementsByTagName('style')[0].innerHTML;
  const script = dom.getElementsByTagName('script')[0].innerHTML;
  const options = inOptions || DEFAULT_OPTIONS;

  return {
    html: pretty(html, options),
    style: beautify(style, options),
    script: beautify(script, options)
  }
};
