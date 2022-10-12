var app = new Framework7({
    // App root element
    root: '#app',

    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/podcasts/',
            url: 'pages/podcasts.html',
        }
    ]
    // ... other parameters
  });
var mainView = app.views.create('.view-main')
