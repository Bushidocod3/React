export function restSpread() {

// Zadanie 1

    const namesA = ["Janek", "Asia", "Paweł"];
    const namesB = ["Krzysiek", ...namesA, "Jan", "Karol"];
    console.log(...namesB);
}

// Zadanie 2

    function getAverage(...numbers) {
        if(numbers.length === 0) return 0;
        const sum = numbers.reduce((acc,num) => acc + num, 0);
        return sum / numbers.length;
    }

    console.log(getAverage(2,6,3,8,6,4,1));

// Zadanie 3

    const name = "Andrzej";
    const letters = [...name];
    console.log(letters);

// Zadanie 4

    const fruits = ["banan", "jabłko", "arbuz"];
    const vegetables = ["ziemniak", "pomidor"];
    const mix = [...fruits, ...vegetables];

    console.log(mix);

// Zadanie 5

    const state = {
        invoiceSection: false,
        availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
        formStatus: "failed",
        isUserLogged: false
    };

    const copyState = {
        ...state,
        isUserLogged: !state.isUserLogged,
        availableYears: state.availableYears.filter(el => el <= 1999)
    };