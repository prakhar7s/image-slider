const paginationButtons = document.querySelectorAll(".button");
const imageContainer = document.querySelector(".img-container");

const images = [
  "./assets/images/cold.jpeg",
  "./assets/images/sun-set.jpeg",
  "./assets/images/night.jpeg",
  "./assets/images/water.jpeg",
];

let preClicked = paginationButtons[0];

changeImage(0);

paginationButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    this.className += " active";
    changeImage(index);
    preClicked.className = "button";
    preClicked = this;
  });
});

function changeImage(index) {
  imageContainer.innerHTML = "";
  const img = document.createElement("img");
  img.classList.add("image");
  img.src = images[index];
  img.draggable = false;

  imageContainer.appendChild(img);
}
