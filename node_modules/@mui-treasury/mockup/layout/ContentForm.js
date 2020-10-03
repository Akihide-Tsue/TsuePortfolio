"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(_ref) {
  var _root;

  var breakpoints = _ref.breakpoints;
  return {
    root: (_root = {
      padding: 16
    }, _defineProperty(_root, breakpoints.up('sm'), {
      padding: 24,
      maxWidth: 500,
      margin: 'auto'
    }), _defineProperty(_root, breakpoints.up('md'), {
      maxWidth: 700
    }), _root),
    paper: {
      padding: 16
    }
  };
};

var ContentForm = function ContentForm(_ref2) {
  var classes = _ref2.classes,
      preset = _ref2.preset,
      onChangePreset = _ref2.onChangePreset,
      data = _ref2.data,
      onChangeData = _ref2.onChangeData;

  var handleChange = function handleChange(key) {
    return function (e) {
      return onChangeData(_extends(_extends({}, data), {}, _defineProperty({}, key, e.target.checked)));
    };
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    elevation: 1,
    square: true,
    className: classes.paper
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    component: "fieldset"
  }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
    component: "legend"
  }, "Presets"), /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
    "aria-label": "Preset",
    name: "preset",
    value: preset,
    onChange: function onChange(e) {
      return onChangePreset(e.target.value);
    }
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "createDefaultLayout",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
    label: "Default"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "createStandardLayout",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
    label: "Standard"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "createFixedLayout",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
    label: "Fixed"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "createContentBasedLayout",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
    label: "Content-based"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "createCozyLayout",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
    label: "Cozy"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "createMuiTreasuryLayout",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
    label: "Mui Treasury"
  })))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    component: "fieldset",
    className: classes.formControl
  }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
    component: "legend"
  }, "Enabled mockup"), /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: data.header,
      onChange: handleChange('header'),
      value: "header"
    }),
    label: "Header"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: data.nav,
      onChange: handleChange('nav'),
      value: "nav"
    }),
    label: "Nav"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: data.content,
      onChange: handleChange('content'),
      value: "content"
    }),
    label: "Content"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: data.footer,
      onChange: handleChange('footer'),
      value: "footer"
    }),
    label: "Footer"
  })))))));
};

ContentForm.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  preset: _propTypes["default"].string.isRequired,
  onChangePreset: _propTypes["default"].func.isRequired,
  data: _propTypes["default"].shape({}).isRequired,
  onChangeData: _propTypes["default"].func.isRequired
};
ContentForm.defaultProps = {};

var _default = (0, _styles.withStyles)(styles)(ContentForm);

exports["default"] = _default;