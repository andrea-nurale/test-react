import React from "react"
import { Provider } from 'react-redux'
import {store} from './store'
import "./App.css"
import AppRouter from "./routes"

function App() {
  return <Provider store={store}>
          <AppRouter />
        </Provider>
}

export default App
