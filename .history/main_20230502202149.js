const Houses=[{
  id: 1,
  name: "",
  house: 'Slytherin',
  
},

{
  id: 2,
  name:"",
  house: 'Ravenclaw',
  
},

{
id: 3,
name: "",
house: 'Hufflepuff',
imageUrl: ""
},

{
  id: 4,
  name: "",
  house: 'Gryffindor',
  
},

]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const start= ()=>{
   const domString = `<div class="card" style="width: 18rem;" >
       <div class="header">Welcome!</div>
       <div class="body">
       <h5 class="title"> Sorting Hat </h5>    
       <p>To continue, please press Sort</p>  
       <button class="btn btn-primary" id="sort"> SORT
       </button> 
       </div>`;
renderToDom ("#user-input", domString);
}

//New user card
const userCards = (array) =>{
  let domString ="";
for (user of array){ 
  domString += `<div class="card" style="width: 18rem;" >
      <div class="body">
      <h5 class="card-title">${user.house}</h5>
      <p class= "card-txt">${user.name}</p>
      <button class="btn btn-danger" id="expel--${user.id}">expel</button>
     </div>
     </div>`;
  renderToDom ("#newUser", domString);    
}
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
   renderToDom ("#expelled", domString);
  }
}


const sort= () =>{

  const random = Math.floor(Math.random() * 4) +1;
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
  const CSSLayerStatementRule = (e) => {
    e.preventDefault();  
       const newUserObj ={
       id: Houses.length +1,
       name: document.querySelector('#name').value,
       house: randomHouse,

       }
     
    Houses.push(newUserObj);
    cardsOnDom(Houses);
    form.reset();
    
    }
    form.addEventListener('', CSSLayerStatementRule);

    const app = document.querySelector("#app");
    
    app.addEventListener('click', (e) => {
      if (e.target.id.includes("delete")) {
        
        const [, id] = e.target.id.split("--");
    
 
        const index = pets.findIndex(e => e.id === Number(id));
    
       
        pets.splice(index, 1);
    
  
        cardsOnDom(pets);
      }
    });




























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
//  Add click event to filter  houses
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

const init = () => { 
  start();
  userCards();
  expelCards();


};

init();
