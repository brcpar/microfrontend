import { GlobalStorePlugin, GlobalStoreConnector } from './globalStoreConnector';
import Vue from 'vue';

Vue.use(GlobalStorePlugin);

export default new GlobalStoreConnector();
