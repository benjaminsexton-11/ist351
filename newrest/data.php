<?php 
class Food {

    public $item, $description ,$price,$picture;
    public function __construct($item,$description,$price,$picture)
    {
        $this->item = $item;
        $this->description = $description;
        $this->price = $price;
        $this->picture = $picture;
    }
}
$foods=[];
$food1 = new Food('Asparagus','Fresh asparagus steamed with lemon and butter.','2.99','Asparagus.gif');
$food2 = new Food('Baked Potato ','Loaded Potato with everything!!','2.99','BakedPotatoe.gif');
$food3 = new Food('Broccoli','Steamed Broccoli.','2.99','Broccoli.gif');
$food4 = new Food('Carrots','Fresh cooked Carrots in a lemon glaze.','2.99','Carrots.gif');
$food5 = new Food('Chicken Fingers','Country Fried Chicken Fingers.','5.99','ChickenFingers.gif');
$food6 = new Food('Cordon Bleu','Famous the world over. Cordon Bleu contains chicken, ham, and swiss cheese.','9.99','CordonBleu.gif');
$food7 = new Food('French Fries','French Fried Potato snacks.','1.99','FrenchFries.gif');
$food8 = new Food('Green Beans','Fresh Green Beans cooked with a special sauce.','2.99','GreenBeans.gif');
$food9 = new Food('Hamburger','Home Cooked Hamburger: anyway you like it!!','5.99','Hamburger.gif');
$food10 = new Food('Lasagna','Old Italian recipe: Lasagna cooked by our famous chef.','9.99','Lasagna.gif');
$food11 = new Food('Peas','Garden Peas cooked to perfection.','2.99','Peas.gif');
$food12 = new Food('Salad','Tossed Green Salad with garden fresh tomatos and our famous house dressing.','3.99','Salad.gif');
$food13 = new Food('Vegetable Delight','Straight from the Orient. Wok cooked vegetables with a tantilizing sauce from China.','8.99','VegetableDelight.gif');
$food14 = new Food('Stir Fry','Another savory dish from the Orient.','8.99','StirFry.gif');
$food15 = new Food('T-Bone Steak','Cooked over our Hickory Fireplace, this steak will melt in your mouth!','12.99','TboneSteak.gif');
$food16 = new Food('Sweet Potatoes','Fresh cooked sweet potatoes in a sweet glaze.','3.99','SweetPotatoes.gif');
$food17 = new Food('Fried Chicken','Southern Fried Chicken: the way you like it.','8.99','FriedChicken.gif'); 
array_push($foods ,$food1,$food2,$food3,$food4,$food5,$food6,$food7,$food8,$food9,$food10,$food11,$food12,$food13,$food14,$food15,$food16,$food17);




class Drink {

    public $item, $description ,$price,$picture;
    public function __construct($item,$description,$price,$picture)
    {
        $this->item = $item;
        $this->description = $description;
        $this->price = $price;
        $this->picture = $picture;
    }
}
$drinks=[];
$drink = new Drink('Wonderful Water','Ice cold water straight from Atarctica','1.56','water.png');
$drink1 = new Drink('Crazy Cola','Dark and Carbonated Cola','3.99','coke.png');
$drink2 = new Drink('Super Sprite','Light and Refreshing','2.24','sprite.png');
$drink3 = new Drink('Sweet Tea','Sweetest sweet tea you could imagine.','4.99','sweettea.png');
array_push($drinks ,$drink , $drink1, $drink2 ,$drink3);

?>