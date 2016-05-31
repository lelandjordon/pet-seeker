var postData ={
  "apikey":"enpWLQHe",
  "objectType":"animals",
  "objectAction":"publicSearch",
  "search":{
    "resultStart":"0",
    "resultLimit":"250",
    "resultSort":"animalHighlightOrder",
    "resultOrder":"asc",
    "fields":[
      "animalID",
      "animalName",
      "animalSummary",
      "animalBreed",
      "animalSex",
      "animalAgeString",
      "animalThumbnailUrl",
      "animalPictures",
      "animalOKWithKids",
      "animalOKWithCats",
      "animalOKWithDogs",
      "animalSpecialneeds",
      "animalLocationCitystate"
    ],
    "filters":[
      {
        "fieldName":"animalStatus",
        "operation":"equals",
        "criteria":"Available"
      }
    ]
  }
};

$.ajax({
  url: "https://api.rescuegroups.org/http/v4.json",
  method: 'POST',
  data: postData,
  headers: {}
  }).then(function(response) {
  console.log(response);
});
