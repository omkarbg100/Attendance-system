import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import Home from './pages/home.jsx';
import Navbar from './components/Navbar.jsx';
import Class from './pages/Class.jsx';
import Timetable from './pages/Timetable.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/class" element={<Class/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </div>
  );
}

export default App;

