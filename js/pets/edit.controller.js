"use strict";

(function(){
  angular
  .module("pets")
  .controller("PetEditController", [
    "PetFactory",
    "$stateParams",
    PetEditControllerFunction
  ]);

  function PetEditControllerFunction( PetFactory, $stateParams ){
    this.pet = PetFactory.get({id: $stateParams.id});
    this.update = function(){
      this.pet.$update({id: $stateParams.id})
    }
    this.destroy = function(){
      this.pet.$delete({id: $stateParams.id});
    }
  }
})();
