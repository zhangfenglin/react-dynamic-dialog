import React, {Component} from 'react'
import './App.css'
import * as DynamicDialog from './dialog'
import Login from './login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          onClick={() => {
            DynamicDialog.open(Login, {}, {})
          }}
        >
          Open
        </div>
      </div>
    )
  }
}

export default App
