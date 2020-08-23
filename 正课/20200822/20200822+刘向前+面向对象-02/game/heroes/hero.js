import GameEvent from '../gameEvent.js';

// 父类 --》 基类；
export default class Hero  extends GameEvent{
    constructor(name,ico,skills,skins){
        super();
        this.name = name,
        this.ico = ico;
        this.skills = skills;
        this.skins = skins;
        this.addEvent("initFn",this.init);
    }
    init(){
        console.log("初始化逻辑...");
    }
}

// 一等公民：声明前置、可以当数据使用（函数又是对象）当成参数使用、闭包
export function test (){
    console.log("test");
}
// import {test}  from  "./hero.js"; 