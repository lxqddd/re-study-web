import Hero from './hero.js';

import S1 from '../skills/S11210.js';
import S2 from '../skills/S11220.js';
import S3 from '../skills/S11230.js';

// 引入皮肤
import Skin1 from '../skins/luban/skin1.js';
import Skin2 from '../skins/luban/skin2.js';


export default class Luban extends Hero{
    constructor(){
        super("鲁班","./sources/heros/luban1.png",[new S1(),new S2(),new S3()],[new Skin1(),new Skin2()]);
        this.height = "1.2m";
        // this.name = "鲁班",
        // this.ico = "./sources/heros/luban1.png";
        // this.skills = [new S1(),new S2(),new S3()];
        // this.skins = [new Skin1(),new Skin2()];
    }
    fire(){
        console.log("释放了技能");
    }
}