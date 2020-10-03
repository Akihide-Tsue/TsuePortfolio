"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var list = [{
  primaryText: 'My Files',
  icon: 'folder',
  to: '/my-files'
}, {
  primaryText: 'Shared with me',
  icon: 'people',
  to: '/shared-with-me'
}, {
  primaryText: 'Starred',
  icon: 'star',
  to: '/starred'
}];

var RouterNavEx = function RouterNavEx(_ref) {
  var setOpened = _ref.setOpened;
  return /*#__PURE__*/_react["default"].createElement(_List["default"], null, list.map(function (_ref2, i) {
    var primaryText = _ref2.primaryText,
        icon = _ref2.icon,
        to = _ref2.to;
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], _extends({
      key: primaryText,
      selected: i === 0,
      button: !!to,
      component: to ? _reactRouterDom.Link : 'div'
    }, !!to && {
      to: to
    }, {
      onClick: function onClick() {
        return setOpened(false);
      }
    }), /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, icon)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: primaryText,
      primaryTypographyProps: {
        noWrap: true
      }
    }));
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    style: {
      margin: '12px 0'
    }
  }), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "settings")), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: 'Settings & account',
    primaryTypographyProps: {
      noWrap: true
    }
  })));
};

RouterNavEx.propTypes = {};
RouterNavEx.defaultProps = {};
var _default = RouterNavEx;
exports["default"] = _default;