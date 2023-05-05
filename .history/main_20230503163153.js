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
      <p class= "card-txt"> EXPELLED </p>
     </div>
     </div>`;
  }
   renderToDom ("#expelled", domString);
  
}

const sortExpel = document.querySelector("#newUser");

sortExpel.addEventListener('click', (e) => {
     
    const [, id] = e.target.id.split("--");
    const index = students.findIndex(e => e.id === Number(id));
    Houses.splice(index, 1);


    expelCards(expelled);
  });


const sortHouse= () =>{

  const random = Math.floor(Math.random() * 4);
  let randomHouse="";

  switch (random){
    case 1:
      randomHouse = "Slytherin";
      break;
    case 2:
       randomHouse = "Ravenclaw";
       break;
    case 3:
      randomHouse ="Hufflepuff";
      break;
    case 4:
      randomHouse = "Gryffindor";
      break;

  } 
  
  const form = 
   const newUserObj ={
      id: Houses.length +1,
      name: document.querySelector('#user-input').value,
      house: randomHouse,

     }
     
    Houses.push(newUserObj);
    cardsOnDom(Houses);
    form.reset();
  }

//form???
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
