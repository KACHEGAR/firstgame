let a = Math.round((Math.random() * (100-1+1))+1);
let ten = 0;
let rand;
let time;

let checkChoice = document.querySelector(".check");
let again = document.querySelector(".button");
let lose = document.querySelector(".button2");
let previousNum = document.querySelector(".previousNum");
let checkButton = document.querySelector(".checkButton");
let anim = document.querySelector(".anim");

function сheck(){
    rand = document.querySelector(".guessin").value;

    if (rand >100){
        return checkChoice.textContent = "Число больше 100"
    }else if(rand<0) {
        return checkChoice.textContent = "Число меньше 0"
    }

    if (rand == a){
        again.classList.remove("hiden");
        checkButton.setAttribute("disabled","disabled");
        win();
        time = setTimeout('stand()', 2000);
    }
    else if (rand > a) {
        checkChoice.textContent = "Число слишком большое!";
        punch();
        time = setTimeout('stand()', 550);

    }else if (rand < a){
        checkChoice.textContent = "Число слишком маленькое!";
        punch();
        time = setTimeout('stand()', 550);
    }

    previousNum.textContent += " "+rand;
    ten++;
    if(ten===10){
        lose.classList.remove("hiden");
        checkButton.setAttribute("disabled","disabled");
    }

    document.querySelector(".guessin").value = "";
}

function punch(){
    anim.classList.remove("anim_stand");
    anim.classList.add("anime_punch");
}

function win() {
    anim.classList.remove("anim_stand");
    anim.classList.add("anim_win");
}

function stand() {
    if (anim.classList.contains("anime_punch")){
        anim.classList.remove("anime_punch");
        anim.classList.add("anim_stand");
    }else if(anim.classList.contains("anim_win")) {
        anim.classList.remove("anim_win");
        anim.classList.add("anim_stand");
    }
    clearTimeout(time);
}

function restart() {
    checkChoice.textContent = null;
    previousNum.textContent = null;
    checkButton.removeAttribute("disabled");
    ten = 0;
    a = Math.round((Math.random() * (100-1+1))+1);
    if (!again.classList.contains("hiden")){
        again.classList.add("hiden");
    }else if (!lose.classList.contains("hiden")){
        lose.classList.add("hiden")
    }
}