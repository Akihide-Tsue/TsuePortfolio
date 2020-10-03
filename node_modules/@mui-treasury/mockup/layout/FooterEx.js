"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FooterEx = function FooterEx() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: 700,
      margin: 'auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    align: 'center'
  }, "\xA9 Copyright 2019"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    style: {
      margin: '24px auto',
      width: 60
    }
  }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    justify: 'center',
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    align: 'center',
    gutterBottom: true,
    color: 'textSecondary'
  }, "About")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    align: 'center',
    gutterBottom: true,
    color: 'textSecondary'
  }, "Blog")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    align: 'center',
    gutterBottom: true,
    color: 'textSecondary'
  }, "Terms & Conditions")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    align: 'center',
    gutterBottom: true,
    color: 'textSecondary'
  }, "Contact us"))));
};

FooterEx.propTypes = {};
FooterEx.defaultProps = {};
var _default = FooterEx;
exports["default"] = _default;