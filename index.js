const images = [
  {
    image: "./img/img.01.jpg",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "./img/img.02.jpg",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "./img/img.03.jpg",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "./img/img.04.jpg",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "./img/img.05.jpg",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//funzione che genera le immagini nel carrosello
genCarouselImages();
generateMainImage();
function genCarouselImages() {
  for (counter = 0; counter < images.length; counter++) {
    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel--item");

    let carouselImg = document.createElement("img");
    carouselImg.classList.add("img--setUp");
    carouselImg.setAttribute("src", images[counter].image);

    carouselContainer.appendChild(carouselItem);
    carouselItem.appendChild(carouselImg);
  }
}
function generateMainImage() {
  let mainImg = document.createElement("img");
  mainImg.setAttribute("src", images[0].image);
  mainImg.classList.add("img__setUp--main");
  document.querySelector("#mainCarousel").appendChild(mainImg);
}

//hoover degli elementi del carosello
document.querySelectorAll(".img--setUp").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    mainImg = document.querySelector(".img__setUp--main");
    mainImg.setAttribute("src", item.getAttribute("src"));
    item.classList.add("carousel__item--active");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("carousel__item--active");
  });
});

//bottone autoplay
document.querySelector("#btnAutoPlay").addEventListener("click", () => {
  let counter = 0;
  setInterval(() => {
    mainImg = document.querySelector(".img__setUp--main");
    mainImg.setAttribute("src", images[counter++].image);
    console.log(counter);
    if (counter >= images.length) {
      counter = 0;
    }
  }, 3000);
});
