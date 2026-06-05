const sponsoredAds = [

    {
        brand: "BET365",

        title:
            "Champions League ao vivo",

        description:
            "Odds em tempo real.",

        video:
            "./assets/ads/D3.mp4"
    },

    {
        brand: "NIKE FOOTBALL",

        title:
            "Mercurial Elite",

        description:
            "Velocidade absoluta.",

        video:
            "./assets/ads/D.mp4"
    },

    {
        brand: "EA SPORTS FC",

        title:
            "Ultimate Team 26",

        description:
            "Monte o elenco perfeito.",

        video:
            "./assets/ads/D2.mp4"
    }

];

let currentSponsored = 0;

function rotateSponsoredAds(){

    const sponsoredCard =
    document.querySelector(".ai-card");

if(!sponsoredCard) return;

    const ad =
        sponsoredAds[currentSponsored];
        console.log(ad.video);

    

    sponsoredCard.innerHTML = `

        <div class="sponsored-video-wrapper">

            <video
    class="sponsored-video"
    autoplay
    muted
    loop
    playsinline
    webkit-playsinline
>

    <source
        src="${ad.video}"
        type="video/mp4"
    >

</video>

            <div class="sponsored-overlay"></div>

            <div class="sponsored-badge">

                SPONSORED

            </div>

        </div>

        <div class="sponsored-content">

            <span class="tag">

                ${ad.brand}

            </span>

            <h3>

                ${ad.title}

            </h3>

            <p>

                ${ad.description}

            </p>

            <button class="sponsored-btn">

                Ver campanha

            </button>

        </div>

    `;

    currentSponsored++;

    if(currentSponsored >= sponsoredAds.length){

        currentSponsored = 0;

    }

}

rotateSponsoredAds();

setInterval(() => {

    rotateSponsoredAds();

}, 10000);

function rotateSponsoredReels(){

    console.log("sponsored running");

}