import Player from './player.js'
export default class Game{
    constructor(){
        this.player = null;
    }
    login(name){
        this.player = new Player(name);
        // 一旦登录  有玩家
        // this.player = {
        //     name:name,
        //     heroes:[{
        //         name:"亚瑟",
        //         ico:"",
        //         skills:[{},{},{}],
        //         skins:[{},{},{}]
        //     },{
        //         name:"鲁班",
        //         ico:"",
        //         skills:[],
        //         skins:[]
        //     }],
        // }
    }

}