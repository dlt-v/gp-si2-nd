//zapisywanie/cache'owanie elementów
// const przycisk = document.getElementById('przycisk');

// dodawanie nasłuchiwacza na zdarzenia
// przycisk.addEventListener('click', przycikKlikniety);

// function przycikKlikniety() {
//     console.log('Zostałem kliknięty.');
// }

/*
ZADANIE
Dodaj event listener dla podwójnego kliknięcia (dblclick) oraz wyloguj stosowny tekst.



button2.addEventListener('dblclick', doubleClicked);
function doubleClicked() {
    console.log('Podwójnie kliknięto!');
}
*/

// FUNKCJE ANONIMOWE - BEZ NAZWY
// document.getElementById('przycisk').addEventListener('click', function () {
//     console.log('Zostałem kliknięty');
// });
/*
Zadanie 2
Dodaj zdarzenie 'focus' do obrazka. Czyli dodaj do niego ID, wyszukaj i przetestuj.
*/
// document.getElementById('przycisk').addEventListener('focus', function () {
//     console.log('focus');
// });

// przycisk = document.getElementsByClassName('zmiana-naglowka')[0];
// przycisk.addEventListener('click', zmianaNazwy);

// function zmianaNazwy() {
//     document.querySelector('h1').innerHTML = 'Zostałem zmienony';
// }
// Zadanie: za pomocą przycisku zmień element h2
const login = document.querySelector('#login');
const password = document.querySelector('#password');
const button = document.querySelector('#submit');
const result = document.querySelector('#result');

button.addEventListener('click', checkLogin);

function checkLogin() {
    let log = login.value;
    let pass = password.value;
    if (log === 'Tomek' && pass === 'Tomek_1234') {
        result.innerHTML = 'Poprawnie zalogowano!';
    } else {
        result.innerHTML = 'Niepoprawny login lub hasło.';
    }
}
