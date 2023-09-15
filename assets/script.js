const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//carrousel
document.querySelector('.arrow_left').addEventListener('click', function() {
	console.log("left arrow click")
  });

  document.querySelector('.arrow_right').addEventListener('click', function() {
	console.log("right arrow click")
  });

// Initialisation de l'indice de diapositive actuelle
let currentIndex = 0;

// Obtention du nombre total de diapositives
const totalSlides = slides.length;

// Écouteur d'événements pour la flèche gauche
document.querySelector('.arrow_left').addEventListener('click', function() {
    // Appel de la fonction de mise à jour avec -1 pour aller à la diapositive précédente
    updateCarousel(-1);
});

// Écouteur d'événements pour la flèche droite
document.querySelector('.arrow_right').addEventListener('click', function() {
    // Appel de la fonction de mise à jour avec 1 pour aller à la diapositive suivante
    updateCarousel(1);
});

// Fonction pour mettre à jour le carrousel
function updateCarousel(direction) {
    // Mettre à jour l'indice en fonction de la direction (-1 pour gauche, 1 pour droite)
    currentIndex += direction;

    // Gestion des limites du carrousel (boucle en cas de dépassement)
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Obtention des données de la diapositive actuelle à partir du tableau 'slides'
    const slide = slides[currentIndex];

    // Mise à jour de l'image de la diapositive
    document.querySelector('.banner-img').src = "./assets/images/slideshow/" + slide.image;

    // Mise à jour du texte de la diapositive
    document.querySelector('#banner p').innerHTML = slide.tagLine;

    // Mise à jour du point actif du carrousel
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[currentIndex].classList.add('dot_selected');
}

