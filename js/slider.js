let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("animation-stop");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("animation-stop");
  }, 400);
});


const burgerSlider = () => {

    const burger = document.querySelector('.burger-nav');
    const nav = document.querySelector('.nav-links');
    const textBox = document.querySelector('.content-container');

    burger.addEventListener('click', () => {

        nav.classList.toggle('burger-active');
        textBox.classList.toggle('fade-textBox');
        
        burger.classList.toggle('burger-active');

    });

}

burgerSlider();


