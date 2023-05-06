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
       <div class="header">Welcome!</div>
       <div class="body">
       <h5 class="title"> Sorting Hat </h5>    
       <p>To continue, please press Sort</p>   <button class="btn btn-primary" id="sort">
       </button> 
       
       </div>`;
renderToDom ("#app", domString);
}

//user card
const userCards = (array) =>{
  let domString ="";

  domString += `<div class="card" style="width: 18rem;" >
      <img src=${user.imageUrl} class="card-img-top" alt=${user.name}>
       <h5 class="card-title">${user.house}</h5>
       <button class="btn btn-danger" id="expel--${user.id}">expel</button>
       </div>
      </div>`;
  
}

//expel
const expelCards = (array) =>{
  let domString ="";

  domString += `<div class="card" style="width: 18rem;" >
      <img src=${expel.imageUrl} class="card-img-top" alt=${expel.name}>
       <h5 class="card-title">${expel.house}</h5>
       <p> Expelled </p>
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
const houseType1 = filter(Houses, 'Slytherin');  
cardsOnDom(houseType1);
alert("click");

})
// 3. Add click event to filter  whose favorite pet is dog on button click
showRavenclawButton.addEventListener('click', () => {
const houseType2 = filter(Houses, 'Ravenclaw');
cardsOnDom(houseType2);
alert("click");

});

showHufflepuffButton.addEventListener('click', () => {
const houseType3 = filter(Houses, 'Hufflepuff');
cardsOnDom(houseType3);
alert("click");

});

showGryffindorButton.addEventListener('click', () => {
const houseType4 = filter(Houses, 'Gryffindor');
cardsOnDom(houseType4);
alert("click");

});
