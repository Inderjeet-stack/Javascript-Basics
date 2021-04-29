

// var hello=function (name) {
// 	return " Hey " + name
// }

// console.log(hello('John Doe'))



//Arrow Function

 var hello= (name) => " Hey " + name


console.log(hello('John Doe'))



//Iterate Over Array Of Objetcs 
//.filter() checks every element in an array to see if it meets a certain criteria and returns 
// a new array with the elements that return truthy for the criteria. 

let mytodos=[
{
	title:'buy bread',
	isdone:true
},


{
	title:'go to gym',
	isdone:true

},

{
	title:'daily Stuff',
	isdone:true

},

{
	title:'project',
	isdone:false

},

{

	title:'wcc2',
	isdone:false
},

{
	title:'web series',
	isdone:false

}

	]    


		let thingsdone=mytodos.filter((todo)=>  todo.isdone===false)
            
		
console.log(thingsdone)


//arrow function don't work inside object

const mobile={

	price:8000,
	brand:'oppo',

	description: ()=>{

		return `price of mobile is-> ${this.price}`
	}

}


//console.log(mobile.description())



// let mytodos=[

// {
// 	title:'buy bread',
// 	isdone:true
// },


// {
// 	title:'go to gym',
// 	isdone:true

// },

// {
// 	title:'daily Stuff',
// 	isdone:true

// },

// {
// 	title:'project',
// 	isdone:false

// },

// {

// 	title:'wcc2',
// 	isdone:false
// },

// {
// 	title:'web series',
// 	isdone:false

// }

// 	]    

// // console.log(mytodos[1].title)

//              // 
			
// const notDone = mytodos.filter((todo) => todo.isdone === false);

// notDone.forEach((todo) => console.log(todo.title));
			
            








