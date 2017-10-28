const YTS_API = "https://yts-api.herokuapp.com/"

let app = new Vue({
    el: '#vue-app',
    data: {
        movies: [],
        pageId : ''
    },
    methods: {
        getMovies: (id) => {
            axios.get(YTS_API + id)
                .then(resp => app.movies = resp.data)
                .catch(err => console.log(err))
        }
    },
    created: function() {
        this.getMovies();
    },
});