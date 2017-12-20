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

var _jsxFileName = "/Users/fredy/Documents/fredyP/react/u-react-2/components/Resume.js";


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
               return _react2.default.createElement("div", { className: "row item", key: index, __source: {
                     fileName: _jsxFileName,
                     lineNumber: 7
                  }
               }, _react2.default.createElement("div", { className: "twelve columns", __source: {
                     fileName: _jsxFileName,
                     lineNumber: 8
                  }
               }, _react2.default.createElement("h3", {
                  __source: {
                     fileName: _jsxFileName,
                     lineNumber: 9
                  }
               }, edu.school), _react2.default.createElement("p", { className: "info", __source: {
                     fileName: _jsxFileName,
                     lineNumber: 10
                  }
               }, edu.degree, _react2.default.createElement("span", {
                  __source: {
                     fileName: _jsxFileName,
                     lineNumber: 10
                  }
               }, "\u2022"), " ", _react2.default.createElement("em", { className: "date", __source: {
                     fileName: _jsxFileName,
                     lineNumber: 10
                  }
               }, edu.graduated)), _react2.default.createElement("p", {
                  __source: {
                     fileName: _jsxFileName,
                     lineNumber: 11
                  }
               }, edu.description)));
            });

            var work = this.props.resume.work.map(function (job, index) {
               return _react2.default.createElement("div", { className: "row item", key: index, __source: {
                     fileName: _jsxFileName,
                     lineNumber: 17
                  }
               }, _react2.default.createElement("div", { className: "twelve columns", __source: {
                     fileName: _jsxFileName,
                     lineNumber: 18
                  }
               }, _react2.default.createElement("h3", {
                  __source: {
                     fileName: _jsxFileName,
                     lineNumber: 19
                  }
               }, job.company), _react2.default.createElement("p", { className: "info", __source: {
                     fileName: _jsxFileName,
                     lineNumber: 20
                  }
               }, job.title, _react2.default.createElement("span", {
                  __source: {
                     fileName: _jsxFileName,
                     lineNumber: 20
                  }
               }, "\u2022"), " ", _react2.default.createElement("em", { className: "date", __source: {
                     fileName: _jsxFileName,
                     lineNumber: 20
                  }
               }, job.years)), _react2.default.createElement("p", {
                  __source: {
                     fileName: _jsxFileName,
                     lineNumber: 21
                  }
               }, job.description)));
            });

            var skills = this.props.resume.skills.map(function (item, index) {
               var className = 'bar-expand ' + item.name;
               return _react2.default.createElement("li", { key: index, __source: {
                     fileName: _jsxFileName,
                     lineNumber: 28
                  }
               }, _react2.default.createElement("span", { style: { width: item.level }, className: className, __source: {
                     fileName: _jsxFileName,
                     lineNumber: 29
                  }
               }), _react2.default.createElement("em", {
                  __source: {
                     fileName: _jsxFileName,
                     lineNumber: 30
                  }
               }, item.name));
            });
         }

         return _react2.default.createElement("section", { id: "resume", __source: {
               fileName: _jsxFileName,
               lineNumber: 36
            }
         }, _react2.default.createElement("div", { className: "row education", __source: {
               fileName: _jsxFileName,
               lineNumber: 37
            }
         }, _react2.default.createElement("div", { className: "three columns header-col", __source: {
               fileName: _jsxFileName,
               lineNumber: 38
            }
         }, _react2.default.createElement("h1", {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 39
            }
         }, _react2.default.createElement("span", {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 39
            }
         }, "Education"))), _react2.default.createElement("div", { className: "nine columns main-col", __source: {
               fileName: _jsxFileName,
               lineNumber: 41
            }
         }, education)), _react2.default.createElement("div", { className: "row work", __source: {
               fileName: _jsxFileName,
               lineNumber: 46
            }
         }, _react2.default.createElement("div", { className: "three columns header-col", __source: {
               fileName: _jsxFileName,
               lineNumber: 47
            }
         }, _react2.default.createElement("h1", {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 48
            }
         }, _react2.default.createElement("span", {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 48
            }
         }, "Work"))), _react2.default.createElement("div", { className: "nine columns main-col", __source: {
               fileName: _jsxFileName,
               lineNumber: 50
            }
         }, work)), _react2.default.createElement("div", { className: "row skill", __source: {
               fileName: _jsxFileName,
               lineNumber: 56
            }
         }, _react2.default.createElement("div", { className: "three columns header-col", __source: {
               fileName: _jsxFileName,
               lineNumber: 57
            }
         }, _react2.default.createElement("h1", {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 58
            }
         }, _react2.default.createElement("span", {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 58
            }
         }, "Skills"))), _react2.default.createElement("div", { className: "nine columns main-col", __source: {
               fileName: _jsxFileName,
               lineNumber: 60
            }
         }, _react2.default.createElement("p", {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 62
            }
         }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."), _react2.default.createElement("div", { className: "bars", __source: {
               fileName: _jsxFileName,
               lineNumber: 68
            }
         }, _react2.default.createElement("ul", { className: "skills", __source: {
               fileName: _jsxFileName,
               lineNumber: 69
            }
         }, skills)))));
      }
   }]);

   return Resume;
}(_react.Component);

