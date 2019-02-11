import { combineReducers } from "redux";

// Two Reducers
// Song List Reducer
const songsReducer = () => {
  return [
    { title: "Thank u next", duration: "3.05" },
    { title: "Lost In the Fire", duration: "4.50" },
    { title: "Look Back at It", duration: "5.00" },
    { title: "Going Bad", duration: "4.00" },
    { title: "Bad Liar ", duration: "6.30" },
    { title: "Close To Me", duration: "4.05" },
    { title: "This feeling", duration: "2.50" },
    { title: "Mia", duration: "5.00" },
    { title: "A Lot", duration: "4.00" },
    { title: "MIDDLE CHILD", duration: "6.30" }
  ];
};
// Selected Song Reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

// Combine 2 reducers
export default combineReducers({
  songList: songsReducer,
  selectedSong: selectedSongReducer
});
