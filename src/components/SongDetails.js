import React from "react";
import { connect } from "react-redux";

const songDetail = props => {
  if (!props.selectedSong) {
    return <div>
        <h1 style={{color: "teal"}}>Select a Song First</h1>
    </div>;
  }
  return (
    <div className="ui card teal">
      <div className="content">
        <h2>Details of Song</h2>
        <h5>Song Title: {props.selectedSong.title}</h5>
        <h5>Song Duration: {props.selectedSong.duration}</h5>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};
export default connect(mapStateToProps)(songDetail);
