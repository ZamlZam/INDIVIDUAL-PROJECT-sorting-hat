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
const houseType1 = filter(Houses, 'dog');  
cardsOnDom(houseType1);
alert("click");

})
// 3. Add click event to filter all the pets whose favorite pet is dog on button click
showRavenclawButton.addEventListener('click', () => {
const houseType2 = filter(Houses, 'dog');
cardsOnDom(houseType2);
alert("click");

});

showHufflepuffButton.addEventListener('click', () => {
const houseType3 = filter(Houses, 'cat');
cardsOnDom(houseType3);
alert("click");

});

showGryffindorButton.addEventListener('click', () => {
const chickenAnimalType = filter(Houses, 'chicken');
cardsOnDom(chickenAnimalType);
alert("click chick");

});
