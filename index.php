<?php
$url = __DIR__ . '/data.json';

$json_data = file_get_contents($url);
$discs = json_decode($json_data, true);

$genre = $_GET['genre'] ?? '';

if (!empty($genre)) {

    $searched_genre = strtolower($genre);
    $filtered_discs = [];

    foreach ($discs as $disc) {
        $music_genre = strtolower($disc['genre']);
        if (str_contains($music_genre, $searched_genre)) $filtered_discs[] = $disc;
    }

    $discs = $filtered_discs;
}

header('Content-type: application/json');
echo json_encode($discs);
