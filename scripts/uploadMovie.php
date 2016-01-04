<?php

/****************************************

	Creates a directory with movie name 
	and inserts movie file.

	PUT FILE:

		Browser-side Javascript upload file to endpoint.
		Use server side code to put via FTP.

****************************************/

$ftp_server = "localhost:";

$conn_id = ftp_connect($ftp_server) or die("Couldn't connect to $ftp_server"); 


if(isset($_POST['title'])){

	//Get directory
	$title = $_POST['title'];
	mkdir($title, 0700);
}

else
	error_log("No data received");
?>
