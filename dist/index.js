'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (css) {
  return css.replace(/\n/g, '').replace(/\s\s+/g, ' ');
};