let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#btn");
let newGameButton=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".winnerdeclare");
let msg=document.querySelector("#msg");

let turn0=true;
const winpatterns=[[0,1,2],[3,4,5],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[6,7,8]]; 

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disbox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbox();
}

checkWinner=()=>{
    for(pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};

newGameButton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
