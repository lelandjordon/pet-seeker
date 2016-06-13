"use strict";

(function(){
  angular
  .module("pets")
  .controller("PetShowController", PetShowControllerFunction);

  console.log("loaded show controller js");

  PetShowControllerFunction.$inject = ["PetFactory", "$stateParams"];
  function PetShowControllerFunction(PetFactory, $stateParams){
    this.pet = PetFactory.get({id: $stateParams.id});
  }

})();
