import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import LoginBox from './components/login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LoginBox/>
    </div>
  );
}

export default App;
