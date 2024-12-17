import './App.css'

function App() {
    const yearOfBirth = parseInt(prompt("Podaj rok urodzenia?"));
    const date =  new Date().getFullYear();

    return (
        <>
            <h1>Masz {date - yearOfBirth} lat!</h1>
        </>
    )
}

export default App
