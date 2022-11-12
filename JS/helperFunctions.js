export function filterByGenre(genre, shows){
  return shows.filter((show) => show.genres.includes(genre));
}

export function filterByTitle(text, shows){
  return shows.filter((show) => show.title.contains(text));
}

export function sortShows(type, shows){
}