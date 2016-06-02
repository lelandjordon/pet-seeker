"use strict";

(function(){
  angular
  .module("pets")
  .controller("PetShowController", [
    "$stateParams",
    PetShowControllerFunction
  ]);

  PetShowControllerFunction.$inject = ["PetFactory", "$stateParams"];
  function PetShowControllerFunction(PetFactory, $stateParams) {
    var showVm = this;
    showVm.pet = PetFactory.get({id: $stateParams.id});

    showVm.update = function(){
      showVm.pet.$update({id: $stateParams.id});
    };

    showVm.delete = function(){
      showVm.pet.$delete({id: $stateParams.id});
    }
  };
  
})();




//  was in line 12
// this.pet = pets[$stateParams.id];
