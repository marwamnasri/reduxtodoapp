import React, { Component } from 'react';
import Input from './component/Input.js'
import Main from './component/Main.js'
import './App.css';
class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Input />

        <Main />
      </div>
    );
  }

}

export default App;