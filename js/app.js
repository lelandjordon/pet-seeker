"use strict";

(function(){
  angular
  .module("petseeker", [
    "ui.router",
    "ngResource",
    "pets"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("petIndex", {
      url: "/pets",
      templateUrl: "js/pets/index.html",
      controller: "PetIndexController",
      controllerAs: "PetIndexViewModel"
    })
    .state("petShow", {
      url: "/pets/:id",
      templateUrl: "js/pets/show.html",
      controller: "PetShowController",
      controllerAs: "PetShowViewModel"
    });
  }




})();
