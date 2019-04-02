// problem 1
//use a for loop to print (console.log()) out the word "hello" 5 times
//Do this with a while loop and a for loop
//While loop
var x = 0;

while (x<5) {
  console.log("hello");
  x++
}


// //For loop
for (var i = 0; i < 5; i++) {
   console.log("hello with for loop");
 }
// PROBLEM2
// Use loops to console.log() print out all the odd numbers from  1 to 25
// Do this using two methods, a while and  a for loop
// METHOD ONE
// WHILE loop
var num = 1;

while(num<25){
  if (num%2 !==0)  {
    console.log(num);
  }
  num++
}

//  METHOD TWO
// FOR LOOP
for (var i = 0; i < 25; i++) {
  if (i%2 !== 0) {
    console.log(i);

  }
}
