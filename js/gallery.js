document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".gallery-item");
  let currentIndex = 0;

  // Helper Function: Activate and Deactivate Images
  const updateImages = (index) => {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
        item.classList.remove("inactive");
      } else {
        item.classList.remove("active");
        item.classList.add("inactive");
      }
    });
  };

  // Slideshow Logic
  const startSlideshow = () => {
    updateImages(currentIndex);
    setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length; // Loop back to first image
      updateImages(currentIndex);
    }, 3000); // Match interval timing with CSS transition duration
  };

  // Start Slideshow
  startSlideshow();
});
