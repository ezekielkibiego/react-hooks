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
import Users from './pages/Users'
import Nasa from './pages/Nasa'
import Character from './pages/Character'
import CharacterDetail from './pages/CharacterDetail'
import DashboardLayout from './layouts/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Profile from './pages/dashboard/Profile'
import Settings from './pages/dashboard/Settings'
import TaskList from './pages/TaskList'

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
        <Route path='/users' element={<Users />}/>
        <Route path='/nasa' element={<Nasa />}/>
        <Route path='/tasks' element={<TaskList />}/>
        <Route path='/characters' element={<Character />}/>
        <Route path='/character/:id' element={<CharacterDetail />}/>
        <Route path='/dashboard' element={<DashboardLayout /> }>
          <Route path='overview' element={<Overview />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='settings' element={<Settings />}/>
        </Route>
        <Route path='/register' element={<RegisterForm />}/>
        <Route path='*' element={<NotFound />}/>

      </Routes>
      <Footer />
    </Router>
  )
}

export default App