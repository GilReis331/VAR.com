/* =======================================
   HERO ROTATION
======================================= */

let currentHeroIndex = 0;

let heroInterval = null;

/* =======================================
   RENDER HERO
======================================= */

function renderHeroCard(news){

    const hero =
        document.querySelector("#heroCard");

    if(!hero) return;

    hero.classList.add("hero-fade");

    setTimeout(() => {

        hero.innerHTML = `

            <div 
                class="media lazy-image"
                data-bg="${news.image || ''}"
            >

                <div class="video-overlay"></div>

                <div class="play-button">

                    ▶

                </div>

            </div>

            <div class="card-info">

                <span class="tag">

                    ${news.category || "FOOTBALL"}

                </span>

                <h2>

                    ${news.title}

                </h2>

                <p>

                    ${news.description || ""}

                </p>

            </div>

        `;

        /* HERO CLICÁVEL */

        hero.onclick = () => {

            openModal(news);

        };

        lazyLoadImages();

        hero.classList.remove("hero-fade");

    }, 300);

}

/* =======================================
   START HERO ROTATION
======================================= */

function startHeroRotation(){

    if(!globalNews.length) return;

    if(heroInterval){

        clearInterval(heroInterval);

    }

    renderHeroCard(globalNews[0]);

    heroInterval = setInterval(() => {

        currentHeroIndex++;

        if(currentHeroIndex >= globalNews.length){

            currentHeroIndex = 0;

        }

        renderHeroCard(

            globalNews[currentHeroIndex]

        );

    }, 8000);

}