<?php

/*
 * Get an image from its name
 */
$conf = parse_ini_file("../conf.ini");

$image = $_GET['image'];
$extension = pathinfo($image, PATHINFO_EXTENSION);

$image = stripslashes($image);
if (in_array(strtolower($extension), array('png','jpg','jpeg','gif'))){
    header('Content-Disposition: filename=$image');
    header('Content-Type: image/'.$extension);
    header("Access-Control-Allow-Origin: *");
    readfile($conf['full_path'].$image);
}else{
    echo "impossible de charger l'image $image d'extension $extension";
}
