import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'

const App = () => {
  return <Routes />
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
