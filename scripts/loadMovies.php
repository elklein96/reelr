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
		$tmp = preg_grep('/^([^.])/', scandir($dir, 1));

		//Sort Mongo docs by age (newest to oldest).
		$cursor->sort(array('date_add' => -1));
		if ($cursor->count() > 0) {
		    $cursor->next();
		    $last = $cursor->current();

		    //Get all files younger than newest Mongo doc.
		    for($i=0; $i<count($tmp); $i++){
		    	$statTmp = stat($dir.$tmp[$i]);
				if($statTmp['mtime'] > $last['date_add'])
					array_push($files, $tmp[$i]);
			}
		}
		else
			$files = $tmp;

		getData($files, $dir);
	}

	if(isset($_POST['metadata'])){
		$data = $_POST['metadata'];
		$data = json_encode(str_replace('\\\\', '', $data));
		$json = json_decode($data);
		$json = json_decode($json, true);

		error_log($json['id']);

		$poster = getPoster($json['poster_url']);

		$out = '{"id":"'.$json['id'].'", "date_add":"'.time().'", "title":"'.$json['title'].'", "director":"'.$json['director'].'", "year":"'.$json['year'].'", "duration":"'.$json['duration'].'", "genre":"'.$json['genre'].'", "plot":"'.str_replace('"', '\"', $json['plot']).'", "poster_url":"'.$json['poster_url'].'", "poster":"'.$poster.'", "path":"'.$json['plot'].'"}';

		$collection->remove(array('id' => $json['id']));

		addToMongo($out, $json['imdbID'], $json['Title']);
	}

	if(isset($_POST['refresh'])){
		$collection->remove();
	}

	if(isset($_POST['remove'])){
		$collection->remove(array('id' => $_POST['remove']));
	}

	if(isset($_POST['reload'])){
		$files = array();

		$data = $_POST['reload'];
		$data = json_encode(str_replace('\\\\', '', $data));
		$json = json_decode($data);
		$json = json_decode($json, true);

		$collection->remove(array('id' => $json['id']));
		array_push($files, $json['title']);
		getData($files, $json['directory']);
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
		$data = json_encode(str_replace('\\\\', '', $data));
		$json = json_decode($data);
		$json = json_decode($json, true);

		$poster = getPoster($json['Poster']);

		$out = '{"id":"'.$json['imdbID'].'", "date_add":"'.time().'", "title":"'.$json['Title'].'", "director":"'.$json['Director'].'", "year":"'.$json['Released'].'", "duration":"'.$json['Runtime'].'", "genre":"'.$json['Genre'].'", "plot":"'.str_replace('"', '\"', $json['Plot']).'", "poster_url":"'.$json['Poster'].'", "poster":"'.$poster.'", "path":"'.$dir.$titles[$i].'"}';

		//error_log($out);
		addToMongo($out, $json['imdbID'], $json['Title']);
	}
	retrieveDocs();
}

function getPoster($url){
	$poster = 'data:image/'.pathinfo($url, PATHINFO_EXTENSION).';base64,'.base64_encode(file_get_contents($url));
	return $poster;
}

function addToMongo($document, $id, $title){
	global $collection;

	$idQuery = array('id' => $id);
	if($collection->find($idQuery)->count() == 0){
		error_log("Added movie: ".$title);
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
           	'poster_url'=>$item['poster_url'],
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
