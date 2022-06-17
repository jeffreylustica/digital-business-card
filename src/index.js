// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.js'
// import './index.css'

// ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.js'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(<App/>)

