function validEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function registerEmail(email, callback_success, callback_fail) {
  Parse.initialize("F35shCLZt8uz23km8mRMnIVJtg3qYCHVNAD9W7rv", "nmkzxdMZEYrDBQH0jb1TIzqa7njXGmA3mfP2dbBd");

  var Email = Parse.Object.extend("Email");
  var e = new Email();
  e.set("email", email);
  e.save(null, {
    success: callback_success,
    error:callback_fail
  });
}

function Download(url) {
    document.getElementById('download_iframe').src = url;
};

function downloadApp() {
  $(".input-email").each(function(index) {
    var val = $(this).val();
    var element = $(this);

    if (val.length > 0) {
      if (validEmail(val)) {
        registerEmail(val, function(e) {
          element.val("Thank You! Download in progress");
          Download("http://bit.ly/29lArVC");
        }, function(e, error) {
          element.val("Please try again");
        });
      } else {
        $(this).val("Not a valid email");
      }
    } else {
      $(this).val("Enter your email");
    }
  });
}

function showMailingPopUp() {
  document.cookie = "MCEvilPopupClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us7.list-manage.com","uuid":"80b1f06cb0f4e0ed10b1cdf14","lid":"b3a473e5b6"}) })
};

$(document).ready(function() {

  $(".btn-download").each(function(index) {
    $(this).on('click', function() {
      downloadApp();
    });
  });

  $('.fui-play').colorbox({inline: true, width: "80%", height:"auto", href:"#demo-video", opacity:0.5});

  $(document).bind("cbox_complete", function() {
    function play() {
      var video = $("#demo-video").get(0);
      video.play();
    }
    setTimeout(play, 1000);
  });
});
