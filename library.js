var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

//prints a list of all playlists, in the form:
//p01: Coding Music - 2 tracks
//p02: Other Playlist - 1 tracks

var printPlaylists = function () {
var p012 = library["playlists"];
for (var songlistID in library["playlists"]) {

  var playlistName = library["playlists"][songlistID]["name"];
  var playlistTracks = library["playlists"][songlistID]["tracks"];

console.log(songlistID + ": " + playlistName + " - " + playlistTracks.length + ' tracks');
  }
}

printPlaylists()

// prints a list of all tracks, in the form:
 //t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
 //t02: Model View Controller by James Dempsey (WWDC 2003)
 //t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
var t0123 = library["tracks"];
for (var tracklistID in library["tracks"]) {
  var tracklistName = library["tracks"][tracklistID]["name"];
  var tracklistArtist = library["tracks"][tracklistID]["artist"];
  var tracklistAlbum = library["tracks"][tracklistID]["album"];

  console.log(tracklistID + ": " + tracklistName + " by " + tracklistArtist + " (" + tracklistAlbum + ")")
  }
}
printTracks()

//prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var p012 = library["playlists"];
  for (var songlistID in library["playlists"]) {
    var playlistName = library["playlists"][songlistID]["name"];
    var playlistTracks = library["playlists"][songlistID]["tracks"];

    console.log(songlistID + ": " + playlistName + " - " + playlistTracks.length + ' tracks')

    for (let tracks of library["playlists"][songlistID]["tracks"]) {
      var tracklistName = library["tracks"][tracks]["name"];
      var tracklistArtist = library["tracks"][tracks]["artist"];
      var tracklistAlbum = library["tracks"][tracks]["album"]
      console.log(tracks + ": " + tracklistName + " by " + tracklistArtist + " (" + tracklistAlbum + ")");

    }
  }
}
printPlaylist()

// adds a track to the library
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

var addTrack = function (name, artist, album) {
  var newTrackID = uid();
  var newTrack = {
    id: newTrackID,
    name: name,
    artist: artist,
    album: album
  }
  library["tracks"][newTrackID] = newTrack;
}
addTrack("Scar Tissue", "Red Hot Chili Peppers", "Californication")

printTracks()
// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylistID = uid();
  var newPlaylist = {
    id: newPlaylistID,
    name: name,
    tracks: []
  }
  library["playlists"][newPlaylistID] = newPlaylist;
}
addPlaylist("Playlist Three");

printPlaylist()

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var newTrackLocation = {
    id: trackID
    id: playlistID
  }

  library["playlists"][songlistID]["tracks"].push(trackID);

}

addTrackToPlaylist("t01", "p02")







// generates a unique id
// (use this for addTrack and addPlaylist)







// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

//var printSearchResults = function(query) {

//}