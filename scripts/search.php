<?php

/*****************************************

	Queries MongoDB based on a user's
	search. Returns an array containing
	documents which satisfy the query.  

*****************************************/

try {
	$m = new Mongo();
	$db = $m->media;
	$collection = $db->movies;

	if(isset($_POST['query'])){
		$query = $_POST['query'];

		retrieveDocs($query);
	}
	else
		error_log("No data received");

} catch(MongoConnectionException $e){
	echo "Cannot connect to MongoDB.";
}

function retrieveDocs($query){
	global $collection;
	$output = array();

	$regex = new MongoRegex("/^".$query."/i");
	$cursor = $collection->find(array('title' => $regex));

	$i=0;
   	foreach($cursor as $item){
       	$output[$i] = array(
           	'_id'=>$item['_id'],
           	'id'=>$item['id'],
           	'title'=>$item['title'],
           	'director'=>$item['director'],
           	'year'=>$item['year'],
           	'duration'=>$item['duration'],
           	'genre'=>$item['genre'],
           	'poster'=>$item['poster'],
           	'path'=>$item['path'],
           	'counter' => $i
        );
       	$i++;
   }
	echo json_encode($output);
}

?>