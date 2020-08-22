// 面向过程---登录  显示影藏 --》点击显示英雄--》....
// 面向对象；---》分析对象（根据需求）;-->属性及方法；---》共性问题 --》抽象-->类--》类之间关系；

// 对象  ： 亚瑟（名称、图像） 、 鲁班 （...）、玩家对象、游戏管理类；（玩家--》英雄---》技能/皮肤...）；
// 视图相关；
import Game from './game/game.js';
let game = new Game();

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

function renderHeros(heros){
    console.log(heros)
    document.querySelector(".heroView").innerHTML = "";
    heros.forEach(hero=>{
        let heroDiv = document.createElement("div");
        heroDiv.classList.add("heroItem");
        heroDiv.innerHTML = ` <img src="${hero.ico}" />
        <span>${hero.name}</span>`;
        heroDiv.onclick = function(){
            renderSkills(hero.skills);
            // 换图标
            let img = document.createElement("img");
            img.src = hero.ico;
            document.querySelector(".heroShow").appendChild(img);
        }
        document.querySelector(".heroView").appendChild(heroDiv);
    })
}

function renderSkills(skills){
    skills.forEach(skill=>{
        let skillItem = document.createElement("img");
        skillItem.src = skill.ico;
        document.querySelector(".skillsView").appendChild(skillItem);
    })
}

// 作业：在老师代码基础上，扩展鲁班类 ；要求 ：功能实现和亚瑟一样；