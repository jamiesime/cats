var app = function(){

  addCat("Cup", "Handlebars");
  addCat("Bingo", "Puzzle pieces");
  addCat("Horace", "Chicken");
  addCat("Arnold", "Photo albums");

};

var addCat = function(name, food){
  var catSection = document.querySelector("#cats");
  var cat = document.createElement("ul");
  var catName = document.createElement("li");
  catName.innerText = "Name: " + name;
  var catFood = document.createElement("li");
  catFood.innerText = "Favourite Food: " + food;
  var catPic = document.createElement("li");
  catPic.innerHTML = "<img width='500' src='https://vignette3.wikia.nocookie.net/ichc-channel/images/e/e1/Scratch_Cat_Sprite.png/revision/latest?cb=20160403142153'></img>"
  var catData = [];
  catData.push(catName, catFood, catPic);
  appendElements(catData, cat, catSection);
};

var appendElements = function(catData, cat, catSection)
{
  for(data of catData){
    cat.appendChild(data);
    data.classList.add('catInfo');
  }
  catSection.appendChild(cat);
};

window.onload = app;
