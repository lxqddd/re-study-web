import S1 from '../skills/S16610.js';
import S2 from '../skills/S16620.js';
import S3 from '../skills/S16630.js';

export default class Yase{
    constructor(){
        this.name = "亚瑟",
        this.ico = "./sources/heros/yase1.png";
        this.skills = [new S1(),new S2(),new S3()];
    }
}