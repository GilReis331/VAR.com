/* =======================================
   UI HELPERS
======================================= */

function showLoading(){

    const feedSection =
        document.querySelector(".feed-section");

    feedSection.innerHTML = "";

    for(let i = 0; i < 6; i++){

        const skeleton =
            document.createElement("div");

        skeleton.classList.add("skeleton-card");

        skeleton.innerHTML = `

            <div class="skeleton-image shimmer"></div>

            <div class="skeleton-content">

                <div class="skeleton-line small shimmer"></div>

                <div class="skeleton-line shimmer"></div>

                <div class="skeleton-line shimmer"></div>

            </div>

        `;

        feedSection.appendChild(skeleton);

    }

}

function showError(){

    const feedSection =
        document.querySelector(".feed-section");

    feedSection.innerHTML = `

        <div class="error">

            Erro ao carregar notícias.

        </div>

    `;

}




const aboutPage =
    document.querySelector("#aboutPage");

aboutPage.innerHTML = `

    <div class="about-hero">

        <span class="about-tag">
            NEXT GEN FOOTBALL MEDIA
        </span>

        <h1>
            Football powered by AI,
            media and real-time trends.
        </h1>

        <p>
            VAR.com is a modern football media platform
            designed to merge news, videos, analytics,
            AI ranking systems and sponsored sports content
            into a single immersive experience.
        </p>

    </div>

    <div class="about-grid">

        <div class="about-card">

            <h2>
                Why VAR.com exists
            </h2>

            <p>
                Traditional football media became static.
                VAR.com was created to transform football
                discovery into a dynamic AI-powered feed.
            </p>

        </div>

        <div class="about-card">

            <h2>
                AI + Football
            </h2>

            <p>
                Our AI systems organize trends,
                rank relevance and surface
                the most engaging football stories.
            </p>

        </div>

        <div class="about-card">

            <h2>
                Sponsored Media
            </h2>

            <p>
                Brands and betting companies
                can promote sports campaigns
                directly inside the vertical
                sponsored reels system.
            </p>

        </div>

    </div>

`;



const contactPage =
    document.querySelector("#contactPage");

contactPage.innerHTML = `

    <div class="contact-hero">

        <h1>
            Contact & Advertising
        </h1>

        <p>
            Reach out for partnerships,
            sponsored campaigns and collaborations.
        </p>

    </div>

    <div class="contact-grid">

        <div class="contact-card">

            <h2>
            <i class="fas fa-envelope"></i>
            Email
            
            </h2>

                <a
                href="mailto:gilbertocasimiromavinga@gmail.com"
                class="contact-link"
            >
                gilbertocasimiromavingambungo@gmail.com
            </a>

        </div>

        <div class="contact-card">

            <h2>
            <i class="fab fa-instagram"></i>
            Instagram
            </h2>

                 <a
                href="https://instagram.com/gilbertocasimiromavingambungo"
                target="_blank"
                class="contact-link"
            >
                @gilbertocasimiromavingambungo
            </a>

        </div>

        <div class="contact-card">

            <h2>
             <i class="fab fa-github"></i>
            GitHub
            </h2>

              <a
                href="https://github.com/GilReis331"
                target="_blank"
                class="contact-link"
            >
                github.com/GilReis331
            </a>

        </div>
        

        <div class="contact-card advertising-card">

    <h2>
        Publicidade
    </h2>

    <p>
        Promova sua marca dentro do feed,
        hero banners e Sponsored Reels do VAR.com.
    </p>

    <div class="ad-features">

        <span>✔ Sponsored Reels</span>
        <span>✔ Hero Banner</span>
        <span>✔ Feed Placement</span>
        <span>✔ Football Audience</span>

    </div>

    <a
        href="mailto:gilbertocasimiromavingambungo@gmail.com?subject=Publicidade VAR.com"
        class="ad-btn"
    >
        Anunciar Agora
    </a>

</div>

    </div>

`;


function showHomePage(){

    document
        .querySelector("#homePage")
        .style.display = "block";

    document
        .querySelector("#aboutPage")
        .style.display = "none";

    document
        .querySelector("#contactPage")
        .style.display = "none";

}

function showAboutPage(){

    document
        .querySelector("#homePage")
        .style.display = "none";

    document
        .querySelector("#aboutPage")
        .style.display = "block";

    document
        .querySelector("#contactPage")
        .style.display = "none";

}

function showContactPage(){

    document
        .querySelector("#homePage")
        .style.display = "none";

    document
        .querySelector("#aboutPage")
        .style.display = "none";

    document
        .querySelector("#contactPage")
        .style.display = "block";

}