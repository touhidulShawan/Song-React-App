import React, { Component } from "react";
import { connect } from "react-redux";
import {selectSong} from "../actions";
class SongList extends Component {
  renderSongList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button pink"
              onClick={() => this.props.selectSong(song)}
            >
              Select Song
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui card">
        <div className=" content">
          <div className="ui divided list">{this.renderSongList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songList
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
