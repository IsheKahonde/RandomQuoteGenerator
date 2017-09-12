$(document).ready(function() {
  //   share button for Winston Churchill quote on the *Welcome Page*
  var winstonQuote = $("#quote-post p").text();
  $("#shareBtn").on("click", function() {
    var tweetLink =
      "http://twitter.com/intent/tweet?text=" +
      encodeURIComponent(winstonQuote);
    $(this).attr("href", tweetLink);
  });
  //ajax api call
  $("#next-quote").on("click", function(e) {
    e.preventDefault();
    $.ajax({
      url:
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      success: function(data) {
        var post;
        data.forEach(function(quote) {
          post = quote;
        });
        var htmlStr = "";

        htmlStr +=
          "<strong>" +
          '<span style="border-bottom: 1px solid white">' +
          post.title +
          "</span>" +
          "</strong>" +
          " once said " +
          "<p>" +
          post.content +
          "</p>" +
          "<p>" +
          "</p>";

        $("#quote-post").html(htmlStr).addClass("quote-border");

        var postedQuote = $(htmlStr).text();
        $("#shareBtn").on("click", function() {
          var tweetText = $(htmlStr).text();
          var tweetLink =
            "http://twitter.com/intent/tweet?text=" +
            encodeURIComponent(tweetText);
          $(this).attr("href", tweetLink);
        });
      },
      cache: false
    });
  });
});
$(document).ready(function() {
  //   share button for Winston Churchill quote on the *Welcome Page*
  var winstonQuote = $("#quote-post p").text();
  $("#shareBtn").on("click", function() {
    var tweetLink =
      "http://twitter.com/intent/tweet?text=" +
      encodeURIComponent(winstonQuote);
    $(this).attr("href", tweetLink);
  });
  //ajax api call
  $("#next-quote").on("click", function(e) {
    e.preventDefault();
    $.ajax({
      url:
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      success: function(data) {
        var post;
        data.forEach(function(quote) {
          post = quote;
        });
        var htmlStr = "";

        htmlStr +=
          "<strong>" +
          '<span style="border-bottom: 1px solid white">' +
          post.title +
          "</span>" +
          "</strong>" +
          " once said " +
          "<p>" +
          post.content +
          "</p>" +
          "<p>" +
          "</p>";

        $("#quote-post").html(htmlStr).addClass("quote-border");

        var postedQuote = $(htmlStr).text();
        $("#shareBtn").on("click", function() {
          var tweetText = $(htmlStr).text();
          var tweetLink =
            "http://twitter.com/intent/tweet?text=" +
            encodeURIComponent(tweetText);
          $(this).attr("href", tweetLink);
        });
      },
      cache: false
    });
  });
});
