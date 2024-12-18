import NavBar from './components/NavBar'
import StandardContainer from './components/StandardContainer'
import MenuMobile from './components/MenuMobile'
import './App.css'
import HomeBLock from './components/HomeBlock'


function App() {
  return (
    <>
      <StandardContainer>
        <MenuMobile />
        {/* <NavBar /> */}

        <HomeBLock />
      </StandardContainer>
      
    </>
  )
}

export default App
