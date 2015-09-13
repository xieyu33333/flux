<layout>
    <applist-1></applist-1>
    <applist-2></applist-2>
    <button onclick={ updateData }>更新ajax数据</button>
    <button onclick={ updateStaticData }>更新static数据</button>
    
    <script>
        updateData(e) {
            flux.update(fluxStore.Apps.applist);
        }

        updateStaticData(e) {
           fluxStore.Apps.static.data.push({name: "4"});
           // flux.update(fluxStore.Apps.static, [{name: 4}]);
        }
    </script>
</layout>