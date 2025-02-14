import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  lastFetch: null,
  namespaced: true,
  state() {
    return {
      coaches: [],
    };
  },
  mutations,
  actions,
  getters,
};
