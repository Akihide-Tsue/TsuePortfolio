"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ChatMsg = _interopRequireDefault(require("./ChatMsg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AVATAR = 'https://i.pravatar.cc/300?img=13';
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    date: {
      fontWeight: 500,
      color: 'rgba(0,0,0,0.4)',
      margin: '12px 0',
      fontSize: 12,
      textAlign: 'center'
    }
  };
});

var ChatDialog = function ChatDialog() {
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: '16px 30px 12px 10px'
  }, /*#__PURE__*/_react["default"].createElement(_ChatMsg["default"], {
    avatar: AVATAR,
    messages: ['Hi Jenny, How r u today?', 'Did you train yesterday', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.']
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: styles.date
  }, "FRI 1:46 PM"), /*#__PURE__*/_react["default"].createElement(_ChatMsg["default"], {
    side: 'right',
    messages: ["Great! What's about you?", 'Of course I did. Speaking of which check this out', {
      type: 'image',
      alt: 'sticker',
      src: 'https://www.messenger.com/stickers/asset/?sticker_id=702110433208381&image_type=BestEffortImage'
    }, 'Commodo ullamcorper a lacus vestibulum sed arcu. Sed faucibus turpis in eu mi bibendum neque egestas. Maecenas volutpat blandit aliquam etiam erat velit. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Suspendisse sed nisi lacus sed viverra.']
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: styles.date
  }, "FRI 4:18 PM"), /*#__PURE__*/_react["default"].createElement(_ChatMsg["default"], {
    avatar: AVATAR,
    messages: ['Im good.', 'See u later.', {
      type: 'image',
      alt: 'sticker',
      src: 'https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.1997-6/47165057_2150118098374296_5034322199196991488_n.png?_nc_cat=1&_nc_eui2=AeGsL8WciYpwOySYRQINElIdV9NubJ7ZbWTW9J5-DlXHPiLCKR8Zvvd4nVyPH4Wa8kceFiL10mXvokNFcEJx9JWz-6XLYgCLmOgTniFDbSjUPw&_nc_ohc=pewFeK6M1ZIAQkL5L9QR2FZcwYjZ0FTWid2zHeUqboLU4azOITkLVGaog&_nc_ht=scontent.fbkk12-3.fna&oh=27a2a48aabccd4cdae4ec4f3f775daa9&oe=5EAF0F3B'
    }]
  }));
};

var _default = ChatDialog;
exports["default"] = _default;