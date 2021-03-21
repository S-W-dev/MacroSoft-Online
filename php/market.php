
<?php

require "../htdocs/includes/dbh.inc.php";

$data = $conn->query("SELECT * FROM `macro_market` where `public` = 1");

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
        <button onclick="market.displayProducts(market.showItemsWhere({type: 0}));$$a('#menu1').forEach(elem => elem.style.display = 'none');">Macro File</button>
    </div>

    <div class="market-item-single">
        <button onclick="market.displayProducts(market.showItemsWhere({type: 1}));$$a('#menu1').forEach(elem => elem.style.display = 'none');">Macro Key</button>
    </div>

    <hr>

    <h3>Create</h3>

    <div class="market-item-single">
        <button onclick="setEditor(0);$$a('#createMenu').forEach(elem => elem.style.display = 'block');$$a('#menu1').forEach(elem => elem.style.display = 'none');">Create Preset</button>
    </div>

    <div>

        <hr>

        <h3>My Stuff</h3>
        <a id="openMyStuff" class="text-primary">View All</a>
        <div id="savedFiles">

        </div>

    </div>

</div>

<div class="menu" id="createMenu" style="display:none;">

    <hr>

    <h3>Create</h3>

    <br>

    <p id="instructions">Create Macro Preset</p>

    <div class="create-menu-content">
        <form action="php/create_key.php" method="POST">
            <input type="hidden" name="author">
            <input type="hidden" name="author_uid">
            <input type="hidden" name="image">
            <input type="hidden" name="type">
            <input type="hidden" name="code" id="code_box_create" value="">
            <label for="typeb">Preset Type</label>
            <select name="typeb" id="create_type">
                <option value="1">Macro Key</option>
                <option value="0">Macro File</option>
            </select>
            <br>
            <div id="keySelection-box">
                <label for="keySelection">Key Number</label>
                <input type="number" name="keySelection" min="1" id="keySelection" value="1">
            </div>
            <br>
            <label for="name">Preset Name</label>
            <input type="text" name="name" id="name">
            <br>
            <label for="description">Description</label>
            <textarea id="description" name="description"></textarea>
            <br>
            <label for="privateOrPublic">Public</label>
            <input type="checkbox" name="privateOrPublic" id="privateOrPublic" checked>
            <br>
            <input type="submit" id="submitButton" style="">Submit</input>
            <button type="button" id="selectButton" onclick="SubmitFormButton()">Submit</button>
            </form>
    </div>

</div>

<div class="menu" id="myStuff" style="display:none;">

    <hr>

    <h3>My Stuff</h3>

</div>


<button id="MainMenuButton" onclick="hideAll();$$a('#menu1').forEach(elem => elem.style.display = 'block');">Main Menu</button>

</div>