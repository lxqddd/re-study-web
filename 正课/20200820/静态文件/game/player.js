import Yase from './heroes/Yase.js';

export default class Player{
    constructor(name){
        this.name = name;
        this.heroes = [new Yase()];
    }
}