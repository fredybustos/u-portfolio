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

var _jsxFileName = "/Users/fredy/Documents/fredyP/react/u-react-2/components/About.js";


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

      return _react2.default.createElement("section", { id: "about", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("div", { className: "three columns", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("img", { className: "profile-pic", src: image, alt: "", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement("div", { className: "nine columns main-col", __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "About Me"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, bio), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("div", { className: "columns contact-details", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Contact Details"), _react2.default.createElement("p", { className: "address", __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, name), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, street, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), city, ", ", state, " ", zip), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, phone), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, email))), _react2.default.createElement("div", { className: "columns download", __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement("a", { href: resumeDoumload, className: "button", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement("i", { className: "fa fa-download", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), "Download Resume")))))));
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWJvdXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJBYm91dCIsInByb3BzIiwibWFpbiIsIm5hbWUiLCJpbWFnZSIsImJpbyIsInN0cmVldCIsImFkZHJlcyIsImNpdHkiLCJzdGF0ZSIsInppcCIsInBob25lIiwiZW1haWwiLCJyZXN1bWVEb3VtbG9hZCIsInJlc3VtZWRvdW1sb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0ksQUFFVjs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDtVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsTUFBTSxBQUNuQjtZQUFJLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUF0QixBQUEyQixBQUMzQjtZQUFJLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUF2QixBQUE0QixBQUM1QjtZQUFJLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFyQixBQUEwQixBQUMxQjtZQUFJLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLE9BQTdCLEFBQW9DLEFBQ3BDO1lBQUksT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsT0FBM0IsQUFBa0MsQUFDbEM7WUFBSSxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixPQUE1QixBQUFtQyxBQUNuQztZQUFJLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLE9BQTFCLEFBQWlDLEFBQ2pDO1lBQUksUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQXZCLEFBQTRCLEFBQzVCO1lBQUksUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQXZCLEFBQTRCLEFBQzVCO1lBQUksaUJBQWlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBaEMsQUFBcUMsQUFDdEM7QUFFRDs7NkJBQ0UsY0FBQSxhQUFTLElBQVQsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsZUFBZSxLQUE5QixBQUFtQyxPQUFPLEtBQTFDLEFBQThDO29CQUE5QztzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw2QkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSxTQUZGLEFBRUUsQUFDQSxzQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esb0NBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQSxBQUNOO0FBRE07eUJBQ04sY0FBQTs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FETSxBQUNOLEFBQW1COztvQkFBQTtzQkFEYixBQUNhLEFBQ25CO0FBRG1CO0FBQUEsMEJBQ25CLGNBQUE7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLFNBQUEsQUFBYzs7b0JBQUE7c0JBQWQsQUFBYyxBQUNWO0FBRFU7QUFBQSxVQUFkLE1BQ1ksTUFEWixPQUNvQixLQUhkLEFBRU4sQUFFYTs7b0JBQUE7c0JBSlAsQUFJTyxBQUNiO0FBRGE7QUFBQSwwQkFDYixjQUFBOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUxNLEFBS04sQUFBb0I7O29CQUFBO3NCQUxkLEFBS2MsQUFDZDtBQURjO0FBQUEsMEJBQ2QsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FUSixBQUNFLEFBRUUsQUFNQSxBQUdGLDBCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVMsZ0JBQWdCLFdBQXpCLEFBQW1DO29CQUFuQztzQkFBQSxBQUE0QztBQUE1Qzs4Q0FBK0MsV0FBSCxBQUFhO29CQUFiO3NCQUE1QyxBQUE0QztBQUFBO1VBdkIxRCxBQUNFLEFBQ0UsQUFJRSxBQUdFLEFBWUUsQUFDRSxBQUNFLEFBUWY7Ozs7O0FBOUNpQixBLEFBaURwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBYm91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZnJlZHkvRG9jdW1lbnRzL2ZyZWR5UC9yZWFjdC91LXJlYWN0LTIifQ==