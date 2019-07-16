import React, { Component } from 'react';

import Header from './header';
import ArtistList from './artistElements/ArtistList';
import ArtistDetails from './artistDetails';
import Loaded from './loaded'
import dataArtists from './data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: null,
      selectedArtist: 0,
      loaded: false,
    };
    setTimeout(() => {
      this.setState({
        artists: dataArtists,
        loaded: true
      })
    }, 0)
  }
  updateSelectedArtist = (index) => {
    this.setState({
      selectedArtist: index
    });
  };
  render() {
    return (
      <div className='App d-flex flex-column'>
        <Header />
        {this.state.loaded ? (<div className='d-flex flex-row flex-fill pt-4 p-2'>
          <ArtistList artists={this.state.artists} updateSelectedArtist={this.updateSelectedArtist} />
          <ArtistDetails artist={this.state.artists[this.state.selectedArtist]} />
        </div>) : (
            <Loaded />
          )}

      </div>
    );
  }
}

export default App;
