import React, { Component } from 'react';

class Gif extends Component {
    handleClick = (event) => {
        this.props.updateGif(event.target.id);
    }
    render() {
        const src = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
        return (
          <img src={src} id={this.props.id} className="gif"
          onClick={this.handleClick} />
        );
    }
}

export default Gif;
