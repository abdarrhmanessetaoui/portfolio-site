<?php
header('Content-Type: application/json');

$dataFile = '../js/contacts.json'; // Adjust path based on your project structure

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

if (!$name || !$email || !$message) {
  echo json_encode(['success' => false, 'error' => 'Please fill all required fields.']);
  exit;
}

$entry = [
  'name' => $name,
  'email' => $email,
  'phone' => $phone,
  'subject' => $subject,
  'message' => $message,
  'date' => date('Y-m-d H:i:s')
];

if (!file_exists($dataFile)) {
  file_put_contents($dataFile, json_encode([]));
}

$data = json_decode(file_get_contents($dataFile), true);
$data[] = $entry;

if (file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT))) {
  echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
  echo json_encode(['success' => false, 'error' => 'Failed to save your message.']);
}
