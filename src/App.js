import React, {Component} from 'react'
import './App.css'
import * as DynamicModal from './modal'
import Login from './login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          onClick={() => {
            DynamicModal.open(<Login />, {className: 'test', overlayClassName: 'overlayClassName'})
          }}
        >
          Open
        </div>
      </div>
    )
  }
}

export default App
