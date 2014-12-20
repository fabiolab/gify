<?php
	// Remove all files from the img dir

 	header("Access-Control-Allow-Origin: *");	
	array_map('unlink', glob("../img/*"));
