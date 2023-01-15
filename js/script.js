const body = document.body
// selectam span-ul cu id 'mode-toggle'
const darkModeToggler = document.getElementById('mode-toggle')
// selectam containerul de carduri
const cardContainer = document.querySelectorAll('.cards-list')[0]

const searchForm = document.getElementById('searchForm')

let searchInput;

// verificam daca exista searchForm in pagina
if (searchForm) {
    // selectam elementul input din formular
    searchInput = searchForm.querySelector('input')
    // atasam functia searchProjects la evenimentele de submit si input
    searchForm.addEventListener('submit', searchProjects);  
}

// veificam daca valoarea introdusa in input se regaseste in numele proiectului
function searchProjects(event)  {
    event.preventDefault()
    const searchValue = searchInput.value
    const found = projects.find(proiect => proiect.nume.toLowerCase().includes(searchValue.toLowerCase()));
    
    

    if (!found || !searchValue) {
        // nu s-a gaist valoarea, returnam toate proietele
        cardContainer.innerHTML = ""
        projects.forEach(function(proiect) {
            generateCard(proiect);
        })
    } else {
        cardContainer.innerHTML = "";
        generateCard(found)
    }


    

    
}


// Adaugam un eveniment de ckick de la mode-toggle 
darkModeToggler.addEventListener('click', function(){
    // cand se da click pe mode-toggle se adauga sau scoate clasa 'dark-mode' la boddy
    body.classList.toggle('dark-mode')
});

let projects = []

if (window.matchMedia('(prefers-color-scheme: dark)').matches && window.matchMedia){
    body.classList.toggle('dark-mode')
}

// generam elementele html necesare pentru carduri folosind informatiile din json

function generateCard(project){
    // generam un list item <li>
    const li = document.createElement('li')
    //generam un div
    const div = document.createElement('div')
    // adaugam clasa 'card' la div
    div.classList.add('card')

    // generam un element <img> 
    const cardImg = document.createElement('img')
    // adaugam path-ul imaginii in atributul src
    cardImg.src = project.imagine
    // adaugam numele imaginii in atributul alt
    cardImg.alt = project.nume
    // adaugam elementul img in div-ul cu clasa card
    div.append(cardImg)

    // generam un nou div pentru continutul cardului
    const cardContent = document.createElement('div')
    // adaugam clasa card-content la div-ul generat
    cardContent.classList.add('card-content')
    // generam un titlu<h3>
    const title = document.createElement('h3')
    // adaugam numele proiectului la titlu
    title.textContent = project.nume
    // adaugam titlul in div-ul cardContent
    cardContent.append(title)

    // generam un paragrav
    const descriere = document.createElement('p')
    // adaugam descrierea la paragraf
    descriere.textContent = project.descriere
    // adaugam paragraf-ul la div-ul cardContent
    cardContent.append(descriere)

    // generam un buton
    const cardBtn = document.createElement('button')
    // adaugam text-ul butonului
    cardBtn.textContent = 'Deschide Proiectul'
    // adaugam link-ul proiectului in buton
    cardBtn.onclick = function(){
        location.href = project.link
    }
    // adaugam butonul in div-ul cardContent
    cardContent.append(cardBtn)

    // adaugam div-ul cardContent in card
    div.append(cardContent)
    // adaugam card-ul in list item
    li.append(div)

    // adaugam li in containerul de card-uri
    cardContainer.append(li)
}