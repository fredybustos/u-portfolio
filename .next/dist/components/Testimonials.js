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

var _jsxFileName = "/Users/fredy/Documents/fredyP/react/u-react-2/components/Testimonials.js";


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
          return _react2.default.createElement("li", { key: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          }, _react2.default.createElement("blockquote", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          }, _react2.default.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          }, item.text), _react2.default.createElement("cite", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          }, item.user)));
        });
      }
      return _react2.default.createElement("section", { id: "testimonials", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement("div", { className: "text-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement("div", { className: "two columns header-col", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Client Testimonials"))), _react2.default.createElement("div", { className: "ten columns flex-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("ul", { className: "slides", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, testimonials)))));
    }
  }]);

  return Testimonials;
}(_react.Component);

exports.default = Testimonials;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGVzdGltb25pYWxzIiwicHJvcHMiLCJ0ZXN0aW1vbmlhbCIsInRlc3RpbW9uaWFscyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRleHQiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDtVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsYUFBYSxBQUMxQjtZQUFJLG9CQUFlLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsYUFBdkIsQUFBb0MsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDMUU7aUNBQU8sY0FBQSxRQUFJLEtBQUosQUFBUzt3QkFBVDswQkFBQSxBQUNKO0FBREk7V0FBQSxrQkFDSixjQUFBOzt3QkFBQTswQkFBQSxBQUNFO0FBREY7QUFBQSw2QkFDRSxjQUFBOzt3QkFBQTswQkFBQSxBQUFJO0FBQUo7QUFBQSxrQkFERixBQUNFLEFBQVMsQUFDVCx1QkFBQSxjQUFBOzt3QkFBQTswQkFBQSxBQUFPO0FBQVA7QUFBQSxrQkFITCxBQUFPLEFBQ0osQUFFRSxBQUFZLEFBR2xCO0FBUEQsQUFBbUIsQUFRcEIsU0FSb0I7QUFTckI7NkJBQ0UsY0FBQSxhQUFTLElBQVQsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0c7QUFESDt5QkFDRyxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSx5QkFBSSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGWCxBQUNJLEFBQ0csQUFBSSxBQUVQLDBDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRztBQURIO1NBUlosQUFDRSxBQUNFLEFBQ0UsQUFJSSxBQUNFLEFBUWI7Ozs7O0FBNUJ3QixBLEFBK0IzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJUZXN0aW1vbmlhbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWR5L0RvY3VtZW50cy9mcmVkeVAvcmVhY3QvdS1yZWFjdC0yIn0=