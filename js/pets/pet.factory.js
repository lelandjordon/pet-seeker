"use strict";

(function(){
  angular
  .module("pets")
  .factory("PetFactory", PetFactoryFunc)

  console.log("loaded pet factory js");

  PetFactoryFunc.$inject = ["$resource"];
  function PetFactoryFunc($resource) {
    // for using remote API hosted at Heroku:
    return $resource("https://pet-seeker-api.herokuapp.com/pets/:id", {}, {
      update: {method: "PUT"}
    });
  }
})();


// for running locally:
// return $resource("https://pet-seeker-api.herokuapp.com/pets/:id", {}, {
