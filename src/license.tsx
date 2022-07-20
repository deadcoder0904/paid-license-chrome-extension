import React from 'react'
import ReactDOM from 'react-dom/client'

import License from './LicensePage'

const mountNode = document.getElementById('license')
if (!mountNode)
  throw new Error(`Failed to find root element with id = 'license'`)
const root = ReactDOM.createRoot(mountNode)
root.render(<License />)
