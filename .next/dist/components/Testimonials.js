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

var Testimonials = function (_Component) {
  (0, _inherits3.default)(Testimonials, _Component);

  function Testimonials() {
    (0, _classCallCheck3.default)(this, Testimonials);

    return (0, _possibleConstructorReturn3.default)(this, (Testimonials.__proto__ || (0, _getPrototypeOf2.default)(Testimonials)).apply(this, arguments));
  }

  (0, _createClass3.default)(Testimonials, [{
    key: "render",
    value: function render() {
      if (this.props.testimonial) {
        var testimonials = this.props.testimonial.testimonials.map(function (item, index) {
          return _react2.default.createElement("li", { key: index }, _react2.default.createElement("blockquote", null, _react2.default.createElement("p", null, item.text), _react2.default.createElement("cite", null, item.user)));
        });
      }
      return _react2.default.createElement("section", { id: "testimonials" }, _react2.default.createElement("div", { className: "text-container" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "two columns header-col" }, _react2.default.createElement("h1", null, _react2.default.createElement("span", null, "Client Testimonials"))), _react2.default.createElement("div", { className: "ten columns flex-container" }, _react2.default.createElement("ul", { className: "slides" }, testimonials)))));
    }
  }]);

  return Testimonials;
}(_react.Component);

exports.default = Testimonials;