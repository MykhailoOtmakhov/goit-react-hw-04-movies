function fetchMovie(query){
    const MY_KEY = '19192524-c380f664e1da9ad09772f37426d65949'
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MY_KEY}&language=en-US&query=$query=${query}&page=1&include_adult=false`)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        return Promise.reject(
            new Error(`Нет такого ${query}`)
        );
    })
}
const api = {
    fetchMovie,
}

export default api;