import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Errorpage from './components/Errorpage'
import SinglePage from './components/SinglePage'
import Header from './components/Header'
import Footer from './components/Footer'
import Gototop from './components/Gototop'



const App = () => {
  return (
    <>
    <BrowserRouter >
    <Header />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/services' element={<Services />}/>
    <Route path='/singlepage' element={<SinglePage />}/>
    <Route path='*' element={<Errorpage />}/>
   </Routes>
   <Gototop />
   <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
