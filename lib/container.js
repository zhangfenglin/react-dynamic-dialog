'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./modal.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this._onClick = _this._onClick.bind(_this);
    _this._onBoxClick = _this._onBoxClick.bind(_this);
    return _this;
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$overlayClassNa = _props.overlayClassName,
          overlayClassName = _props$overlayClassNa === undefined ? '' : _props$overlayClassNa,
          _props$overlayStyle = _props.overlayStyle,
          overlayStyle = _props$overlayStyle === undefined ? {} : _props$overlayStyle,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        {
          className: 'modal ' + className,
          style: _extends({}, style)
        },
        _react2.default.createElement('div', { className: 'overlay ' + overlayClassName, style: overlayStyle, onClick: this._onClick }),
        _react2.default.createElement(
          'span',
          { className: 'box', onClick: this._onBoxClick },
          children
        )
      );
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      var _props2 = this.props,
          shouldCloseOnOverlayClick = _props2.shouldCloseOnOverlayClick,
          onRequestClose = _props2.onRequestClose;


      if (shouldCloseOnOverlayClick) {
        onRequestClose();
      }
    }
  }, {
    key: '_onBoxClick',
    value: function _onBoxClick(event) {
      event.stopPropagation();
    }
  }]);

  return Container;
}(_react2.default.Component);

Container.propTypes = {
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  onRequestClose: _propTypes2.default.func
};

Container.defaultProps = {
  shouldCloseOnOverlayClick: false
};

exports.default = Container;