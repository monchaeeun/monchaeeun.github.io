window.addEventListener("DOMContentLoaded", () => {
  const scroll = document.getElementById("scroll");

  window.addEventListener("scroll", () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = (window.scrollY / totalHeight) * 100;

    scroll.style.width = `${percent}%`;
  });

  const object = document.querySelectorAll(".scroll-object");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  object.forEach((el) => observer.observe(el));
  const images = [
    "component/몽환적인 그림.jpg",
    "component/해파리.jpg",
    "component/꽃.jpg",
    "component/몬스터볼.jpg",
  ];

  const fadeImg1 = document.querySelector(".fade-img1");
  const fadeImg2 = document.querySelector(".fade-img2");

  let current = 0;
  let isImgActive = true;

  fadeImg1.src = images[current];
  fadeImg1.classList.add("active");

  setInterval(() => {
    const nextIndex = (current + 1) % images.length;

    if (isImgActive) {
      fadeImg2.src = images[nextIndex];
      fadeImg2.classList.add("active");
      fadeImg1.classList.remove("active");
    } else {
      fadeImg1.src = images[nextIndex];
      fadeImg1.classList.add("active");
      fadeImg2.classList.remove("active");
    }
    current = nextIndex;
    isImgActive = !isImgActive;
  }, 7000);
});
