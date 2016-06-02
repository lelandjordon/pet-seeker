"use strict";
console.log("index controller js loaded");

(function(){
  angular
  .module("pets")
  .controller("PetIndexController", [
    PetIndexControllerFunction
  ]);

  PetIndexController.$inject = ["PetFactory"];
  function PetIndexControllerFunction(PetFactory) {
    var indexVm = this;
    indexVm.pets = PetFactory.query();
    indexVm.newPet = new PetFactory();

    indexVm.create = function($state){
      indexVm.newPet.$save().then(function(res) {
        indexVm.pets.push(res)
      })
    };
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
