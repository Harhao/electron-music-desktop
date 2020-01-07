
export default {
  namespaced: true,
  state: {
    primaryColor: "black"
  },
  getters: {
    primaryColor: state => state.primaryColor
  },
  mutations: {
    set_primary_color(state, color) {
      state.primaryColor = color;
      // console.log(window)
      // window.document.documentElement.setAttribute('data-theme',color)
    }
  },
  actions: {
    setColor(context, color) {
      context.commit("set_primary_color", color);
    }
  }
};
