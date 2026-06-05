/* =======================================
   PAGE ELEMENTS
======================================= */

const homePage =
    document.querySelector("#homePage");

const aboutPage =
    document.querySelector("#aboutPage");

const contactPage =
    document.querySelector("#contactPage");

/* =======================================
   HIDE ALL
======================================= */

function hideAllPages(){

    homePage.classList.add("hidden-page");

    aboutPage.classList.add("hidden-page");

    contactPage.classList.add("hidden-page");

}

/* =======================================
   HOME PAGE
======================================= */

function showHomePage(){

    hideAllPages();

    homePage.classList.remove("hidden-page");

}

/* =======================================
   ABOUT PAGE
======================================= */

function showAboutPage(){

    hideAllPages();

    aboutPage.classList.remove("hidden-page");

    aboutPage.innerHTML = `

        <div class="page-container">

            <div class="page-header">

                <span class="tag">

                    ABOUT VAR.com

                </span>

                <h1>

                    O futuro da informação desportiva.

                </h1>

            </div>

            <div class="page-content">

                <p>

                    O VAR.com nasceu como uma nova forma
                    de consumir futebol moderno.

                </p>

                <p>

                    A plataforma mistura:

                </p>

                <ul>

                    <li>Notícias em tempo real</li>

                    <li>Vídeos inteligentes</li>

                    <li>IA aplicada ao futebol</li>

                    <li>Feed visual estilo social media</li>

                    <li>Conteúdo patrocinado premium</li>

                </ul>

                <p>

                    O objetivo é transformar notícias
                    desportivas numa experiência visual,
                    rápida e moderna.

                </p>

                <div class="about-advertising">

                    <h2>

                        Publicidade & Sponsored

                    </h2>

                    <p>

                        Empresas, casas de apostas,
                        marcas desportivas e projetos
                        relacionados ao futebol podem
                        anunciar na área Sponsored.

                    </p>

                    <p>

                        Formatos disponíveis:

                    </p>

                    <ul>

                        <li>Vídeos verticais</li>

                        <li>Banners premium</li>

                        <li>Sponsored reels</li>

                        <li>Campanhas de lançamento</li>

                    </ul>

                </div>

            </div>

        </div>

    `;

}

/* =======================================
   CONTACT PAGE
======================================= */

function showContactPage(){

    hideAllPages();

    contactPage.classList.remove("hidden-page");

    contactPage.innerHTML = `

        <div class="page-container">

            <div class="page-header">

                <span class="tag">

                    CONTACTS

                </span>

                <h1>

                    Entre em contacto.

                </h1>

            </div>

            <div class="contact-grid">

                <div class="contact-card">

                    <i class="fas fa-envelope"></i>

                    <h3>Email</h3>

                    <p>

                        teuemail@var.com

                    </p>

                </div>

                <div class="contact-card">

                    <i class="fab fa-instagram"></i>

                    <h3>Instagram</h3>

                    <p>

                        @varfootball

                    </p>

                </div>

                <div class="contact-card">

                    <i class="fab fa-github"></i>

                    <h3>GitHub</h3>

                    <p>

                        github.com/teuuser

                    </p>

                </div>

                <div class="contact-card">

                    <i class="fas fa-phone"></i>

                    <h3>Telefone</h3>

                    <p>

                        +244 xxx xxx xxx

                    </p>

                </div>

            </div>

        </div>

    `;

}