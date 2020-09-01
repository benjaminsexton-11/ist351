
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


//Drink Details and Arrays.
var DrinkItem = new Array("Wonderful Water","Crazy Cola","Super Sprite","Sweet Tea");
var DrinkDescription = new Array("Ice cold water straight from Atarctica","Dark and Carbonated Cola","Light and Refreshing","Sweetest sweet tea you could imagine.");
var DrinkPrices = new Array(1.56,3.99,2.24,4.99);
var DrinkPicture = new Array("water.png","coke.png","sprite.png","sweettea.png");

//variables to grab length of arrays
  //foods
var dish = ItemName.length;
var desc = ItemDescription.length;
var price = ItemPrice.length;
var pic = ItemPic.length;
  //drinks
var drink = DrinkItem.length;
var drinkDesc = DrinkDescription.length;
var drinkPrice = DrinkPrices.length;
var drinkPic = DrinkPicture.length;


//function to create HTML CheckBox
function createNewCheckbox(){
    document.write("<input type=checkbox value="+ ItemPrice[i]+" "+"onchange=preTotalIt() name=product id="+ItemPic[i]+">");
    return "";
}
//onchange=totalIt() 
document.write("<h1 class=menuName>Food Menu</h1>")
document.write("<form class=listForm name=listForm>");
document.write("<table class=centerT>");
document.write("<tr><th>Add to Order</th><th>Item</th><th>Description</th><th>Price</th>");

//for Loop to create table of food

for(var i = 0; i < dish; i++){
	document.write("<tr>");
	document.write("<td>");
	document.write(createNewCheckbox());
	document.write("</td>");
	document.write("<td>");
	document.write(ItemName[i] + " ");
	document.write("</td>");
	document.write("<td>");
	document.write(ItemDescription[i]);
	document.write("</td>");
	document.write("<td>");
	document.write("$" +ItemPrice[i]);
	document.write("</td>");
	document.write("</tr>");

}
document.write("</table>");

document.write("</form> <hr>");

document.write("<h1 class=menuName>Drink Menu</h1><hr>");
document.write("<form class=listForm name=listForm>");
document.write("<table class=centerD>");
document.write("<tr><th>Add to Order</th><th>Item</th><th>Description</th><th>Price</th>");

for(var i = 0; i < drink; i++){
  document.write("<tr>");
  document.write("<td>");
  document.write(createNewRadio());
  document.write("</td>");
  document.write("<td>");
  document.write(DrinkItem[i] + " ");
  document.write("</td>");
  document.write("<td>");
  document.write(DrinkDescription[i]);
  document.write("</td>");
  document.write("<td>");
  document.write("$" +DrinkPrices[i]);
  document.write("</td>");
  document.write("</tr>");
}
document.write("</table>");

document.write("</form> <hr>");

//function to create radio buttons
  function createNewRadio(){
    document.write("<input type=radio id="+DrinkItem[i]+" name=drink value="+DrinkPrices[i]+" onchange=preTotalIt()>");
    return "";
  }




//function to get pre-total
function preTotalIt() {
  var foodinput = document.getElementsByName("product");
  var Foodtotal = 0;
  for (var i = 0; i < foodinput.length; i++) {
    if (foodinput[i].checked) {
      Foodtotal += parseFloat(foodinput[i].value);
    }
  }
  var drinkInput = document.getElementsByName("drink");
  var DrinkTotal = 0;
  for (var i = 0; i < drinkInput.length; i++) {
    if (drinkInput[i].checked) {
      DrinkTotal += parseFloat(drinkInput[i].value);
    }
  }
  var total = DrinkTotal + Foodtotal;
  //Printing bill values
  document.getElementById("total").value = "$" + total.toFixed(2);
}


//function to get order total
function totalIt() {
  var foodinput = document.getElementsByName("product");
  var Foodtotal = 0;
  for (var i = 0; i < foodinput.length; i++) {
    if (foodinput[i].checked) {
      Foodtotal += parseFloat(foodinput[i].value);
      showFoods([i]);
    }
  }
  //This chunk of code gets the price of the selected drink
  var drinkInput = document.getElementsByName("drink");
  var DrinkTotal = 0;
  for (var i = 0; i < drinkInput.length; i++) {
    if (drinkInput[i].checked) {
      DrinkTotal += parseFloat(drinkInput[i].value);
      showDrink([i]);
    }
  }
  var total = DrinkTotal + Foodtotal;
  //Math for Bill
  var taxAmnt = total.toFixed(2) * .07;
  var tipAmnt = total.toFixed(2) * .22;
  var totalBill = total.toFixed(2) * 1.22;

  //Printing bill values
  document.getElementById("total").value = "$" + total.toFixed(2);
  document.getElementById("preTax").value = "$" + total.toFixed(2);
  document.getElementById("tax").value = "$" + taxAmnt.toFixed(2);
  document.getElementById("Tip").value = "$" + tipAmnt.toFixed(2);
  document.getElementById("Total").value = "$" + totalBill.toFixed(2);
}

//function to hide menu
function hideMenu() {
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//function to show plate
function showPlate() {
  var x = document.getElementById("plate");
  x.style.display = "block";
  //function to show food items
  playAudio();
}
var count = 0;
//Here I will show foods on the plate when ordered
function showFoods([i]){
	var foodImg = ItemPic[i];
  count = count + 1;
  var picPosition = ["position1","position2","position3","position4","position5","position6","position7","position8","position9","position10","position11","position12","position13","position14","position15","position16","position17","position18","position19","position20"];
  document.getElementById("foods").innerHTML+="<img id=plate src=C:/Users/ben/Documents/Fall-2020/Server-Side/Restaurant-Menu/img/"+foodImg+" "+"id=fooditem"+[i]+" "+"class="+picPosition[count]+">";

}
//Here is where the drink will be displayed
function showDrink([i]){
  var drinkImg = DrinkPicture[i];
  document.getElementById("drink").innerHTML+="<img id=plate src=C:/Users/ben/Documents/Fall-2020/Server-Side/Restaurant-Menu/img/"+drinkImg+" "+"id=drinkItem"+[i]+" "+"class=drinkPostion>";
}
//function to play audio
function playAudio(){
  document.getElementById("music").innerHTML+="<embed name=DinnerMusic src=C:/Users/ben/Documents/Fall-2020/Server-Side/Restaurant-Menu/music/music.mp3 loop=true hidden=true autostart=true>";
}


//Adding list Items based on what is ordered for the check

//function addLi(i){
//    var foodCheck = ItemName[i];
//    console.log(foodCheck);
//}