(function(global) {
    var flux = {};
    var utils =  {
        extend: function(src, obj) {
            for (var key in obj) {
                if (!src[key]) {
                    src[key] = obj[key];
                }
            }
        },

        isType: function (type) {
            return function (obj) {
                return toString.call(obj) === '[object ' + type + ']';
            }
        }
    };

    utils.extend(utils, {
        isArray: utils.isType('Array'),
        isObject: utils.isType('Object'),
        isFunction: utils.isType('Function'),
        isElement: function (obj) {
            return toString.call(obj).indexOf('Element') !== -1;
        }
    });

    flux.createStore = function(obj) {
        if (utils.isObject(obj)) {
            return riot.observable(obj);
        }
        else {
            throw('createStore参数格式错误');
        }
    };

    flux.bind = flux.connect = function(store, property) {
        var self = this;
        if (store.data && store.status === 'complete') {
            self[property] = store.data;
        }
        else {
            if (store.status !== 'getting') {
                flux.update(store);
            }
            store.on('complete', function () {
                store.status = 'complete';
                self[property] = store.data;
                self.update();
            });
        }
    };

    flux.update = function(store) {
        if (store.get && utils.isFunction(store.get)) {
            store.status = 'getting'
            store.get();
        }
    };

    global.flux = flux;
})(window);

