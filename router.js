var Profile = require("./profile.js");



// Handle HTTP GET/ and POST/ i.e Home

function home(request,response){

  //if url == "/" && GET
  if(request.url === "/"){
    //show search
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
  //if url == "/" && POST
    //redirect to /:username
}

// Handle HTTP route GET /:username i.e /chalkers
function user(request,response){
    //if url == "/..."
    var username = request.url.replace("/","")
    if(username.length > 0){

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.write("Header\n");

      //get json from treehouse
      var studentProfile = new Profile("chalkers");

      response.write(username +"\n");
      response.end("Footer\n");

        // on "end"
        studentProfile.on("end", function(profileJSON){
          //show profile



        });
          //show profile
        // on "error"
          //show error

    }

}
module.exports.home = home;
module.exports.user = user;
