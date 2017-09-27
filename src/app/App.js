import React, { Component } from 'react';

import './App.css';
import AlbumForm from "./../containers/AlbumForm";
import AlbumList from "./../containers/AlbumList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumForm />
        <AlbumList />
      </div>
    );
  }
}

export default App;