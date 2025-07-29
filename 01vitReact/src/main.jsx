import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1> hello word</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
      click the visit google
  </a>
)

const anotheruser = " chai aur code ";

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me visit google '

)

createRoot(document.getElementById('root')).
render( 
    reactElement
)
