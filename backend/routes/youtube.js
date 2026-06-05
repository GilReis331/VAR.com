const express =
    require("express");

const router =
    express.Router();

const cache =
    require("../utils/cache");

const {
    getYoutubeVideos
} = require("../services/youtubeService");

/* ======================================
   GET VIDEOS
====================================== */

router.get("/", async (req, res) => {

    try{

        const cachedVideos =
            cache.get("youtube-videos");

        if(cachedVideos){

            return res.json(cachedVideos);

        }

        const data =
            await getYoutubeVideos();

        cache.set(
            "youtube-videos",
            data
        );

        res.json(data);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            error:
                "Erro ao buscar vídeos"

        });

    }

});

module.exports = router;