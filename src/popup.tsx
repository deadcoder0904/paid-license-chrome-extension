import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const mountNode = document.getElementById('popup')
if (!mountNode) throw new Error(`Failed to find root element with id = 'popup'`)
const root = ReactDOM.createRoot(mountNode)
root.render(<App />)
