
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
 
  const handleChange = (e)=>{
    setName(e.target.value)
  }

  return (
    <div>
        <label htmlFor="">Enter Your Name</label><br />
        <input type="text" value={name} onChange={handleChange} /><br />
        <p>{`Hello ${name}!`}</p>
    </div>

  )
}

export default App
