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

		error_log($query);

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

	$where = array('title' => array('$regex' => new MongoRegex("/^".$query."/i")));
	$cursor = $collection->find($where);

	$i=0;
   	foreach($cursor as $item){
   		$filepath = getMovieFile($item['path']);
   		
       	$output[$i] = array(
           	'_id'=>$item['_id'],
           	'id'=>$item['id'],
           	'title'=>$item['title'],
           	'director'=>$item['director'],
           	'year'=>$item['year'],
           	'duration'=>$item['duration'],
           	'genre'=>$item['genre'],
           	'plot'=>$item['plot'],
           	'poster'=>$item['poster'],
           	'path'=>$filepath,
           	'counter' => $i
        );
       	$i++;
   }
	echo json_encode($output);
}

function getMovieFile($path){
	$tmp = scandir($path, 1);
	return $path.'/'.$tmp[0];
}

?>