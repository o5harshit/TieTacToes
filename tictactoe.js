let boxes = document.querySelectorAll(".box"); // this will return an array
let turn0 = true; //playerX,player0
let para = document.querySelector("p");
let win = new Audio("ohyeah.mp3");
let button = document.querySelector(".reset");
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0 === true){
            turn0 = false;
            box.innerText = "X";
            para.innerText = "player 0 your chance";
        }
        else{
            box.innerText = "0";
            turn0 = true;
            para.innerText = "player X your chance";
        }
         box.disabled = true;
        checkwinner();
    })
})

const checkwinner = () =>{
    for(pattern of winpatterns){
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;
        if(post1val !=  "" && post2val != "" && post3val != ""){
            if(post1val === post2val  && post2val  === post3val){
                console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
                console.log("winner",post1val);
                para.innerText = `Congratulations! , player ${post1val} Won`;
                btndis();
                win.play();
            }
        }
    }
}

button.addEventListener("click",()=>{
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
        para.innerText = "player X your chance";
        turn0 = true;
    }
})

let btndis = ()=>{
    for(box of boxes){
        box.disabled = true;
        setTimeout(()=>{
            para.innerText = "Click on reset to start new game";
        },5000)
    }
}









