import { useState } from 'react'
import { HashRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'
import RootProviders from './components/RootProviders'

function App() {

  return (
    <RootProviders>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </RootProviders>
  )
}

export default App
