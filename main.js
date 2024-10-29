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

//prendo l'id dell'oggetto contenente le card

const cardContainer = document.getElementById("team-cards-group");

const generateCard = (name, role, email, image) => {
  return `            <div class="col bg-black text-white d-flex justify-content-between align-items-center">
                <img src="./${image}" class="w-25">
                <div>
                    <h5 class="fw-bold">${name}</h5>
                    <p>${role}</p>
                    <a href="">${email}</a>
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
