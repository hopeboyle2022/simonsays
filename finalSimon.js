//this are myy buttons in an array that I will randomise later for the game 
const button_vals = ["button-red", "button-green", "button-yellow", "button-blue"];
const startButton = document.getElementById("start");
const highScoreDisplay = document.getElementById("high_score");
const currentScoreDisplay = document.getElementById("current_score");
const statusIndicator = document.getElementById("statusIndicator");
const circleButton = document.querySelectorAll(".circle");

//we need these variables
let userSeq =[]; 
let gameSequence = []; 
let currentScore = 0;
let highScore = 0; 
let gameIsActive = false; 
//variable to store the 5second timout action
let timeoutFailure;

// we need these functions
//flashSequence, give it the game sequence and it will flash it
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

//checks the users sequence against the gameSequence
const validateUserSequence = (userSequence, gameSequence) => {
    for(let i = 0; i < userSequence.length; i++)
    {
        //for(let y = 0; y < gameSequence.length; y++)
        if(userSeq[i] === gameSequence[i]){
            updateGameSequence(gameSequence);
        }
       
    } 
};

//this is to change the status from red to green or vise versa
const set_indicator = (colour) => {
    const indicator = document.getElementById("statusIndicator");
    indicator.style.backgroundColor = colour;
};

//updates the sequence for the next round
const updateGameSequence = (gameSequence ) => {
    //get random number between 1 and 4: https://www.w3schools.com/js/js_random.asp
    const sequence = button_vals[Math.floor(Math.random() * 4)];
    //take result and get it from button val array an store in game seq using push: https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/ 
    gameSequence.push(sequence);
    //Now flash gameSeq to show the user 
    for (let i = 0; i < gameSequence.length; i++) {
        console.log(gameSequence[i])
        flash(gameSequence[i], 500);  
    }
};

// start button is clicked
document.querySelector('#start').addEventListener('click', function(){
    set_indicator("green");
    gameIsActive = true;
    //game starts in 3seconds 
    while(gameIsActive)
    {
        //increment score
        currentScore = currentScore + 1;
        document.getElementById("current").innerHTML= "0" + currentScore; 
        gameSequence = updateGameSequence(gameSequence);
        //flash(gameSequence, 500);
        //set timeoutFailure to the setTimout function for 5
        var timeoutFailure = setTimeout(function() 
        { alert('you failed'); 
            gameIsActive = false; 
        }, 5000);

    }
        // Circle button is clicked
        const buttons = document.querySelectorAll(".circle.button");
        buttons.forEach(button => {
        button.addEventListener('click', () => {
        
            if(gameIsActive){
            if(userSeq.length < currentScore )
            {
                userSeq.push(button.id);
                console.log(userSeq);
                if(userSeq.length === currentScore ) 
                {
                    if(userSequence === gameSequence ) //validate user sequence function, not sure how this works 
                    {
                        clearTimeout(timeoutFailure);
                    }   
                }
            }
        }
        else{
            //if you have a new highest score then update it
                if(currentScore > highScore)
                {
                    highScore = currentScore;
                    document.getElementById("highscore").innerHTML="0" + highScore; 
                    currentScore = 0;
                    document.getElementById("current").innerHTML="0" + currentScore; 
                    alert('you failed');
                    gameSequence =[];
                    userSeq = []; 
                    
                }
            }
        })
    });
});
