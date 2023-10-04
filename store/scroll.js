/**
 * The code defines a Vuex store module for managing scroll state in a JavaScript application.
 */
export const state = () => ({
  scroll: {
    isScrolling: false,
    limits: {
      x: 0,
      y: 0,
    },
    x: 0,
    y: 0,
  },
});

export const mutations = {
  setScroll: (state, payload) => {
    state.scroll = Object.assign({}, state.scroll, payload);
  },
};
