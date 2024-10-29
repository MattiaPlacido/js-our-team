// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
// Bonus
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const cardContainer = document.getElementById("team-cards-group");

const generateCard = (name, role, email, image) => {
  return `<div class="col mb-3 px-2">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="./${image}" class="img-fluid"/>
        </div>
        <div class="col-md-8 bg-black text-white p-3">
          <h5 class="fw-bold">${name}</h5>
          <p>${role}</p>
          <a href="">${email}</a>
        </div>
      </div>
    </div>`;
};

const generateArrayOfCards = (array) => {
  let leanToString = ``;
  array.forEach((element) => {
    leanToString += generateCard(
      element.name,
      element.role,
      element.email,
      element.img
    );
  });
  return leanToString;
};

cardContainer.innerHTML = generateArrayOfCards(teamMembers);

//ottengo i dati degli input
const inputButton = document.getElementById("inputButton");

inputButton.addEventListener("click", () => {
  const name = document.getElementById("inputName");
  const role = document.getElementById("inputRole");
  const email = document.getElementById("inputEmail");
  const img = document.getElementById("inputImg");

  if (name.value != "" && role.value != "" && email.value != "") {
    if (img.value == "") {
      // non metto direttamente  * img.value = "indirizzo" * perchè poi l'indirizzo va a piazzarsi visivamente dentro il form che chiede il dato e l'utente lo vede
      cardContainer.innerHTML += generateCard(
        name.value,
        role.value,
        email.value,
        "img/default.jpg"
      );
    } else {
      cardContainer.innerHTML += generateCard(
        name.value,
        role.value,
        email.value,
        img.value
      );
    }
  } else {
    alert("Inserisci tutti i dati prima di aggiungere un membro!");
  }
});
