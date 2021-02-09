// Slide_8
// Typescript.

import * as R from 'ramda';

interface Dog {
  bark: string;
  breed: string;
}

interface Snake {
  poison: boolean;
}

interface Fish {
  river: boolean
}

enum typeOfPet {
  dog = 'dog',
  snake = 'snake',
  fish = 'fish',
}

const alert = (dog: Dog) => console.log(dog.bark);
const getPet = (typeOfPet: string) : Dog | Snake | Fish => {
  const dog: Dog = {
    bark: 'guau',
    breed: 'zaguatito',
  }
  const snake: Snake = {
    poison: true,
  }
  const fish: Fish = {
    river: true
  }
  const petsAvailable = {
    dog,
    snake,
    fish,
  }
  return petsAvailable[typeOfPet] ?? petsAvailable.fish;
}

alert(getPet('dog'));

// const compose = R.pipe(getPet, alert);
// compose('fish');
