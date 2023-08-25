const topMenu = document.getElementById('nvd-top-menu')
const toggleMenuIcon = document.getElementById('nvd-toggle-top-menu-icon')
const title = document.getElementById('title')

toggleMenuIcon.addEventListener('click', (e) =>{
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('nvd-topmenu-expanded')
        title.classList.toggle('mt-[300px]')
    }
)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    onReachEnd: function () {
        swiper.slideTo(0); // Chuyển tới slide đầu tiên
    },
});