//Facebook
window.fbAsyncInit = function() {
  FB.init({
    appId      : '524419141060049',
    xfbml      : true,
    version    : 'v2.5'
  });
};


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=524419141060049";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Google+
window.___gcfg = {
      lang: 'en-US',
      parsetags: 'onload'
};

//LinkedIn
// Setup an event listener to make an API call once auth is complete
    function onLinkedInLoad() {
      IN.Event.on(IN, "auth", shareContent);
    }

  // Handle the successful return from the API call
  function onSuccess(data) {
    console.log(data);
  }

  // Handle an error response from the API call
  function onError(error) {
    console.log(error);
  }

  // Use the API call wrapper to share content on LinkedIn
  function shareContent() {

    // Build the JSON payload containing the content to be shared
    var payload = {
      "comment": "Check out @platerate and find the best menu items in your neighborhood!",
      "visibility": {
        "code": "anyone"
      }
    };

    IN.API.Raw("/people/~/shares?format=json")
      .method("POST")
      .body(JSON.stringify(payload))
      .result(onSuccess)
      .error(onError);
  }
