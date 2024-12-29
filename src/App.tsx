import NavBar from './components/NavBar'
import StandardContainer from './components/StandardContainer'
import MenuMobile from './components/MenuMobile'
import './App.css'
import HomeBLock from './components/HomeBlock'
import About from './components/About'
import Projects from './components/Projects'


function App() {
  return (
    <>
      <StandardContainer>
        <MenuMobile />
        {/* <NavBar /> */}

        <HomeBLock />
        <About />
        <Projects />
      </StandardContainer>
      
    </>
  )
}

export default App
