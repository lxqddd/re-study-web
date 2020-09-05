class Vue extends EventTarget{
    constructor(opts){
        super();
        this.opts = opts;
        this._data = opts.data;
        this.observe(this._data);
        this.compile();
    }
    // 观察数据
    observe(data){
        let keys = Object.keys(data);
        keys.forEach(key=>{
            let value = data[key]
            let _this = this;
            Object.defineProperty(data,key,{
                configurable:true,
                enumerable:true,
                get(){
                    console.log("get...");
                    // data[key] ---触发get --- data[key]
                    return value;
                },
                set(newValue){
                    console.log("set...",newValue)
                    // 编译  --> 比较麻烦--->自定义事件；
                    _this.dispatchEvent(new CustomEvent(key,{
                        detail:newValue
                    }))
                    value = newValue;
                }
            })
        })


    }
    compile(){
        // 作用域；
        let el = document.querySelector(this.opts.el)
        this.compileNodes(el);
    }
    compileNodes(el){
        let childNodes = el.childNodes;
        childNodes.forEach(node=>{
            if(node.nodeType===1){
                // console.log("元素节点")
                if(node.childNodes.length>0){
                   this.compileNodes(node);
                }
            }else if(node.nodeType===3){
                // console.log("文本节点");
                // 查找  “{{}}”;{{ message }}
                let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g;
                let textContent = node.textContent;
                // console.log(textContent);
               if( reg.test(textContent) ){
                   let $1 = RegExp.$1;
                //    console.log("有大胡子语法",$1);
                    // console.log(this._data[$1]);
                    // 替换模板里的内容
                    node.textContent =  node.textContent.replace(reg,this._data[$1]);
                    
                    // 通过事件名称关联；key === $1(下标：“message”) oldValue值："数据"; 
                    this.addEventListener($1,e=>{
                        // console.log("触发了事件..",e);
                        let newValue = e.detail;
                        let oldValue = this._data[$1];
                        let reg = new RegExp(oldValue,"g");
                        node.textContent = node.textContent.replace(reg,newValue);
                    })

               }
            }
        })


    }

}