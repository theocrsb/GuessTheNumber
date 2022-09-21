const random = Math.floor(Math.random() * 101);
// console.log(random);
let btnTest = document.getElementById("btn");
btnTest.addEventListener("click", (e) => {
  e.preventDefault();
  let number = document.getElementById("numberUser");
  let retour = document.getElementById("retour");
  if (isNaN(parseInt(number.value))) {
    //console.log(isNaN(parseInt(number.value)));
    return (retour.innerHTML = `Si vous voulez jouer, veuillez saisir un nombre !`);
  } else if (number.value > 100 || number.value < 0) {
    return (retour.innerHTML = `Si vous voulez jouer, veuillez saisir un nombre, entre 0 et 100 !`);
  }
  // console.log(number.value);
  if (number.value < random) {
    retour.innerHTML = `Le nombre est plus grand que ${number.value}`;
  } else if (number.value > random) {
    retour.innerHTML = `Le nombre est plus petit que ${number.value}`;
  } else if (number.value == random) {
    retour.innerHTML = `L'ordinateur à jouer ${random} également ! Fécilicitations`;
  }
});
let reload = document.getElementById("reload");
reload.addEventListener("click", location.reload);
