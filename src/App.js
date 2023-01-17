
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import Profile from "./components/pages/Profile"
import Services from './components/pages/Services'
import Works from './components/pages/Works'
import Contact from "./components/pages/Contact";
// import Footer from './components/Footer'

function App() {
  return (
    <Router>
        <div className="container w-full min-h-screen bg-newbg">
        <Header/>
          <Routes>
            <Route exact path='/' element = {<Profile/>}></Route>
            <Route  path='/about' element = {<Profile/>}></Route>
            <Route path='/services' element = {<Services/>}></Route>
            <Route path='/works' element = {<Works/>}></Route>
            <Route path='/contact' element = {<Contact/>}></Route>
          </Routes>
        {/* <Footer/>   */}
        </div>
    </Router>
    
  )
}

export default App
