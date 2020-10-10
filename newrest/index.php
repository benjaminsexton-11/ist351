<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><?php echo "Ben's Restaurant" ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<?php require 'data.php'; ?>

<body>

    <h1>
        <?php echo "Ben's Restaurant" ?>
    </h1>
    <hr>

    <div id="menu">
        <h1 class="menuName">Food Menu</h1>
        <form action="report.php" class="listForm" name="listForm" method="POST">

            <table class="centerT">

                <tbody>
                    <tr>
                        <th>
                            Add to Order
                        </th>
                        <th>
                            Item
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                    <?php
                    foreach ($foods as $food) {
                    ?>
                        <tr>
                            <td>
                                <input type="checkbox" name="food[]" value='<?php echo json_encode($food) ?>'>
                            </td>
                            <td>
                                <?php echo $food->item ?>
                            </td>
                            <td>
                                <?php echo $food->description ?>
                            </td>
                            <td>
                                <?php echo "$" . $food->price ?>
                            </td>
                        </tr>
                    <?php
                    }
                    ?>
                </tbody>
            </table>

            <h1 class="menuName">Drink Menu</h1>
            <hr>
            <table class="centerD">

                <tbody>
                    <tr>
                        <th>
                            Add to Order
                        </th>
                        <th>
                            Item
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                    <?php
                    foreach ($drinks as $drink) {
                    ?>
                        <tr>
                            <td>
                                <input type="radio" name="drink" value='<?php echo json_encode($drink) ?>'>
                            </td>
                            <td>
                                <?php echo $drink->item ?>
                            </td>
                            <td>
                                <?php echo $drink->description ?>
                            </td>
                            <td>
                                <?php echo "$" . $drink->price ?>
                            </td>
                        </tr>
                    <?php
                    }
                    ?>
                </tbody>
            </table>

                <hr>
            <div class="submit">
                <button class="submit"> Place Order </button>
                <!-- <input id="total" value="$0.00" readonly="readonly" type="text" name="total" /> -->
            </div>
        </form>
        <!-- <script src="script.js"></script> -->

    </div>


</body>

</html>