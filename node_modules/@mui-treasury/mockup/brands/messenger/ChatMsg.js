"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _TagFaces = _interopRequireDefault(require("@material-ui/icons/TagFaces"));

var _Reply = _interopRequireDefault(require("@material-ui/icons/Reply"));

var _MoreHoriz = _interopRequireDefault(require("@material-ui/icons/MoreHoriz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  var radius = spacing(2.5);
  var size = 30;
  var rightBgColor = palette.primary.main; // if you want the same as facebook messenger, use this color '#09f'

  return {
    avatar: {
      width: size,
      height: size
    },
    rightRow: {
      marginLeft: 'auto'
    },
    msgBox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 4,
      '&:hover $iconBtn': {
        opacity: 1
      }
    },
    leftMsgBox: {
      textAlign: 'left'
    },
    rightMsgBox: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },
    msg: {
      maxWidth: '70%',
      padding: spacing(1, 2),
      borderRadius: 4,
      display: 'inline-block',
      wordBreak: 'break-word',
      fontFamily: // eslint-disable-next-line max-len
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '14px'
    },
    left: {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      backgroundColor: palette.grey[100]
    },
    right: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      backgroundColor: rightBgColor,
      color: palette.common.white
    },
    leftFirst: {
      borderTopLeftRadius: radius
    },
    leftLast: {
      borderBottomLeftRadius: radius
    },
    rightFirst: {
      borderTopRightRadius: radius
    },
    rightLast: {
      borderBottomRightRadius: radius
    },
    iconBtn: {
      opacity: 0,
      padding: 6,
      color: 'rgba(0,0,0,0.34)',
      '&:hover': {
        color: 'rgba(0,0,0,0.87)'
      },
      margin: '0 4px',
      '& svg': {
        fontSize: 20
      }
    },
    image: {
      maxWidth: 120,
      maxHeight: 120
    }
  };
});

var ChatMsg = function ChatMsg(_ref2) {
  var avatar = _ref2.avatar,
      messages = _ref2.messages,
      side = _ref2.side;
  var styles = useStyles();

  var attachClass = function attachClass(index) {
    if (index === 0) {
      return styles["".concat(side, "First")];
    }

    if (index === messages.length - 1) {
      return styles["".concat(side, "Last")];
    }

    return '';
  };

  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    justify: side === 'right' ? 'flex-end' : 'flex-start'
  }, side === 'left' && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    src: avatar,
    className: (0, _clsx["default"])(styles.avatar)
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: true
  }, messages.map(function (msg, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement("div", {
        key: msg.id || i,
        className: (0, _clsx["default"])(styles.row, styles["".concat(side, "Row")])
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _clsx["default"])(styles.msgBox, styles["".concat(side, "MsgBox")])
      }, typeof msg === 'string' && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        align: 'left',
        className: (0, _clsx["default"])(styles.msg, styles[side], attachClass(i))
      }, msg), _typeof(msg) === 'object' && msg.type === 'image' && /*#__PURE__*/_react["default"].createElement("img", _extends({
        className: styles.image,
        alt: msg.alt
      }, msg)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: styles.iconBtn
      }, /*#__PURE__*/_react["default"].createElement(_TagFaces["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: styles.iconBtn
      }, /*#__PURE__*/_react["default"].createElement(_Reply["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: styles.iconBtn
      }, /*#__PURE__*/_react["default"].createElement(_MoreHoriz["default"], null))))
    );
  })));
};

ChatMsg.propTypes = {
  avatar: _propTypes["default"].string,
  messages: _propTypes["default"].arrayOf(_propTypes["default"].string),
  side: _propTypes["default"].oneOf(['left', 'right'])
};
ChatMsg.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left'
};
var _default = ChatMsg;
exports["default"] = _default;