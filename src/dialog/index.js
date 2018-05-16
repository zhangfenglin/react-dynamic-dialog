import React from 'react'
import ReactDOM from 'react-dom'
import Cache from './cache'
import Container from './container'

const caches = []

const foundEmptyNode = () => {
  for (let idx = 0; idx < caches.length; idx++) {
    const cache = caches[idx]
    if (cache.isUsing === false) {
      return cache
    }
  }

  return null
}

export const open = (Component, opts = {}) => {
  let div = null

  const cache = foundEmptyNode()
  if (cache) {
    div = cache.trigger
  } else {
    div = document.createElement('div')
    caches.push(
      new Cache({
        trigger: div,
        key: '',
        isUsing: true
      })
    )
  }

  const {getContainer, ...props} = opts
  if (getContainer) {
    const root = getContainer()
    root.appendChild(div)
  } else {
    document.body.appendChild(div)
  }

  ReactDOM.render(<Container {...props}>{Component}</Container>, div)
}
