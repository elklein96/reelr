<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="/styles/main.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script src="/scripts/admin.js"></script>
    <title>elkServer</title>
  </head>
  
  <body>
    <div class="container">
      <div id="page-wrapper">
        <div class="navbar navbar-inverse">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">elkServer</a>
          </div>
          <div class="navbar-collapse collapse navbar-responsive-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="/">Home</a></li>
              <li><a href="/movies">Movies</a></li>
              <li><a href="/tv">TV Shows</a></li>
              <form class="navbar-form navbar-left" id="search">
                <input id="search-bar" class="form-control col-lg-8" placeholder="Search">
              </form>
            </ul>
          </div>
        </div>
        <br>
        <h3 style="" id="movie-title">Administrator<span style="display:inline;" id="movie-count"></span></h3>
        <br>
        <button id="refresh-button" type="button" class="btn btn-danger">Refresh Mongo</button>
        <br><br>
        <div id="movie-wrapper">
          <div id="loading">
            <p class="message" style="font-size:300%;"><br><i class="fa fa-cog fa-lg fa-spin"></i></p>
          </div>
        </div>
        <form id="invisible_form" action="/play.php" method="post" target="_blank">
          <input id="title" name="title" type="hidden" value="">
        </form>
        <div id="footer"></div>
      </div>
    </div>
    <div class="modal fade" id="adminModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 id="modal-title" class="modal-title">Edit Media</h4>
          </div>
          <div class="modal-body">
          	<p>
	          	<p class="data-field-name">Title: </p><input id="title-input" class="form-control col-lg-8 data-field" placeholder="Title">
	          	<p class="data-field-name">Director: </p><input id="director-input" class="form-control col-lg-8 data-field" placeholder="Director">
	          	<p class="data-field-name">Released: </p><input id="year-input" class="form-control col-lg-8 data-field" placeholder="Year">
	          	<p class="data-field-name">Genre: </p><input id="genre-input" class="form-control col-lg-8 data-field" placeholder="Genre">
	          	<p class="data-field-name">Poster: </p><input id="poster-input" class="form-control col-lg-8 data-field" placeholder="Enter URL to new poster">
	          	<p class="data-field-name">Plot: </p><textarea id="plot-input" class="form-control col-lg-8 data-field" placeholder="Plot"></textarea>
          	</p>
            <button id='refresh-media-button' type='button' class='btn btn-warning' style='display:inline;'>Refresh Media</button>
            <button id='delete-button' type='button' class='btn btn-danger' style='display:inline;'>Delete Media</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button id="admin-save-button" type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>