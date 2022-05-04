import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [test, setTest] = useState(0);

  const handleClickGet = () => {

    axios.get('http://localhost:5000/api/people/test')
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log('err :>> ', err);
    })

  }

  const handleClickPost = () => {

    const headers = {
      'Content-Type': 'application/json'
    }

    const body = {
      Name: test,
      Author: 'Dipper',
      ISBN: 666
    }

    axios.post('http://localhost:5000/api/people/test2', body, {headers: headers})
    .then(result => {
      console.log('result :>> ', result);
      setTest(test + 1);
    })
    .catch(err => {
      console.log('err :>> ', err);
    });

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <button onClick={handleClickGet}>get</button>
        <button onClick={handleClickPost}>post</button>
      </div>
    </div>
  );
}

export default App;