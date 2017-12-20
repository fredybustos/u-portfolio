"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);

    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: "render",
    value: function render() {
      if (this.props.footer) {
        var social = this.props.footer.social.map(function (item, index) {
          return _react2.default.createElement("li", { key: index }, _react2.default.createElement("a", { href: item.url }, _react2.default.createElement("i", { className: item.className })));
        });
      }
      return _react2.default.createElement("footer", { id: "footer" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "twelve columns" }, _react2.default.createElement("ul", { className: "social-links" }, social), _react2.default.createElement("ul", { className: "copyright" }, _react2.default.createElement("span", null, "Modified by Fredy with React", _react2.default.createElement("a", { title: "Styleshout", href: "#" })))), _react2.default.createElement("div", { id: "go-top" }, _react2.default.createElement("a", { className: "smoothscroll", title: "Back to Top", href: "#home" }, _react2.default.createElement("i", { className: "icon-up-open" })))));
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;