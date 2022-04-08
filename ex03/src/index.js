//
{
var myPetsArray = ["Dog", "Cat"];
var myNewPets = [];
var firstPet = [];
var lastPet = [];
myNewPets.push("Bird", "Fish");
myNewPets.unshift("Lion")
myNewPets.push("Cat")
firstPet = myNewPets[1];
lastPet = myNewPets[2];
myPets = myNewPets[3]

}

//

function myArrayFunction(myPets){
    return {myNewPets, firstPet, lastPet, myPetsArray};
}
console.log(myArrayFunction(myNewPets));
//
module.exports = myArrayFunction;