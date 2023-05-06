const students=[{
  id: 1,
  name: "Jack",
  house: 'Slytherin',
  
},

{
  id: 2,
  name:"Jackie",
  house: 'Ravenclaw',
  
},

{
id: 3,
name: "Cleo",
house: 'Hufflepuff',

},

{
  id: 4,
  name: "Nova",
  house: 'Gryffindor',
  
},

]




const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const userInput= ()=>{
   const domString = `<div class="card" style="width: 18rem;" >
       <div class="header">Welcome!</div>
       <div class="body">
       <h5 class="title"> Sorting Hat </h5>    
       <p>To continue, please press Sort</p>  
       <button class="btn btn-primary" id="sort"> SORT
       </button> 
       </div>`;
renderToDom ('#app', domString);
}

const app= document.querySelector('#app');
const voldamortArmy = [];

//New user card
const newUser = (array) =>{
  let domString ="";
for (user of array){ 
  domString += `<div class="card" style="width: 18rem;" >
      <div class="body">
      <h5 class="card-title">${user.house}</h5>
      <p class= "card-txt">${user.name}</p>
      <button class="btn btn-danger" id="expel--${user.id}">expel</button>
     </div>
     </div>`;
}
  renderToDom ('#app', domString);    

}

//expel
const expelCards = (array) =>{
  let domString ="";
  for (user of array) ()=> {
  domString += `<div class="card" style="width: 18rem;" >
      <div class="body">
      <h5 class="card-title">${user.name}</h5>
      <p class= "card-txt"> Voldamort's Army </p>
     </div>
     </div>`;
  }
   renderToDom ("#expelled", domString);
  
}

const sortExpel = document.querySelector(".btn-danger");
sortExpel.forEach((button) => {

button.addEventListener('click', (e) => {
    const studentId = parseInt (e.target.id.split("--")[1]);
    const index = students.findIndex((user) => user.id === studentId);
    const expelledUser =students.splice(index, 1)[0];
   
    voldamortArmy.pus
    expelCards(voldamortArmy);
    cardsOnDom(students);
  });
});


  
  const form = document.querySelector('form');

  const createUser = (e) =>{
    e.preventDefault();
    const houses = ['Slytherin', 'Ravenclaw', 'Hufflepuff', 'Gryffindor'];
    const random = Math.floor(Math.random() * 4);

     const newUserObj ={
      id: students.length +1,
      name: document.querySelector('#name').value,
      house: houses[houseIndex],

     }
     
    students.push(newUserObj);
    cardsOnDom(students);
    form.reset();
  }


   form.addEventListener('sort', newUserObj);



const allButton = document.querySelector('#all-btn');
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

const init = () => { 
  userInput();
  newUser();
  expelCards();


};

init();
