import React from 'react'
import ReactDOM from 'react-dom'
import Container from './container'
import compose from './compose'

export const open = (Component, props, opts = {}) => {
  const div = document.createElement('div')

  const {getContainer, shouldCloseOnOverlayClick = false, onRequestClose = (_args, next) => next(), ...other} = opts
  if (getContainer) {
    const root = getContainer()
    root.appendChild(div)
  } else {
    document.body.appendChild(div)
  }

  const onClose = (args, next) => {
    next()
    ReactDOM.unmountComponentAtNode(div)
    div.parentNode.removeChild(div)
  }

  ReactDOM.render(
    <Container
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={compose([onClose, onRequestClose])}
      {...other}
    >
      <Component {...props} onRequestClose={compose([onClose, onRequestClose])} />
    </Container>,
    div
  )
}
