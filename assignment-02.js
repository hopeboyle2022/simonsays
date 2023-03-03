//this are myy buttons in an array that I will randomise later for the game 
const button_vals = ["button-red", "button-green", "button-yellow", "button-blue"];
const startButton = document.getElementById("start");
const highScoreDisplay = document.getElementById("high_score");
const currentScoreDisplay = document.getElementById("current_score");
const statusIndicator = document.getElementById("statusIndicator");
const circleButton = document.querySelectorAll(".circle");

//here are the variables that are needed for the game 
let currentScore = 0;
let highScore = 0;
let running = false;
let gameSeq = [];
let userSeq = [];
//let sequenceIndex = 0; 
//let sequence =0;
//this is to change the status fromred to green or vise versa
const set_indicator = (colour) => {
    const indicator = document.getElementById("statusIndicator");
    indicator.style.backgroundColor = colour;
};

//I want to start off by getting the status indicator to turn green after the start button has been pressed 
//I found line 27 on this website so i could connect the start button to status indicator 
//https://makersaid.com/check-if-button-is-clicked-javascript/#:~:text=To%20check%20if%20a%20button,of%20the%20EventTarget%20Web%20API.
document.querySelector('#start').addEventListener('click', function(){
        set_indicator("green");
        //let's start the game in 3seconds 
        currentScore++;
        setTimeout(start_game, 3000);
        running = true;
        document.getElementById("current").innerHTML="0" + currentScore;        
    });

    const start_game = () => {
    running = true; //the game is running so lets generate a random sequence
    generateSequence();

}
    
const generateSequence= () => {
    //check if game is running 
    //remember to start the sequence with 1 button then add 1 every level
    //then play the sequence for the user, 
    if(running)
    {
        //here i want to take a random number between 1 and 4: https://www.w3schools.com/js/js_random.asp
       const sequence = button_vals[Math.floor(Math.random() * 4)];
        //take result and get it from button val array an store in game seq
       //how to push variable into an array: https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/
       //I am pushing the the button that I want to flash into gameSeq to show the user 
       gameSeq.push(sequence);
       for (let i = 0; i < gameSeq.length; i++) {
        console.log(gameSeq[i])
        flash(gameSeq[i], 500);
        //checkSeqs(gameSeq, userSeq);
       }

        const buttons = document.querySelectorAll("circle button");
        buttons.forEach(button => {
        buttons.addEventListener('click', () => {
        userSeq.push(buttons.id);
            for(let x =0; x < userSeq.length; x++)
            {
                console.log(userSeq[x]);
            }
        });
    });
  }
}



//     for (let i = 0; i < gameSeq.length; i++){
//         for (let x = 0; x < userSeq.length; x++){
//         if(gameSeq.length === userSeq.length)
//         {
//       //move onto next sequence and add 1 more val to sequence
//       //generateSequence();
//       currentScore++;
//       highScore++;
//       document.getElementById("current").innerHTML="0" + currentScore;
//       document.getElementById("highScore").innerHTML="0" + highScore;
//     }
// }  
//  //After 5th, 9th, 13th speed up interval 
// }



//this enables the buttons to flash when they are called for the sequence 
const flash = (element, delay) => {
    const button = document.getElementById(element);
    //console.log(element)
    button.style.backgroundColor = "white";
    setTimeout(() => {
        switch (element) {
            case "button-red":
                button.style.backgroundColor = "red";
                break;
            case "button-green":
                button.style.backgroundColor = "green";
                break;
            case "button-yellow":
                button.style.backgroundColor = "yellow";
                break;
            case "button-blue":
                button.style.backgroundColor = "blue";
                break;
        }
    }, delay);
};


//if wrong || time > 5sec == flash buttons fours times at the same time
// if(TIMEOUT == (5000)  || userSeq !== gameSeq)
// {
//   flash("button-red");
//   flash("button-blue");
//   flash("button-yellow");
//   flash("button-green");
//   flash("button-red");
//   flash("button-blue");
//   flash("button-yellow");
//   flash("button-green");
//   flash("button-red");
//   flash("button-blue");
//   flash("button-yellow");
//   flash("button-green");
//   flash("button-red");
//   flash("button-blue");
//   flash("button-yellow");
//   flash("button-green");

//   //indicator from green to red 
//   document.getElementById("statusIndicator").style.backgroundColor = "red";
// 
        // let buttonRed = document.querySelector("button-red"); 
        // let buttonBlue = document.querySelector("button-blue");
        // let buttonGreen = document.querySelector("button-green");
        // let buttonYellow = document.querySelector("button-yellow");
        // buttonRed.addEventListener("click", updateUserArray); 
        // buttonBlue.addEventListener("click", updateUserArray); 
        // buttonGreen.addEventListener("click", updateUserArray); 
        // buttonYellow.addEventListener("click", updateUserArray);
