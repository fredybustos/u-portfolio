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

var About = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About() {
    (0, _classCallCheck3.default)(this, About);

    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
  }

  (0, _createClass3.default)(About, [{
    key: "render",
    value: function render() {
      if (this.props.main) {
        var name = this.props.main.name;
        var image = this.props.main.image;
        var bio = this.props.main.bio;
        var street = this.props.main.addres.street;
        var city = this.props.main.addres.city;
        var state = this.props.main.addres.state;
        var zip = this.props.main.addres.zip;
        var phone = this.props.main.phone;
        var email = this.props.main.email;
        var resumeDoumload = this.props.main.resumedoumload;
      }

      return _react2.default.createElement("section", { id: "about" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "three columns" }, _react2.default.createElement("img", { className: "profile-pic", src: image, alt: "" })), _react2.default.createElement("div", { className: "nine columns main-col" }, _react2.default.createElement("h2", null, "About Me"), _react2.default.createElement("p", null, bio), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "columns contact-details" }, _react2.default.createElement("h2", null, "Contact Details"), _react2.default.createElement("p", { className: "address" }, _react2.default.createElement("span", null, name), _react2.default.createElement("br", null), _react2.default.createElement("span", null, street, _react2.default.createElement("br", null), city, ", ", state, " ", zip), _react2.default.createElement("br", null), _react2.default.createElement("span", null, phone), _react2.default.createElement("br", null), _react2.default.createElement("span", null, email))), _react2.default.createElement("div", { className: "columns download" }, _react2.default.createElement("p", null, _react2.default.createElement("a", { href: resumeDoumload, className: "button" }, _react2.default.createElement("i", { className: "fa fa-download" }), "Download Resume")))))));
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;