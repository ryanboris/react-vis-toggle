import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'
import "./index.css"

const App = () => {
  return (
      <Home />
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

module.hot.accept()
