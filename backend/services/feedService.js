const {
    getFootballNews
} = require("./newsService");

const {
    getYoutubeVideos
} = require("./youtubeService");

/* ======================================
   MIXED FEED
====================================== */

async function getHomeFeed(){

    try{

        const news =
            await getFootballNews();

        const videos =
            await getYoutubeVideos();

        /* ======================================
           TYPE TAG
        ====================================== */

        const taggedNews =
            news.map(item => ({

                ...item,

                type:
                    "news"

            }));

        const taggedVideos =
            videos.map(item => ({

                ...item,

                type:
                    "video"

            }));

        /* ======================================
           MERGE FEED
        ====================================== */

        const mixedFeed = [];

        const maxLength =
            Math.max(

                taggedNews.length,
                taggedVideos.length

            );

        for(let i = 0; i < maxLength; i++){

            if(taggedNews[i]){

                mixedFeed.push(

                    taggedNews[i]

                );

            }

            if(taggedVideos[i]){

                mixedFeed.push(

                    taggedVideos[i]

                );

            }

        }

        return mixedFeed;

    }

    catch(error){

        console.log(error);

        return [];

    }

}

module.exports = {

    getHomeFeed

};