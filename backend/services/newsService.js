const axios = require("axios");

/* ======================================
   FOOTBALL NEWS
====================================== */

async function getFootballNews(){

    try{

        const response = await axios.get(

            "https://gnews.io/api/v4/search",

            {

                params: {

                    q:
                    "(football OR soccer) AND (transfer OR champions league OR fifa OR premier league OR la liga OR serie a)",

                    lang:
                    "en",

                    max:
                    10,

                    apikey:
                    process.env.GNEWS_API_KEY

                }

            }

        );

        const articles =
            response.data.articles;

        const formattedNews =
            articles.map(article => ({

                type:
                    "news",

                title:
                    article.title,

                description:
                    article.description,

                content:
                    article.content,

                image:
                    article.image,

                url:
                    article.url,

                source:
                    article.source.name,

                date:
                    article.publishedAt

            }));

        return formattedNews;

    }

    catch(error){

        console.log(

            "GNEWS ERROR:",
            error.response?.data || error.message

        );

        return [];

    }

}

module.exports = {

    getFootballNews

};