import React, { useState, useEffect } from 'react';
import Breed from './components/Breed';
import './css/App.css';

function App() {
  const [animal, setAnimal] = useState('');

  return (
    <div>
      <Breed animal={animal} setAnimal={setAnimal} />
    </div>
  )
}

export default App;
