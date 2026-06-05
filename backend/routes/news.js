// const express =
//     require("express");

// const router =
//     express.Router();

// const {
//     getFootballNews
// } = require("../services/newsService");

/* ======================================
   NEWS
====================================== */

// router.get("/", async (req, res) => {

//     const news =
//         await getFootballNews();

//     res.json(news);

// });

// module.exports = router;



/* ======================================
   IMPORTS
====================================== */

const express = require("express");

const router = express.Router();

const axios = require("axios");

/* ======================================
   CACHE
====================================== */

let cachedNews = [];

let lastFetchTime = 0;

/* ======================================
   NEWS ROUTE
====================================== */

router.get("/", async (req, res) => {

    try{

        const now = Date.now();

        /* ==================================
           5 MIN CACHE
        ================================== */

        if(

            cachedNews.length > 0 &&

            now - lastFetchTime < 300000

        ){

            console.log("USANDO CACHE");

            return res.json(cachedNews);

        }

        console.log("BUSCANDO NOVAS NOTÍCIAS");

        /* ==================================
           API REQUEST
        ================================== */

        const response = await axios.get(

            `https://gnews.io/api/v4/search?q=football&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`

        );

        /* ==================================
           SAVE CACHE
        ================================== */

        cachedNews =
            response.data.articles;

        lastFetchTime =
            now;

        /* ==================================
           RESPONSE
        ================================== */

        res.json(cachedNews);

    }

    catch(error){

        console.log(

            "GNEWS ERROR:",
            error.response?.data || error.message

        );

        /* ==================================
           FALLBACK CACHE
        ================================== */

        if(cachedNews.length > 0){

            return res.json(cachedNews);

        }

        res.status(500).json({

            error:
                "Erro ao buscar notícias"

        });

    }

});

/* ======================================
   EXPORT
====================================== */

module.exports = router;