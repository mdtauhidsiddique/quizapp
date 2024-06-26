
import './App.css'
import DashBoard from './components/DashBoard';
import InstructionPage from './components/InstructionPage';
import Login from './components/Login';
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
     <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}/>
        
        <Route path="login" element={<Login/>}/>
        <Route path='instruction' element={<InstructionPage/>}/>
        <Route path='dashboard' element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
     </>   
  )
}

export default App
