export default {
  namespaced: true,
  state: {
    song_list: [],
    listen_history_list: []
  },
  mutations: {
    add_song_history(state, song) {
      state.listen_history_list.push(song);
    },
    clear_single_song_history(state, index) {
      state.listen_history_list.splice(index, 1);
    },
    clear_all_song_history(state) {
      state.listen_history_list = [];
    },
    add_song_list(state, song) {
      state.song_list.push(song);
    }
  },
  actions: {}
};