exports.default = Resume;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVzdW1lLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVzdW1lIiwicHJvcHMiLCJyZXN1bWUiLCJlZHVjYXRpb24iLCJtYXAiLCJlZHUiLCJpbmRleCIsInNjaG9vbCIsImRlZ3JlZSIsImdyYWR1YXRlZCIsImRlc2NyaXB0aW9uIiwid29yayIsImpvYiIsImNvbXBhbnkiLCJ0aXRsZSIsInllYXJzIiwic2tpbGxzIiwiaXRlbSIsImNsYXNzTmFtZSIsIm5hbWUiLCJ3aWR0aCIsImxldmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7K0JBQ0ssQUFDUDthQUFHLEtBQUEsQUFBSyxNQUFSLEFBQWMsUUFBUSxBQUNwQjtnQkFBSSxpQkFBWSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFVBQWxCLEFBQTRCLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBTSxPQUFVLEFBQzlEO3NDQUFPLGNBQUEsU0FBSyxXQUFMLEFBQWUsWUFBVyxLQUExQixBQUErQjsrQkFBL0I7aUNBQUEsQUFDSjtBQURJO2dCQUFBLGtCQUNKLGNBQUEsU0FBSyxXQUFMLEFBQWU7K0JBQWY7aUNBQUEsQUFDRztBQURIO2tDQUNHLGNBQUE7OytCQUFBO2lDQUFBLEFBQUs7QUFBTDtBQUFBLHNCQURILEFBQ0csQUFBUyxBQUNULHlCQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7K0JBQWI7aUNBQUEsQUFBcUI7QUFBckI7c0JBQUEsQUFBeUIsQUFBTyx3QkFBQSxjQUFBOzsrQkFBQTtpQ0FBQTtBQUFBO0FBQUEsa0JBQWhDLEFBQWdDLFdBQW9CLHFCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7K0JBQWQ7aUNBQUEsQUFBc0I7QUFBdEI7c0JBRnZELEFBRUcsQUFBb0QsQUFBMEIsQUFDOUUsNkJBQUEsY0FBQTs7K0JBQUE7aUNBQUEsQUFBSTtBQUFKO0FBQUEsc0JBSk4sQUFBTyxBQUNKLEFBR0csQUFBUSxBQUdmO0FBUkQsQUFBZ0IsQUFVaEIsYUFWZ0I7O2dCQVVaLFlBQU8sQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixLQUFsQixBQUF1QixJQUFJLFVBQUEsQUFBQyxLQUFELEFBQU0sT0FBVSxBQUNwRDtzQ0FBTyxjQUFBLFNBQUssV0FBTCxBQUFlLFlBQVcsS0FBMUIsQUFBK0I7K0JBQS9CO2lDQUFBLEFBQ0o7QUFESTtnQkFBQSxrQkFDSixjQUFBLFNBQUssV0FBTCxBQUFlOytCQUFmO2lDQUFBLEFBQ0c7QUFESDtrQ0FDRyxjQUFBOzsrQkFBQTtpQ0FBQSxBQUFLO0FBQUw7QUFBQSxzQkFESCxBQUNHLEFBQVMsQUFDVCwwQkFBQSxjQUFBLE9BQUcsV0FBSCxBQUFhOytCQUFiO2lDQUFBLEFBQXFCO0FBQXJCO3NCQUFBLEFBQXlCLEFBQU0sdUJBQUEsY0FBQTs7K0JBQUE7aUNBQUE7QUFBQTtBQUFBLGtCQUEvQixBQUErQixXQUFvQixxQkFBQSxjQUFBLFFBQUksV0FBSixBQUFjOytCQUFkO2lDQUFBLEFBQXNCO0FBQXRCO3NCQUZ0RCxBQUVHLEFBQW1ELEFBQTBCLEFBQzdFLHlCQUFBLGNBQUE7OytCQUFBO2lDQUFBLEFBQUk7QUFBSjtBQUFBLHNCQUpOLEFBQU8sQUFDSixBQUdHLEFBQVEsQUFHZjtBQVJELEFBQVcsQUFVWCxhQVZXOztnQkFVUCxjQUFTLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsT0FBbEIsQUFBeUIsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDekQ7bUJBQUksWUFBWSxnQkFBZSxLQUEvQixBQUFvQyxBQUNwQztzQ0FBTyxjQUFBLFFBQUksS0FBSixBQUFTOytCQUFUO2lDQUFBLEFBQ0w7QUFESztnQkFBQSwwQ0FDQyxPQUFPLEVBQUMsT0FBTSxLQUFwQixBQUFhLEFBQVksU0FBUSxXQUFqQyxBQUE0QzsrQkFBNUM7aUNBREssQUFDTCxBQUNBO0FBREE7bUNBQ0EsY0FBQTs7K0JBQUE7aUNBQUEsQUFBSztBQUFMO0FBQUEsdUJBRkYsQUFBTyxBQUVMLEFBQVUsQUFFYjtBQU5ELEFBQWEsQUFPZCxhQVBjO0FBU2Y7O2dDQUNFLGNBQUEsYUFBUyxJQUFULEFBQVk7eUJBQVo7MkJBQUEsQUFDQTtBQURBO1VBQUEsa0JBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTt5QkFBZjsyQkFBQSxBQUNHO0FBREg7NEJBQ0csY0FBQSxTQUFLLFdBQUwsQUFBZTt5QkFBZjsyQkFBQSxBQUNHO0FBREg7NEJBQ0csY0FBQTs7eUJBQUE7MkJBQUEsQUFBSTtBQUFKO0FBQUEsNEJBQUksY0FBQTs7eUJBQUE7MkJBQUE7QUFBQTtBQUFBLFlBRlYsQUFDRyxBQUNHLEFBQUksQUFFUCxnQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3lCQUFmOzJCQUFBLEFBQ0c7QUFESDtZQUxILEFBQ0EsQUFJRyxBQUtILDZCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7eUJBQWY7MkJBQUEsQUFDRztBQURIOzRCQUNHLGNBQUEsU0FBSyxXQUFMLEFBQWU7eUJBQWY7MkJBQUEsQUFDRztBQURIOzRCQUNHLGNBQUE7O3lCQUFBOzJCQUFBLEFBQUk7QUFBSjtBQUFBLDRCQUFJLGNBQUE7O3lCQUFBOzJCQUFBO0FBQUE7QUFBQSxZQUZWLEFBQ0csQUFDRyxBQUFJLEFBRVAsMkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTt5QkFBZjsyQkFBQSxBQUNHO0FBREg7WUFkSCxBQVVBLEFBSUcsQUFNSCx3QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3lCQUFmOzJCQUFBLEFBQ0c7QUFESDs0QkFDRyxjQUFBLFNBQUssV0FBTCxBQUFlO3lCQUFmOzJCQUFBLEFBQ0c7QUFESDs0QkFDRyxjQUFBOzt5QkFBQTsyQkFBQSxBQUFJO0FBQUo7QUFBQSw0QkFBSSxjQUFBOzt5QkFBQTsyQkFBQTtBQUFBO0FBQUEsWUFGVixBQUNHLEFBQ0csQUFBSSxBQUVQLDZCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7eUJBQWY7MkJBQUEsQUFFRztBQUZIOzRCQUVHLGNBQUE7O3lCQUFBOzJCQUFBO0FBQUE7QUFBQSxZQUZILEFBRUcsQUFNUix1WUFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3lCQUFmOzJCQUFBLEFBQ0U7QUFERjs0QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO3lCQUFkOzJCQUFBLEFBQ0c7QUFESDtZQWxDRixBQUNFLEFBb0JBLEFBSUcsQUFRTCxBQUNFLEFBUUg7Ozs7O0FBMUVrQixBLEFBNkVyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXN1bWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWR5L0RvY3VtZW50cy9mcmVkeVAvcmVhY3QvdS1yZWFjdC0yIn0=