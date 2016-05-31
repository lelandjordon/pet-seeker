"use strict";
console.log("index controller js loaded");

(function(){
  angular
  .module("pets")
  .controller("PetIndexController", [
    PetIndexControllerFunction
  ]);

  function PetIndexControllerFunction(){
    this.pets = pets;
    this.newPet = {};
    this.create = function(){
      pets.unshift(this.newPet);
      this.newPet = {}
    }
    this.delete = function(id){
      pet.splice(id, 1);
    }
  }
}());








// this.pets = [
//   {name: "These"},
//   {name: "Are"},
//   {name: "Hardcoded"},
//   {name: "Pets"}
// ]
