import { getData } from "./JS/api.js";
import { filterByGenre, filterByTitle } from "./JS/helperFunctions.js";
import "./JS/components/allPodcasts.js";
import "./JS/components/podcastDetail.js"
import "./JS/components/podcastSeason.js"
import "./JS/components/podcastEpisode.js"

let showAPI = "https://podcast-api.netlify.app/shows"
let showData = await getData(showAPI);


async function renderSingle(podcastID){

  document.querySelector("#app").innerHTML = ""

  let thisShowAPI = `https://podcast-api.netlify.app/id/${podcastID}`
  let thisShow = await getData(thisShowAPI)

  const nav = document.getElementById("nav")
  const home = document.createElement("li")
  home.id = "HOME"
  home.innerHTML = /*html*/ `
    <button>HOME</button>
  `
  home.addEventListener("click", () => {
    renderAll()
  })
  nav.appendChild(home)
  console.log(podcastID)

  const thisPodcast = document.querySelector("#app")
  const podcastDetail = document.createElement('podcast-detail');
  const { id, title, description, seasons, image, genres, updated } = thisShow
  podcastDetail.key = id;
  podcastDetail.label = title;
  podcastDetail.description = description;
  podcastDetail.seasons = seasons;
  podcastDetail.image = image;
  podcastDetail.genres = genres;
  podcastDetail.lastUpdated = updated;

  thisPodcast.appendChild(podcastDetail);


}

function renderAll(){

  const podcasts = document.querySelector("#app")
  podcasts.innerHTML = ""

  const nav = document.getElementById("nav");
  nav.removeChild(nav.lastChild)

  showData.forEach(({ id, image, title, seasons }) => {
    
    const preview = document.createElement('podcast-preview');
    preview.key = id
    preview.image = image
    preview.label = title
    preview.seasons = seasons 

    podcasts.appendChild(preview)

    preview.addEventListener("click", () => {
      document.querySelector("#app").innerHTML = "LOADING..."
      renderSingle(id)
    })
  })

}

renderAll()



/*
var audioPlayer = document.getElementById("episode-player");
audioPlayer.onplay = function() {
  const StartRecording = setInterval(() => {
    console.log("Playing " + audioPlayer.currentTime)
  }, 10000)

  audioPlayer.onpause = function() {
    console.log("STOPPING")
    clearInterval(StartRecording);
  };
};
*/
