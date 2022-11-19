let selectedIndex = 0;

const articles = document.getElementsByTagName("article");

function slideRight() {
  console.log(articles.length);
  let next;
  if (selectedIndex < articles.length - 1) next = selectedIndex + 1;
  else next = 0;
  console.log(next);
  const selectedSlide = document.querySelector(
      `[data-index="${selectedIndex}"]`
    ),
    nextSlide = document.querySelector(`[data-index="${next}"]`);
  selectedSlide.dataset.status = "right-out";
  nextSlide.dataset.status = "left";
  setTimeout(() => {
    nextSlide.dataset.status = "selected";
  });

  selectedIndex = next;
}
function slideLeft() {
  console.log(articles.length);
  let next;
  if (selectedIndex > 0) next = selectedIndex - 1;
  else next = articles.length - 1;
  console.log(next);
  const selectedSlide = document.querySelector(
      `[data-index="${selectedIndex}"]`
    ),
    nextSlide = document.querySelector(`[data-index="${next}"]`);
  selectedSlide.dataset.status = "left-out";
  nextSlide.dataset.status = "right";
  setTimeout(() => {
    nextSlide.dataset.status = "selected";
  });
  selectedIndex = next;
}
