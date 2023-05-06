const students=[{
  id: 1,
  name: "Jack",
  house: 'Slytherin',
  imgUrl: "https://i.redd.it/u9cf6xf035cy.jpg",
  expel:false
},

{
  id: 2,
  name:"Jackie",
  house: 'Ravenclaw',
  imgUrl: "https://pm1.narvii.com/6405/f09fad389809a6e524e08eca931af9a51049495b_hq.jpg",
  expel:false
},

{
id: 3,
name: "Cleo",
house: 'Hufflepuff',
imgUrl: "https://wallpapercave.com/wp/wp1958769.jpg",
expel:false

},

{
  id: 4,
  name: "Nova",
  house: 'Gryffindor',
  imgUrl: "https://th.bing.com/th/id/R.8c5fe6b380bee9a4ceb8b17a65e3e0fb?rik=S%2bz98%2f4opozFtQ&pid=ImgRaw&r=0",
  expel:false  
},

]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


const filter =(array, typeString)=> {
  const housesArray=[];

  for (const user of array){
    if(user.house === typeString){
      housesArray.push(user);
    }
  }
  return housesArray;
}

const allButton = document.querySelector('#all');
const showSlytherinButton = document.querySelector("#one");
const showRavenclawButton = document.querySelector("#two");
const showHufflepuffButton = document.querySelector("#three");
const showGryffindorButton = document.querySelector("#four");

allButton.addEventListener('click', () => {
  cardsOnDom(students);
});

//Add click event to show  on button click using the function we created above
showSlytherinButton.addEventListener('click', () => {
const houseType1 = filter(students, 'Slytherin');  
cardsOnDom(houseType1);
alert("click");

})
//  Add click event to filter  students
showRavenclawButton.addEventListener('click', () => {
const houseType2 = filter(students, 'Ravenclaw');
cardsOnDom(houseType2);
alert("click");

});

showHufflepuffButton.addEventListener('click', () => {
const houseType3 = filter(students, 'Hufflepuff');
cardsOnDom(houseType3);
alert("click");

});

showGryffindorButton.addEventListener('click', () => {
const houseType4 = filter(students, 'Gryffindor');
cardsOnDom(houseType4);
alert("click");

});
const form = document.querySelector('form');

const createUser = (e) =>{
  e.preventDefault();
  const houses = ['Slytherin', 'Ravenclaw', 'Hufflepuff', 'Gryffindor'];
  const random = Math.floor(Math.random() * 4);

   const newUserObj ={
    id: students.length +1,
    name: document.querySelector('#name').value,
    house: houses[random],
    imgUrl: "https://wallpapercave.com/wp/wp2182833.jpg"

   }
   
  students.push(newUserObj);
  cardsOnDom(students);
  form.reset();
}

form.addEventListener('sort', createUser);

   const app= document.querySelector('#app');

   const voldamortArmy = [];


//New user card
const cardsOnDom = (array) =>{
  let domString ="";
for (const user of array){ 
  domString += `<div class="card" id="user-card" style="width: 18rem;" >
      <div class="body">
      <img class="card-img-top" src="${user.imageUrl}" alt="Card image cap">
      <h5 class="card-title">${user.house}</h5>
      <p class= "card-txt">${user.name}</p>
      <button class="btn btn-danger" id="expel--${user.id}">expel</button>
     </div>
     </div>`;
}
  renderToDom ('#app', domString);    



const sortExpel = document.querySelectorAll(".btn-danger");
sortExpel.forEach((button) => {

button.addEventListener('click', (e) => {
    const studentId = parseInt (e.target.id.split("--")[1]);
    const index = students.findIndex((user) => user.id === studentId);
    const expelledUser =students.splice(index, 1)[0];
   
    voldamortArmy.push(expelledUser);
    expelCards(voldamortArmy);
    cardsOnDom(students);
  });
});
};

//expel
const expelCards = (array) =>{
  let domString ="";
  for (const user of array) ()=> {
    domString+= `<div class="card" id="badie-card" style="width: 18rem;" >
    <img class ="card-img-top" src="${user.imgUrl}" alt="card image cap">
      <div class="body">
      <h5 class="card-title">${user.name}</h5>
      <p class= "card-txt"> Voldamort's Army </p>
     </div>
     </div>`;
  }
   renderToDom ("#expelled", domString);
  
}
  
// const init = () => { 
  
//   newUser();
//   expelCards();


// };

// init();
