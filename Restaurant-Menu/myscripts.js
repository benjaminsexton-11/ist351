
var ItemName = new Array("Asparagus","Baked Potato","Broccoli","Carrots","Chicken Fingers","Cordon Bleu","French Fries","Green Beans","Hamburger","Lasagna","Peas","Salad","Vegetable Delight","Stir Fry","T-Bone Steak","Sweet Potatoes","Fried Chicken");
var ItemDescription = new Array("Fresh asparagus steamed with lemon and butter.",
"Loaded Potato with everything!!",
"Steamed Broccoli.",
"Fresh cooked Carrots in a lemon glaze.",
"Country Fried Chicken Fingers.",
"Famous the world over. Cordon Bleu contains chicken, ham, and swiss cheese.",
"French Fried Potato snacks.",
"Fresh Green Beans cooked with a special sauce.",
"Home Cooked Hamburger: anyway you like it!!",
"Old Italian recipe: Lasagna cooked by our famous chef.",
"Garden Peas cooked to perfection.",
"Tossed Green Salad with garden fresh tomatos and our famous house dressing.",
"Straight from the Orient. Wok cooked vegetables with a tantilizing sauce from China.",
"Another savory dish from the Orient.",
"Cooked over our Hickory Fireplace, this steak will melt in your mouth!",
"Fresh cooked sweet potatoes in a sweet glaze.",
"Southern Fried Chicken: the way you like it.");
var ItemPrice = new Array(2.99,2.99,2.99,2.99,5.99,9.99,1.99,2.99,5.99,9.99,2.99,3.99,8.99,8.99,12.99,3.99,8.99);
var ItemPic = new Array("Asparagus.gif","BakedPotatoe.gif","Broccoli.gif","Carrots.gif","ChickenFingers.gif","CordonBleu.gif","FrenchFries.gif","GreenBeans.gif","Hamburger.gif","Lasagna.gif","Peas.gif","Salad.gif","VegetableDelight.gif","StirFry.gif","TboneSteak.gif","SweetPotatoes.gif","FriedChicken.gif");

function createH1Element(text) 
{
    var h = document.createElement("H1");
    var t = document.createTextNode(text); 
    h.appendChild(t); 
    document.body.appendChild(h);
} 



function createCheckbox(){  
    var myDiv = document.getElementById("GFG");  
      
    // creating button element  
    var button = document.createElement('BUTTON');  
      
    // creating text to be 
    //displayed on button 
    var text = document.createTextNode("Button"); 
      
    // appending text to button 
    button.appendChild(text); 
      
    // appending button to div 
    myDiv.appendChild(button); ;  
}  

let foods = [
    {Dish: "Asparagus", Description: "Fresh asparagus steamed with lemon and butter.", Price: 2.99},
    {Dish: "Baked Potato", Description: "Loaded Potato with everything!!", Price: 2.99},
    {Dish: "Broccoli", Description: "Steamed Broccoli.", Price: 2.99},
    {Dish: "Carrons", Description: "Fresh cooked Carrots in a lemon glaze.", Price: 2.99},
    {Dish: "Chicken Fingers", Description: "Country Fried Chicken Fingers.", Price: 5.99},
    {Dish: "Cordon Blue", Description: "Famous the world over. Cordon Bleu contains chicken, ham, and swiss cheese.", Price: 9.99},
    {Dish: "French Fries", Description: "French Fried Potato snacks.", Price: 1.99},
    {Dish: "Green Beans", Description: "Fresh Green Beans cooked with a special sauce.", Price: 2.99},
    {Dish: "Hamburger", Description: "Home Cooked Hamburger: anyway you like it!!", Price: 5.99},
    {Dish: "Lasagna", Description: "Old Italian recipe: Lasagna cooked by our famous chef.", Price: 9.99},
    {Dish: "Peas", Description: "Garden Peas cooked to perfection.", Price: 2.99},
    {Dish: "Salad", Description: "Tossed Green Salad with garden fresh tomatos and our famous house dressing.", Price: 3.99},
    {Dish: "Vegetable Delight", Description: "Straight from the Orient. Wok cooked vegetables with a tantilizing sauce from China.", Price: 8.99},
    {Dish: "Stir Fry", Description: "Another savory dish from the Orient.", Price: 8.99},
    {Dish: "T Bone", Description: "Cooked over our Hickory Fireplace, this steak will melt in your mouth!", Price: 12.99},
    {Dish: "Sweet Potatoes", Description: "Fresh cooked sweet potatoes in a sweet glaze.", Price: 3.99},
    {Dish: "Fried Chicken", Description: "Southern Fried Chicke: the way you like it.", Price: 8.99},
];
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);

    }
  }
}
  createH1Element("First H1");

let table = document.querySelector("table");
let data = Object.keys(foods[0]);
  createH1Element("First H1");

generateTableHead(table, data);
generateTable(table, foods);


/*
for (var i in ItemName) 
{
   document.write("<br>");
   for (var j in ItemName[i]) 
     {
      var element = document.getElementById("items");
      element.innerHTML = ItemPrice;
     }
}

document.write("<br>");

for (var i in ItemDescription) 
{
   document.write("<br>");
   for (var j in ItemDescription[i]) 
     {
      document.write(ItemDescription[i][j]);
     }
}
*/
