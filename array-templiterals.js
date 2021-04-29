

var su=['hulk','spidy','thor','antman']

su.forEach(function(avenger)
{
   console.log('my hero is '+avenger);

})

let marvel=su.filter(function (argument) {
	
	return argument!='hulk';
})

console.log(marvel);
	

//without tempelate literals
// let a = 5;
// let b = 10;
// console.log('Fifteen is ' + (a + b) + ' and \nnot ' + (2 * a + b) + '.');


// //with tempelate literals
// let x = 5;
// let y = 10;
// console.log(`Fifteen is ${x + y} and not ${2 * x + y}.`);


// let ar=['one','two','three']
// ar[1]="inderjeet"
// console.log(ar)

// let ar=['one','two','three','four','five']

// ar.pop();

// console.log(ar)

//start methods

//shift- removing start element
//unshift- adding an element before first element


//end methods

//pop- removing end element
//push- adding an element after last element


//middle

//splice-  from above eg->  ar.splice(2,0,'sharukh')

//2 position from which elements will start getting removed from array
//0 number of elements to be removed
//'sharukh' is value added to removed place


    
