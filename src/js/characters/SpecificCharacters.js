import Character from "./Character.js";

class Bowerman extends Character {
	constructor (name) {
		super(name, "Bowerman");
		this.attack = 25;
		this.defence = 25;
	}
}

class Swordsman extends Character {
	constructor (name) {
		super(name, "Swordsman");
		this.attack = 40;
		this.defence = 10;
	}
}

class Magician extends Character {
	constructor (name) {
		super(name, "Magician");
		this.attack = 10;
		this.defence = 40;
	}
}

class Daemon extends Character {
	constructor (name) {
		super(name, "Daemon");
		this.attack = 25;
		this.defence = 25;
	}
}

class Undead extends Character {
	constructor (name) {
		super(name, "Undead");
		this.attack = 40;
		this.defence = 10;
	}
} 

class Zombie extends Character {
	constructor (name) {
		super(name, "Zombie");
		this.attack = 10;
		this.defence = 40;
	}
}

export {
	Bowerman, Swordsman, Magician, Daemon, Undead, Zombie
}
