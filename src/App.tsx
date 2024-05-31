// import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/css/animate.min.css';
import './assets/css/bootstrap.scss'
import './App.css'
import HomePage from './pages/Homepage'

// Works also with SSR as expected
// const Card = lazy(() => import('./Card'))

function App() {
  return (
    <>


      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      {/* <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense> */}
    </>
  )
}

export default App
