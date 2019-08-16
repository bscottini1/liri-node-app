require("dotenv").config();
const axios = require("axios");
var Spotify = require('node-spotify-api');
const dotenv = require("dotenv");
const moment = require("moment");
const fs = require("fs");
const keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


let userInput = process.argv.slice(3).join("+");
switch (process.argv[2]) {
    case "movie-this":
        movieThis(userInput)
        fs.appendFile("log.txt", userInput, function(err, data){
            if(err){
                return console.log(err);
            }
        } );
        break;

    case "spotify-this-song":
        spotifyThis(userInput)
        fs.appendFile("log.txt", userInput + ", ", function(err, data){
            if(err){
                return console.log(err);
            }
        } );
        break;

    case "do-what-it-says":
}

function movieThis(movieName){
    movieName = movieName || "mr+nobody";
    const queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
        })
}

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

function spotifyThis(){
    spotify.search({ type: "track", query: userInput || "The+Sign"})
  .then(function(response) {
    console.log(response.tracks.items[1]);
    // const items = response.tracks.items[0];
    //   console.log("Album Name: " + items.album.name);
    //   console.log("Song Name: " + items.name); 
    //   console.log("Artist Name: " + items.album.artists[0].name);
    //   console.log("Spotify Link: " + items.album.href);
  })
}






