class Car {

	private speed: number;
	private color: string;

	constructor(speed: number, color: string){
		this.speed = speed;
		this.color = color;
	}
}

let car1 = new Car(200, 'red');
let car2 = new Car(400, 'blue');
let car3 = new Car(300, 'green');