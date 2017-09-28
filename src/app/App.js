import React, { Component } from 'react';

import AlbumSearch from "./../containers/AlbumSearch";
import AlbumList from "./../containers/AlbumList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumSearch />
        <AlbumList />
      </div>
    );
  }
};

export default App;