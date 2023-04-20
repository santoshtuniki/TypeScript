class Course{
	// field
	name: string;

	// constructor
	constructor(name: string){
		this.name = name;
	}

	// function
	disp(): void{
		console.log("Course name is: "+this.name);
	}
}

var obj = new Course("Data Science");
console.log("Course name is: " + obj.name);
obj.disp();