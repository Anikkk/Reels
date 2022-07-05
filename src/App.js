import Signup from './Component/Signup'
import Login from './Component/Login'
import Feed from './Component/Feed'
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import {AuthProvider} from './Context/AuthContext'

function App() {
  return ( 
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path ="/feed" element={<Feed/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
      
  );
} 

export default App;
