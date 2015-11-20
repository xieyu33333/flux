## 使用说明

### 创建store
get方法必须存在，用于获取数据，数据要绑定在data属性上，数据获取完成后要执行`this.trigger('complete');`, 还可以编写关于数据的其他方法。


    var chatContent = flux.createStore({
        get: function() {
            var self = this;
            utils.httpGet('data/apps.json', {}, function(data) {
                self.data = data.outer.wrap.data;
                self.trigger('complete');
            });
        },
    });
    
### 在组件中调用
核心方法：

    flux.connect.call(this, chatContent, 'data');  //将组件内的变量引用指向store
    
更新数据：    

    flux.update(chatContent); //等效于chatContent.get(),重新更新数据
    