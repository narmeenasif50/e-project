const topCarousel = document.querySelector('.top-carousel-inner');
const topItems = document.querySelectorAll('.top-carousel-item');
const topTotal = topItems.length;

let topIndex = 0;

document.querySelector('.top-next').addEventListener('click', () => {
  topIndex = (topIndex + 1) % topTotal;
  updateTopCarousel();
});

document.querySelector('.top-prev').addEventListener('click', () => {
  topIndex = (topIndex - 1 + topTotal) % topTotal;
  updateTopCarousel();
});

function updateTopCarousel() {
  topCarousel.style.transform = `translateX(-${topIndex * 100}%)`;
}
