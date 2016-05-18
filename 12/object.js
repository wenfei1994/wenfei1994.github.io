var student ={
	name:"bob",
	age:12,
	sayhello: function(){
		console.log("好吧");
	}
}

console.log(student.name);
console.log(student.age);

for (var i in student){
	console.log(i + "=" + student[i])
}
for (var i in window){
	console.log(i + "=" + window[i]) 
}