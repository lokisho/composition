"use strict";
// Slide_8
// Typescript.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const R = __importStar(require("ramda"));
var typeOfPet;
(function (typeOfPet) {
    typeOfPet["dog"] = "dog";
    typeOfPet["snake"] = "snake";
    typeOfPet["fish"] = "fish";
})(typeOfPet || (typeOfPet = {}));
const alert = (dog) => console.log(dog.bark);
const getPet = (typeOfPet) => {
    var _a;
    const dog = {
        bark: 'guau',
        breed: 'zaguatito',
    };
    const snake = {
        poison: true,
    };
    const fish = {
        river: true
    };
    const petsAvailable = {
        dog,
        snake,
        fish,
    };
    return (_a = petsAvailable[typeOfPet]) !== null && _a !== void 0 ? _a : petsAvailable.fish;
};
const compose = R.pipe(getPet, alert);
compose('fish');
// const getFish = ():Fish => ({river: true});
// alert(getFish());
