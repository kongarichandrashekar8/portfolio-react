import React from 'react'
import Experties from './components/Experties/Experties'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import People from './components/People/People'
import Portfolio from './components/Portfolio/Portfolio'
import Projects from './components/Projects/Projects'
import Work from './components/Work/Work'
import SkillSet from './components/Skills/SkillSet'
import css from './styles/App.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Work/>
      <Projects/>
      <Portfolio/>
      {/* <People/> */}
      <SkillSet/>
      <Footer/>
    
    </div>
  )
}

export default App