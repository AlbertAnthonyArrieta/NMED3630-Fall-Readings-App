var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/podcasts/',
            url: 'pages/podcasts.html',
        },
        {
            path: '/movies/',
            url: 'pages/movies.html',
        },
        {
            path: '/books/',
            url: 'pages/books.html',
        },
        {
            path: '/music/',
            url: 'pages/music.html',
        },
    ],
  });
var mainView = app.views.create('.view-main')
