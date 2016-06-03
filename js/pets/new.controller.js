"use strict";

(function(){
  angular
    .module( "pets" )
    .controller( "PetNewController", [
      "PetFactory",
      "$stateParams",
      PetNewControllerFunction
    ])

    function PetNewControllerFunction( PetFactory, $stateParams ){
      var PetNewViewModel = this;
      PetNewViewModel.pet = new PetFactory();
      PetNewViewModel.create = function(){
        console.log(PetNewViewModel.pet)
        PetNewViewModel.pet.$save()
      }
    }
}());
