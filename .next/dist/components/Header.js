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

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: "render",
    value: function render() {
      if (this.props.main) {
        var name = this.props.main.name;
        var occupation = this.props.main.occupation;
        var description = this.props.main.description;
        var city = this.props.main.addres.city;
        var netWorks = this.props.main.social.map(function (item, index) {
          return _react2.default.createElement("li", { key: index }, _react2.default.createElement("a", { href: item.url }, _react2.default.createElement("i", { className: item.className })));
        });
      }
      return _react2.default.createElement("header", { id: "home" }, _react2.default.createElement("nav", { id: "nav-wrap" }, _react2.default.createElement("a", { className: "mobile-btn", href: "#nav-wrap", title: "Show navigation" }, "Show navigation"), _react2.default.createElement("a", { className: "mobile-btn", href: "#", title: "Hide navigation" }, "Hide navigation"), _react2.default.createElement("ul", { id: "nav", className: "nav" }, _react2.default.createElement("li", { className: "current" }, _react2.default.createElement("a", { className: "smoothscroll", href: "#home" }, "Home")), _react2.default.createElement("li", null, _react2.default.createElement("a", { className: "smoothscroll", href: "#about" }, "About")), _react2.default.createElement("li", null, _react2.default.createElement("a", { className: "smoothscroll", href: "#resume" }, "Resume")), _react2.default.createElement("li", null, _react2.default.createElement("a", { className: "smoothscroll", href: "#portfolio" }, "Works")), _react2.default.createElement("li", null, _react2.default.createElement("a", { className: "smoothscroll", href: "#testimonials" }, "Testimonials")), _react2.default.createElement("li", null, _react2.default.createElement("a", { className: "smoothscroll", href: "#contact" }, "Contact")))), _react2.default.createElement("div", { className: "row banner" }, _react2.default.createElement("div", { className: "banner-text" }, _react2.default.createElement("h1", { className: "responsive-headline" }, "I'm ", name, " "), _react2.default.createElement("h3", null, "I'm a ", city, " based ", _react2.default.createElement("span", null, occupation), description), _react2.default.createElement("hr", null), _react2.default.createElement("ul", { className: "social" }, netWorks))), _react2.default.createElement("p", { className: "scrolldown" }, _react2.default.createElement("a", { className: "smoothscroll", href: "#about" }, _react2.default.createElement("i", { className: "icon-down-circle" }))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;