let box = document.querySelectorAll(".box");
let reset = document.querySelector(".Reset");
let msg = document.querySelector(".msgcontainer");
let para = document.querySelector(".msg");
let btn = document.querySelector(".new-btn");
let playerO = prompt("enter player O name");
let playerX = prompt("enter player X name");
let game = document.querySelector(".game");
let choice = document.querySelector(".choice")
let turno =true;
let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],    
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]]

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turno){
            console.log(box.innerText="O");
            box.innerText = "O";  
            turn(box.innerText);
            turno = false;
        }else{ 
                console.log(box.innerText="x");
                box.innerText = "X";
                turn(box.innerText);
                turno = true;
        }
        box.disabled =true;
        checkwin();
    });
});
const checkmsg= (winner)=>{
    if( winner== "O"){
        para.innerText =`congratulations,${playerO} wins `;
        msg.classList.remove("hide");
    }else{
        para.innerText =`congratulations,${playerX} wins `;
        msg.classList.remove("hide");

    }
}

btn .addEventListener("click",()=>{
    playerO = prompt("enter player O name");
    playerX = prompt("enter player X name");
    msg.classList.add("hide");
    para.innerText = "";
    box.forEach((box)=>{
        game.classList.remove("hide1")
        box.disabled = false;
        box.innerText = "";
        });
})
const checkwin= ()=>{
    for (let pattern of winpattern){
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        if (pos1 === pos2 && pos2 === pos3 && pos1 !==""){
            game.classList.add("hide1")
            checkmsg(pos1);
        
}
}
}
reset.addEventListener("click",()=>{
    msg.classList.add("hide");
    game.classList.remove("hide1");
    box.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    })
})
 const turn = (el)=>{
        if (el=="O"){
            choice.innerText= "NOW IT'S "+playerX+"'S TURN";
        } else if (el=="X") {
            choice.innerText= "NOW IT'S "+playerO+"'S TURN";
        } 
}
