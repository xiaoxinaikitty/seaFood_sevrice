import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { AppStateProvider } from './store/AppStateProvider.jsx'

function App() {
  return (
    <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>
  )
}

export default App
