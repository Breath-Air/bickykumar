window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('color', window.scrollY > 100);
}