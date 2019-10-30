import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {LeadState} from './lead/types';
import {lead} from './lead/index';
import {sortedLeads} from './lead/index';
import { FilterState } from './filter/types';
import { filter } from './filter/index';

Vue.use(Vuex);

export interface RootState {
  lead: LeadState;
  filter: FilterState;
  sortedLeads: LeadState;
}

const store: StoreOptions<RootState> = {
  modules: {
    lead,
    filter,
    sortedLeads,
  },
};

export default new Vuex.Store<RootState>(store);
