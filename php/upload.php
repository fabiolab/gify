<?php
 	header("Access-Control-Allow-Origin: *");
 	
 	// Upload a file to the server
	$filename = $_FILES['file']['name'];
	$destination = '../img/' . $filename;
	move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );
