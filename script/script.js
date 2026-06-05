/* =======================================
   SELECIONA O FEED
   
======================================= */

const feedSection = document.querySelector(".feed-section");
/* =======================================
   YOUTUBE API
======================================= */



                         


/* =======================================
   VARIÁVEIS GLOBAIS
======================================= */

let globalNews = [];

let currentCategory = "all";
/* =======================================
   LOADING
======================================= */

function showLoading(){

    feedSection.innerHTML = "";

    for(let i = 0; i < 6; i++){

        const skeleton = document.createElement("div");

        skeleton.classList.add("skeleton-card");

        skeleton.innerHTML = `

            <div class="skeleton-image shimmer"></div>

            <div class="skeleton-content">

                <div class="skeleton-line small shimmer"></div>

                <div class="skeleton-line shimmer"></div>

                <div class="skeleton-line shimmer"></div>

                <div class="skeleton-line medium shimmer"></div>

            </div>

        `;

        feedSection.appendChild(skeleton);

    }

}


/* =======================================
   ERRO
======================================= */

function showError(){

    feedSection.innerHTML = `

        <div class="error">
            Erro ao carregar notícias.
        </div>

    `;

}


/* =======================================
   CRIAR CARD
======================================= */

function createNewsCard(news){

    const card = document.createElement("article");

    card.classList.add("feed-card");

    card.innerHTML = `

       <div 
    class="feed-image lazy-image"
    data-bg="${news.image || 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop'}"
>

            <div class="video-overlay"></div>

            <div class="play-button">
                ▶
            </div>

            <div class="video-duration">
                ${news.duration}
            </div>

        </div>

        <div class="feed-text">
        ${news.aiScore > 80 ?
    

    `

    <div class="trending-badge">

        🔥 TRENDING

    </div>

    `

    :

    ""
}

            <span class="tag">
                ${news.category}
            </span>

            <h3>
                ${news.title}
            </h3>

            <p>
                ${news.description}
            </p>

           <div class="video-meta">

    <span>

        ${news.views}

    </span>

    <span>

        • ${news.sentiment || "Neutral"}

    </span>

</div>

        </div>

    `;

    card.addEventListener("click", () => {

    openModal(news);

});

feedSection.appendChild(card);

}


/* =======================================
   FETCH API
======================================= */

async function fetchNews(){

    try{

        showLoading();

        const response =
            await fetch(

                "http://localhost:3000/api/news"

            );

        if(!response.ok){

            throw new Error(

                "Erro ao buscar notícias"

            );

        }

        const news =
            await response.json();

            /* ===================================
   FETCH YOUTUBE
=================================== */

const youtubeResponse =
    await fetch(

        "http://localhost:3000/api/youtube"

    );

const youtubeData =
    await youtubeResponse.json();

const youtubeVideos =
    youtubeData.items
        .map(video => ({

            type:
                "video",

            title:
                video.snippet.title,

            description:
                video.snippet.description,

            content:
                video.snippet.description,

            image:
                video.snippet.thumbnails?.high?.url ||

                video.snippet.thumbnails?.medium?.url ||

                video.snippet.thumbnails?.default?.url,

            url:
                `https://youtube.com/watch?v=${
                    video.id?.videoId || video.id
                }`,

            source:
                "YOUTUBE",

            category:
                "VIDEO",

            duration:
                "LIVE",

            views:
                video.snippet.channelTitle,

            videoId:
                video.id?.videoId || video.id

        }))

        /* REMOVE INVALIDOS */

        .filter(video => video.videoId);

        /* ===================================
           GUARDA GLOBAL
        =================================== */

       const formattedNews = news.map(item => ({

    ...item,

    type:
        "news",

    aiScore:
        calculateNewsScore(item),

    sentiment:
        getSentiment(item)

}));

/* ===================================
   MERGE FEED
=================================== */

globalNews = [

    ...formattedNews,

    ...youtubeVideos

];

globalNews.sort(() => Math.random() - 0.5);



        /* ===================================
           LIMPA FEED
        =================================== */

        feedSection.innerHTML = "";

        /* ===================================
           HERO
        =================================== */

        if(globalNews.length > 0){

            renderHeroCard(globalNews[0]);

        }

        /* ===================================
           RENDER
        =================================== */
globalNews.forEach(item => {

    createNewsCard({

        type:
            item.type,

        title:
            item.title,

        description:
            item.description,

        content:
            item.content,

        image:
            item.image,

        url:
            item.url,

        category:
            item.category ||
            item.source ||
            "FOOTBALL",

        duration:
            item.duration || "LIVE",

        views:
            item.views ||
            `AI Score ${item.aiScore || 80}`,

        sentiment:
            item.sentiment,

        videoId:
            item.videoId || null

    });

});

        lazyLoadImages();

    }

    catch(error){

        console.log(error);

        showError();

    }

}


