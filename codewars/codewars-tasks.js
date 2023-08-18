// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
    return roll * 2 + position
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
    return Math.floor(time / 2);
}

// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2){
  if (((flower1 % 2) + (flower2 % 2)) === 1) {
    return true
  }
  else return false
}
