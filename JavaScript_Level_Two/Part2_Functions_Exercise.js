//write function called Sleepin and pass boolean parapmeters
function sleeIn(weekday, vacation) {
  return (!weekday)
}
//Problem 2 MONKEY TROUBLE
// Example Input and Output
//monkeytrouble(true,true)-> true
//monkeytrouble(false,false)-> true
//monkeytrouble(true,false)->false
//Monkey trouble function

function monkeytrouble(asmile, bsmile) {
  return (asmile && bsmile) || (!asmile && !bsmile)
}

//PROBLEM 3: STRING TIMES
//Giving a string and a non-negative int n, return a larger
//stringtimes("Hi", 2) -> "HiHi"
//stringtimes("Hi", 3)-> "HiHiHi"
//stringtimes("Hi", 1) -> "Hi"

function stringtimes(str, n) {
  var returnStr = "";
  var i = 0;
  while (i<n){
    returnStr += str
    i++
  }
 return returnStr
}
//LUCKY SUM
//Given 3 numerical values, a b c, return their sum However, if
//Example input and output
//Luckysum(1,2,3) -> 6
//Luckysum(1,2,13) -> 3
//Luckysum(1,13,3) -> 1

function luckysum(a, b, c){
    if (a === 13) {
      return 0
    }else if (b === 13) {
      return a
    }else if (c === 13) {
      return a+b+c
    }
}

// PROBLEM 5:
//CAUGHT SPPED
function caught_speeding(speed, is_birthday){
  if (is_birthday) {
    speed -= 5
  }
  if (speed <= 60) {
    return 0
  }
  if (60 < speed <= 80) {
    return 1
  }
  return 2
}
//BONUS: MAKE BRICKS
function makebricks(small, big, goal) {
  return goal%5 >= 0 && goal%5 - small <= 0 && small + 5*big >= goal;
}
