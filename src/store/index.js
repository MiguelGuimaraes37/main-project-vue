import { createStore } from 'vuex';

import coachesModule from './modules/coaches';

const store = createStore({
  namespaced: true,
  modules: {
    coaches: coachesModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
