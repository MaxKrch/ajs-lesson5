import Character from "../characters/Character.js";
import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from "../characters/SpecificCharacters.js";

test("New Character with unCorrect type", () => {
	const error = "Некорректный тип персонажа"
	
	const testFunc = () => {
		new Character("Maks", "Warrior");
	}

	expect(testFunc).toThrow(error);
});



test("New Character with unCorrect name", () => {
	const error = "Некорректное имя"
	
	const testFunc = () => {
		new Bowerman(true);
	}

	expect(testFunc).toThrow(error);
});



test("New Character with long name", () => {
	const error = "Имя должно быть от 2 до 10 символов"
	
	const testFunc = () => {
		new Swordsman("Maksimillian");
	}

	expect(testFunc).toThrow(error);
});



test("New Character with short name", () => {
	const error = "Имя должно быть от 2 до 10 символов"
	
	const testFunc = () => {
		new Undead("I");
	}

	expect(testFunc).toThrow(error);
});



test("LvlUp dead character", () => {
	const error = "Нельзя повысить левел умершего"
	
	const testFunc = () => {
		const andrew = new Daemon("Andrew");
		andrew.health = 0;
		andrew.levelUp();
	}

	expect(testFunc).toThrow(error);
});



test("Correct lvlUp", () => {
	const maks = new Magician("Maks");
	maks.levelUp();

	const expected = [100, 2, 12, 48]
	const received = [maks.health, maks.level, maks.attack, maks.defence]

	expect(received).toEqual(expected)
})



test("damage", () => {
	const nastia = new Zombie("Nastia");

	const expected = nastia.health - 10 * (1 - 40 / 100);
	
	nastia.damage(10);

	const received = nastia.health;

	expect(received).toBe(expected);
})

test("damage with kill", () => {
	const nastia = new Zombie("Nastia");

	const expected = 0
	
	nastia.damage(1000);

	const received = nastia.health;

	expect(received).toBe(expected);

})


test("create characters", () => {
	const name = "Maks";
	const bowerman = new Bowerman(name);
	const swordsman = new Swordsman(name);
	const magician = new Magician(name);
	const daemon = new Daemon(name);
	const undead = new Undead(name);
	const zombie = new Zombie(name);
})
 