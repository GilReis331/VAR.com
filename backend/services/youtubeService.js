const axios =
    require("axios");

/* ======================================
   GET YOUTUBE VIDEOS
====================================== */

async function getYoutubeVideos(){

    const response = await axios.get(

        "https://www.googleapis.com/youtube/v3/search",

        {
            params: {

                part:
                    "snippet",

                q:
                    "football highlights",

                type:
                    "video",

                maxResults:
                    10,

                key:
                    process.env.YOUTUBE_API_KEY

            }
        }

    );

    return response.data;

}

module.exports = {

    getYoutubeVideos

};