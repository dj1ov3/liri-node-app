require("dotenv").config();

var dEnv = process.env;

var request = require("request");
var keys = require("./keys.js");
var Twitter = require('twitter');
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
var nodeArgs = process.argv;
var movieName = "";


//initalizing twitter
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

 



var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



inquirer.prompt([
    {
      type: "input",
      message: "Whatcha wanna do???",
      name: "search"
    }
  ]).then(function(inquirerResponse){
  
    // if(inquirerResponse.search){

    //     if(inquirerResponse.search == "my-tweets"){
    //         myTweets();
    //     } else if(inquirerResponse.search == "spotify-this-song"){
    //         spotifyThis();
    //     } else if(inquirerResponse.search == "movie-this"){
    //         movie();
    //     } else if (inquirerResponse.search == "do-what-it-says"){
    //         doIt();
    //     } else{
    //         console.log("mmmmmmmm yeah thats not gonna work.")
    //     }
    // }

        switch(inquirerResponse.search) {
            case "my-tweets":
                myTweets();
                break;
            case "spotify-this-song":

                spotifyThis();
                break;
            case "movie-this":
                movie();
                break;
            case "do-what-it-says":
                doIt();
                break;
            default:
               console.log("mmmmmmmm yeah thats not gonna work.")
        }  
    
    
  
  
  
  })





function myTweets(){
    console.log("Tweet Tweet mf");
    var params = {screen_name: 'NachoBusiness16'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        // console.log(tweets);
        // console.log(JSON.stringify(tweets,['text',]));
        var tweetArr = JSON.stringify(tweets,['text',]);
        var twObj = JSON.parse(tweetArr);
        console.log(twObj);
    

    }
    });
}

function spotifyThis(){
    console.log("Spotify the song dammit!!");

    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
    
    console.log(data); 
    });

}

function movie(){
    console.log("Watch this bitch");

    inquirer.prompt([
        {
          type: "input",
          message: "What movie?",
          name: "search"
        }
      ]).then(function(inquirerResponse){
        movieName = inquirerResponse.search;
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    //   console.log(queryUrl);
  
      request(queryUrl, function(error, response, body) {
  
      if (!error && response.statusCode === 200) {
        console.log("Title: " + JSON.parse(body).Title)
        console.log("Release Year: " + JSON.parse(body).Year)
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating)
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings.Tomatoes)
        console.log("Country: " + JSON.parse(body).Country)
        console.log("Language: " + JSON.parse(body).Language)
        console.log("Plot: " + JSON.parse(body).Plot)
        console.log("Actors: " + JSON.parse(body).Actors)
         
      }
      });
    });
    
}

function doIt (){
    console.log("Do it.......");
}