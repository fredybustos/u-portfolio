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

var _jsxFileName = "/Users/fredy/Documents/fredyP/react/u-react-2/components/Footer.js";


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
          return _react2.default.createElement("li", { key: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          }, _react2.default.createElement("a", { href: item.url, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          }, _react2.default.createElement("i", { className: item.className, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          })));
        });
      }
      return _react2.default.createElement("footer", { id: "footer", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("div", { className: "twelve columns", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement("ul", { className: "social-links", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, social), _react2.default.createElement("ul", { className: "copyright", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Modified by Fredy with React", _react2.default.createElement("a", { title: "Styleshout", href: "#", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })))), _react2.default.createElement("div", { id: "go-top", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement("a", { className: "smoothscroll", title: "Back to Top", href: "#home", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement("i", { className: "icon-up-open", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })))));
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9vdGVyIiwicHJvcHMiLCJmb290ZXIiLCJzb2NpYWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ1cmwiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFVixBOzs7Ozs7Ozs7Ozs2QkFDSyxBQUNQO1VBQUksS0FBQSxBQUFLLE1BQVQsQUFBZSxRQUFRLEFBQ3JCO1lBQUksY0FBUyxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLE9BQWxCLEFBQXlCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQ3pEO2lDQUNFLGNBQUEsUUFBSSxLQUFKLEFBQVM7d0JBQVQ7MEJBQUEsQUFBZ0I7QUFBaEI7V0FBQSxrQkFBZ0IsY0FBQSxPQUFHLE1BQU0sS0FBVCxBQUFjO3dCQUFkOzBCQUFBLEFBQW1CO0FBQW5CO2tEQUFzQixXQUFXLEtBQWQsQUFBbUI7d0JBQW5COzBCQURyQyxBQUNFLEFBQWdCLEFBQW1CLEFBRXRDO0FBRnNDOztBQUZ2QyxBQUFhLEFBS2QsU0FMYztBQU1mOzZCQUNFLGNBQUEsWUFBUSxJQUFSLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNHO0FBREg7eUJBQ0csY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNHO0FBREg7eUJBQ0csY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUNHO0FBREg7U0FESCxBQUNHLEFBR0EseUJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUNHO0FBREg7eUJBQ0csY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQWtDLHFFQUFHLE9BQUgsQUFBUyxjQUFhLE1BQXRCLEFBQTJCO29CQUEzQjtzQkFOM0MsQUFDRyxBQUlHLEFBQ0csQUFBa0MsQUFHeEM7QUFId0M7NkJBR3hDLGNBQUEsU0FBSyxJQUFMLEFBQVE7b0JBQVI7c0JBQUEsQUFBaUI7QUFBakI7eUJBQWlCLGNBQUEsT0FBRyxXQUFILEFBQWEsZ0JBQWUsT0FBNUIsQUFBa0MsZUFBYyxNQUFoRCxBQUFxRDtvQkFBckQ7c0JBQUEsQUFBNkQ7QUFBN0Q7OENBQWdFLFdBQUgsQUFBYTtvQkFBYjtzQkFYckYsQUFDRSxBQUNFLEFBU0csQUFBaUIsQUFBNkQsQUFJdEY7QUFKc0Y7Ozs7OztBQXBCcEUsQSxBQTJCckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mcmVkeS9Eb2N1bWVudHMvZnJlZHlQL3JlYWN0L3UtcmVhY3QtMiJ9