import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile'
import Public from './components/Public';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Public />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/profile' element={<Profile /> } />
      </Routes>
      
    </div>
  );
}

export default App;
