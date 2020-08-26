 export default class GameEvent{
    constructor(){
        this.handles = [];
    }
    // 注册事件
     addEvent(eventName,fn){
        // handles['myevent'] = [fn1,fn2];
        if(typeof  this.handles[eventName] === "undefined"){
            this.handles[eventName] = [];
        }
        this.handles[eventName].push(fn);
    }
    // 触发事件
     trigger(eventName){
        if(typeof this.handles[eventName]=== "undefined"){
            return ;
        }
        this.handles[eventName].forEach(fn=>{
            fn();
        });
    }
    // 删除指定自定义事件；
    removeEvent(eventName,fn){
        for(let i=0;i<this.handles[eventName].length;i++){
            if(this.handles[eventName][i]===fn){
                this.handles[eventName].splice(i,1);
                break;
            }
        } 
    }
}

// 作业：实现removeEvent方法； removeEvent 删除指定的自定义事件名称下的方法； 注意不是删除所有事件；

// function fn1(){
//     console.log("fn1");
// }
// function fn2(){
//     console.log("fn2");
// }
// let myEvent =  new GameEvent();
// myEvent.addEvent("myevent",fn1);
// myEvent.addEvent("myevent",fn2);
// // myEvent.removeEvent("myevent",fn2);
// myEvent.trigger("myevent");