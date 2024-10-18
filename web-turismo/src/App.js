import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup/Signup';
import Login from './login/Login';
import MainLayout from './Main/MainLayout';
import Profile from './Profile/Profile';
import ResultSearch from './ResultSearch/ResultSearch';
import ChangePassword from './Components/ChangePass';

function App() {

  return (

    <div className="backgroundColor">
      <Router basename='/landPage'>
      <Routes>
        {/* Rutas que usan el layout común */}
        <Route path="/" element={<MainLayout/>} />
        
        {/* Rutas especiales (Login, Signup)*/}
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup></Signup>} />
        
        <Route path='/profile' element={<Profile></Profile>} />
        <Route path='/change-password' element={<ChangePassword></ChangePassword>} />
        <Route path='/resultSearch' element={<ResultSearch></ResultSearch>} />
      </Routes>
    </Router>
    </div>
)
}

export default App;
