import { useState } from 'react'
import Sidenav from './components/sidenav'
import Home  from './components/Home'
import Projects from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
 
  return (
    <>
    <div className='max-w-full bg-neutral-400'>
      <Sidenav />
      <Home/>
      <Contact/>
      </div>
     
    </>
  )
}

export default App
