'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (inHtml, inOptions) {
    var dom = parser.parseFromString(inHtml);
    var template = dom.getElementsByTagName('template')[0].innerHTML;
    var style = dom.getElementsByTagName('style')[0].innerHTML;
    var script = dom.getElementsByTagName('script')[0].innerHTML;
    var options = inOptions || DEFAULT_OPTIONS;

    return {
        template: beautify.html(template, options),
        style: beautify.css(style, options),
        script: beautify(script, options)
    };
};

var DomParser = require('dom-parser');
var beautify = require('js-beautify');
var parser = new DomParser();
var DEFAULT_OPTIONS = { indent_size: 2 };

;