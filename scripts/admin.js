var json = '';
var preview = false;
var currentMovie = 0;

var config = $.parseJSON("config.json");
var target = config.path;
$(document).prop('title', target = config.name);

$(document).ready(function() {
  loadMedia();
});

$(document).on('click', '#refresh-button', function () {
  $.ajax({
    type:   "POST",
    url:    "../scripts/loadMovies.php",
    data:   {
        refresh:  "refresh"
    },
    success: function(data) {
      $('.movie').remove();
      $('#loading').show();

      loadMedia();
    }
  });
});

$(document).on('click', '#delete-button', function () {
  $.ajax({
    type:   "POST",
    url:    "../scripts/loadMovies.php",
    data:   {
        remove:  json[currentMovie].id
    },
    success: function(data) {
      $('.movie').remove();
      $('#loading').show();

      $(function () {
        $('#adminModal').modal('toggle');
      });

      loadMedia();
    }
  });
});

$(document).on('click', '#refresh-media-button', function () {
  $.ajax({
    type:   "POST",
    url:    "../scripts/loadMovies.php",
    data:   {
        reload: '{"id":"'+json[currentMovie].id+'", "title":"'+json[currentMovie].title+'", "directory":"'+target+'"}'
    },
    success: function(data) {
      $('.movie').remove();
      $('#loading').show();

      $(function () {
        $('#adminModal').modal('toggle');
      });

      loadMedia();
    }
  });
});

$(document).on('click', '#admin-save-button', function () {
  $.ajax({
    type:   "POST",
    url:    "../scripts/loadMovies.php",
    data:   {
        metadata: '{"id":"'+json[currentMovie].id+'", "title":"'+$("#title-input").val()+'", "director":"'+$("#director-input").val()+'", "year":"'+$("#year-input").val()+'", "duration":"'+json[currentMovie].duration+'", "genre":"'+$("#genre-input").val()+'", "poster_url":"'+$("#poster-input").val()+'", "plot":"'+$("#plot-input").val()+'", "path":"'+json[currentMovie].path+'"}'
    },
    success: function(data) {
      $('.movie').remove();
      $('#loading').show();

      $(function () {
        $('#adminModal').modal('toggle');
      });

      loadMedia();
    }
  });
});

$(document).on('click', '.movie', function () {
  currentMovie = parseInt($(this).attr('id').replace('movie', ''));
  
  $("#title-input").val(json[currentMovie].title);
  $("#director-input").val(json[currentMovie].director);
  $("#year-input").val(json[currentMovie].year);
  $("#genre-input").val(json[currentMovie].genre);
  $("#poster-input").val(json[currentMovie].poster_url);
  $("#plot-input").val(json[currentMovie].plot);

});

function loadMedia(){
  $.ajax({
    type:   "POST",
    url:    "../scripts/loadMovies.php",
    data:   {
        directory:  target
    },
    success: function(data) {
      $('#loading').hide();
      
      if(data.indexOf("Error") > -1){
        $('#movie-wrapper').append('<p class="text-danger message"><br><br><br>'+data.replace('Error', '')+'</p>');
      }
      else{
        console.log("success");
        json = $.parseJSON(data);
        for(var i=0; i<json.length; i++){
          console.log(json[i]);
          $("#movie-wrapper").append('<a href="#" data-toggle="modal" data-target="#adminModal"><div class="movie" id="movie'+i+'"><div class="poster-container"><img class="poster" id="poster'+i+'" src=""></div><div class="info" align=center id="info'+i+'"><p id="title'+i+'"></p><p id="date'+i+'"></p></div></div></a>');

          $('#poster'+i).attr('src', json[i].poster);
          
          if(json[i].title.length == 0)
            $('#title'+i).text(json[i].path.replace(target, ''));
          else
            $('#title'+i).text(json[i].title);
          
          $('#date'+i).text(json[i].year);
        }
        $("#movie-count").text(" ("+json.length+")");
      }
    }
  });
}