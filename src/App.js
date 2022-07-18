import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"

class App extends React.Component { 

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
    }
}

export default App;
