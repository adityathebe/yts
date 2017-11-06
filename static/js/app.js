const YTS_API = "https://yts.ag/api/v2/"

let app = new Vue({
    el: '#vue-app',
    data: {
        movies: [],
        queryTerm : '',
        memory : {
            queryTerm: ''
        }
    },
    methods: {
        getMovies: function(page = 1, q = '') {
            console.log('Getting movies...')
            let url = YTS_API + `list_movies.jsonp?page=${page}&query_term=${q}&limit=50&minimum_rating=7`;

            this.memory.queryTerm = q.length > 0 ? q : '';
            this.movies = [];
            
            axios.get(url)
                .then((resp) => {
                    app.movies = resp.data.data.movies
                })
                .catch(err => console.log(err))
        }
    },
    created: function() {
        this.getMovies();
    },
});