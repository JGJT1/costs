import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass='min-heigth'>
        <Routes>
          <Route exact path='/costs' element={<Home/>}></Route>
          <Route path='costs/company' element={<Company/>}></Route>
          <Route path='costs/contact' element={<Contact/>}></Route>
          <Route path='costs/newproject' element={<NewProject/>}></Route>
          <Route path='costs/projects' element={<Projects/>}></Route>
          <Route path='costs/project/:id' element={<Project/>}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
