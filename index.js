// template_1vbi23p
// service_ipobb3u
// RK2bfiTVBu2fmF3ix

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const sucess = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_ipobb3u',
            'template_1vbi23p',
            event.target,
            'RK2bfiTVBu2fmF3ix'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            sucess.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert(
                "The email service is temporarily unavailable. Please contact me directly on ftechzalez@gmail.com."
            );
        })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}