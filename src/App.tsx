import StandardContainer from './components/StandardContainer';
import './App.css';
import HomeBLock from './components/HomeBlock';
import About from './components/About';
import ProjectsBlock from './components/ProjectsBlock';
import ContactsBlock from './components/ContactsBlock';
import Menu from './components/Menu';


function App() {
  return (
    <>
      <StandardContainer>
        <Menu />

        <HomeBLock />
        <About />
        <ProjectsBlock />
        <ContactsBlock />
      </StandardContainer>
      
    </>
  )
}

export default App
