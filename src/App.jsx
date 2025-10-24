import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import './App.css'
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './routes/AppRoutes'
import store from './redux/store'
import { injectStore } from './utils/authorizeAxios'

const persistor = persistStore(store)
injectStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <ScrollToTop />
          <AppRoutes />
          <ToastContainer
            position='bottom-right'
            autoClose={2000}
            theme='colored'
          />
        </HashRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
