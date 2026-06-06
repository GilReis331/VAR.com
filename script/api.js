async function fetchNews(){

    try{

        showLoading();

        /* NEWS */

        const response =
            await fetch(`${API_URL}/api/news`)

        const news =
            await response.json();

        /* YOUTUBE */

       const youtubeVideos =
    await fetchYoutubeVideos();

        /* FORMAT NEWS */

        const formattedNews =
            news.map(item => ({

                ...item,

                type:
                    "news",

                aiScore:
                    calculateNewsScore(item),

                sentiment:
                    getSentiment(item)

            }));

        /* MERGE */

        globalNews = [

            ...formattedNews,
            ...youtubeVideos

        ];

        /* SHUFFLE */

        globalNews.sort(() => Math.random() - 0.5);

        renderFeed(globalNews);
        startHeroRotation();

    }

    catch(error){

        console.log(error);

        showError();

    }

}