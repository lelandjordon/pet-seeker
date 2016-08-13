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
      url:          "/pets",
      templateUrl:  "js/pets/index.html",
      controller:   "PetIndexController",
      controllerAs: "PetIndexViewModel"
    })
    .state("petNew", {
      url:          "/pets/new",
      templateUrl:  "js/pets/new.html",
      controller:   "PetNewController",
      controllerAs: "PetNewViewModel"
    })
    .state("petShow", {
      url:          "/pets/:id",
      templateUrl:  "js/pets/show.html",
      controller:   "PetShowController",
      controllerAs: "PetShowViewModel"
    })
    .state("petEdit", {
      url:          "/pets/:id/edit",
      templateUrl:  "js/pets/edit.html",
      controller:   "PetEditController",
      controllerAs: "PetEditViewModel"
    })
    .state("petHome", {
      url:          "/home",
      templateUrl:  "index.html"
      // controller:   "PetHomeController",
      // controllerAs: "PetHomeViewWodel"
    });
  }




})();
