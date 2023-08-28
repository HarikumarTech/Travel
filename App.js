import React, { useState } from 'react';
import './App.css';
import Login from './components/login';




function App() {
  const [showPackages, setShowPackages] = useState(false);

  const handleSignup = () => {
    setShowPackages(true); 
  };
  
    return (
      <div className="App">
        <Login onSignup={handleSignup} /> {

        }
       
        
      </div>

  );
}

export default App;