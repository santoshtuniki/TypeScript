let discount = function (price: number, rate: number = 10.12) {
	return price * rate;
}

console.log( discount(500) );	// 5060
console.log( discount(500, 12) );	// 6000

class A2D{
	x: number;
	y: number;
} 

interface A3D extends A2D{
	z: number;
}

let test: A3D = {x: 1, y: 2, z: 3};
console.log( test );	// { x: 1, y: 2, z: 3 }

function value<T>(arg: T): T {
	return arg
}
let op_1 = value<string>("Demo");
let op_2 = value<number>( 21 );

console.log(op_1);	// Demo
console.log(op_2);	// 21