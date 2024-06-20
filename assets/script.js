const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const leftBtn = document.querySelector('.arrow_left');
const rightBtn = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');
let imageIndex = 0;

function updateSlider() {
	bannerImg.src = `../project/assets/image/slideshow/${slides
	[imageIndex].image}`;
	tagLine.innerHTML = slides[imageIndex].tagLine;
}

function updateDots() {
	dots.forEach ((dot, index) => {
		if (index === imageIndex) {
			dot.classList.add('dot_selected')
		} else {
			dot.classList.remove('dot_selected')
		}
	})
}

function nextSlide() {
	if (imageIndex < slides.length - 1) {
		imageIndex++;
	} else {
		imageIndex = 0
	}
    updateSlider();
	updateDots();
}

function prevSlide() {
	if (imageIndex > 0) {
		imageIndex--;
	} else {
		imageIndex = slides.length - 1
	}
	updateSlider();
	updateDots();
}

leftBtn.addEventListener('click', prevSlide);
rightBtn.addEventListener('click', nextSlide);

updateSlider();
updateDots();