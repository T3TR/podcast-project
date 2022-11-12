import { getData } from "./JS/fetchData.js"
import { filterByGenre, filterByTitle } from "./JS/helperFunctions.js"

let showAPI = "https://podcast-api.netlify.app/shows"
let showData = await getData(showAPI);


async function renderSingle(podcastID, podcastImage){

  document.querySelector("#app").innerHTML = ""

  let thisShow = `https://podcast-api.netlify.app/id/${podcastID}`
  await getData(thisShow)

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
  thisPodcast.innerHTML = /*html*/`

    <div>
      <img src="${podcastImage}">
    </div>

  `

}

function renderAll(){

  document.querySelector("#app").innerHTML = ""

  const nav = document.getElementById("nav");
  nav.removeChild(nav.lastChild)

  for(let i = 0; i < showData.length; i++){
    const podcasts = document.querySelector("#app");
    const podcast = document.createElement("div");
    podcast.id = showData[i].id;
    podcast.className = "podcast"
    //console.log(podcast.id)
    podcast.innerHTML = /*html*/ `
  
      <div class="podcastImage">
        <img src="${showData[i].image}">
      </div>
  
      <div class="title">
      <p>${showData[i].title}</p>
      </div>
  
      <div class="seasons">
      <p>SEASON/S : ${showData[i].seasons}</p>
      </div>
    `
    podcasts.appendChild(podcast)

    podcast.addEventListener("click", () => {
      document.querySelector("#app").innerHTML = "LOADING..."
    })
    podcast.addEventListener("click", () => {
      renderSingle(podcast.id, showData[i].image)
    })
  }

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
