let movies = [
  {
    name: "Docter Strange in the Multiverse of Madness",
    des:
      " When the Multiverse is unlocked, Docter Strange must enlist help from old and new allies in order to confront a surprising adversary.",
    image: "images/drstrange.webp"
  },
  {
    name: "Anupama",
    des:
      " Despite the many challenges thrown her way, Anupama begins a new chapter of her life post-divorce. Head held always high, what's waiting for her next?....",
    image: "images/anupma.webp"
  },
  {
    name: "Yeh Rishta Kya Kehlata Hai",
    des:
      " Kartik, Naira and Sirat's daughters are all grown up. Akshara immensely loves Aarohi. But, what happens when they are caught in a love triangle with Abhimanyu?....",
    image: "images/yerishta.webp"
  },
  {
    name: "Ghatothkach: Master of Magic",
    des:
      "With his pecuiliar powers, Ghatothkach sets out to battle the evil forces with his friends and an elephant pal, Gajju...",
    image: "images/ghatotkach.webp"
  }
];
const caraousel = document.querySelector(".caraousel");
let slider = [];

let slideIndex = 0; //Track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  // crrate DOM elements
  let slide = document.createElement("div");
  var imageElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imageElement.appendChild(document.createTextNode());
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imageElement);
  caraousel.appendChild(slide);

  // setting up the images
  imageElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting up the elemnts classname

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  slider.push(slide);

  if (slider.length) {
    slider[0].style.marginLeft =
      "calc ( - ${ 100 * ( slider.length - 2 ) }% - $ { 30 * (slider.length - 2 ) } px )";
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// video cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card slider
