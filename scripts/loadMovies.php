<?php

/****************************************

	Retrieves metadata for movie files 
	in a specified directory and loads
	the movies into MongoDB.   

****************************************/

try {
	$m = new Mongo();
	$db = $m->media;
	$collection = $db->movies;
	$cursor = $collection->find();

	if(isset($_POST['directory'])){
		$files = array();

		//Get directory
		$dir = $_POST['directory'];
		
		//Add final slash
		if(strcmp(substr($dir, -1), '/') !== 0)
			$dir = $dir.'/';
		
		//Get file names
		$tmp = scandir($dir, 1);

		//Sort Mongo docs by age (newest to oldest).
		$cursor->sort(array('_id' => -1));
		if ($cursor->count() > 0) {
		    $cursor->next();
		    $last = $cursor->current();
			$statLast = stat($dir.$last['title']);	    

		    //Get all files younger than newest Mongo doc.
		    for($i=0; $i<(count($tmp)-2); $i++){
		    	$statTmp = stat($dir.$tmp[$i]);
				if($statTmp['mtime'] > $statLast['mtime'])
					array_push($files, $tmp[$i]);
			}
		}
		else
			$files = $tmp;


		getData($files, $dir);
	}

	else
		error_log("No data received");

} catch(MongoConnectionException $e){
	echo "Error Cannot connect to MongoDB.";
}

function getData($titles, $dir){
	for($i=0; $i<count($titles); $i++){
		$title = str_replace(' ', '%20', $titles[$i]);
		$data = file_get_contents("http://www.omdbapi.com/?t=".$title."&plot=short&r=json");
		$data = json_encode(str_replace('\\', '', $data));
		$json = json_decode($data);
		$json = json_decode($json, true);

		$id = $json['imdbID'];
		$poster = 'data:image/'.pathinfo($json['Poster'], PATHINFO_EXTENSION).';base64,'.base64_encode(file_get_contents($json['Poster']));

		$out = '{"id":"'.$id.'", "title":"'.$json['Title'].'", "director":"'.$json['Director'].'", "year":"'.$json['Released'].'", "duration":"'.$json['Runtime'].'", "genre":"'.$json['Genre'].'", "plot":"'.$json['Plot'].'", "poster":"'.$poster.'", "path":"'.$dir.$titles[$i].'"}';

		error_log($out);
		addToMongo($out, $id);
	}
	retrieveDocs();
}

function addToMongo($document, $id){
	global $collection;

	$idQuery = array('id' => $id);
	if($collection->find($idQuery)->count() == 0){
		error_log("Added movie");
		$collection->insert(json_decode($document));
	}
	else
		error_log("Movie already exists");
}

function retrieveDocs(){
	global $collection;
	$output = array();
	$filepath = '';

	$cursor = $collection->find();
	$cursor->sort(array('path' => 1));

	$i=0;
   	foreach($cursor as $item){
   		/*if(strlen($item['title']) > 0)
   			$filepath = getMovieFile($item['path']);
   		else
   			$filepath = $item['path'];*/

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
