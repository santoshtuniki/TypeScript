interface Courses{
	name: string;
	trainer: string;
	courseCode: () => string;
}

var user: Courses = {
	name: "TypeScript",
	trainer: "Rithwik",
	courseCode: () => {return "TypeScript Fundamentals"}
}

console.log( "User Course" );
console.log( user.name );
console.log( user.trainer );
console.log( user.courseCode() );



interface nameArray{
	[index: number]: string
}

let names: nameArray;
names = ['Rithwik', 'Ram', 'Vishal'];
console.log( "My name is: " + names[0] );


interface Employee{
	id: number
}

interface Manager extends Employee{
	designation: string
}

var employee = <Manager>{};
employee.id = 1001;
employee.designation = "Developer";
console.log( "Id: " + employee.id );
console.log( "Designation: " + employee.designation );