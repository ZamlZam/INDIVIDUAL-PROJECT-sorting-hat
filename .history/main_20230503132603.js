const Houses=[{
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
renderToDom ("#userInput", domString);
}

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
  renderToDom ("#user-input", domString);    

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
    const index = Houses.findIndex(e => e.id === Number(id));
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
   h.addEventListener('sort', newUserObj);




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
  userInput                           ();
  newUser();
  expelCards();


};

init();
