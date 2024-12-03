const cars=["Toyota","Hyundai","BMW"];
const cars1 = new Array("Saab", "Volvo", "BMW");
let cars2= cars[0];
cars[0]= 123;   

const names=["Peace", "Alice", "Grace"];
let people= names.length

const motors=["wagon", "tvs", "bajaj"];
let motors0= motors.join(" ");
let motors1= motors.pop();

let motorsSpliced= motors.toSpliced(0,1);

let transportMeans= cars.concat(motors);

let text= "<ul>";
for (let i=0; i<people; i++){
    text += "<li>" + names[i] + "<li>"
}
text += "</ul>";
console.log(cars, cars1, cars2, cars.toString(), 
cars.length, cars[2], cars.length -1, text, motors0, transportMeans.join(" "),motorsSpliced);



// 5. filtering an array
// 6. mapping an array
// 7. reducing an array
// 8. sorting an array


