import React from 'react';
import './App.css';
import LoginBox from './components/loginBox';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LoginBox/>
      <Footer/>
    </div>
  );
}

export default App;
