require("dotenv").config();

var dEnv = process.env;

var keys = require("./keys.js");
var Twitter = require('twitter');
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');

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
  
    if(inquirerResponse.search){
        switch(expression) {
            case tweets:
                myTweets();
                break;
            case spotify:
                spotifyThis();
                break;
            case spotify:
                movie();
                break;
            case tweets:
                doIt();
                break;
            default:
               console.log("mmmmmmmm yeah thats not gonna work.")
        }  
    
    }
  
  
  
  })





function myTweets(){
console.log("Tweet Tweet mf");
}

function spotifyThis(){
console.log("Spotify the song dammit!!");
}

function movie(){
console.log("Watch this bitch");
}

function doIt (){
console.log("Do it.......");
}