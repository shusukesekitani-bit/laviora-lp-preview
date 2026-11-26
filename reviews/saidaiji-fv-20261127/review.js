(function () {
  const hero = document.querySelector(".preview-selected-fv");
  if (hero && "IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      document.body.classList.toggle("preview-fv-visible", entry.isIntersecting);
    }).observe(hero);
  } else {
    document.body.classList.remove("preview-fv-visible");
  }
  document.querySelectorAll(".swipe-gallery").forEach((gallery) => {
    const slides = [...gallery.children];
    const previous = document.querySelector(
      '[data-gallery-prev="' + gallery.id + '"]',
    );
    const next = document.querySelector(
      '[data-gallery-next="' + gallery.id + '"]',
    );
    const count = document.querySelector(
      '[data-gallery-count="' + gallery.id + '"]',
    );
    let index = 0;
    const update = () => {
      const left = gallery.getBoundingClientRect().left;
      index = slides.reduce(
        (best, slide, i) =>
          Math.abs(slide.getBoundingClientRect().left - left) <
          Math.abs(slides[best].getBoundingClientRect().left - left)
            ? i
            : best,
        0,
      );
      if (count) count.textContent = index + 1 + " / " + slides.length;
      if (previous) previous.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
    };
    const move = (delta) => {
      const target =
        slides[Math.max(0, Math.min(slides.length - 1, index + delta))];
      gallery.scrollBy({
        left:
          target.getBoundingClientRect().left -
          gallery.getBoundingClientRect().left,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    };
    previous?.addEventListener("click", () => move(-1));
    next?.addEventListener("click", () => move(1));
    gallery.addEventListener("scroll", update, { passive: true });
    gallery.addEventListener("keydown", (event) => {
      if (event.target !== gallery) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        move(event.key === "ArrowRight" ? 1 : -1);
      }
    });
    window.addEventListener("resize", update);
    update();
  });
})();
