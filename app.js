

var pScore0 = 0;
var pScore1 = 0;
var activePlayer = 0;
  document.getElementById('roll').addEventListener('click', calcScore); 
  
  function calcScore(){
    
    if(parseInt(document.getElementById('globalScore0').textContent) >= 10 ) {
        
        document.getElementById('pg0').textContent = 'Player 1 wins';
        document.getElementById('roll').disabled = true;
        document.getElementById('hold').disabled = true;        
        
       //  newGame();
    }
    else if(parseInt(document.getElementById('globalScore1').textContent) >= 10) {
        document.getElementById('pg1').textContent = 'Player 2 wins';
        document.getElementById('roll').disabled = true;
        document.getElementById('hold').disabled = true;
       // newGame();
    }
    if(activePlayer === 0) {
    var diceNumber = Math.floor(Math.random()*6)+1;
    var diceDom = document.querySelector('.dice');
    console.log("assets/dice-"+diceNumber+".png");
    diceDom.src = "assets/dice-"+diceNumber+".png";
    
    document.getElementById('p0').style.color = 'blue';
   // pScore0 = 0;
        if(parseInt(document.getElementById('globalScore0').textContent) < 100 && diceNumber != 1) {
            
            temp = pScore0;    
            pScore0 = pScore0 + diceNumber; 
            
        }
        else if(diceNumber === 1) {
            pScore0 = 0;
            activePlayer = 1;   
            document.getElementById('p0').style.color = 'black';
            document.getElementById('currentScore0').textContent = 0;
        }
        if(diceNumber != 1)
            document.getElementById('currentScore0').textContent = pScore0;
    }
    else if(activePlayer === 1) {
        var diceNumber = Math.floor(Math.random()*6)+1;
        var diceDom = document.querySelector('.dice');
        console.log("assets/dice-"+diceNumber+".png");
        diceDom.src = "assets/dice-"+diceNumber+".png";
        var temp = 0;
        document.getElementById('p1').style.color = 'red';
       // pScore1 = 0;
        if(parseInt(document.getElementById('globalScore1').textContent) < 100 && diceNumber != 1) {
            pScore1 = pScore1 + diceNumber; 
            temp = pScore1;
        }
        else if(diceNumber === 1) {
            activePlayer = 0;   
            document.getElementById('p1').style.color = 'black';
            document.getElementById('currentScore1').textContent = 0;
        }
        if(diceNumber != 1)
            document.getElementById('currentScore1').textContent = pScore1;
    }
}

  document.getElementById('hold').addEventListener('click',function() {


    //var score = calcScore();
        if(activePlayer === 0) {
            document.getElementById('globalScore0').textContent = parseInt(document.getElementById('globalScore0').textContent) + pScore0;
            document.getElementById('currentScore0').textContent = 0;
            document.getElementById('p0').style.color = 'black';
            activePlayer = 1;
            pScore0 = 0;
        }                                                                                                        
        else if(activePlayer === 1) {
            document.getElementById('globalScore1').textContent = parseInt(document.getElementById('globalScore1').textContent) + pScore1;
            document.getElementById('currentScore1').textContent = 0;
            document.getElementById('p1').style.color = 'black';
            activePlayer = 0;
            pScore1 = 0;
        }

  });
  document.getElementById('new').addEventListener('click',newGame);


  function newGame() {
    document.querySelector('.rollDice').textContent = 'Roll Dice';
    document.getElementById('globalScore0').textContent = 0;
    document.getElementById('currentScore0').textContent = 0;
    document.getElementById('p0').style.color = 'black';
    document.getElementById('globalScore1').textContent = 0;
    document.getElementById('currentScore1').textContent = 0;
    document.getElementById('p1').style.color = 'black';
    pScore0 = 0; pScore1 = 0;
  }

  













































