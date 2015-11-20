<layout>
    <applist-1></applist-1>
    <applist-2></applist-2>
    <button onclick={ insertBefore }>insertBefore</button>
    <button onclick={ appendToList }>appendToList</button>
    
    <script>
        insertBefore(e) {
            store.chatContent.insertBeforeList({
                "id" : 0,
                "name": "app0"
            });
        }

        appendToList(e) {
            store.chatContent.appendToList({
                "id" : 6,
                "name": "app6"
            });
        }
    </script>
</layout>