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

var Contact = function (_Component) {
  (0, _inherits3.default)(Contact, _Component);

  function Contact() {
    (0, _classCallCheck3.default)(this, Contact);

    return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));
  }

  (0, _createClass3.default)(Contact, [{
    key: "render",
    value: function render() {
      if (this.props.contact) {
        var name = this.props.contact.name;
        var street = this.props.contact.addres.street;
        var city = this.props.contact.addres.city;
        var state = this.props.contact.addres.state;
        var zip = this.props.contact.addres.zip;
        var phone = this.props.contact.phone;
        var email = this.props.contact.email;
      }
      return _react2.default.createElement("section", { id: "contact" }, _react2.default.createElement("div", { className: "row section-head" }, _react2.default.createElement("div", { className: "two columns header-col" }, _react2.default.createElement("h1", null, _react2.default.createElement("span", null, "Get In Touch."))), _react2.default.createElement("div", { className: "ten columns" }, _react2.default.createElement("p", { className: "lead" }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."))), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "eight columns" }, _react2.default.createElement("form", { action: "", method: "post", id: "contactforhtmlm", name: "contactforhtmlm" }, _react2.default.createElement("fieldset", null, _react2.default.createElement("div", null, _react2.default.createElement("label", { htmlFor: "contactName" }, "Name ", _react2.default.createElement("span", { className: "required" }, "*")), _react2.default.createElement("input", { type: "text", value: "", size: "35", id: "contactName", name: "contactName" })), _react2.default.createElement("div", null, _react2.default.createElement("label", { htmlFor: "contactEmail" }, "Email ", _react2.default.createElement("span", { className: "required" }, "*")), _react2.default.createElement("input", { type: "text", value: "", size: "35", id: "contactEmail", name: "contactEmail" })), _react2.default.createElement("div", null, _react2.default.createElement("label", { htmlFor: "contactSubject" }, "Subject"), _react2.default.createElement("input", { type: "text", value: "", size: "35", id: "contactSubject", name: "contactSubject" })), _react2.default.createElement("div", null, _react2.default.createElement("label", { htmlFor: "contactMessage" }, "Message ", _react2.default.createElement("span", { className: "required" }, "*")), _react2.default.createElement("textarea", { cols: "50", rows: "15", id: "contactMessage", name: "contactMessage" })), _react2.default.createElement("div", null, _react2.default.createElement("button", { className: "submit" }, "Submit"), _react2.default.createElement("span", { id: "image-loader" }, _react2.default.createElement("img", { alt: "", src: "images/loader.gif" }))))), _react2.default.createElement("div", { id: "message-warning" }, " Error boy"), _react2.default.createElement("div", { id: "message-success" }, _react2.default.createElement("i", { className: "fa fa-check" }), "Your message was sent, thank you!", _react2.default.createElement("br", null))), _react2.default.createElement("aside", { className: "four columns footer-widgets" }, _react2.default.createElement("div", { className: "widget widget_contact" }, _react2.default.createElement("h4", null, "Address and Phone"), _react2.default.createElement("p", { className: "address" }, name, _react2.default.createElement("br", null), street, _react2.default.createElement("br", null), city, ", ", state, " ", zip, _react2.default.createElement("br", null), _react2.default.createElement("span", null, phone))), _react2.default.createElement("div", { className: "widget widget_tweets" }, _react2.default.createElement("h4", { className: "widget-title" }, "Latest Tweets"), _react2.default.createElement("ul", { id: "twitter" }, _react2.default.createElement("li", null, _react2.default.createElement("span", null, "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum", _react2.default.createElement("a", { href: "#" })), _react2.default.createElement("b", null, _react2.default.createElement("a", { href: "#" }, "2 Days Ago"))), _react2.default.createElement("li", null, _react2.default.createElement("span", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi", _react2.default.createElement("a", { href: "#" })), _react2.default.createElement("b", null, _react2.default.createElement("a", { href: "#" }, "3 Days Ago"))))))));
    }
  }]);

  return Contact;
}(_react.Component);

exports.default = Contact;