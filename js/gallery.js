document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".gallery-item");
  const overlay = document.querySelector(".image-overlay");
  const overlayTitle = document.querySelector(".image-title");
  const overlayDescription = document.querySelector(".image-description");

  let currentIndex = 0;
  let slideshowInterval;

  const startSlideshow = () => {
    slideshowInterval = setInterval(() => {
      items.forEach((item) => item.classList.remove("active"));
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add("active");
    }, 2000);
  };

  const stopSlideshow = () => clearInterval(slideshowInterval);

  const openOverlay = (item) => {
    stopSlideshow();
    const title = item.dataset.title;
    const description = item.dataset.description;
    overlayTitle.textContent = title;
    overlayDescription.textContent = description;
    overlay.classList.add("active");
  };

  const closeOverlay = () => {
    overlay.classList.remove("active");
    startSlideshow();
  };

  // Initialize slideshow
  startSlideshow();

  // Click on gallery items
  items.forEach((item) =>
    item.addEventListener("click", () => {
      openOverlay(item);
    })
  );

  // Close overlay on click outside or scroll
  overlay.addEventListener("click", closeOverlay);
  window.addEventListener("scroll", closeOverlay);
});
