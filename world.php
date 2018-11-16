<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$country = $_GET['country'];


try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    die("Oh no! There's an error in the query!");
}



// $country = $_GET['country'];
// if ($country = "") {
//     $stmt = $conn->query("SELECT * FROM countries");
// } else {
//     $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE %$country%");
// }

// $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE %$country%");

// $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';