var flux = {
    rc : riot.observable(),

    bind : function(v, store, params) {
        var self = this;
        self.on('mount', function() {
            if (store.type === 'ajax') { 
                if (!store.getted) {
                    flux.update(store, params);
                }
                else if (store.getted && store.data){
                    self[v] = store.data;
                    self.update();
                }

                flux.rc.on(store.name + '-updated', function() {
                    self[v] = store.data;
                    self.update();
                })
            }
            else {
                self[v] = store.data;
                flux.rc.on(store.name + '-updated', function() {
                    self[v] = store.data;
                    self.update();
                })
            }
        });

        self.on('unmount', function() {
            flux.rc.off(store.name + '-updated');
        });
    },

    update : function(store, params) {
        store.getted = true;
        if (store.type === 'ajax') {
            utils.httpGet(store.url, params, function(data) {
                if (!store.col) {
                    store.data = data;
                }
                else {
                    var colArr = store.col.split('.');
                    for (i = 0; i < colArr.length; i++) {
                        (function() {
                            if (i === 0) {
                                store.data = data[colArr[i]];
                            }
                            else {
                                store.data = store.data[colArr[i]];
                            }
                        })();
                    }
                }
                flux.rc.trigger(store.name + '-updated')
            });
        }
        else if (store.type === 'json' && params) {
            store.data = params;
            flux.rc.trigger(store.name + '-updated')
        }
    }

}
