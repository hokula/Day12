var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo"
    },
    {
        animalType: "Cat",
        name: "Maca"
    },
    {
        animalType: "Bird",
        name: "Tweety"
    }
];

function myPetsFunction(pets) {
    var pets = myPetsArray[1].name;
    return pets;
}
console.log(myPetsFunction(myPetsArray));

module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;