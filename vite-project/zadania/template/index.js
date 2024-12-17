export function template() {

// Zadanie 1

    const num1 = 17;
    const num2 = 3;

    const template = `Suma dwóch liczb ${num1} i ${num2} to:${num1+num2}`;
    console.log(template);

// Zadanie 2

    const person = {
        name: "Vlad",
        lastName: "Drăculea",
        yearOfBirth: 1431,
        profession: "Lord of Wallachia"
    };

    function whoAreYou() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - person.yearOfBirth;

        return `My name is ${person.name} ${person.lastName}.
            I am ${age} years old.
            My profession is ${person.profession}
        `;
    }
    whoAreYou(person)

// Zadanie 3

    const product = {
        name: "Laptop Pro",
        brand: "TechCorp",
        price: 1499.99,
        discount: 0.15,
        inStock: true
    };

    const describeProduct = ({name, brand, price, discount, inStock}) => {
        return (`The product ${name} by ${brand} is priced at $${price}.
            After a ${discount * 100}% discount, the price is $${price * (1 - discount)}.
            This product is currently ${inStock ? "in stock" : "unavailable"}.`
        )
    }
}
