<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="/styles/main.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="/scripts/displayMovies.js"></script>
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
              <li><a href="/tv">TV Shows</a></li>
              <form class="navbar-form navbar-left" id="search">
                <input id="search-bar" class="form-control col-lg-8" placeholder="Search">
              </form>
            </ul>
          </div>
        </div>
        <br>
        <h3 style="">Movies</h3>
        <br>
        <div id="movie-wrapper">
          <div id="loading">
            <p class="message" ><br><br><br>Loading...</p>
          </div>
        </div>
        <form id="invisible_form" action="/play.php" method="post" target="_blank">
          <input id="title" name="title" type="hidden" value="">
        </form>
        <div id="footer"></div>
      </div>
    </div>
  </body>
</html>