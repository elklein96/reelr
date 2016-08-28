<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="/styles/main.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <title>elkServer</title>
  </head>
  
  <body>
    <div class="container">
      <div id="page-wrapper">
        <div id="video-wrapper">
          <video id="player" align="center" width="100%" style="margin-top:5%;" controls autoplay>
            <source id="source" src=""></source>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <script>
      var movie = "<?php
        if(isset($_POST['title'])) echo str_replace('/var/www/', '/', $_POST['title']);
        else echo "";
      ?>";
      $("#source").attr("src", movie);
      $("#player").load();

    </script>
  </body>
</html>