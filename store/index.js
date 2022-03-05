import { initMap } from "@/services/gMapsService";

export const state = () => ({
  map: null,
});

export const actions = {
  init( { commit }, { reference, config }) {
    commit('SET_MAP', new google.maps.Map(reference, config))
  },
};

export const mutations = {
  SET_MAP(state, map) {
    console.log('map', map)
    state.map = map;
  },
};

export const getters = {};
