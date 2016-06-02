"use strict";

(function(){
  angular
  .module("pets")
  .factory("PetFactory", PetFactoryFunc);

  PetFactoryFunc.$inject = ["$resource"];
  function PetFactoryFunc($resource) {
    return $resource("http://localhost:3000/pets/:id", {}, {
      update: {method: "PUT"}
    });
  }
})();
