"use strict";
console.log("index controller js loaded");

(function(){
  angular
  .module("pets")
  .controller("PetIndexController", [
    "PetFactory",
    PetIndexControllerFunction
  ]);

  function PetIndexControllerFunction(PetFactory) {
    this.pets = PetFactory.query();
    // PetIndexViewModel.newPet = new PetFactory();

    // PetIndexViewModel.create = function($state){
      // PetIndexViewModel.newPet.$save().then(function(res) {
        // PetIndexViewModel.pets.push(res)
      // })
    // };
  }
}());



// this.pets = pets;
// this.newPet = {};
// this.create = function(){
//   pets.unshift(this.newPet);
//   this.newPet = {}
// }
// this.delete = function(id){
//   pet.splice(id, 1);
// }
