const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const clientId = process.env.TRAKT_CLIENT_ID; 

router.get('/', async (req, res) => {
    try {
        const response = await fetch(`https://api.trakt.tv/shows/watched/all?extended=full&page=1&limit=15`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'trakt-api-version': '2',
                'trakt-api-key': clientId
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const shows = await response.json();
        res.render('index', { shows });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Unable to fetch data. Please try again later.');
    }
});

module.exports = router;
