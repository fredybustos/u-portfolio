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

var Resume = function (_Component) {
   (0, _inherits3.default)(Resume, _Component);

   function Resume() {
      (0, _classCallCheck3.default)(this, Resume);

      return (0, _possibleConstructorReturn3.default)(this, (Resume.__proto__ || (0, _getPrototypeOf2.default)(Resume)).apply(this, arguments));
   }

   (0, _createClass3.default)(Resume, [{
      key: "render",
      value: function render() {
         if (this.props.resume) {
            var education = this.props.resume.education.map(function (edu, index) {
               return _react2.default.createElement("div", { className: "row item", key: index }, _react2.default.createElement("div", { className: "twelve columns" }, _react2.default.createElement("h3", null, edu.school), _react2.default.createElement("p", { className: "info" }, edu.degree, _react2.default.createElement("span", null, "\u2022"), " ", _react2.default.createElement("em", { className: "date" }, edu.graduated)), _react2.default.createElement("p", null, edu.description)));
            });

            var work = this.props.resume.work.map(function (job, index) {
               return _react2.default.createElement("div", { className: "row item", key: index }, _react2.default.createElement("div", { className: "twelve columns" }, _react2.default.createElement("h3", null, job.company), _react2.default.createElement("p", { className: "info" }, job.title, _react2.default.createElement("span", null, "\u2022"), " ", _react2.default.createElement("em", { className: "date" }, job.years)), _react2.default.createElement("p", null, job.description)));
            });

            var skills = this.props.resume.skills.map(function (item, index) {
               var className = 'bar-expand ' + item.name;
               return _react2.default.createElement("li", { key: index }, _react2.default.createElement("span", { style: { width: item.level }, className: className }), _react2.default.createElement("em", null, item.name));
            });
         }

         return _react2.default.createElement("section", { id: "resume" }, _react2.default.createElement("div", { className: "row education" }, _react2.default.createElement("div", { className: "three columns header-col" }, _react2.default.createElement("h1", null, _react2.default.createElement("span", null, "Education"))), _react2.default.createElement("div", { className: "nine columns main-col" }, education)), _react2.default.createElement("div", { className: "row work" }, _react2.default.createElement("div", { className: "three columns header-col" }, _react2.default.createElement("h1", null, _react2.default.createElement("span", null, "Work"))), _react2.default.createElement("div", { className: "nine columns main-col" }, work)), _react2.default.createElement("div", { className: "row skill" }, _react2.default.createElement("div", { className: "three columns header-col" }, _react2.default.createElement("h1", null, _react2.default.createElement("span", null, "Skills"))), _react2.default.createElement("div", { className: "nine columns main-col" }, _react2.default.createElement("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."), _react2.default.createElement("div", { className: "bars" }, _react2.default.createElement("ul", { className: "skills" }, skills)))));
      }
   }]);

   return Resume;
}(_react.Component);

exports.default = Resume;