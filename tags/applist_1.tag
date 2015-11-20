<applist-1>
    <ul>
        <li each="{ items }">{ name }</li>
    </ul>

    <ul>
        <li each="{ static }">{ name }</li>
    </ul>
    <script>
    //var store = fluxStore.Apps;
    flux.bind.call(this, store.chatContent, 'items');

    //flux.bind.call(this, 'static', store.static);
    </script>
</applist-1>