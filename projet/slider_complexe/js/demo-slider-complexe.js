var slide = 0;
var images = document.querySelectorAll('figure > img');
var image = document.querySelector('figure > img');
var nbImg = images.length - 1;
var prev = document.getElementById('#prev');
var next = document.getElementById('#next');

    //numSlides = slides.length

//image.style.display = 'none';
//image.style.bacgroundColor = 'pink';

function showhide(img) {
  images.forEach((image) => {
    image.style.display = "none";
  })

  img.style.display = 'block';
}


setInterval(function(){
  slide++
  //si arrive à 6 = repart a 0 : ok

  //Compter le nombre d'images: ok
  if (slide === nbImg) {
    slide = 0;
  }

  console.log(nbImg);

  //trouver moyen d'accédé image par image : o
  showhide(images[slide])
}, 1000);

/* ___________________________________________ */
prev.addEventListener('click', function() {
  //instruction
  //condition
  if ((slide - 1) === -1) {
    slide = nbImg
  } else {
    slide--
  }
})

next.addEventListener('click', function() {
  //instruction
  //condition
  if ((slide + 1) === nbImg) {
    slide = 0
  } else {
    slide++
  }
})






//slider
        //recuperer les imgs (dom) :ok
        //afficher une img :ok
        //cacher les autres: ok
        //apres un temps on cache l'image afficher
        //puis on afficher la suivante

      //button
        //recupere le bouton gauche (#prev)
        //on revient en arriere

        //recupere le bouton droite (#next)
        //on va en avant

        //recuperer le bouton pause
        //met le slide en pause

        //recuperer le bouton go
        //met le slide en action
