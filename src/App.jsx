import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Forms from './pages/Forms'
import MultiInputForm from './pages/MultiInputForm'
import SubmitForm from './pages/SubmitForm'
import RegisterForm from './pages/RegisterForm'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/forms' element={<Forms />}/>
        <Route path='/submit-form' element={<SubmitForm />}/>
        <Route path='/multiInput' element={<MultiInputForm />}/>
        <Route path='/register' element={<RegisterForm />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App