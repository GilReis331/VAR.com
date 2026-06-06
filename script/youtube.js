async function fetchYoutubeVideos(){

    try{

        const response =
            await fetch(`${API_URL}/api/youtube`)

        const data =
            await response.json();

        return data.items.map(video => ({

            type:
                "video",

            title:
                video.snippet.title,

            description:
                video.snippet.description,

            image:
                video.snippet.thumbnails.high.url,

            category:
                "YOUTUBE",

            duration:
                "LIVE",

            views:
                video.snippet.channelTitle,

            videoId:
                video.id.videoId

        }));

    }

    catch(error){

        console.log(

            "YOUTUBE ERROR:",
            error

        );

        return [];

    }

}