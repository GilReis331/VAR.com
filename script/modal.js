const modal =
    document.querySelector("#newsModal");

const modalBody =
    document.querySelector("#modalBody");

const closeModal =
    document.querySelector("#closeModal");

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
                    frameborder="0"
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

            <h2>

                ${item.title}

            </h2>

            <p>

                ${item.description || ""}

            </p>

            <div class="full-content">

                ${item.content || ""}

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

closeModal.addEventListener(

    "click",

    () => {

        modal.classList.remove("active");

    }

);

modal.addEventListener(

    "click",

    event => {

        if(event.target === modal){

            modal.classList.remove("active");

        }

    }

);
