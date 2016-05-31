"use strict";

(function(){
  angular
  .module("petseeker", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("petIndex", {
      url: "/pets",
      templateUrl: "js/pets/index.html"
    })
    .state("petShow", {
      url: "/pets/:id",
      templateUrl: "js/pets/show.html"
    });
  }




})();
