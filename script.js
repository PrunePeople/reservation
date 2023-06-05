// Récupérer la date actuelle
const currentDate = new Date();

// Obtenir le jour de la semaine (0 pour Dimanche, 1 pour Lundi, etc.)
const currentDay = currentDate.getDay();

// Tableau contenant les noms des jours de la semaine
const daysOfWeek = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

// Tableau contenant les noms des mois
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

// Mettre à jour les noms des jours de la semaine et les dates dans le calendrier
const dayNameElements = document.querySelectorAll(".day-name");
const dayNumberElements = document.querySelectorAll(".day-number");

dayNameElements.forEach((element, index) => {
  const dayIndex = (currentDay + index) % 7; // Gestion du dépassement de la semaine
  element.textContent = daysOfWeek[dayIndex];
});

dayNumberElements.forEach((element, index) => {
  const date = new Date();
  date.setDate(currentDate.getDate() + index);
  const day = date.getDate();
  const month = months[date.getMonth()];
  element.textContent = day;
  element.nextElementSibling.textContent = month;
});

// Formulaire -t Textarea
// Récupérer l'élément textarea et le compteur de caractères
var messageInput = document.getElementById("message");
var charCount = document.getElementById("char-count");

// Ajouter un événement d'écoute pour le comptage des caractères
messageInput.addEventListener("input", function () {
  var remainingChars = 200 - messageInput.value.length;

  // Mettre à jour le texte du compteur
  charCount.textContent = remainingChars + " caractères restants";
});



// Incrémenter et décrémenter inputs
function incrementValue(inputId) {
  const input = document.getElementById(inputId);
  if (input.value < input.max) {
    input.value++;
  }
}

function decrementValue(inputId) {
  const input = document.getElementById(inputId);
  if (input.value > input.min) {
    input.value--;
  }
}



// Validation du formulaire
// Récupérer les éléments du formulaire
const inputAdultes = document.getElementById("inputAdultes");
const inputEnfants = document.getElementById("inputEnfants");
const inputAnimaux = document.getElementById("inputAnimaux");

// Fonction de validation du formulaire
function validerFormulaire() {
  // Récupérer les valeurs des champs
  const adultes = parseInt(inputAdultes.value);
  const enfants = parseInt(inputEnfants.value);
  const animaux = parseInt(inputAnimaux.value);

  // Vérifier si le champ "adultes" est rempli
  if (adultes === 0 || isNaN(adultes)) {
    alert("Veuillez spécifier le nombre d'adultes.");
    return false;
  }

  // Vérifier le minimum et le maximum des champs
  if (adultes < 0 || enfants < 0 || animaux < 0) {
    alert("Les valeurs doivent être supérieures ou égales à zéro.");
    return false;
  }

  if (animaux > 2) {
    alert("Le nombre maximum d'animaux est de 2.");
    return false;
  }

  if (adultes > 6) {
    alert("Le nombre maximum d'adultes est de 6.");
    return false;
  }

  if (enfants > 5) {
    alert("Le nombre maximum d'enfants est de 5.");
    return false;
  }

  // Vérifier la somme totale des adultes et enfants
  const totalPersonnes = adultes + enfants;
  if (totalPersonnes > 6) {
    alert("Le nombre total de personnes ne doit pas dépasser 6.");
    return false;
  }

  // Si toutes les validations passent, le formulaire est valide
  return true;
}



// // Optimisation colonnes
// function generateCalendar() {
//   const calendarContainer = document.getElementById("calendar-container");

//   // Tableau des jours de la semaine
//   const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

//   // Boucle pour générer les colonnes des jours de la semaine
//   for (let i = 0; i < daysOfWeek.length; i++) {
//     // Créer une div pour la colonne
//     const columnDiv = document.createElement("div");
//     columnDiv.classList.add("calendar-column");

//     // Créer le bouton avec le nom du jour
//     const dayButton = document.createElement("button");
//     dayButton.classList.add("calendar-day");
//     dayButton.textContent = daysOfWeek[i];

//     // Ajouter le bouton à la colonne
//     columnDiv.appendChild(dayButton);

//     // Ajouter la colonne au conteneur du calendrier
//     calendarContainer.appendChild(columnDiv);
//   }
// }

// // Appeler la fonction pour générer le calendrier
// generateCalendar();

