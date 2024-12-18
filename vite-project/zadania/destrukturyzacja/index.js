export function destruct() {
// Zadanie 1

    const weathers = ["snow", "rain", "sun"];
    const [first, ,last] = weathers;

    console.log(first);
    console.log(last);

// Zadanie 2

    const slider = {
        type: "infinite",
        numberOfItems: 10,
        center: true,
        autoStart: true
    }

    const {type, autoStart} = slider;

    console.log(type);
    console.log(autoStart);

// Zadanie 3

    const names = ["Andrzej", "Ania", "Kuba"];

    const {name1, name2, name3} = names;

    console.log(name1);
    console.log(name2);
    console.log(name3);

// Zadanie 4

    function generateRandomNumbers() {
        const numbers = Array.from({length: 6}, () =
            Math.floor(Math.random() * 6));
        return numbers;
    }

    const randomNumbers = generateRandomNumbers();
    const[firstNumber, ,thirdNumber] = randomNumbers;
    console.log(randomNumbers);
    console.log(firstNumber);
    console.log(thirdNumber);

// Zadanie 5

    const cat = {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    };

    const showAnimal = ({name, age: catAge, getVoice}) => {
        return `Kot ${name} ma ${age} lat i robi ${getVoice()}.`
    }
    console.log(showAnimal(cat));

}