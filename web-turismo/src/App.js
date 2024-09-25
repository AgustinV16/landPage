import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup/Signup';
import Login from './login/Login';
import MainLayout from './Main/MainLayout';

function App() {

  return (

    <div className="backgroundColor">
      <Router>
      <Routes>
        {/* Rutas que usan el layout común */}
        <Route path="/" element={<MainLayout/>} />
        
        {/* Rutas especiales (Login, Signup)*/}
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup></Signup>} />
        
      </Routes>
    </Router>
    </div>
)
}

export default App;
