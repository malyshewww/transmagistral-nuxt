<?php

// For development only (CORS issues)
header('Access-Control-Allow-Origin: *'); // For development only
header('Access-Control-Allow-Methods: GET, POST'); // For development only
header("Access-Control-Allow-Headers: origin, content-type, accept, x-requested-with"); // For development only

header('Content-Type: application/json; charset=utf-8');

$post_body = file_get_contents('php://input');
$post_body_decoded = json_decode($post_body, true);

$response_data = [
    'success' => true,
    'what_we_posted' => $post_body_decoded,
];

echo json_encode($response_data);
exit();