"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextLogo = function TextLogo(props) {
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], _extends({
    mx: 'auto',
    bgcolor: '#fff',
    width: 52,
    height: 52,
    borderRadius: 16,
    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
    fontSize: 14,
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '52px',
    fontStyle: 'italic'
  }, props));
};

var _default = TextLogo;
exports["default"] = _default;