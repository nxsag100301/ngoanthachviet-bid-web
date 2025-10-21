import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'

import './App.css'
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './routes/AppRoutes'
import store from './redux/store'

const persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <ScrollToTop />
          <AppRoutes />
        </HashRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
