const Houses=[{
  id: 0,
  name: "",
  house: 'Slytherin',
  imageUrl: "https://e1.pxfuel.com/desktop-wallpaper/462/126/desktop-wallpaper-slytherin-logos-slytherin-college.jpg"
},

{
  id: 1,
  name:"",
  house: 'Ravenclaw',
  imageUrl: ""
},

{
id: 2,
name: "",
house: 'Hufflepuff',
imageUrl: ""
},

{
  id: 3,
  name: "",
  house: 'Gryffindor',
  imageUrl: ""
},

]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const start= ()=>{
   domString += `<div class="card" style="width: 18rem;" >
      <img src=${houses.imageUrl} class="card-img-top" alt=${houses.name}>
       <h5 class="card-title">${houses.house}</h5>
       <button class="submit<button class="btn btn-danger" id="expel--${houses.id}">expel</button> <button class="btn btn-danger" id="expel--${houses.id}">expel</button>

  

renderToDom ("#app", domString);
}

//user card
const userCards = (array) =>{
  let domString ="";

  domString += `<div class="card" style="width: 18rem;" >
      <img src=${houses.imageUrl} class="card-img-top" alt=${houses.name}>
       <h5 class="card-title">${houses.house}</h5>
       <button class="btn btn-danger" id="expel--${houses.id}">expel</button>
       </div>
      </div>`;
  
}

const createUser = (e) => {
e.preventDefault();

   const newUserObj ={
   id: Houses.length +1,
   name: document.querySelector('#name').value,
   imageUrl: document.querySelector('#image').value,
   type: document.querySelector('#type').value,
   }
 
Houses.push(newUserObj);
cardsOnDom(Houses);
form.reset();

}






























const showSlytherinButton = document.querySelector("#one");
const showRavenclawButton = document.querySelector("#two");
const showHufflepuffButton = document.querySelector("#three");
const showGryffindorButton = document.querySelector("#four");


//Add click event to show  on button click using the function we created above
showSlytherinButton.addEventListener('click', () => {
const houseType1 = filter(Houses, 'house');  
cardsOnDom(houseType1);
alert("click");

})
// 3. Add click event to filter  whose favorite pet is dog on button click
showRavenclawButton.addEventListener('click', () => {
const houseType2 = filter(Houses, 'house');
cardsOnDom(houseType2);
alert("click");

});

showHufflepuffButton.addEventListener('click', () => {
const houseType3 = filter(Houses, 'house');
cardsOnDom(houseType3);
alert("click");

});

showGryffindorButton.addEventListener('click', () => {
const houseType4 = filter(Houses, 'house');
cardsOnDom(houseType4);
alert("click");

});
