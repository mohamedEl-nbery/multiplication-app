const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const correctAns = num1*num2;
const scoreEl = document.getElementById("score")
let score = 0;
const userAns = correctAns;
console.log(userAns);
questionEl.innerText =`What is ${num1} Multiply by ${num2} ?`;

formEl.addEventListener("submit", ()=>{
    
    

    //  if(userAns === correctAns){
    //      score++;
    //      console.log(score);
    //  }else{
    //      score--;
    //      console.log(score);
    //  }
})
