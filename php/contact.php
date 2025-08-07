
<?php

header("Content-Type: application/json");

$dataFile ="../js/contacts.json";

if (isset($_POST["name"])) {
    $name = trim($_POST["name"]);
} else {
    $name = "";
}

if (isset($_POST["email"])) {
    $email = trim($_POST["email"]);
} else {
    $email = "";
}

if (isset($_POST["phone"])) {
    $phone = trim($_POST["phone"]);
} else {
    $phone = "";
}

if (isset($_POST["subject"])) {
    $subject = trim($_POST["subject"]);
} else {
    $subject = "";
}

if (isset($_POST["message"])) {
    $message = trim($_POST["message"]);
} else {
    $message = "";
}

if ($name === "" || $email === "" || $message === "") {
    $response = array();
    $response["success"] = false;
    $response["error"] = "Please fill all required fields.";
    echo json_encode($response);
    exit;
}

$entry = array();
$entry["name"] = $name;
$entry["email"] = $email;
$entry["phone"] = $phone;
$entry["subject"] = $subject;
$entry["message"] = $message;
$entry["date"] = date("Y-m-d H:i:s");

if (!file_exists($dataFile)) {
    $emptyArray = array();
    $emptyJson = json_encode($emptyArray);
    file_put_contents($dataFile, $emptyJson);
}

$jsonContent = file_get_contents($dataFile);
$dataArray = json_decode($jsonContent, true);

if (!is_array($dataArray)) {
    $dataArray = array();
}

$dataArray[] = $entry;

$finalJson = json_encode($dataArray, JSON_PRETTY_PRINT);
$saveResult = file_put_contents($dataFile, $finalJson);

if ($saveResult !== false) {
    $response = array();
    $response["success"] = true;
    $response["message"] = "Message sent successfully!";
    echo json_encode($response);
} else {
    $response = array();
    $response["success"] = false;
    $response["error"] = "Failed to save your message.";
    echo json_encode($response);
}

?>

