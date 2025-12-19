export function carouselFunction() {
  const container = document.getElementById("photos");
  if (!container) return;

  // evita clonar mais de uma vez
  if (!container.dataset.cloned) {
    const children = Array.from(container.children);

    children.forEach(child => {
      const clone = child.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      container.appendChild(clone);
    });

    container.dataset.cloned = "true";
  }

  let scrollSpeed = 1;
  let intervalTime = 35;
  let interval;

  function start() {
    // só inicia quando houver scroll possível
    if (container.scrollWidth <= container.clientWidth) {
      requestAnimationFrame(start);
      return;
    }

    interval = setInterval(() => {
      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, intervalTime);
  }

  start();

  return () => clearInterval(interval);
}
