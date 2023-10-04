/**
 * The code exports a state object with two properties (modalOpen and imagesLoaded) and mutations to
 * update these properties.
 */
export const state = () => ({
  modalOpen: false,
  imagesLoaded: false,
});

export const mutations = {
  updateModal: (state, payload) => {
    state.modalOpen = payload;
  },
  updateImagesLoaded: (state, payload) => {
    state.imagesLoaded = payload;
  },
};
