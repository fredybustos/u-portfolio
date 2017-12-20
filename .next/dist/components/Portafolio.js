'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Portafolio = function (_Component) {
  (0, _inherits3.default)(Portafolio, _Component);

  function Portafolio() {
    (0, _classCallCheck3.default)(this, Portafolio);

    return (0, _possibleConstructorReturn3.default)(this, (Portafolio.__proto__ || (0, _getPrototypeOf2.default)(Portafolio)).apply(this, arguments));
  }

  (0, _createClass3.default)(Portafolio, [{
    key: 'render',
    value: function render() {
      if (this.props.portfolio) {
        var portfolio = this.props.portfolio.projects.map(function (item, index) {
          var imageUrl = 'static/images/portfolio/' + item.image;
          return _react2.default.createElement('div', { className: 'columns portfolio-item', key: index }, _react2.default.createElement('div', { className: 'item-wrap' }, _react2.default.createElement('a', { href: item.modal, title: '' }, _react2.default.createElement('img', { alt: '', src: imageUrl }), _react2.default.createElement('div', { className: 'overlay' }, _react2.default.createElement('div', { className: 'portfolio-item-meta' }, _react2.default.createElement('h5', null, item.title), _react2.default.createElement('p', null, item.category))), _react2.default.createElement('div', { className: 'link-icon' }, _react2.default.createElement('i', { className: 'icon-plus' })))));
        });
      }
      return _react2.default.createElement('section', { id: 'portfolio' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'twelve columns collapsed' }, _react2.default.createElement('h1', null, 'Check Out Some of My Works.'), _react2.default.createElement('div', { id: 'portfolio-wrapper', className: 'bgrid-quarters s-bgrid-thirds cf' }, portfolio))));
    }
  }]);

  return Portafolio;
}(_react.Component);

exports.default = Portafolio;