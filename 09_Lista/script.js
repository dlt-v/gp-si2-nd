// 2. Zapisz element 'przyciskDodaj' i przypisz do niego nasłuchiwacz zdarzeń.
const przyciskDodaj = document.querySelector('#przyciskDodaj');
const listaZadan = document.querySelector('#listaZadan');
const trescZadania = document.querySelector('#element');

przyciskDodaj.addEventListener('click', dodajElement);
listaZadan.addEventListener('click', usunElement);

function dodajElement() {
    let tekstZadania = trescZadania.value.trim();

    if (tekstZadania.length == 0) {
        document.querySelector('#komunikat').textContent =
            'Nie możesz dodać pustego napisu.';
        return;
    }
    document.querySelector('#komunikat').textContent = '';
    listaZadan.innerHTML += `<li>${tekstZadania}</li>`;
    trescZadania.value = '';

    console.log(tekstZadania);
}

function usunElement(){
    
}