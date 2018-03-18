const express = require('express');
const router = express.Router();

const home = router.get('/', function(req, res) {
    res.render('home', {
        // This is the place where you start fetching your API
        listElements: [
            {
                'name': 'Architecture buildings europe houses',
                'image': '/img/pexels-photo-358589.png',
                'author': '@pixabay',
                
            },
            {
                'name': 'Mountain and lake at sunset',
                'image': '/img/pexels-photo-135157.png',
                'author': '@monicore',
                
            },
            {
                'name': 'some random text',
                'image': '/img/pexels-photo-577696.png',
                'author': '@lkloeppel',
                
            },
            {
                'name': 'Landscape photo',
                'image': '/img/pexels-photo-713090.png',
                'author': '@nextvoyage',
                
            },
          ]
      })
});

module.exports = home;
