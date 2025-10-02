import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import Quiz from './components/Quiz'

function App() {
 return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      color: 'white',
      backgroundColor: '#1c152fff', // azul marino profundo
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 20px)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

     <Quiz />
    </div>
  );
}

export default App
