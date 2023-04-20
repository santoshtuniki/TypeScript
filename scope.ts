var globalNum = 22;		// global scope
class Scope {
	class_num = 56;		// class variable
	static snum = 13;	// static field

	LocalNumScope(): void{
		var localNum = 89;	// local variable
		console.log("Local num: " + localNum);
	}
}

console.log("Global num: " + globalNum);
console.log("Static num: " + Scope.snum);	// static variable -> accessed by class itself

var obj = new Scope();
obj.LocalNumScope();
console.log("Class num: " + obj.class_num);
