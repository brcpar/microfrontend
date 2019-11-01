import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';
import store from './store';
import vuetify from './plugins/vuetify';
import globalStore from './plugins/globalStoreIndex';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h: any) => h(App),
    router,
    store,
    vuetify,
    globalStore,
    el: '#mainapp',
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