/* =======================================
   INICIAR
======================================= */

/* =======================================
   HERO CARD
======================================= */

function renderHeroCard(news){

    const hero = document.querySelector("#heroCard");

    hero.innerHTML = `

        <div 
            class="media lazy-image"
           data-bg="${news.image || ''}"
        >

            <div class="video-overlay"></div>

        </div>

        <div class="card-info">

            <span class="tag">

                BREAKING NEWS

            </span>

            <h2>

                ${news.title}

            </h2>

            <p>

                ${news.description || "Última notícia do futebol internacional."}

            </p>

        </div>

    `;

}

fetchNews();



/* =======================================
   LAZY LOADING
======================================= */

function lazyLoadImages(){

    const images = document.querySelectorAll(".lazy-image");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                const image = entry.target;

                const bg = image.getAttribute("data-bg");

                image.style.backgroundImage = `url('${bg}')`;

                observer.unobserve(image);

            }

        });

    });

    images.forEach(image => {

        observer.observe(image);

    });

}

/* =======================================
   FILTRAR NOTÍCIAS
======================================= */
/* =======================================
   AI SCORE SYSTEM
======================================= */

function calculateNewsScore(news){

    let score = 0;

    const title =
        news.title?.toLowerCase() || "";

    const description =
        news.description?.toLowerCase() || "";

    /* ===================================
       TRENDING KEYWORDS
    =================================== */

    const trendingKeywords = [

        "mbappe",
        "real madrid",
        "barcelona",
        "arsenal",
        "chelsea",
        "manchester city",
        "champions",
        "transfer",
        "breaking",
        "exclusive",
        "goal",
        "highlight",
        "rumor",
        "fifa",
        "world cup"

    ];

    trendingKeywords.forEach(keyword => {

        if(
            title.includes(keyword) ||
            description.includes(keyword)
        ){

            score += 15;

        }

    });

    /* ===================================
       BREAKING NEWS
    =================================== */

    if(
        title.includes("breaking") ||
        title.includes("exclusive")
    ){

        score += 30;

    }

    /* ===================================
       POPULAR CLUBS
    =================================== */

    if(
        title.includes("real madrid") ||
        title.includes("barcelona")
    ){

        score += 25;

    }

    /* ===================================
       CHAMPIONS LEAGUE
    =================================== */

    if(title.includes("champions")){

        score += 20;

    }

    /* ===================================
       LONG TITLE BOOST
    =================================== */

    if(title.length > 50){

        score += 10;

    }

    /* ===================================
       RANDOM ENGAGEMENT
    =================================== */

    score += Math.floor(Math.random() * 30);

    return score;

}

/* =======================================
   SENTIMENT ANALYSIS
======================================= */

function getSentiment(news){

    const text = `

        ${news.title}
        ${news.description}

    `.toLowerCase();

    /* POSITIVE */

    const positiveWords = [

        "win",
        "victory",
        "amazing",
        "great",
        "champion",
        "goal",
        "success"

    ];

    /* NEGATIVE */

    const negativeWords = [

        "injury",
        "crisis",
        "scandal",
        "loss",
        "failure",
        "problem"

    ];

    let sentiment = "Neutral";

    positiveWords.forEach(word => {

        if(text.includes(word)){

            sentiment = "Positive";

        }

    });

    negativeWords.forEach(word => {

        if(text.includes(word)){

            sentiment = "Negative";

        }

    });

    return sentiment;

}

