<?php
header('Content-Type: application/json');

$dataFile = 'js/';

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
    echo json_encode(['success' => false, 'error' => 'Please fill required fields']);
    exit;
}

$contact = [
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'subject' => $subject,
    'message' => $message,
    'date' => date('Y-m-d H:i:s')
];

if (file_exists($dataFile)) {
    $json = file_get_contents($dataFile);
    $contacts = json_decode($json, true);
    if (!is_array($contacts)) $contacts = [];
} else {
    $contacts = [];
}

$contacts[] = $contact;

if (file_put_contents($dataFile, json_encode($contacts, JSON_PRETTY_PRINT))) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    echo json_encode(['success' => false, 'error' => 'Failed to save data']);
}
