<applist-2>
    <ul>
        <li each="{ items }">{ name }</li>
    </ul>
    
    var store = fluxStore.Apps;
    flux.bind.call(this, 'items', store.applist);
</applist-2>