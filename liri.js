require("dotenv").config();

var dEnv = process.env;

var keys = require("keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var inquirer = require("inquirer");


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

}

function spotifyThis(){

}

function movie(){

}

function doIt (){

}