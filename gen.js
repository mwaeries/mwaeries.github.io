let correctAnswer; /* remember memory slot */
let currentLevel = 1; /* level tracker */
function updateLevelDisplay() {
    document.getElementById('level-display').innerText = "Level " + currentLevel;
}


function generateQuestion() {
    let num1 = Math.floor(Math.random() * 10); /* a random memory slot, genrates from 0 to 9 */
    let num2 = Math.floor(Math.random() * 10);
    correctAnswer =  num1 + num2; /* the first number + the second number is the correct answer */
    document.getElementById('question-text').innerText = num1 + " + " + num2;
}


generateQuestion(); /*the play buttton */



function checkAnswer() {
    let userGuess = Number(document.getElementById('answer').value); 

    if (userGuess === correctAnswer) {
        alert("your answer is correct");
        currentLevel++;
        document.getElementById('answer').value = ""; 
        document.getElementById('level-display').innerText = "Level " + currentLevel;

        if(currentLevel === 2) generateAlgebra();
        else if(currentLevel === 3) generateCalculus();
        else if(currentLevel > 3){
            document.getElementById('question-text').innerText = "congratulations, you've completed every level succesfully!";
            document.getElementById('answer').style.display = "none";
        }

    } else {
        alert("wrong answer");
    }
}


    /*next line ----*/
    /*algebra time! - second level */
    
    function generateAlgebra() {
    let num1 = Math.floor(Math.random() * 10);
    let x = Math.floor(Math.random() * 10);
    let total = num1 + x;
    correctAnswer = x; /* the correct answer is x */ 
    document.getElementById('question-text').innerText = num1 + " + " + "x" + " = " + total;

    }

    /* calculus questions - third level */
    function generateCalculus() {
    let a = Math.floor(Math.random() * 10 + 1 ); /* 1 to 10, coefficient */
    let coeff = Math.floor(Math.random() * 5 + 1); /* 1 to 5, approach value */

    correctAnswer = coeff * a + 3; // include the +3 from the function


    /* display */
     document.getElementById('question-text').innerHTML = 
        "lim<br><sub> x → " + a + "</sub> " + coeff + "x + 3";
    }