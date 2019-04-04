//Given th object
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  namelength: function () {
    console.log(this.name.namelength)
  }
}
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  report:function () {
    alert("Name is"+this.name+", Job is: "+this.job+", Age is: "+this.age)
  }
}
// lastname function
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastname:function(){
    console.log(this.name.split("")[1])
  }
}
