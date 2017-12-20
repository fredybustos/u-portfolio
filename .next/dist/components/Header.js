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

var _jsxFileName = "/Users/fredy/Documents/fredyP/react/u-react-2/components/Header.js";


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
          return _react2.default.createElement("li", { key: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          }, _react2.default.createElement("a", { href: item.url, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          }, _react2.default.createElement("i", { className: item.className, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          })));
        });
      }
      return _react2.default.createElement("header", { id: "home", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("nav", { id: "nav-wrap", __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement("a", { className: "mobile-btn", href: "#nav-wrap", title: "Show navigation", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Show navigation"), _react2.default.createElement("a", { className: "mobile-btn", href: "#", title: "Hide navigation", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Hide navigation"), _react2.default.createElement("ul", { id: "nav", className: "nav", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("li", { className: "current", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement("a", { className: "smoothscroll", href: "#home", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Home")), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("a", { className: "smoothscroll", href: "#about", __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "About")), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("a", { className: "smoothscroll", href: "#resume", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Resume")), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement("a", { className: "smoothscroll", href: "#portfolio", __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Works")), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("a", { className: "smoothscroll", href: "#testimonials", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Testimonials")), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("a", { className: "smoothscroll", href: "#contact", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Contact")))), _react2.default.createElement("div", { className: "row banner", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement("div", { className: "banner-text", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("h1", { className: "responsive-headline", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "I'm ", name, " "), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "I'm a ", city, " based ", _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, occupation), description), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement("ul", { className: "social", __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, netWorks))), _react2.default.createElement("p", { className: "scrolldown", __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("a", { className: "smoothscroll", href: "#about", __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement("i", { className: "icon-down-circle", __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwicHJvcHMiLCJtYWluIiwibmFtZSIsIm9jY3VwYXRpb24iLCJkZXNjcmlwdGlvbiIsImNpdHkiLCJhZGRyZXMiLCJuZXRXb3JrcyIsInNvY2lhbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInVybCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRVY7Ozs7Ozs7Ozs7OzZCQUNLLEFBQ1A7VUFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLE1BQU0sQUFDbkI7WUFBSSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBdEIsQUFBMkIsQUFDM0I7WUFBSSxhQUFhLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBNUIsQUFBaUMsQUFDakM7WUFBSSxjQUFjLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBN0IsQUFBa0MsQUFDbEM7WUFBSSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixPQUEzQixBQUFrQyxBQUNsQztZQUFJLGdCQUFXLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsT0FBaEIsQUFBdUIsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDekQ7aUNBQ0UsY0FBQSxRQUFJLEtBQUosQUFBUzt3QkFBVDswQkFBQSxBQUFnQjtBQUFoQjtXQUFBLGtCQUFnQixjQUFBLE9BQUcsTUFBTSxLQUFULEFBQWM7d0JBQWQ7MEJBQUEsQUFBbUI7QUFBbkI7a0RBQXNCLFdBQVcsS0FBZCxBQUFtQjt3QkFBbkI7MEJBRHJDLEFBQ0UsQUFBZ0IsQUFBbUIsQUFFdEM7QUFGc0M7O0FBRnZDLEFBQWUsQUFLaEIsU0FMZ0I7QUFNakI7NkJBQ0EsY0FBQSxZQUFRLElBQVIsQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssSUFBTCxBQUFRO29CQUFSO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLGNBQWEsTUFBMUIsQUFBK0IsYUFBWSxPQUEzQyxBQUFpRDtvQkFBakQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDRCxvQ0FBQSxjQUFBLE9BQUcsV0FBSCxBQUFhLGNBQWEsTUFBMUIsQUFBK0IsS0FBSSxPQUFuQyxBQUF5QztvQkFBekM7c0JBQUE7QUFBQTtTQUZELEFBRUMsQUFFRSxvQ0FBQSxjQUFBLFFBQUksSUFBSixBQUFPLE9BQU0sV0FBYixBQUF1QjtvQkFBdkI7c0JBQUEsQUFDRztBQURIO3lCQUNHLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFBd0I7QUFBeEI7eUJBQXdCLGNBQUEsT0FBRyxXQUFILEFBQWEsZ0JBQWUsTUFBNUIsQUFBaUM7b0JBQWpDO3NCQUFBO0FBQUE7U0FEM0IsQUFDRyxBQUF3QixBQUN4QiwwQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSx5QkFBSSxjQUFBLE9BQUcsV0FBSCxBQUFhLGdCQUFlLE1BQTVCLEFBQWlDO29CQUFqQztzQkFBQTtBQUFBO1NBRlAsQUFFRyxBQUFJLEFBQ04sMkJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEseUJBQUksY0FBQSxPQUFHLFdBQUgsQUFBYSxnQkFBZSxNQUE1QixBQUFpQztvQkFBakM7c0JBQUE7QUFBQTtTQUhMLEFBR0MsQUFBSSxBQUNGLDRCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLHlCQUFJLGNBQUEsT0FBRyxXQUFILEFBQWEsZ0JBQWUsTUFBNUIsQUFBaUM7b0JBQWpDO3NCQUFBO0FBQUE7U0FKUCxBQUlHLEFBQUksQUFDSiwyQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSx5QkFBSSxjQUFBLE9BQUcsV0FBSCxBQUFhLGdCQUFlLE1BQTVCLEFBQWlDO29CQUFqQztzQkFBQTtBQUFBO1NBTFAsQUFLRyxBQUFJLEFBQ0osa0NBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEseUJBQUksY0FBQSxPQUFHLFdBQUgsQUFBYSxnQkFBZSxNQUE1QixBQUFpQztvQkFBakM7c0JBQUE7QUFBQTtTQVhaLEFBQ0UsQUFJRyxBQU1HLEFBQUksQUFLViwrQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0c7QUFESDt5QkFDRyxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0c7QUFESDt5QkFDRyxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FBeUMsUUFBekMsTUFESCxBQUNHLEFBQ0Esc0JBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVcsVUFBWCxNQUF1QiwyQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUF2QixBQUF1QixBQUEwQixhQUZwRCxBQUVHLEFBQ0E7O29CQUFBO3NCQUhILEFBR0csQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUNJO0FBREo7U0FyQlIsQUFnQkUsQUFDRyxBQUlHLEFBTU4sNkJBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQSxBQUNHO0FBREg7eUJBQ0csY0FBQSxPQUFHLFdBQUgsQUFBYSxnQkFBZSxNQUE1QixBQUFpQztvQkFBakM7c0JBQUEsQUFBMEM7QUFBMUM7OENBQTZDLFdBQUgsQUFBYTtvQkFBYjtzQkE3Qi9DLEFBQ0EsQUEyQkUsQUFDRyxBQUEwQyxBQUtoRDtBQUxnRDs7Ozs7O0FBMUM5QixBLEFBa0RyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWR5L0RvY3VtZW50cy9mcmVkeVAvcmVhY3QvdS1yZWFjdC0yIn0=