import React from 'react'
import ReactDOM from 'react-dom/client'
import ScrollToTop from './components/scroll/ScrollToTop'
import {Provider} from "react-redux"
import { store } from './app/store'
import App from './app/App'
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
          <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
)
