/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movieParams: {},
      movies: [
        {
          title: "1945 A.D.",
          year: 1911,
          plot: "Ab inventore totam molestiae neque eveniet hic. Facilis ad aut quod repudiandae eius reprehenderit. Blanditiis impedit eius nisi cumque nesciunt saepe eveniet voluptate.",
          english: true,
        },
        {
          title: "I Married a Dreams",
          year: 1938,
          plot: "Exercitationem cum harum minus sint hic possimus. A asperiores officia officiis voluptas magnam aliquid. Minus unde maxime laborum non. Consequuntur saepe at aperiam earum sint quos.",
          english: true,
        },
        {
          title: "Zoolander",
          year: 1968,
          plot: "Ad accusantium repellat hic dolorum doloribus labore dicta neque. Incidunt corporis magni id maiores. Iusto unde commodi dolorem ut. Magnam impedit totam tempore assumenda vero quod explicabo doloremque. In rerum vel accusamus tempore inventore quidem molestias.",
          english: true,
        },
      ],
    };
  },

  methods: {
    indexMovies: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    createMovie: function () {
      var movie = {
        title: this.movieParams.title,
        year: this.movieParams.year,
        plot: this.movieParams.plot,
        english: this.movieParams.english,
      };
      this.movies.push(movie);
    },
  },
});
