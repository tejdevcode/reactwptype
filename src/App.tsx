// import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/css/animate.min.css';
import './assets/css/bootstrap.scss'
import './App.css'
import Topbar from './components/Topbar'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage';
import Servicespage from './pages/Servicespage';
import Projectspage from './pages/Projectspage';
import Contactpage from './pages/Contactpage';

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
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/Services' element={<Servicespage />} />
        <Route path='/projects' element={<Projectspage />} />
        <Route path='/contact' element={<Contactpage />} />
      </Routes>
      <Footer />

      {/* <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense> */}
    </>
  )
}

export default App
