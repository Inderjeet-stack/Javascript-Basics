
// function addupto(n)
// {

// 	total=0;

// 	for(var i=0;i<=n;i++)
// 	{

// 		total+=i;

// 	}
// 			 console.log(" "+total)
// }

// addupto(3000)


// //OR


// function addupto(n)
// {

// 	return n*(n+1)/2;
// }

// console.log(" answer=> "+addupto(3))



//next


// function nestedloop(n)
// {

//    for(i=0;i<n;i++)
//    {
//        for(j=0;j<n;j++)
//        {
//        	     console.log(i,j)
//        }

//    }


// }


// nestedloop(2);


//next


function updown(n)
{
	console.log("\ndown to up\n")

	for(i=1;i<n;i++)

	{   
		console.log(" "+i);
	}

	console.log("\nup to down\n")

	for (var  j=n-1; j>0; j--) 
	{
		
		console.log(" "+j);
	}
}

updown(9)