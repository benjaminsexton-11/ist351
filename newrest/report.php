<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><?php echo "Ben's Restaurant" ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<?php require 'data.php'; ?>

<?php
$picPosition = ["position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8", "position9", "position10", "position11", "position12", "position13", "position14", "position15", "position16", "position17", "position18", "position19", "position20"];

// print_r($_POST['drink']->image);
//   $foods = $$_POST[''] 
// print_r(array_sum($_POST['food']) + $_POST['drink']);

$foodSum = 0;
$drinkSum = 0;
if (isset($_POST['food'])) {
    foreach ($_POST['food'] as $foodItem) {
        // print_r(json_decode($foodItem,false)->price);
        $foodSum += json_decode($foodItem, false)->price;
    }
}

if (isset($_POST['drink'])) {
   
    $foodSum += json_decode($_POST['drink'], false)->price;
    
}
// if (isset($_POST['food']))
//    $drinkSum = $_POST['drink'];

$subTotal = $foodSum + $drinkSum;
$taxAmnt = round($subTotal * 0.07, 2);
$tipAmnt = round($subTotal * 0.22, 2);
$totalBill = round($subTotal * 1.22, 2);
?>


<body>

    <h1>
        <?php echo "Ben's Restaurant" ?>
    </h1>
    <hr>


    <div id="plate">
        <div class="dinner">
            <div class="imgRow">

                <embed src="music/music.mp3" loop="true" hidden="true" autostart="true" />
                <img src="img/SaladFork.gif" class="styleFork" alt="">
                <img src="img/Fork.gif" class="styleFork" alt="">
                <img src="img/Platter.jpg" class="stylePlate" alt="">
                <img src="img/Knife.gif" class="styleFork" alt="">
                <img src="img/Spoon.gif" class="styleFork" alt="">
                <img src="img/SoupSpoon.gif" class="styleFork" alt="">
                <!-- <div id="foods">
                </div> -->
                <?php
                if (isset($_POST['food'])) {
                    foreach ($_POST['food'] as $key => $foodItem) {
                        // print_r(json_decode($foodItem,false)->price);
                        $image = "img/" . json_decode($foodItem, false)->picture;
                        $className = "position" . ++$key;
                ?>
                        <img id='plate' src="<?php echo $image ?>" class="<?php echo $className ?>">
                <?php

                    }
                }
                ?>
                <!-- <div id="drink">

                </div> -->

                <?php
                if (isset($_POST['drink'])) {
                    $foodSum += json_decode($_POST['drink'], false)->price;
                    $drinkImage = "img/" . json_decode($_POST['drink'], false)->picture;
                ?>
                    <img id='plate' src="<?php echo $drinkImage ?>" class="drinkPostion">
                <?php
                }
                ?>
            </div>
            <div class="check" id="bill">
                <ol>
                    <li>
                        <p>
                            Bill
                        </p>
                    </li>
                    <?php 
                    if(isset($_POST['food']))
                    {
                        foreach($_POST['food'] as $foodItem)
                        {
                            ?>
                               <li>
                        <?php echo json_decode($foodItem, false)->item; ?>: <input type="text" size="2" id="preTax" value="<?php echo "$". json_decode($foodItem, false)->price; ?>">
                               </li>
                            <?php
                        }

                    }
                    ?>

                    <?php 
                    if(isset($_POST['drink']))
                    {
                        ?> 
                        <li>
                        <?php echo json_decode($_POST['drink'], false)->item; ?>: <input type="text" size="2" id="preTax" value="<?php echo "$". json_decode($_POST['drink'], false)->price; ?>">
                        </li>
                        <?php
                    }
                    ?>
                    <li>
                        Sub-Total: <input type="text" size="2" id="preTax" value="<?php echo "$". $subTotal ?>">
                    </li>
                    <li>
                        Tax: <input type="text" size="2" id="tax" value="<?php echo "$". $taxAmnt ?>">
                    </li>
                    <li>
                        Tip: <input type="text" size="2" id="Tip" value="<?php echo "$". $tipAmnt ?>">
                    </li>
                    <li>
                        Total: <input type="text" size="3" id="Total" value="<?php echo "$". $totalBill ?>">
                    </li>
                    <li>

                    </li>
                    <li>
                        <a style="margin-top:15px" class='btn' href="/Restaurant-Menu/">Next Customer</a>

                </ol>
            </div>
        </div>
    </div>



</body>

</html>