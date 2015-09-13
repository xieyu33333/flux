<applist-1>
    <ul>
        <li each="{ items }">{ name }</li>
    </ul>

    <ul>
        <li each="{ static }">{ name }</li>
    </ul>
    
    var store = fluxStore.Apps;
    flux.bind.call(this, 'items', store.applist);

    flux.bind.call(this, 'static', store.static);
</applist-1>