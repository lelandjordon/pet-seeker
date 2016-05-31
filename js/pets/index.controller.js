"use strict";
console.log("index controller here");

(function(){
  angular
  .module("pets")
  .controller("PetIndexController", [
    PetIndexControllerFunction
  ]);

  function PetIndexControllerFunction(){
    this.pets = [
      {name: "These"},
      {name: "Are"},
      {name: "Hardcoded"},
      {name: "Pets"}
    ]
  }
}());
