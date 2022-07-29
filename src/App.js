import React from 'react'
import {Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound'
import {Home} from './pages/Home'


function App() {

  // Paths with Components for Routing
  return (
    <Routes>
      <Route path="/" element={<Home.Pages.Main/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
