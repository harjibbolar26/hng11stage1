const typedWord = document.querySelector(".typed-word");
const cursor = document.querySelector(".cursor");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const day = document.querySelector("#day");
const time = document.querySelector("#time");
let current = document.querySelector(".current");
// const autoSlide = true;

const wordArray = ["React.js", "Next.js", "Typescript"];

let slideInterval;
let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const eraseDelay = 100;
const newWordDelay = 2000;

const type = () => {
  if (letterIndex < wordArray[wordArrayIndex].length) {
    typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
    letterIndex++;
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newWordDelay);
  }
};

const erase = () => {
  if (letterIndex > 0) {
    typedWord.textContent = wordArray[wordArrayIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }
    setTimeout(erase, eraseDelay);
  } else {
    wordArrayIndex++;
    cursor.classList.remove("typing");
    setTimeout(type, typingDelay);
    if (wordArrayIndex >= wordArray.length) {
      wordArrayIndex = 0;
    }
  }
};

type();

// const nextSlide = () => {
//   let current = document.querySelector(".current");
//   current.classList.remove("current");
//   if (current.nextElementSibling) {
//     current.nextElementSibling.classList.add("current");
//   } else {
//     slides[0].classList.add("current");
//   }
//   current.classList.remove("current");
// };

// const prevSlide = () => {
//   let current = document.querySelector(".current");
//   current.classList.remove("current");
//   if (current.previousElementSibling) {
//     current.previousElementSibling.classList.add("current");
//   } else {
//     slides[slides.length - 1].classList.add("current");
//   }
//   current.classList.remove("current");
// };

// next.addEventListener("click", () => {
//   nextSlide();
//   clearInterval(slideInterval);
//   slideInterval = setInterval(nextSlide, 3000);
// });

// prev.addEventListener("click", () => {
//   prevSlide();
//   clearInterval(slideInterval);
//   slideInterval = setInterval(nextSlide, 3000);
// });

// slideInterval = setInterval(nextSlide, 3000);

const date = new Date();
const options = {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric",
};
day.innerHTML = date.toLocaleDateString("en-US", options);
time.innerHTML = date.toUTCString().substring(17, 29);
