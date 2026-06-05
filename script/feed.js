const feedSection =
    document.querySelector(".feed-section");

function renderFeed(feed){

    feedSection.innerHTML = "";

    if(feed.length > 0){

        renderHeroCard(feed[0]);

    }

    feed.forEach(item => {

        createNewsCard(item);

    });

    lazyLoadImages();

}

function createNewsCard(item){

    const card =
        document.createElement("article");

    card.classList.add("feed-card");

    card.innerHTML = `

        <div
            class="feed-image lazy-image"
            data-bg="${item.image || "https://picsum.photos/500/300"}"
        >

            <div class="video-overlay"></div>

            <div class="play-button">

                ▶

            </div>

        </div>

        <div class="feed-text">

            <span class="tag">

                ${item.category || "FOOTBALL"}

            </span>

            <h3>

                ${item.title}

            </h3>

            <p>

                ${item.description || ""}

            </p>

        </div>

    `;

    card.addEventListener(

        "click",

        () => {

            openModal(item);

        }

    );

    feedSection.appendChild(card);

}