import Hero from './hero.js';

import S1 from '../skills/S16610.js';
import S2 from '../skills/S16620.js';
import S3 from '../skills/S16630.js';


import Skin1 from '../skins/yase/skin1.js'
import Skin2 from '../skins/yase/skin2.js'


export default class Yase extends Hero{
    constructor(){
        super("亚瑟","./sources/heros/yase1.png",[new S1(),new S2(),new S3()],[new Skin1(),new Skin2()]);
        // this.name = "亚瑟",
        // this.ico = "./sources/heros/yase1.png";
        // this.skills = [new S1(),new S2(),new S3()];
        // this.skins = [new Skin1(),new Skin2()];
    }
    fire(){
        console.log("释放了技能");
    }
}