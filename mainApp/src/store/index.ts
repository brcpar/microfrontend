import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {LeadState} from "./lead/types";
import {lead} from "./lead/index";

Vue.use(Vuex);

export interface RootState {
  lead: LeadState
}

const store: StoreOptions<RootState> = {
  modules: {
    lead,
  },
};

export default new Vuex.Store<RootState>(store);
