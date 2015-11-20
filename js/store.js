var store = {};
store.chatContent = flux.createStore({
    get: function() {
        var self = this;
        utils.httpGet('data/apps.json', {}, function(data) {
            self.data = data.outer.wrap.data;
            self.trigger('complete');
        });
    },

    insertBeforeList: function(data) {
        if (utils.isObject(data)) {
            this.data.unshift(data);
        }
        else if (utils.isArray(data)) {
            this.data = data.concat(this.data);
        }
    },

    appendToList: function(data) {
        if (utils.isObject(data)) {
            this.data.push(data);
        }
        else if (utils.isArray(data)) {
            this.data = this.data.concat(data);
        }
    },

    deleteItem: function(id) {
        for (i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                this.data.splice(i, 1);
            }
        }
    }
});
