import semen from './assets/images/manu-pa-la-caga.jpeg' ;
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [update, setUpdate] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setUpdate(name + " " +email);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={semen} className="App-logo" alt="logo" />
        <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
        <p>Tus datos: {update} </p>
        <p>
        {/* Se recibe en Index.js linea 10, se define por "root" linea 7, y esto se inserta en index.html linea 31  */}
        Burro pichula
        </p>
      </header>
    </div>
  );
}

export default App;
