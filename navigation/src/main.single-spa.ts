import Vue from 'vue';
import App from './App.vue';
import router from './router';
import GlobalStorePlugin from './plugins/plugins';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h: any) => h(App),
    router,
    GlobalStorePlugin,
    el: '#navbar-app'
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
