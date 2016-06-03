"use strict";

(function(){
  angular
  .module("pets")
  .controller("PetShowController", [
    "PetFactory",
    "$stateParams",
    PetShowControllerFunction
  ]);

  function PetShowControllerFunction(PetFactory, $stateParams){
    this.pet = PetFactory.get({id: $stateParams.id});
  }

})();


// PetShowControllerFunction.$inject = [PetFactory, "$stateParams"];
// function PetShowControllerFunction(PetFactory, $stateParams) {
//   var PetShowViewModel = this;
//   PetShowViewModel.pet = PetFactory.get({id: $stateParams.id});
//
//   PetShowViewModel.update = function(){
//     PetShowViewModel.pet.$update({id: $stateParams.id});
//   };
//
//   PetShowViewModel.delete = function(){
//     PetShowViewModel.pet.$delete({id: $stateParams.id});
//   }
// };


//  was in line 12
// this.pet = pets[$stateParams.id];
