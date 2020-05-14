import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', key: 1 },
      { name: 'name2', artist: 'artist2', album: 'album2', key: 2 },
      { name: 'name3', artist: 'artist3', album: 'album3', key: 3 }],
      playlistName: 'My playlist',
      playlistTracks: [{ name: 'name4', artist: 'artist4', album: 'album4', key: 1 },
      { name: 'name5', artist: 'artist5', album: 'album5', key: 2 },
      { name: 'name6', artist: 'artist6', album: 'album6', key: 3 }],

    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
