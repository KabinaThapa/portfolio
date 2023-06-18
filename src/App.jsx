import { useState } from 'react'
import Sidenav from './components/sidenav'
import Home  from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
 
  return (
    <>
    <div>
      <Sidenav />
      <Home/>
      <Contact/>
      </div>
     
    </>
  )
}

export default App
