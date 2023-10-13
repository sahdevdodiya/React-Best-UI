import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Hadder from './components/Hadder';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
    <div className="App">
       
      <Hadder />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/videos' element={<Videos />}/>
            <Route path='/upload' element={<Upload />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/#footer' element={<Footer />}/>
            
          </Routes>
        <Footer />
        
    </div>
  );
}

export default App;
