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
let winGame = false;
let running = false;
let flashing = 0;
let gameSeq = [];
let userSeq = [];

//this is to change the status from red to green or vise versa
const set_indicator = (colour) => {
    const indicator = document.getElementById("statusIndicator");
    indicator.style.backgroundColor = colour;
};

//I want to start off by getting the status indicator to turn green after the start button has been pressed 
//I found line 27 on this website so i could connect the start button to status indicator 
//https://makersaid.com/check-if-button-is-clicked-javascript/#:~:text=To%20check%20if%20a%20button,of%20the%20EventTarget%20Web%20API.
document.querySelector('#start').addEventListener('click', function(){
        set_indicator("green");
        //game starts in 3seconds 
        running = true;
        currentScore++;
        setTimeout(start_game, 3000);     
        document.getElementById("current").innerHTML="0" + currentScore; 
    });

    const start_game = () => {//the game is running so lets generate a random sequence
    generateSequence();

}
    
const generateSequence= () => {
    //play the sequence for the user
    //get random number between 1 and 4: https://www.w3schools.com/js/js_random.asp
    const sequence = button_vals[Math.floor(Math.random() * 4)];
    //take result and get it from button val array an store in game seq using push: https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/ 
    gameSeq.push(sequence);
    //Now flash gameSeq to show the user 
    for (let i = 0; i < gameSeq.length; i++) {
        console.log(gameSeq[i])
        flash(gameSeq[i], 500);  
    }
    //const compSeq = 
    userSequence(gameSeq);
}
const userSequence = (gameSeq) => {
     //this allows the user to click the button 
     const buttons = document.querySelectorAll(".circle.button");
     buttons.forEach(button => {
     button.addEventListener('click', () => {
     userSeq.push(button.id);
     for(let x =0; x < userSeq.length; x++)
     {
        console.log(userSeq[x]);
     }
     for (let i = 0; i < gameSeq.length; i++){
        for(let x =0; x < userSeq.length; x++){
            if(gameSeq[i] === userSeq[i])
            {
                if(gameSeq.length === 0)
                {   
                   //onto the next round 
                   currentScore++;
                   document.getElementById("current").innerHTML="0" + currentScore;
                   sequence.push(generateSequence());
                   gameSeq = [...sequence];
                }
                else{
                    alert('Failed');
                }
                //highScore++;
                //document.getElementById("highScore").innerHTML="0" + highScore;
            }
        }
       
    }  
    //After 5th, 9th, 13th speed up interval 
 });
});
}

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
