import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage'

// Works also with SSR as expected
const Card = lazy(() => import('./Card'))

function App() {
  return (
    <>


      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <h1>Vite + React</h1>

      <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
