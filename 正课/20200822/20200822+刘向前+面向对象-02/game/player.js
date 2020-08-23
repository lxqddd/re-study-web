import Yase from './heroes/Yase.js';
import Luban from './heroes/Luban.js'

export default class Player{
    constructor(name){
        this.name = name;
        this.heroes = [new Yase(),new Luban()];
    }
}