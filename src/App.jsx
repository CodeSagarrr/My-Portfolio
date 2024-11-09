import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<><Home/></>}/>
          <Route exact path='/about' element={<><About/></>}/>
          <Route exact path='/skills' element={<><Skills/></>}/>
          <Route exact path='/projects' element={<><Projects/></>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
