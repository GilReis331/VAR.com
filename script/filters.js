
console.log("filters loaded");
const filterButtons =
    document.querySelectorAll(".filter-btn");

const homePage =
    document.querySelector("#homePage");



/* ======================================
   ESCONDER PÁGINAS
====================================== */

function hidePages(){

    homePage.classList.add("hidden-page");
    aboutPage.classList.add("hidden-page");
    contactPage.classList.add("hidden-page");

}

/* ======================================
   BOTÕES
====================================== */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove a classe active de todos os botões
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Adiciona active apenas ao botão clicado
        button.classList.add("active");

        const category =
            button.dataset.category;

        hidePages();

        /* HOME */

        if(category === "all"){

            homePage.classList.remove("hidden-page");

        }

        /* ABOUT */

        if(category === "transfer"){

            aboutPage.classList.remove("hidden-page");

        }

        /* CONTACT */

        if(category === "champions"){

            contactPage.classList.remove("hidden-page");

        }

    });

});



