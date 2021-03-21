<?php

require "../../htdocs/includes/dbh.inc.php";

$p = $_POST["privateOrPublic"] ? "1" : "0";

$sql = "INSERT INTO `macro_market` (`type`, `name`, `author_uid`, `author`, `img`, `code`, `description`, `public`) VALUES ('".$_POST["type"]."', '".$_POST["name"]."', '".$_POST["author_uid"]."', '".$_POST["author"]."', '".$_POST["image"]."', '".$_POST["code"]."', '".$_POST["description"]."', '". $p ."')";

// echo print_r($_POST);
echo $sql;

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

echo "<br><br>";

echo print_r($_POST);