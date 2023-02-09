<?php

$url = __DIR__ . '/data.json';

$json_data = file_get_contents($url);

$discs = $json_data;

header('Content-type: application/json');
echo ($discs);
