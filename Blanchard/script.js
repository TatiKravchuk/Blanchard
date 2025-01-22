const inpFocus = document.getElementById('second-radio');
inpFocus.focus();

let pictureOne = document.querySelector('.gallery-image__one');
let pictureTwo = document.querySelector('.gallery-image__two');
let pictureThree = document.querySelector('.gallery-image__three');
const firstCheckbox = document.getElementById('first-radio');
const secondCheckbox = document.getElementById('second-radio');
const thirdCheckbox = document.getElementById('third-radio');

function changeImageXIX() {
  if (firstCheckbox.checked) {
    pictureOne.src = './assets/images/xix-gallery-first.jpg';
    pictureTwo.src = './assets/images/xix-gallery-second.jpg';
    pictureThree.src = './assets/images/xix-gallery-third.jpg';
    pictureOne.classList.add('image-show');
    pictureTwo.classList.add('image-show');
    pictureThree.classList.add('image-show');
  }
}

function changeImageXX() {
  if (secondCheckbox.checked) {
    pictureOne.src = './assets/images/xx-gallery-first.jpg';
    pictureTwo.src = './assets/images/xx-gallery-second.jpg';
    pictureThree.src = './assets/images/xx-gallery-third.jpg';
    pictureOne.classList.add('image-show');
    pictureTwo.classList.add('image-show');
    pictureThree.classList.add('image-show');
  }
}

function changeImageXXI() {
  if (thirdCheckbox.checked) {
    pictureOne.src = './assets/images/xxi-gallery-first.jpg';
    pictureTwo.src = './assets/images/xxi-gallery-second.jpg';
    pictureThree.src = './assets/images/xxi-gallery-third.jpg';
    pictureOne.classList.add('image-show');
    pictureTwo.classList.add('image-show');
    pictureThree.classList.add('image-show');
  }
}

pictureOne.addEventListener("animationend", AnimationHandler, false);
pictureTwo.addEventListener("animationend", AnimationHandler, false);
pictureThree.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  pictureOne.classList.remove('image-show');
  pictureTwo.classList.remove('image-show');
  pictureThree.classList.remove('image-show');
}