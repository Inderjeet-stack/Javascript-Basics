


let bread=

{
	title:'buy bread',
	isdone:true
}


let daily=
{
	title:'daily Stuff',
	isdone:true

}

var project=
{
	title:'project',
	isdone:false
}


	let user=new Map()

	//console.log(typeof user)

	user.set('01buy',bread)
	user.set('02Stuff',daily)
	user.set('03project',project)

//	console.log(user)

	// console.log("  " + user.size)

	// console.log(user.get('03project'))

	//console.log(user.keys())
	//console.log(user.values())


// for (let key of user.keys())
// 	{
// 		 console.log(key);

// 	}


// 	for (let value of user.values())
// 	{
// 		 console.log(value.title);

// 	}

let us=function(){

		for (let [key,value] of user.entries())
	{
		 console.log(`${key} => ${value.isdone}`);

	}

}

us()



for(const [key,value] of user.entries())
{


	 console.log(key + "=>" + value.title)
}