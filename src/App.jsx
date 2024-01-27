import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Studentui from './components/component/studentui'
// import Studentpage from './components/component/studentpage'

// import Login from './components/component/Login'
// import Pswdreset from './components/component/pswdreset'
import React from 'react'
import Detailspage from './components/component/detailspage'
import Practicepage from './components/component/practicepage'
import Quizpage from './components/component/quizpage'



function App() {

  return (

    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/detailspage' element={<Detailspage/>}/>
    <Route path='/studentui' element={<Studentui/>}/>
    <Route path='/practicepage' element={<Practicepage/>}/>
    <Route path='/quizpage' element={<Quizpage/>}/>
    </Routes>
    </BrowserRouter>
    </div>


  )
}

export default App