function filterNews(){

    const searchValue = document
        .querySelector("#searchInput")
        .value
        .toLowerCase();

    let filtered = globalNews.filter(news => {

        if(news.type === "video"){

    return true;

}

        const title =
            news.title?.toLowerCase() || "";

        const description =
            news.description?.toLowerCase() || "";

        const matchesSearch =

            title.includes(searchValue) ||

            description.includes(searchValue);

        /* CATEGORIAS */

        let matchesCategory = true;

        if(currentCategory === "transfer"){

            matchesCategory =
                title.includes("transfer") ||
                description.includes("transfer");

        }

        if(currentCategory === "champions"){

            matchesCategory =
                title.includes("champions") ||
                description.includes("champions");

        }

        if(currentCategory === "selection"){

            matchesCategory =
                title.includes("brasil") ||
                title.includes("seleção");

        }

        if(currentCategory === "rumors"){

            matchesCategory =
                title.includes("rumor") ||
                title.includes("target");

        }

        if(currentCategory === "breaking"){

            matchesCategory =
                title.includes("breaking") ||
                description.includes("urgent");

        }

        return matchesSearch && matchesCategory;

    });

    renderFilteredNews(filtered);

}

/* =======================================
   RENDER FILTRADO
======================================= */

function renderFilteredNews(newsArray){

    feedSection.innerHTML = "";

    newsArray.forEach(item => {

    createNewsCard(item);

});

    lazyLoadImages();

}

/* =======================================
   BOTÕES DE FILTRO
======================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        filterNews();

    });

});


/* =======================================
   PESQUISA
======================================= */

const searchInput =
    document.querySelector("#searchInput");

searchInput.addEventListener("input", () => {

    filterNews();

});


/* =======================================
   MODAL
======================================= */

const modal =
    document.querySelector("#newsModal");

const modalBody =
    document.querySelector("#modalBody");

const closeModal =
    document.querySelector("#closeModal");


/* =======================================
   ABRIR MODAL
======================================= */

function openModal(item){

    modal.classList.add("active");

    modalBody.innerHTML = `

        <div class="video-player">

            ${
                item.videoId

                ?

                `

                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/${item.videoId}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>

                `

                :

                `

                <div
                    class="modal-image"
                    style="
                        background-image:url('${item.image}');
                        height:400px;
                        background-size:cover;
                        background-position:center;
                    "
                ></div>

                `
            }

        </div>

        <div class="modal-info">

            <span class="tag">

                ${item.category || "FOOTBALL"}

            </span>

            <h2>

                ${item.title}

            </h2>

            <p>

                ${item.description || ""}

            </p>

            <div class="full-content">

                ${item.content?.replace(/\[\+\d+ chars\]/, "") || ""}

            </div>

            ${
                item.url

                ?

                `

                <a
                    href="${item.url}"
                    target="_blank"
                    class="read-more-btn"
                >

                    Ler notícia completa

                </a>

                `

                :

                ""
            }

        </div>

    `;

}
/* =======================================
   FECHAR MODAL
======================================= */

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


/* =======================================
   FECHAR AO CLICAR FORA
======================================= */

modal.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.classList.remove("active");

    }

});

/* =======================================
   AI REELS
======================================= */

const sponsoredReels = [

    {
        brand:
            "Bet365",

        title:
            "Aposte na Champions League",

        description:
            "Odds especiais para Real Madrid vs City.",

        video:
            "video.mp4",

        cta:
            "Apostar Agora",

        link:
            "https://bet365.com"
    },

    {
        brand:
            "Nike Football",

        title:
            "Nova Mercurial 2026",

        description:
            "Velocidade absurda para extremos modernos.",

        video:
            "nike.mp4",

        cta:
            "Ver Coleção",

        link:
            "https://nike.com"
    }

];

/* =======================================
   AI REELS ROTATION
======================================= */

let currentAiReel = 0;

function rotateAiReels(){

    const reel =
        aiReels[currentAiReel];

    const aiCard =
        document.querySelector(".ai-card");

    aiCard.innerHTML = `

        <div class="ai-reel-container">

            <video
                class="ai-reel-video"
                muted
                autoplay
                loop
                playsinline
            >

                <source
                    src="${reel.video}"
                    type="video/mp4"
                >

            </video>

            <div class="ai-overlay"></div>

        </div>

        <div class="ai-content">

            <span class="tag">

                AI ANALYSIS

            </span>

            <h3>

                ${reel.title}

            </h3>

            <p>

                ${reel.description}

            </p>

            <div class="score">

                <span>Credibilidade</span>

                <strong>${reel.credibility}</strong>

            </div>

        </div>

    `;

    currentAiReel++;

    if(currentAiReel >= aiReels.length){

        currentAiReel = 0;

    }

}

rotateAiReels();

setInterval(() => {

    rotateAiReels();

}, 8000);


