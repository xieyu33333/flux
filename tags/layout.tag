<layout>
    <applist-1></applist-1>
    <applist-2></applist-2>
    <button onclick={ updateData }>更新数据</button>
    
    <script>
        updateData(e) {
            flux.update(fluxStore.Apps.applist);
        }
    </script>
</layout>