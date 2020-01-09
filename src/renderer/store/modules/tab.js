
export default {
    namespaced: true,
    state: {
      show: false
    },
    getters: {
      tab_show: state => state.show
    },
    mutations: {
      set_primary_color(state, color) {
        state.primaryColor = color;
      }
    },
    actions: {
      setColor(context, color) {
        context.commit("set_primary_color", color);
      }
    }
  };