'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var open = function open(Component, props) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var div = document.createElement('div');

  var getContainer = opts.getContainer,
      _opts$shouldCloseOnOv = opts.shouldCloseOnOverlayClick,
      shouldCloseOnOverlayClick = _opts$shouldCloseOnOv === undefined ? false : _opts$shouldCloseOnOv,
      _opts$onRequestClose = opts.onRequestClose,
      onRequestClose = _opts$onRequestClose === undefined ? function (_args, next) {
    return next();
  } : _opts$onRequestClose,
      other = _objectWithoutProperties(opts, ['getContainer', 'shouldCloseOnOverlayClick', 'onRequestClose']);

  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  var onClose = function onClose(args, next) {
    next();
    _reactDom2.default.unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
  };

  _reactDom2.default.render(_react2.default.createElement(
    _container2.default,
    _extends({
      shouldCloseOnOverlayClick: shouldCloseOnOverlayClick,
      onRequestClose: (0, _compose2.default)([onClose, onRequestClose])
    }, other),
    _react2.default.createElement(Component, _extends({}, props, { onRequestClose: (0, _compose2.default)([onClose, onRequestClose]) }))
  ), div);
};
exports.open = open;