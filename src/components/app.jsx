import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "a93jwI0wkWTQs"
    };

    this.search("homer thinking");
  }

  search = (query) => {
    giphy("d9iLlhnm8HlE36drjjhf9j3e046Zv0IL").search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  updateGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
        <div>
        <div className="left-scene">
            <SearchBar searchFunction={this.search} />
            <div className="selected-gif">
                <Gif id={this.state.selectedGifId} gifClickFunction={this.clickGif} />
            </div>
        </div>
        <div className="right-scene">
            <GifList gifs={this.state.gifs} updateGif={this.updateGif} />
        </div>
        </div>
    ); 
  }
}

export default App;
