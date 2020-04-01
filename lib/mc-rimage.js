'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _mjmlImage = require('mjml-image');

var _mjmlImage2 = _interopRequireDefault(_mjmlImage);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-column': ['mc-rimage'],
  'mj-hero': ['mc-rimage'],
  'mc-rimage': []
});

var McRimage = (_temp = _class = function (_MjImage) {
  (0, _inherits3.default)(McRimage, _MjImage);

  function McRimage() {
    (0, _classCallCheck3.default)(this, McRimage);
    return (0, _possibleConstructorReturn3.default)(this, (McRimage.__proto__ || (0, _getPrototypeOf2.default)(McRimage)).apply(this, arguments));
  }

  (0, _createClass3.default)(McRimage, [{
    key: 'renderImage',


    // MODIFIED form https://github.com/mjmlio/mjml/blob/master/packages/mjml-image/src/index.js
    value: function renderImage() {
      var height = this.getAttribute('height');
      var img = '';

      if (this.getAttribute('mc:edit')) {
        img += '<span ' + this.htmlAttributes({ 'mc:edit': this.getAttribute('mc:edit') }) + '>';
      }

      img += '\n      <img\n        ' + this.htmlAttributes({
        alt: this.getAttribute('alt'),
        height: height && (height === 'auto' ? height : parseInt(height, 10)),
        src: this.getAttribute('src'),
        srcset: this.getAttribute('srcset'),
        style: 'img',
        title: this.getAttribute('title'),
        width: this.getContentWidth(),
        'mc:edit': this.getAttribute('mc:edit'),
        'max-width': this.getAttribute('max-width')
      }) + '\n      />\n    ';

      if (this.getAttribute('mc:edit')) {
        img += '</span>';
      }

      if (this.getAttribute('href')) {
        return '\n        <a\n          ' + this.htmlAttributes({
          href: this.getAttribute('href'),
          target: this.getAttribute('target'),
          rel: this.getAttribute('rel'),
          name: this.getAttribute('name')
        }) + '\n        >\n          ' + img + '\n        </a>\n      ';
      }

      return img;
    }

    // MODIFIED form https://github.com/mjmlio/mjml/blob/master/packages/mjml-image/src/index.js

  }, {
    key: 'render',
    value: function render() {
      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table',
        class: this.getAttribute('fluid-on-mobile') ? 'full-width-mobile' : null,
        'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td ' + this.htmlAttributes({
        style: 'td',
        class: this.getAttribute('fluid-on-mobile') ? 'full-width-mobile' : null
      }) + '>\n              ' + this.renderImage() + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }]);
  return McRimage;
}(_mjmlImage2.default), _class.tagOmission = true, _class.allowedAttributes = (0, _extends3.default)({}, _mjmlImage2.default.allowedAttributes, {
  'max-width': 'string',
  'mc:edit': 'string',
  'mc:hideable': 'string'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlImage2.default.defaultAttributes, {
  'mc:hideable': false }), _temp);
exports.default = McRimage;
module.exports = exports.default;