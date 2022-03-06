let listaZakupow = []; // pusta lista/tablica
console.log(listaZakupow.length); // metoda: długosc tablicy

let listaObecnosci = ['Tymek', 'Tomek', 'Atomek'];
console.log(listaObecnosci[0]); //indeksy tablicy zaczyną się w JS od zera
console.log(listaObecnosci[2]); // sposób dostania wartości z tablicy
console.log(listaObecnosci.length);

listaObecnosci.push('Romek'); //dodawanie elementu na koniec tablicy
console.log(listaObecnosci);
listaObecnosci.pop(); // usuwanie z konca tablicy
console.log(listaObecnosci);

listaObecnosci.shift(); //ususwanie z początku tablicy
console.log(listaObecnosci);

console.log(listaObecnosci.reverse()); //odrawaca listę

let slowa = ['Ala', 'ma', 'kota'];
console.log(slowa.join(' - '));

console.log(...slowa[0]); //spread, rozbijanie elementu string na pojedyncze literki

/*
Stwórz program, który będzie sprawdzał czy podany wyraz to Palindrom.
Palindrom jest to wyraz który brzmi tak samo od początku do końca, jak i od końca do początku.
Ala - alA
Jeżeli jest palindromem poinformuj użytkownika za pomocą napisu w konsoli.



let tekstA = 'paweł';
let tekstB = 'racecar';
let tekstC = 'paweł';
let odwrotTesktA = tekstA;


odwrotTesktA = [...odwrotTesktA]; //rozbijamy go na tablice literek

odwrotTesktA.reverse(); //odwraca tablice

odwrotTesktA = odwrotTesktA.join(''); //łączy tablice w tekst

console.log(tekstA, odwrotTesktA);

if (tekstA === odwrotTesktA) {
    console.log(`${tekstA} jest palindromem.`);
} else {
    console.log(`${tekstA} nie jest palindromem.`);
}
*/

/*
Napisz program, który będzie przeliczać punkty zdobyte na maturze według kryteriów dla kierunku informatyka.

podstawa:
1% = 1 pkt

rozszerzenie:
1% = 1.5 pkt 

Stórz tablicę, w której zapiszesz liczbę zdobytych pkt z matury i wskażesz jej poziom.

let wyniki = []
wyniki[0] - podstawa
wyniki[1] - roszerzenie

dostałeś X pkt z obu matur

let podstawa = Number(prompt('Il % na maturze podstawowej'))
let rozszerz = Number(prompt('Il % na maturze rozszerzonej'))
let wyniki = []
wyniki[0] = podstawa
wyniki[1] = rozszerz*1.5
wyniki[2] = wyniki[0]+wyniki[1]
console.log('Matura podst '+wyniki[0])
console.log('Matura rozszerz '+wyniki[1])
console.log('Łączna il pkt '+wyniki[2])
*/
