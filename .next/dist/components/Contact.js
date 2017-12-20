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

var _jsxFileName = "/Users/fredy/Documents/fredyP/react/u-react-2/components/Contact.js";


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
      return _react2.default.createElement("section", { id: "contact", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement("div", { className: "row section-head", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement("div", { className: "two columns header-col", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "Get In Touch."))), _react2.default.createElement("div", { className: "ten columns", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("p", { className: "lead", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."))), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("div", { className: "eight columns", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("form", { action: "", method: "post", id: "contactforhtmlm", name: "contactforhtmlm", __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement("label", { htmlFor: "contactName", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Name ", _react2.default.createElement("span", { className: "required", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "*")), _react2.default.createElement("input", { type: "text", value: "", size: "35", id: "contactName", name: "contactName", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement("label", { htmlFor: "contactEmail", __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Email ", _react2.default.createElement("span", { className: "required", __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "*")), _react2.default.createElement("input", { type: "text", value: "", size: "35", id: "contactEmail", name: "contactEmail", __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("label", { htmlFor: "contactSubject", __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Subject"), _react2.default.createElement("input", { type: "text", value: "", size: "35", id: "contactSubject", name: "contactSubject", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement("label", { htmlFor: "contactMessage", __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Message ", _react2.default.createElement("span", { className: "required", __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "*")), _react2.default.createElement("textarea", { cols: "50", rows: "15", id: "contactMessage", name: "contactMessage", __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement("button", { className: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Submit"), _react2.default.createElement("span", { id: "image-loader", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("img", { alt: "", src: "images/loader.gif", __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))))), _react2.default.createElement("div", { id: "message-warning", __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, " Error boy"), _react2.default.createElement("div", { id: "message-success", __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("i", { className: "fa fa-check", __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), "Your message was sent, thank you!", _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }))), _react2.default.createElement("aside", { className: "four columns footer-widgets", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("div", { className: "widget widget_contact", __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Address and Phone"), _react2.default.createElement("p", { className: "address", __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, name, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), street, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), city, ", ", state, " ", zip, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, phone))), _react2.default.createElement("div", { className: "widget widget_tweets", __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement("h4", { className: "widget-title", __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Latest Tweets"), _react2.default.createElement("ul", { id: "twitter", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum", _react2.default.createElement("a", { href: "#", __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("a", { href: "#", __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "2 Days Ago"))), _react2.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi", _react2.default.createElement("a", { href: "#", __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), _react2.default.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement("a", { href: "#", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "3 Days Ago"))))))));
    }
  }]);

  return Contact;
}(_react.Component);

exports.default = Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhY3QiLCJwcm9wcyIsImNvbnRhY3QiLCJuYW1lIiwic3RyZWV0IiwiYWRkcmVzIiwiY2l0eSIsInN0YXRlIiwiemlwIiwicGhvbmUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVWLEE7Ozs7Ozs7Ozs7OzZCQUNLLEFBQ1A7VUFBSyxLQUFBLEFBQUssTUFBVixBQUFnQixTQUFTLEFBQ3ZCO1lBQUksT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQXRCLEFBQThCLEFBQzlCO1lBQUksU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsT0FBaEMsQUFBdUMsQUFDdkM7WUFBSSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixPQUE5QixBQUFxQyxBQUNyQztZQUFJLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLE9BQS9CLEFBQXNDLEFBQ3RDO1lBQUksTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsT0FBN0IsQUFBb0MsQUFDcEM7WUFBSSxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBdkIsQUFBK0IsQUFDL0I7WUFBSSxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBdkIsQUFBK0IsQUFDaEM7QUFDRDs2QkFDRSxjQUFBLGFBQVMsSUFBVCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDTTtBQUROO3lCQUNNLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRztBQURIO3lCQUNHLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLHlCQUFJLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFB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RSxBQTRCQSxBQUNrRSxBQUdwRTtBQUhvRTtBQUFBLDRCQUdwRSxjQUFBLFdBQU8sV0FBUCxBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSDtBQURHO3lCQUNILGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURHLEFBQ0gsQUFDQSxzQ0FBQSxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBLEFBQ0U7QUFERjtTQUFBLEFBQ087O29CQUFBO3NCQURQLEFBQ08sQUFDTDtBQURLO0FBQUEsVUFEUCxBQUVTOztvQkFBQTtzQkFGVCxBQUVTLEFBQ1A7QUFETztBQUFBLFVBRlQsTUFHVSxNQUhWLE9BR2tCLEtBSGxCLEFBR3NCOztvQkFBQTtzQkFIdEIsQUFHc0IsQUFDckI7QUFEcUI7QUFBQSwwQkFDckIsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FQQSxBQUNFLEFBRUgsQUFJQyxBQUdFLDBCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDRSxrQ0FBQSxjQUFBLFFBQUksSUFBSixBQUFPO29CQUFQO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FHRSw2TUFBRyxNQUFILEFBQVE7b0JBQVI7c0JBSkosQUFDRSxBQUdFLEFBRUY7QUFGRTsyQkFFRixjQUFBOztvQkFBQTtzQkFBQSxBQUFHO0FBQUg7QUFBQSx5QkFBRyxjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBO0FBQUE7U0FQUCxBQUNFLEFBTUUsQUFBRyxBQUVMLGlDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNJLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUdBLGtOQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFKSixBQUNJLEFBR0EsQUFFQTtBQUZBOzJCQUVBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUc7QUFBSDtBQUFBLHlCQUFHLGNBQUEsT0FBRyxNQUFILEFBQVE7b0JBQVI7c0JBQUE7QUFBQTtTQXpFckIsQUFDRSxBQVlJLEFBaUNBLEFBVUUsQUFFSSxBQVNFLEFBTUksQUFBRyxBQVF0Qjs7Ozs7QUE1Rm1CLEEsQUErRnRCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRhY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWR5L0RvY3VtZW50cy9mcmVkeVAvcmVhY3QvdS1yZWFjdC0yIn0=