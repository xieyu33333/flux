riot.tag('applist-1', '<ul> <li each="{ items }">{ name }</li> </ul> <ul> <li each="{ static }">{ name }</li> </ul>', function(opts) {
    flux.bind.call(this, store.chatContent, 'items');

    
});
riot.tag('applist-2', '<ul> <li each="{ items }">{ name }</li> </ul>', function(opts) {
    flux.bind.call(this, store.chatContent, 'items');
    
});
riot.tag('layout', '<applist-1></applist-1> <applist-2></applist-2> <button onclick="{ insertBefore }">insertBefore</button> <button onclick="{ appendToList }">appendToList</button>', function(opts) {
        this.insertBefore = function(e) {
            store.chatContent.insertBeforeList({
                "id" : 0,
                "name": "app0"
            });
        }.bind(this);

        this.appendToList = function(e) {
            store.chatContent.appendToList({
                "id" : 6,
                "name": "app6"
            });
        }.bind(this);
    
});