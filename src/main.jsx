import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add Font Awesome
const fontAwesomeScript = document.createElement('link')
fontAwesomeScript.rel = 'stylesheet'
fontAwesomeScript.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
document.head.appendChild(fontAwesomeScript)

// Add error handling
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Failed to find the root element')
}

try {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} catch (error) {
  console.error('Error rendering app:', error)
  rootElement.innerHTML = `
    <div style="padding: 20px; color: red;">
      <h1>Error Loading Application</h1>
      <p>${error.message}</p>
    </div>
  `
}
