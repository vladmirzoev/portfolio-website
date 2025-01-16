import StandardContainer from './components/StandardContainer';
import './App.css';
import HomeBLock from './components/HomeBlock';
import About from './components/About';
import ProjectsBlock from './components/ProjectsBlock';
import ContactsBlock from './components/ContactsBlock';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Timeline from './components/Timeline';


function App() {
  return (
    <>
      <StandardContainer>
        <Menu />

        <HomeBLock />
        <About />
      </StandardContainer>

      {/* Educucation timeline excluded form container. Insted there is one inside */}
      <Timeline />

      <StandardContainer>
        <ProjectsBlock />
        <ContactsBlock />
      </StandardContainer>
        
      
      <Footer />
    </>
  )
}

export default App
