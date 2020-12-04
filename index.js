require('dotenv').config()
const axios = require("axios")

const BASE_URL = "http://www.omdbapi.com"
const SEARCH_KEYWORD = "batman"





    
    axios
      .get(`${BASE_URL}/?i=tt3896198&apikey=${process.env.API_KEY}=${SEARCH_KEYWORD}`)
      .then((res) => {
        const movies = res.data["Search"];
        movies.map((movie) => {
            
          console.log(movie.Poster);
          
          
        });
      })
      .catch((err) => {
        console.error(err);
      });
