var app = function(){

  addCat("Cup", "Handlebars");

};

var addCat = function(name, food){
  var catSection = document.querySelector("#cats");
  var cat = document.createElement("ul");
  var catName = document.createElement("li");
  catName.innerText = name;
  var catFood = document.createElement("li");
  catFood.innerText = food;
  var catPic = document.createElement("li");
  var catData = [];
  catData.push(catName, catFood, catPic);
  appendElements(catData, cat, catSection);
};

var appendElements = function(catData, cat, catSection)
{
  for(data of catData){
    cat.appendChild(data);
  }
  catSection.appendChild(cat);
};

window.onload = app;
