import {Home, Clubs, Scholarships} from './pages'
import { AdminLogin, Approval, Dashboard } from './Admin pages'
import { Navbar, Footer } from './components'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/scholarships' element={<Scholarships/>}/>
          <Route path='/clubs' element={<Clubs/>}/>
          <Route path='/administrator/login' element={<AdminLogin/>}/>
          <Route path='/administrator/dashboard' element={<Dashboard/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
