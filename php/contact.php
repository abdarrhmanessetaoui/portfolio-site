<?php
$file = 'contacts.json';
$data = [
    'name' => $_POST['name'] ?? '',
    'email' => $_POST['email'] ?? '',
    'phone' => $_POST['phone'] ?? '',
    'subject' => $_POST['subject'] ?? '',
    'message' => $_POST['message'] ?? '',
    'date' => date('Y-m-d H:i:s')
];
$contacts = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
if (!is_array($contacts)) $contacts = [];
$contacts[] = $data;
file_put_contents($file, json_encode($contacts, JSON_PRETTY_PRINT));
echo "Message saved! Thank you for contacting.";
?>
