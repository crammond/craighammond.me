import React, { Component } from 'react';
import './App.css';

const APP_STYLE = {
  textAlign: "center"
}

class App extends Component {
  render() {
    return (
      <div style={APP_STYLE}>
        Hello, welcome to craighammond.me!
        <br/><br/>
        There's not a lot going on here right now.
        For now, you can check out
        my <a href="https://www.linkedin.com/in/hammondcraigr/">LinkedIn</a>.
        Or not. I'm a website not a cop.
      </div>
    );
  }
}

export default App;
