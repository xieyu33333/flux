var flux = {};
var fluxStore = {};
flux.rc = riot.observable();

flux.bind = function(v, store, params) {
    var self = this;
    if (store.type === 'ajax') { 
        if (!store.getted) {
            flux.update(store, params);
        }
        else if (store.getted && store.data){
            self[v] = store.data;
            self.update()
        }

        flux.rc.on(store.name + '-updated', function() {
            self[v] = store.data;
            self.update()
        })
    }
    else {
        self[v] = store.data;
        flux.rc.on(store.name + '-updated', function() {
            self[v] = store.data;
            self.update()
        })
    }
}


flux.update = function(store, params) {
    store.getted = true;
    if (store.type === 'ajax') {
        utils.httpGet(store.url, params, function(data) {
            store.data = data;
            flux.rc.trigger(store.name + '-updated')
        });
    }
    else if (store.type === 'json' && params) {
        store.data = params;
        flux.rc.trigger(store.name + '-updated')
    }
} 

fluxStore.Apps = {
    applist: {
        type: 'ajax',
        name: 'app-applist',
        url: 'data/apps.json'
    },

    auth: {
        type: 'ajax',
        name: 'app-auth',
        url: '/auth.json'
    },

    detail: {
        type: 'ajax',
        name: 'app-detail',
        url:  'data/app.json'
    },

    static: {
        type: 'json',
        data: [{name: '1'}, {name: '2'}, {name: '3'}]
    }
}

// flux.bind(this.applist, fluxStore.Apps.applist,  params);
// flux.update(fluxStore.Apps.applist, parmas)