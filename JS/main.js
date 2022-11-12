import { getData } from "./fetchData.js"
import { filterByGenre, filterByTitle } from "./helperFunctions.js"

let apiData = "https://podcast-api.netlify.app/shows"
let podcastData = await getData(apiData);

console.log(podcastData);


var audioPlayer = document.getElementById("episode-player");

audioPlayer.onplay = function() {
  const StartRecording = setInterval(() => {
    console.log("Playing " + audioPlayer.currentTime)
  }, 2000)

  audioPlayer.onpause = function() {
    console.log("STOPPING")
    clearInterval(StartRecording);
  };
};



