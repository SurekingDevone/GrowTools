<?php
if (isset($_POST['host'])) {
    $host = $_POST['host'];
    $url = "https://check-host.net/check-tcp?host=$host";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
}
?>