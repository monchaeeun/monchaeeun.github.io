window.addEventListener("DOMContentLoaded", () => {
  const inven = document.querySelector("#inven");
  const togle = document.querySelector(".togle");
  let isTogle = false;

  inven.addEventListener("click", () => {
    isTogle = !isTogle;
    if (isTogle == true) {
      togle.classList.add("animate-togle");
    } else {
      togle.classList.remove("animate-togle");
    }
  });

  const scroll = document.getElementById("scroll");

  window.addEventListener("scroll", () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = (window.scrollY / totalHeight) * 100;

    scroll.style.width = `${percent}%`;
  });

  const object = document.querySelectorAll(".scroll-object,.gauge");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");

          const gauge = entry.target;
          switch (gauge.id) {
            case "html":
              gauge.classList.add("animate-html");
              break;
            case "css":
              gauge.classList.add("animate-css");
              break;
            case "js":
              gauge.classList.add("animate-js");
              break;
            case "sql":
              gauge.classList.add("animate-sql");
              break;
            case "spring":
              gauge.classList.add("animate-spring");
              break;
            case "oracle":
              gauge.classList.add("animate-oracle");
              break;
          }

          console.log(
            entry.target.id,
            entry.isIntersecting,
            entry.intersectionRatio
          );

          observer.unobserve(gauge);
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
