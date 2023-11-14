export default class Character {
	constructor(name, type) {
		const listTypes = [
			"Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"
		];

		if(typeof name !== "string") {
			throw new Error("Некорректное имя")
		}
		if(name.length < 2 || name.length > 10) {
			throw new Error("Имя должно быть от 2 до 10 символов")
		}

		const index = listTypes.indexOf(type);
		if(index === -1) {
			throw new Error("Некорректный тип персонажа")
		}

		this.name = name;
		this.type = type;
		this.health = 100;
		this.level = 1;

	}

	levelUp() {
		if(this.health === 0) {
			throw new Error("Нельзя повысить левел умершего")
		}

		this.level += 1;
		this.attack = (this.attack / 10) *12;
		this.defence = (this.defence / 10) * 12;
		this.health = 100;
	} 

	damage(points) {
		this.health -= points * (1 - this.defence / 100);
		if (this.health < 0) {
			this.health = 0;
		}
	}
}



