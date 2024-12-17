import './App.css'


function App() {
    function calculate() {
    }

    const num1 = parseFloat(prompt("Podaj pierwszą liczbę"));
    const num2 = parseFloat(prompt("Podaj drugą liczbę"));
    const operator = prompt("Podaj operator (+, -, *, /):");

    let result;
    switch (operator) {
        case "+":
            result = a + b;
            return <h1>Wynik dodawania: {result}</h1>;
        case "-":
            result = a - b;
            return <h2>Wynik odejmowania: {result}</h2>;
        case "*":
            result = a * b;
            return <h3>Wynik mnożenia: {result}</h3>;
        case "/":
            if (b === 0) {
                return <h4>Nie można dzielić przez zero!</h4>;
            }
            result = a / b;
            return <h4>Wynik dzielenia: {result}</h4>;
        default:
            return <p>Nieprawidłowy operator!</p>;
    }

    return (
        <div>
            {calculate()}
        </div>
    );
}

export default App
