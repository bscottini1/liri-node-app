LIRI Node App

LIRI is a Node.JS app that retrieves song data from Spotify API, and movie data from OMDB API.
Additionally, all user queries are logged in the log.txt file, for future reference.

To use:
1. Create a .env file and link the liri.js file. The .env file will hold the user's Spotify ID and Secret.
The format for the user's Spotify information should be:
SPOTIFY_ID=<User's Spotify ID without quotes.>
SPOTIFY_SECRET=<User's Spotify Secret without quotes.>
2. From the command terminal, navigate to the location of the liri.js file.
3. Clear the command terminal.
4. To search for movie information, the user must key the movie title in the command terminal
using the following format:
    node liri.js movie-this <movie name>
    Ex: node liri.js move-this cinderella man
5. To search for song information, the user must key the song title in the command terminal using 
the following format:
    node liri.js spotify-this-song <song title>
    Ex: node liri.js spotify-this-song purple haze
6. Press Enter after keying selection.
7. All results are returned to the command terminal.