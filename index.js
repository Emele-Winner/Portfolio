let header = document.getElementsByTagName('header')[0];

// Function to change header background on scroll
function headerScroll() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        header.style.backdropFilter = 'blur(5px)';
    } else {
        header.style.backgroundColor = 'rgb(8, 15, 22)';
        header.style.backdropFilter = 'blur(0px)';
    }
}
window.addEventListener('scroll', headerScroll);
