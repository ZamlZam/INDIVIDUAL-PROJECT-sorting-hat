const user=[{
  id: 0,
  name: "",
},

{
  id: 1,
  name:"",
}]
































const showAllButton = document.querySelector("#one");
const showDogButton = document.querySelector("#two");
const showCatButton = document.querySelector("#three");
const showCatButton = document.querySelector("#three");
const showChickenButton = document.querySelector("#chicken");

// 2. Add click event to show all the pets on button click using the function we created above
showAllButton.addEventListener('click', () => {
cardsOnDom(pets);
alert("button click");

})
// 3. Add click event to filter all the pets whose favorite pet is dog on button click
showDogButton.addEventListener('click', () => {
const dogAnimalType = filter(pets, 'dog');
cardsOnDom(dogAnimalType);
alert("click");

});

showCatButton.addEventListener('click', () => {
const catAnimalType = filter(pets, 'cat');
cardsOnDom(catAnimalType);
alert("click cat");

});

showChickenButton.addEventListener('click', () => {
const chickenAnimalType = filter(pets, 'chicken');
cardsOnDom(chickenAnimalType);
alert("click chick");

});
