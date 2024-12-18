import './App.css'

const randomNumber = () => Math.round(Math.random() * 9 + 1);

function App() {
    const a = randomNumber();
    const b = randomNumber();

    const userAnswer = parseInt(prompt(`Jaki jest wynik dodawania ${a} + ${b}?`), 10);
    const correctAnswer = a + b;

    const isCorrect = userAnswer === correctAnswer;
    const message = isCorrect ? "Odpowiedź poprawna" : "Odpowiedź błędna";
    const backgroundColor = isCorrect ? "green" : "red";

    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                color: "white",
                padding: "10px",
                margin: "10px",
                textAlign: "center",
            }}
        >
            {message}
        </div>
    );
}
export default App
