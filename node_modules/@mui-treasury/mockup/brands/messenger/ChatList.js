"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChatListItem = _interopRequireDefault(require("./ChatListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var data = [{
  avatar: 'https://i.pravatar.cc/300?img=11',
  name: 'Jordyn Frank',
  info: 'You sent a photo • 2:04 PM',
  responded: true
}, {
  avatar: 'https://i.pravatar.cc/300?img=12',
  name: 'Marwan Combs',
  info: 'Where r u? • 1:54 PM',
  bold: true
}, {
  avatar: 'https://i.pravatar.cc/300?img=13',
  name: 'Imaad Casey',
  info: 'You: Good to see u • SAT',
  active: true
}, {
  avatar: 'https://i.pravatar.cc/300?img=14',
  name: 'Philip Rhodes',
  info: 'You: Lorem ipsum • THU',
  responded: true
}, {
  avatar: 'https://i.pravatar.cc/300?img=15',
  name: 'Chardonnay Raymond',
  info: 'Chardonnay called you • THU'
}, {
  avatar: 'https://i.pravatar.cc/300?img=16',
  name: 'Akram Farmer',
  info: 'You: still look forw... • THU',
  responded: true
}, {
  avatar: 'https://i.pravatar.cc/300?img=17',
  name: 'Nichola Mackie',
  info: 'You: https://mui... • DEC 10'
}, {
  avatar: 'https://i.pravatar.cc/300?img=18',
  name: 'Ines Page',
  info: 'You called Ines • DEC 9'
}, {
  avatar: 'https://i.pravatar.cc/300?img=19',
  name: 'Ephraim Gonzalez',
  info: 'I think you can d... • DEC 9',
  responded: true
}, {
  avatar: 'https://i.pravatar.cc/300?img=20',
  name: 'Tyrell Stark',
  info: 'Okay, I think... • DEC 6'
}, {
  avatar: 'https://i.pravatar.cc/300?img=21',
  name: 'Tasha Whitmore',
  info: 'You sent an attach... • NOV 30'
}, {
  avatar: 'https://i.pravatar.cc/300?img=22',
  name: 'Hawwa Davenport',
  info: 'okay kub • NOV 28'
}];

var ChatList = function ChatList(_ref) {
  var concise = _ref.concise;
  return data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_ChatListItem["default"], _extends({
      key: item.name
    }, item, {
      concise: concise
    }));
  });
};

var _default = ChatList;
exports["default"] = _default;