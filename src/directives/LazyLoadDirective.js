export default {
  created: (el) => {
    function loadImage() {
      const imageElementArr = el.children;

      imageElementArr.forEach((imageElement) => {
        if (imageElement) {
          imageElement.addEventListener("load", () => {
            setTimeout(() => el.classList.add("loaded"), 100);
          });
          imageElement.addEventListener("error", () => console.log("error"));
          imageElement.src = imageElement.dataset.url;
        }
      });
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0",
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
