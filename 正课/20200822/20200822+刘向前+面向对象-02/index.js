// 面向过程---登录  显示影藏 --》点击显示英雄--》....
// 面向对象；---》分析对象（根据需求）;-->属性及方法；---》共性问题 --》抽象-->类--》类之间关系；

// 对象  ： 亚瑟（名称、图像） 、 鲁班 （...）、玩家对象、游戏管理类；（玩家--》英雄---》技能/皮肤...）；
// 视图相关；
import Game from './game/game.js';
// 一个玩家对应一个游戏；
let game = new Game();
function Hurt(){
    console.log("造成100点伤害");
}
Function.prototype.Decorator = function(fn){
    this();
    fn();
}
// 登录提交
document.querySelector(".sub").onclick = function(){
    let username = document.querySelector(".username").value;
    game.login(username);
    console.log(game);   //包含了需求需要的各种对象及对象属性和方法；
    // 隐藏登录页面显示游戏页面
    document.querySelector(".login").style.display = "none";
    document.querySelector(".game").style.display = "block";
    document.querySelector(".chioseusername").innerHTML = username;
    renderHeros(game.player.heroes);

}

// 点击皮肤按钮切换；
document.querySelector(".skinBtn").onclick = function(){
    document.querySelector(".heroContainer").style.display = "none";
    document.querySelector(".skinContainer").style.display = "block";
}
document.querySelector(".heroBtn").onclick = function(){
    document.querySelector(".heroContainer").style.display = "block";
    document.querySelector(".skinContainer").style.display = "none";
}


function renderHeros(heros){
    console.log(heros)
    document.querySelector(".heroView").innerHTML = "";
    heros.forEach(hero=>{
        let heroDiv = document.createElement("div");
        heroDiv.classList.add("heroItem");
        heroDiv.innerHTML = ` <img src="${hero.ico}" />
        <span>${hero.name}</span>`;
        heroDiv.onclick = function(){
            document.querySelector(".heroShow").innerHTML = "";
            renderSkills(hero.skills);
            // 换图标
            let img = document.createElement("img");
            img.src = hero.ico;
            document.querySelector(".heroShow").appendChild(img);
            renderSkins(hero.skins);
            // console.log(hero)
            // hero.fire();
            hero.fire.Decorator(Hurt);
        }
        document.querySelector(".heroView").appendChild(heroDiv);
    })
}

// 渲染皮肤；
function renderSkins(skins){
    document.querySelector(".skinView").innerHTML = "";
    skins.forEach(skin=>{
        let div = document.createElement("div");
        div.classList.add("skinItem");
        div.innerHTML = `<img src="${skin.ico}" /><span>${skin.name}</span>`;
        document.querySelector(".skinView").appendChild(div);
        div.onclick = function(){
            document.querySelector(".skinShow").innerHTML = `<img src="${skin.img}" />`;
        }
    })
}




//渲染技能；
function renderSkills(skills){
    document.querySelector(".skillsView").innerHTML = "";
    skills.forEach(skill=>{
        let skillItem = document.createElement("img");
        skillItem.src = skill.ico;
        document.querySelector(".skillsView").appendChild(skillItem);
    })
}

// function isFunction(fn){
//     return (typeof fn === "function");
// }

// 小而美；  副作用  复用性；




// 作业：在老师代码基础上，扩展鲁班类 ；要求 ：功能实现和亚瑟一样；