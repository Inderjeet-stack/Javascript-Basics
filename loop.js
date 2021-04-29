 const ar=['a','v','n','x']


 ar.forEach(function(t,i)
 { 

 	console.log("Alphabet->"+t+i)
 })




// .forEach:

// forEach()-> is used to execute the same code on every 
// element in an array but does not change the array.



let food = ['mango','rice','pepper','pear'];
food.forEach(function(foodItem){
    console.log('I want to eat '+foodItem);
});




// .filter():

// .filter() checks every element in an array to see if it meets a certain criteria and returns 
// a new array with the elements that return truthy for the criteria.



let cost = [100,400,500,40,70];

let smallCost = cost.filter(function(costItem){
    return costItem < 200
});

console.log(smallCost);






