// Action Creator
// Every Action Must Have type. payload is optional
export const selectSong = song => {
  return {
    type: "SELECTED_SONG",
    payload: song
  };
};
