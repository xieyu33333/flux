riot.tag('applist-1', '<ul> <li each="{ items }">{ name }</li> </ul>', function(opts) {

    flux.bind.call(this, 'items', fluxStore.Apps.applist);

});
riot.tag('applist-2', '<ul> <li each="{ items }">{ name }</li> </ul>', function(opts) {

    flux.bind.call(this, 'items', fluxStore.Apps.applist);

});
riot.tag('layout', '<applist-1></applist-1> <applist-2></applist-2> <button onclick="{ updateData }">更新数据</button>', function(opts) {
        this.updateData = function(e) {
            flux.update(fluxStore.Apps.applist);
        }.bind(this);
    
});