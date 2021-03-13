<link rel="stylesheet" href="css/market.css">
<script src="js/market.js"></script>

<?php

require "../htdocs/includes/dbh.inc.php";

$data = $conn->query("SELECT * FROM `macro_market`");

?>

<script defer>

<?php
    while ($row = $data->fetch_assoc()) {
        echo "market.addProduct(new Product(".json_encode($row)."));";
    }
?>

</script>

<div class="marketplace">

<hr>

<div class="menu" id="menu1">

    <h3>Find</h3>

    <div class="market-item-single">
        <button onclick="market.displayProducts(market.showItemsWhere({type: 0}));$$('#menu1').style.display = 'none';">Macro File</button>
    </div>

    <div class="market-item-single">
        <button onclick="market.displayProducts(market.showItemsWhere({type: 1}));$$('#menu1').style.display = 'none';">Macro Key</button>
    </div>

    <!-- <hr>

    <h3>Create</h3>

    <div class="market-item-single">
        <button onclick="$$('#createMenu').style.display='block';$$('#menu1').style.display = 'none';">Macro File</button>
    </div>

    <div class="market-item-single">
        <button onclick="$$('#createMenu').style.display='block';$$('#menu1').style.display = 'none';">Macro Key</button>
    </div>

    <div>

        <hr>

        <h3>My Stuff</h3>
        <a id="openMyStuff" class="text-primary">View All</a>
        <div id="savedFiles">

        </div>

    </div> -->

</div>

<!-- <div class="menu" id="createMenu" style="display:none;">

    <hr>

    <h3>Create</h3>

</div>

<div class="menu" id="myStuff" style="display:none;">

    <hr>

    <h3>My Stuff</h3>

</div> -->


<button id="MainMenuButton" onclick="hideAll();$$('#menu1').style.display = 'block';">Main Menu</button>

</div>