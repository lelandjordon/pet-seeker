"use strict";

(function(){
  angular
  .module("pets")
  .factory("PetFactory", PetFactoryFunc)

  console.log("loaded pet factory js");

  PetFactoryFunc.$inject = ["$resource"];
  function PetFactoryFunc($resource) {
    // for running the API locally:
    return $resource("http://localhost:3000/pets/:id", {}, {
      update: {method: "PUT"}
    });
  }
})();

// for finding the API on Heroku:
// return $resource("https://pet-seeker-api.herokuapp.com/pets/:id", {}, {
