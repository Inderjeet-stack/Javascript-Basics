
let mytodos={

day:'monday',
meetings:0,
meetdone:0,


addmeeting: function(num)

{

       this.meetings=this.meetings + num
	

},

calc_meetdone:function(num){

          this.meetdone=this.meetdone + num

},

summary:function(){

 let meetleft=this.meetings - this.meetdone

return `u have ${meetleft} meetings`


}

} 



mytodos.addmeeting(5) 
mytodos.calc_meetdone(2)
console.log(mytodos.summary())

