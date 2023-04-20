interface Flyable {
	speed: number;
	acceleartion? : number;	// optional property

	fly(speed: number): void;
}