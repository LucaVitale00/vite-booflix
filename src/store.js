import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({

 searchText : [],
key : ["api_key=1a953019a29582a3b5c59afbba707100"]
})



export function fetchMovies() {
  axios.get("https://developers.themoviedb.org/3", {
    params : {

    }
  })
}