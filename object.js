

let car={

car_Brand:'Tata',

car_Name:'jaguar',

car_type:'automatic',

count:11,

howmany:function(){

	return `I have ${this.count} cars`;

	
}


}

console.log(` ${car.howmany()}` )