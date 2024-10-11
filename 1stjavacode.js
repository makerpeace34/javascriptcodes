   age = 18;
    let canVote = age >= 18 ? "Yes, you can vote!" : "No, you're too young.";
    console.log(canVote);  // Output: Yes, you can vote!
    let day = "Tuesday";
    switch (day) {
      case "Monday":
        console.log("Start of the work week!");
        break;
      case "Friday":
        console.log("Weekend is almost here!");
        break;
      case "Saturday":
      case "Sunday":
        console.log("Enjoy the weekend!");
        break;
      default:
        console.log("It's a regular weekday.");
    }


//Exercise for condition statement
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
}
checkEvenOdd(5); 
checkEvenOdd(8); 


//Switch statement
function dayOfTheWeek(number){
  switch(number){
    case 1: 
    console.log("Monday")
    break;
    case 2: console.log(Tuesday)
    break;
    case 3: console.log("Wednesday")
    break;
    case 4: console.log("Thursday") 
    break;
    case 4: console.log("Friday")
    break;
    case 6: console.log("Saturday")
    break;
    case 7: console.log("Sunday")
    break;
    default:
      console.log("Invalid day number! Please enter a number between 1 and 7.")
  }
}
dayOfTheWeek(1);
dayOfTheWeek(4);
dayOfTheWeek(9);

// for loop
for (let i=1; i <= 10;i++) {
  console.log(i)
  }
  

// while loop
let i=2
while (i<=20) {
  console.log(i);
  i +=2
}

//returning values
function addNumbers(a,b){
  return a+b
  }
  let sum= addNumbers(5,6)
  console.log(sum)

// function with parameters for log
function identifyPerson(names,age) {
  console.log(names + age)
}
identifyPerson("Peace Ufitamahoro")

// function expression
let user=function(names){
  return "Welcome Sir !" + names
}
console.log(user)

// function expression
let user1=function(names){
  return "Welcome Sir !" +" "+ names
}
console.log(user1("Peacemaker"))

// Fruits Array Manipulation

let fruits=["Apple","Banana","Mango"]
console.log(fruits)
fruits.push("Orange")
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift("Strawberry")
console.log(fruits)
fruits.pop()
console.log(fruits)