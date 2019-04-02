//Example Function
// function add(a,b){
//   console.log(a+b);
// }
// Default values Example
// function hellosomeone(name = "Frankie") {
//   console.log("Hello " +name);
// }
//Return results
// function timesfive(numinput) {
//   var result = numinput * 5
//   return result//Instead of returnong result we can assign variable to store result
// }

// Global Scope
var v = " GLOBAL V"
var stuff = "GLOBAL STUFF"//Global scope

function fun(stuff) {
  console.log(v);
  stuff = "Reassign stuff inside func"//Local scope calling inside function
  console.log(stuff);
}

fun()
console.log(stuff);//Calling outside function
