import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({

 searchText : "",

 movies : [],




})



export function fetchMovies() {
  axios.get("https://api.themoviedb.org/3/search/movie" ,{
    params : {
      api_key: "1a953019a29582a3b5c59afbba707100",
      query : store.searchText,
    }
  })
  .then((resp) => {
    console.log(resp.data.results);
    store.movies = resp.data.results

  })
}