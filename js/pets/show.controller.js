"use strict";

(function(){
  angular
  .module("pets")
  .controller("PetShowController", [
    "$stateParams",
    PetShowControllerFunction
  ]);

  function PetShowControllerFunction($stateParams){
    this.pet = pets[$stateParams.id];
  }
})();
