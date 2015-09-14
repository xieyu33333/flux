## 使用说明
首先定义store，每一项都代表一个远程或本地静态数据资源

    var store = {
        apps: {
            type: 'ajax',
            name: 'apps',
            url: 'data.json',
            col: 'data'
        },
        static: {
            type: 'json',
            data: [{name: '1'}, {name: '2'}, {name: '3'}]
        }
    }

只有两个api：bind和update

    <tab-a>
        <ul>
            <li each="{ items }">{ name }</li>
        </ul>
        <ul>
            <li each="{ static }">{ name }</li>
        </ul>
        <button onclick={ updateList }>updateApps</button>
        
        flux.bind.call(this, 'items', store.apps)
        flux.bind.call(this, 'static', store.static);
        updateList(e) {
            flux.update(store.apps)
        }
    <tab-a>
    

