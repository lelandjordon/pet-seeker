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
    // for using remote API hosted at Heroku:
    return $resource("https://pet-seeker-api.herokuapp.com/pets/:id", {}, {
      update: {method: "PUT"}
    });
  }
})();




// for running locally:
// return $resource("http://localhost:3000/pets/:id", {}, {
