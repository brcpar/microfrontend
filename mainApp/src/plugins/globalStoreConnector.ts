import _Vue from 'vue';

declare module 'vue/types/vue' {
    // 3. Declare augmentation for Vue
    interface Vue {
      $globalStore: GlobalStore
    }
  }

export declare class GlobalStore {
    public addValue(propertyName: string, value: string): void;
    public getValue(propertyName: string): string;
}

export class GlobalStoreConnector {
    public install(vue: _Vue, options: any): void {
        vue.$globalStore = (window as any).globalStorage;
    }
}

export function GlobalStorePlugin(Vue: typeof _Vue, options?: any): void {
    Vue.prototype.$globalStore = (window as any).globalStorage;
}
