import './App.css';
import React,{ useState } from 'react';
import Modal from './Modal';

function App() {

  const [isOpen , setIsOpen] = useState(false);

  return (
    <div className="App">
      <button className='btn' onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
