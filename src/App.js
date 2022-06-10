import Signup from './Component/Signup'
import Login from './Component/Login'
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
      
  );
} 

export default App;
