const Houses=[{
  id: 0,
  name: "",
  house: 'Slytherin',
},

{
  id: 1,
  name:"",
  house: 'Ravenclaw'
},

{
id: 2,
name: "",
house: 'Hufflepuff',
},

{
  id: 3,
  name: "",
  house: 'Gryffindor',
},

]
































const showSlytherinButton = document.querySelector("#one");
const showRavenclawButton = document.querySelector("#two");
const showHufflepuffButton = document.querySelector("#three");
const showGryffindorButton = document.querySelector("#four");


// 2. Add click event to show all the pets on button click using the function we created above
showSlytherinButton.addEventListener('click', () => {
cardsOnDom(Houses);
alert("button click");

})
// 3. Add click event to filter all the pets whose favorite pet is dog on button click
showRaveButton.addEventListener('click', () => {
const dogAnimalType = filter(Houses, 'dog');
cardsOnDom(dogAnimalType);
alert("click");

});

showCatButton.addEventListener('click', () => {
const catAnimalType = filter(Houses, 'cat');
cardsOnDom(catAnimalType);
alert("click cat");

});

showChickenButton.addEventListener('click', () => {
const chickenAnimalType = filter(pets, 'chicken');
cardsOnDom(chickenAnimalType);
alert("click chick");

});
