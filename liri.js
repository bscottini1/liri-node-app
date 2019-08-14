require("dotenv").config();
const axios = require("axios");
const Spotify = require("node-spotify-api");
const dotenv = require("dotenv");
const moment = require("moment");

let movieName = process.argv.slice(3).join("+");
// if (movieName == "") {
//         movieName == "mr. nodbody"}

const queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryUrl).then(
    function (response){
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.imdbRating);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
    });
    
    
    



    
