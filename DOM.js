let peopel= [
	{name:"sam",new :true},
	{name:"ali",new :false},
	{name:"reza",new :false},
	{name:"haswn",new :true},
]

// create list heer

function create_navbar(peopel){
	let ul = document.querySelector("ul")
	ul.innerHTML =""
	peopel.forEach( p =>  {
	if(p.new){
     ul.innerHTML += `<li>${p.name} <span class= "badge badge-danger"> new </span></li>`
	}
	else{
	  ul.innerHTML += `<li>${p.name} </li>`

	}
})

}
create_navbar(peopel)