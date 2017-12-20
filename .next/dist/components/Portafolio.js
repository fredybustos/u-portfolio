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

var _jsxFileName = '/Users/fredy/Documents/fredyP/react/u-react-2/components/Portafolio.js';


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
          return _react2.default.createElement('div', { className: 'columns portfolio-item', key: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          }, _react2.default.createElement('div', { className: 'item-wrap', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          }, _react2.default.createElement('a', { href: item.modal, title: '', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          }, _react2.default.createElement('img', { alt: '', src: imageUrl, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          }), _react2.default.createElement('div', { className: 'overlay', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          }, _react2.default.createElement('div', { className: 'portfolio-item-meta', __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          }, _react2.default.createElement('h5', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          }, item.title), _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          }, item.category))), _react2.default.createElement('div', { className: 'link-icon', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, _react2.default.createElement('i', { className: 'icon-plus', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          })))));
        });
      }
      return _react2.default.createElement('section', { id: 'portfolio', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('div', { className: 'twelve columns collapsed', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Check Out Some of My Works.'), _react2.default.createElement('div', { id: 'portfolio-wrapper', className: 'bgrid-quarters s-bgrid-thirds cf', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, portfolio))));
    }
  }]);

  return Portafolio;
}(_react.Component);

exports.default = Portafolio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9ydGFmb2xpby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlBvcnRhZm9saW8iLCJwcm9wcyIsInBvcnRmb2xpbyIsInByb2plY3RzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1hZ2VVcmwiLCJpbWFnZSIsIm1vZGFsIiwidGl0bGUiLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVWLEE7Ozs7Ozs7Ozs7OzZCQUNLLEFBQ1A7VUFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLFdBQVcsQUFDeEI7WUFBSSxpQkFBWSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLFNBQXJCLEFBQThCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQ2pFO2NBQUksV0FBVyw2QkFBMkIsS0FBMUMsQUFBK0MsQUFDL0M7aUNBQU8sY0FBQSxTQUFLLFdBQUwsQUFBZSwwQkFBeUIsS0FBeEMsQUFBNkM7d0JBQTdDOzBCQUFBLEFBQ0o7QUFESTtXQUFBLGtCQUNKLGNBQUEsU0FBSyxXQUFMLEFBQWU7d0JBQWY7MEJBQUEsQUFDRztBQURIOzZCQUNHLGNBQUEsT0FBRyxNQUFNLEtBQVQsQUFBYyxPQUFPLE9BQXJCLEFBQTJCO3dCQUEzQjswQkFBQSxBQUNHO0FBREg7b0RBQ1EsS0FBTCxBQUFTLElBQUcsS0FBWixBQUFpQjt3QkFBakI7MEJBREgsQUFDRyxBQUNBO0FBREE7OEJBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTt3QkFBZjswQkFBQSxBQUNHO0FBREg7NkJBQ0csY0FBQSxTQUFLLFdBQUwsQUFBZTt3QkFBZjswQkFBQSxBQUNEO0FBREM7NkJBQ0QsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSztBQUFMO0FBQUEsa0JBREMsQUFDRCxBQUFVLEFBQ1Qsd0JBQUEsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSTtBQUFKO0FBQUEsa0JBTE4sQUFFRyxBQUNHLEFBRUEsQUFBUyxBQUdaLDZCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7d0JBQWY7MEJBQUEsQUFBMkI7QUFBM0I7a0RBQThCLFdBQUgsQUFBYTt3QkFBYjswQkFWcEMsQUFBTyxBQUNKLEFBQ0csQUFRRyxBQUEyQixBQUlyQztBQUpxQzs7QUFadEMsQUFBZ0IsQUFrQmpCLFNBbEJpQjtBQW1CbEI7NkJBQ0UsY0FBQSxhQUFTLElBQVQsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsZ0RBQUEsY0FBQSxTQUFLLElBQUwsQUFBUSxxQkFBb0IsV0FBNUIsQUFBc0M7b0JBQXRDO3NCQUFBLEFBQ0c7QUFESDtTQUxSLEFBQ0UsQUFDRSxBQUNFLEFBRUUsQUFPVDs7Ozs7QUFsQ3NCLEEsQUFxQ3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBvcnRhZm9saW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWR5L0RvY3VtZW50cy9mcmVkeVAvcmVhY3QvdS1yZWFjdC0yIn0=