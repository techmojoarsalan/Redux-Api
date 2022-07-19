import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Context from './Context'
import './index.css'
import Users from './Users'
import { Provider } from 'react-redux'
import store from "./Redux/store"
import Todo from './Todo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Context>
        <App />
        <hr />
        <Users />
        <hr />
      </Context>
    <Todo/>
    </Provider>
  </React.StrictMode>
)
