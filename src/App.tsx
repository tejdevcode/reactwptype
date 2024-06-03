// import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/css/animate.min.css';
import './assets/css/bootstrap.scss'
import './App.css'
import HomePage from './pages/Homepage'
import Topbar from './components/Topbar'
import Header from './components/Header';
import Footer from './components/Footer';

// Works also with SSR as expected
// const Card = lazy(() => import('./Card'))

declare global {
  interface Window {
    jQuery: any;
  }
}

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />

      {/* <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense> */}
    </>
  )
}

export default App
