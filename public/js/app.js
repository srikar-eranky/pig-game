/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, prevRoll;

init();


//document.querySelector('#current-' + activePlayer).textContent = dice;

//var x = document.querySelector('#score-0').textContent;
//console.log(x);





document.querySelector('.btn-roll').addEventListener('click', function () {
    
    if (gamePlaying) {
        
        //1. Random #
        var dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);
        // if prev score and dice are 6 do something
        if ( (prevRoll == 6 && dice == 6) || dice == 1) {
            nextPlayer();
        
        } else { 
            
            // if they both are not 6 then set the new val of dice into prev score
            prevRoll = dice;
            
            //2. Display the result.
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = "block";
            diceDOM.src = 'images/dice-' + dice + '.png';
            //3. Add to global score if it's not 1.
    
            
            //Add scores
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
   
        }


    }
    
})







document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //1. When clicked, add current score to global score.
        scores[activePlayer] += roundScore;

        //2. Update the UI.
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //3. Next Player
            nextPlayer();
        }
    }



})









function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    clear();

}

document.querySelector('.btn-new').addEventListener('click', init);







function init() {
    scores = [0,0];
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    clear();
}

function clear () {
    roundScore = 0;
    prevRoll = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
}