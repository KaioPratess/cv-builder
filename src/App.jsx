import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'

import './App.css'

function App() {

  return (
    <div className="app">
      <header className='header'>CV BUILDER</header>
      <div className='main-content'>
        <form className='form'>
          <GeneralInfo />
          <Education />
          <WorkExperience />
          <button className='submit'>Submit</button>
        </form>
      </div>
      <footer className='footer'>Made by KaioPratess</footer>
    </div>
  )
}

export default App
