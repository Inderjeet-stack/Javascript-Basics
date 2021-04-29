let mytodos={

day:'monday',
meetings:5,
meetdone:3,

}

let addmeeting=function(todo,meet=0)
{

	todo.meetings=todo.meetings + meet 
}

let cal_meetdone=function(todo,meet=0)
{
 
	todo.meetdone=todo.meetdone + meet
}

let resetday=function(todo)
{
	todo.meetings=0
 
	todo.meetdone=0
}

let summaryofday=function(todo)
{

         let meetleft=todo.meetings - todo.meetdone

         return `u have ${meetleft} meetings today `

}


addmeeting(mytodos,4)

cal_meetdone(mytodos,2)
 
console.log(mytodos)

console.log(summaryofday(mytodos))

 
resetday(mytodos)



addmeeting(mytodos,2)

cal_meetdone(mytodos,1)

console.log(mytodos)

console.log(summaryofday(mytodos))

