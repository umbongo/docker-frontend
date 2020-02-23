import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          --+ This is another test +--
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
        mapped volumes, used: <br></br>
        docker run -p 3000:3000 -v /app/node_volumes -v $(pwd):/app frontend <br></br>
        AWS: http://dockerreact-env.c8mxxmezgk.us-east-1.elasticbeanstalk.com/
          </header>
    </div>
  );
}

export default App;
