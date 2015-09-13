fluxStore.Apps = {
    applist: {
        type: 'ajax',
        name: 'app-applist',
        url: 'data/apps.json',
        col: 'outer.wrap.data'
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