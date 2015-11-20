<applist-2>
    <ul>
        <li each="{ items }">{ name }</li>
    </ul>
    <script>
    //var store = fluxStore.Apps;
    flux.bind.call(this, store.chatContent, 'items');
    </script>
</applist-2>