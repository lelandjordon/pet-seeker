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
      this.pet = new PetFactory();
      this.create = function(){
        this.pet.$save()
      }
    }
}());
