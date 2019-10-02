import React from 'react'
import ReactDom from 'react-dom'
import { disconnect } from 'cluster';

function App() {
  return <h3>Hello!</h3>
}

const div = document.createElement('div')
div.setAttribute('id', 'app')
document.body.appendChild(div)

ReactDom.render(
  <App />,
  document.getElementById('app')
)