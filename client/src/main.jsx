import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import 'sweetalert2'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'
import { Provider } from 'react-redux'
import { store } from './components/features/store'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
