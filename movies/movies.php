<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="/styles/main.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script src="/scripts/displayMovies.js"></script>
    <title>reelr</title>
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
              <li><a href="/tv">TV Shows</a></li>
              <li id="upload-button"><a href="#" data-toggle="modal" data-target="#uploadModal"><i class="fa fa-plus-circle fa-lg"></i></a></li>
              <form class="navbar-form navbar-left" id="search">
                <input id="search-bar" class="form-control col-lg-8" placeholder="Search">
              </form>
            </ul>
          </div>
        </div>
        <br>
        <h3 style="" id="movie-title">Movies<span style="display:inline;" id="movie-count"></span></h3>
        <br>
        <div id="movie-wrapper">
          <div id="loading">
            <p class="message" style="font-size:300%;"><br><i class="fa fa-cog fa-lg fa-spin"></i></p>
          </div>
        </div>
        <form id="invisible_form" action="./play/play.php" method="post" target="_blank">
          <input id="title" name="title" type="hidden" value="">
        </form>
        <div id="footer"></div>
      </div>
    </div>
    <div class="modal fade" id="uploadModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Upload Media</h4>
          </div>
          <div class="modal-body">
            <input type='file' id='files' name='file' style='display:inline;'/>
            <button type='button' class='btn btn-primary' onclick='abortRead();' style='display:inline;'>Cancel read</button>
            <br>
            <div id='progress_bar'>
              <div class='percent'>0%</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>