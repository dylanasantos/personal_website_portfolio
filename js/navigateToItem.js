document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll('.link, .ceiling-link').forEach(link => {
    link.addEventListener('click', e => {
    const id = link.dataset.target;
    const target = document.getElementById(id);

    if (target) {
        e.preventDefault(); // only stop navigation if scrolling
        target.scrollIntoView({ behavior: 'smooth' });
    }
    });
});
});