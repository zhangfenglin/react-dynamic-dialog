import React from 'react'
import './modal.css'
import PropTypes from 'prop-types'

class Container extends React.Component {
  constructor(props) {
    super(props)

    this._onClick = this._onClick.bind(this)
    this._onBoxClick = this._onBoxClick.bind(this)
  }

  render() {
    const {className = '', style = {}, overlayClassName = '', overlayStyle = {}, children} = this.props

    return (
      <div
        className={`modal ${className}`}
        style={{
          ...style
        }}
      >
        <div className={`overlay ${overlayClassName}`} style={overlayStyle} onClick={this._onClick} />
        <span className="box" onClick={this._onBoxClick}>
          {children}
        </span>
      </div>
    )
  }

  _onClick() {
    const {shouldCloseOnOverlayClick, onRequestClose} = this.props

    if (shouldCloseOnOverlayClick) {
      onRequestClose()
    }
  }

  _onBoxClick(event) {
    event.stopPropagation()
  }
}

Container.propTypes = {
  shouldCloseOnOverlayClick: PropTypes.bool,
  onRequestClose: PropTypes.func
}

Container.defaultProps = {
  shouldCloseOnOverlayClick: false
}

export default Container
