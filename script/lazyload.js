function lazyLoadImages(){

    const images =
        document.querySelectorAll(".lazy-image");

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    const image =
                        entry.target;

                    image.style.backgroundImage =
                        `url('${image.dataset.bg}')`;

                    observer.unobserve(image);

                }

            });

        });

    images.forEach(image => {

        observer.observe(image);

    });

}