import { useState } from 'react'
import {
   BrowserRouter,
   Routes, // instead of "Switch"
   Route,
} from 'react-router-dom'
import ForgetPassword from './pages/auth/forgetpassword'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import './styles/App.css'

function App() {
   const [count, setCount] = useState(0)

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path={`/register`} element={<Register />} />
               <Route path="/forget-password" element={<ForgetPassword />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App
