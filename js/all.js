riot.tag('applist-1', '<ul> <li each="{ items }">{ name }</li> </ul> <ul> <li each="{ static }">{ name }</li> </ul>', function(opts) {
    
    var store = fluxStore.Apps;
    flux.bind.call(this, 'items', store.applist);

    flux.bind.call(this, 'static', store.static);

});
riot.tag('applist-2', '<ul> <li each="{ items }">{ name }</li> </ul>', function(opts) {
    
    var store = fluxStore.Apps;
    flux.bind.call(this, 'items', store.applist);

});
riot.tag('layout', '<applist-1></applist-1> <applist-2></applist-2> <button onclick="{ updateData }">更新ajax数据</button> <button onclick="{ updateStaticData }">更新static数据</button>', function(opts) {
        this.updateData = function(e) {
            flux.update(fluxStore.Apps.applist);
        }.bind(this);

        this.updateStaticData = function(e) {
           fluxStore.Apps.static.data.push({name: "4"});

        }.bind(this);
    
});