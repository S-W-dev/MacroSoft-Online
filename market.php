<link rel="stylesheet" href="market.css">
<script src="market.js"></script>

<?php

require "../includes/dbh.inc.php";

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

<div id="menu1">

    <div class="market-item-single">
        <button onclick="market.displayProducts(market.showItemsWhere({type: 0}));$$('#menu1').style.display = 'none';">Macro File</button>
    </div>

    <div class="market-item-single">
        <button onclick="market.displayProducts(market.showItemsWhere({type: 1}));$$('#menu1').style.display = 'none';">Macro Key</button>
    </div>

</div>

</div>