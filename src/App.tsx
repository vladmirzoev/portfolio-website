import NavBar from './components/NavBar'
import StandardContainer from './components/StandardContainer'
import MenuMobile from './components/MenuMobile'
import './App.css'
import HomeBLock from './components/HomeBlock'
import About from './components/About'
import ProjectsBlock from './components/ProjectsBlock'
import Contacts from './components/Contacts'


function App() {
  return (
    <>
      <StandardContainer>
        <MenuMobile />
        {/* <NavBar /> */}

        <HomeBLock />
        <About />
        <ProjectsBlock />
        <Contacts />
      </StandardContainer>
      
    </>
  )
}

export default App
