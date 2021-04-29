


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
	console.log(user.values())