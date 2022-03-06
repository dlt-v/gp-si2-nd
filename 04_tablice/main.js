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
*/
