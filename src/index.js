const DomParser = require('dom-parser');
const beautify = require('js-beautify');
const parser = new DomParser();
const DEFAULT_OPTIONS = { indent_size: 2 };

export default function(inHtml, inOptions) {
    const dom = parser.parseFromString(inHtml);
    const template = dom.getElementsByTagName('template')[0].innerHTML;
    const style = dom.getElementsByTagName('style')[0].innerHTML;
    const script = dom.getElementsByTagName('script')[0].innerHTML;
    const options = inOptions || DEFAULT_OPTIONS;

    return {
        template: beautify.html(template, options),
        style: beautify.css(style, options),
        script: beautify(script, options)
    }
};
