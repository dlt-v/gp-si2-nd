let wyniki = [];
wyniki[0] = 4;
wyniki[1] = 9;
wyniki[2] = 5;
wyniki[3] = 6;
wyniki[4] = 8;

// console.log(wyniki);
// if (wyniki[0] % 2 == 0) {
//     wyniki[0] = wyniki[0] * 2;
// } else {
//     wyniki[0] = wyniki[0] * 0.5;
// }

// if (wyniki[1] % 2 == 0) {
//     wyniki[1] = wyniki[1] * 2;
// } else {
//     wyniki[1] = wyniki[1] * 0.5;
// }

// if (wyniki[2] % 2 == 0) {
//     wyniki[2] = wyniki[2] * 2;
// } else {
//     wyniki[2] = wyniki[2] * 0.5;
// }

// if (wyniki[3] % 2 == 0) {
//     wyniki[3] = wyniki[3] * 2;
// } else {
//     wyniki[3] = wyniki[3] * 0;
// }

/*
DRY
Don't Repeat Yourself - Nie Powtarzaj Się
*/

// Pętle for

for (let i = 0; i < wyniki.length; i++) {
    // i++ = i = i + 1
    if (wyniki[i] % 2 == 0) {
        wyniki[i] = wyniki[i] * 2;
    } else {
        wyniki[i] = wyniki[i] * 0.5;
    }
}
// for (inkrementator;  warunek; operacja)
// i 0
// // i 1
// // i 2
// // i 3
// // i 4
// console.log(wyniki);

// 1 + 2 + 3 . + 10
let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma += i;
    // suma = suma + i;
}
// console.log(suma);

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

/*
ZADANIE
Utwórz pętlę, która wypisuje tylko liczby parzyste w zakresie od 0 do 20.
liczba % 2 == 0 -> parzyste
liczba % 2 != 0 -> nieparzyste
*/

// for (let i = 0; i <= 20; i = i + 2) {
//     console.log(i);
// }

/*
ZADANIE
Utwórz pętlę, która wypisuje tylko liczby nieparzyste w zakresie od 0 do 30.
liczba % 2 == 0 -> parzyste
liczba % 2 != 0 -> nieparzyste
*/

//OBJECT MATH

// console.log(Math.random()); // generowanie liczb losowych od 0 do 1
// console.log(Math.floor(Math.random() * 10)); // generowanie liczb losowych od 0 do 10

/*
ZADANIE
Utwórz pętle która wypisuje 20 liczb losowych od 0 do 100.
*/
// let i = 0;
// while (i < 10) {
//     console.log(Math.floor(Math.random() * 10));
//     i++;
// }

//break - zatrzymuje pętle
// continue - kontynuuje do następnej iteracji

// for (let i = 0; true; i++) {
//     if (i == 20) break;
//     console.log(i);
// }

// for (let i = 0; true; i++) {
//     if (i % 2 != 0) continue;
//     console.log(i);
//     if (i > 30) break;
// }

/*
Stwórz program do odgadywania losowej liczby z danego przedziału. Jeśli podasz np. liczbę mniejszą od wylosowanej dostaniesz tekst podpowiedzi. 
*/

function zgadnij(a = Math.floor(Math.random() * 10)) {
    console.log('Zgadnij liczbę:');
    // let odp = prompt();
    if (odp == a) {
        console.log('Zgadłeś!');
    } else if (odp < a) {
        console.log('Źle! Liczba jest za mała. Spróbuj jeszcze raz.');
        zgadnij(a);
    } else {
        console.log('Źle! Liczba jest za duża. Spróbuj jeszcze raz.');
        zgadnij(a);
    }
}
// zgadnij();

/*
Mamy tablicę imion.
const imiona = ['Adam', 'Monika','Paweł','Katarzyna','Izabela','Darek']
Utwórz 2 inne tablice które zawierają tylko imiona męskie, a druga tablica imiona żeńskie.
*/
const imiona = [
    'Adam',
    'Monika',
    'Paweł',
    'Katarzyna',
    'Izabela',
    'Darek',
    'Gabriela',
];
let meskie = [],
    zenskie = [];
// console.log(imiona[2][imiona[2].length - 1]);
/*
ADAM = 4
imie[4] !
*/
for (let i = 0; i < imiona.length; i++) {
    let ostatniIndeks = imiona[i].length - 1;
    if (imiona[i][ostatniIndeks] === 'a') {
        zenskie.push(imiona[i]);
    } else {
        meskie.push(imiona[i]);
    }
}
console.log(`Imiona żeńskie: ${zenskie}`);
console.log(`Imiona męskie: ${meskie}`);
