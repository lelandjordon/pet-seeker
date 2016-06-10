"use strict";

(function(){
  angular
  .module("pets")
  .factory("PetFactory", [
    "$resource",
    PetFactoryFunc
  ])

  PetFactoryFunc.$inject = ["$resource"];
  function PetFactoryFunc($resource) {
    return $resource("http://localhost:3000/pets/:id", {}, {
      update: {method: "PUT"}
    });
  }
})();


// for running locally:
// return $resource("https://pet-seeker-api.herokuapp.com/pets/:id", {}, {
