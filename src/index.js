import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main'
import './index.scss'
import './styles/pages.scss'

const App = () => {
  return <Main />
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
