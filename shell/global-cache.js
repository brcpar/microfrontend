class GlobalEventDistributor {

    constructor() {
        this.commonStore = {};
        this.stores = [];
    }

    registerStore(store) {
        this.stores.push(store);
    }

    dispatch(event) {
        this.stores.forEach((s) => s.dispatch(event));
    }

    addValue(propertyName, value) {
        this.commonStore[propertyName] = value;
        console.log('property set', propertyName + ': ' + value);
    }

    getValue(propertyName) {
        console.log('property get', propertyName);
        return this.commonStore[propertyName];
    }
}

async function init(){
    window.globalStorage = new GlobalEventDistributor();
}

init();