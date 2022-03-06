//Deklaracja funkcji
function powitanie() {
    console.log('Witaj!');
}

// powitanie(); // wywołanie funkcji

//Deklaracja funkcji z argumentami
// function powitanie2(imie) {
//     //"Tomek"
//     //"Witaj Tomek"
//     //konkatenacja - łączenie napisów
//     // console.log('Witaj ' + imie);
//     //interpolacja - czyli dollar stringi
//     console.log(`Witaj ${imie}`);
// }
// // powitanie2('Adam');
// // powitanie2('Tomek');
// // powitanie2('Paweł');

// function powitanie3(imie, nazwisko) {
//     console.log(`Nazywam się ${imie} ${nazwisko}`);
// }
// powitanie3('Adam', 'Nowak');

/*
Zadanie
Napisz funkcję, która dostaje 3 argumenty i loguje do konsoli 'Nazywa się IMIE NAZWISKO i mam ILOSC_LAT lat.'

const imie=prompt('imie')
const nazwisko=prompt('nazwisko')
const wiek=prompt('lat')

function powitanie(imie, nazwisko, wiek) {
  console.log(`Moje imie to ${imie}, nazwisko ${nazwisko}, wiek ${wiek}`)
}

powitanie(imie, nazwisko, wiek)
*/

//Funkcja która zwraca wartość
// function powitanie4(imie) {
//     return `Witaj ${imie}`;
// }

// let zmienna = powitanie4('Tymek');
// console.log(zmienna);

// function cToF(celcjusz) {
//     // fahr = (celjusz * 9/5) + 32
//     wynik = (celcjusz * 9) / 5 + 32;

//     return wynik;
// }
// let fahr = cToF(20);
// console.log(`20 stopni celcjusza to ${fahr} stopni Fahrenheita.`);

/*
Utwórz funkcję, która tłumaczy stopnie Fahrenheita na stopnie Celcjusza
formułka: 

var f=prompt("Ile °F")
function FdoC(f) {
  var c=(f-32)*5/9
  console.log(c)
}
FdoC(f)
*/

//Zasada DRY - Don't Repeat Yourself - Nie Powtarzaj Się

//Operowanie i manipulacja napisami - metody obiektu string
let napis = 'Ala ma kota';
let napis2 = 'Paweł ma psa';
// console.log(napis + ' ' + napis2); // konkatenacja
// console.log(`${napis} ${napis2}`); //interpolacja
// indeksy zaczynają się od zera
napis[0];
// console.log(napis2[4]);
// console.log(napis.length);
// console.log(napis2.charAt(4), napis2[4]);
// console.log(napis.toUpperCase());
// console.log(napis.toLowerCase());
// console.log(napis.startsWith('Ala'));
// console.log(napis2.startsWith('Ala'));
// let napis3 = '       Jestem tekst ze spacjami             ';
// console.log(napis3.trim());
//Zadanie zapisz swoje imie i wyloguj tylko pierwszą i ostatnią literę.

// console.log(napis.replace('a', '#'));
// //Zadanie: Odczytaj tekst z prompt. Zamień go na duże litery, i sprawdź czy zaczyna się słowem '*-'
// let tekst = '*-Ala';
// tekst = tekst.toUpperCase();
// console.log(tekst.startsWith('*-'));
//Wyrażenia regularne - Regular expressions

const wzorzec = /[%]/g;
//    / - określa gdzie zaczyna się wyrażenie regularne
//    / [] - w środku nawiasów kwadratowych wpisujemy znaki jakie chcemy wyszukać
//    /  g - oznacza żeby wyszukać WSZYSTKIE znaki pasujące, nie tylko pierwszy znak

let tekst = 'Gig%ci Programow%ia';
console.log(tekst.replace(wzorzec, 'an'));

// Zadanie (domowe)
/*
mamy zmienną:
const zakodowanyCytat=' +#wsz%||wyd#j%||się*||że||coś||j%st||ni%możli
w%*||dopóki||ni% +ost#ni%||to||+robion%' ;

napisz funkcję, która zastąpi znaki w tym tekście takim kluczem:
a to #
e to %
' ' to ||
z to +
, to * 


szyfr=(szyfr.replace(/[#]/g, 'a').replace(/[%]/g, 'e').replace(/[||]/g, ' ').replace(/[+]/g, 'z').replace(/[*]/g, ','))

TODO: git
*/
