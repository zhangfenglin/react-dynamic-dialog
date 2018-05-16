import React from 'react'
import './login.css'

export default class Login extends React.Component {
  render() {
    return (
      <div className="loginBox">
        Login
        <button onClick={this.props.onRequestClose}>关闭</button>
      </div>
    )
  }
}
