import './App.css'

function App() {
    const color = prompt("Wybierz kolor (red, green, blue)?");
    const colors = ["red", "green", "blue"];
    let borderColor = "";

    if(colors.includes(color)){
        borderColor = color;
    }

    const styles = {
        "width": "100px",
        "height": "100px",
        "borderWidth": "5px",
        "borderStyle": "solid",
        color
    };

    return (
        <>
            {borderColor ? <div style={styles} /> : <div>Niepoprawny kolor</div>}
        </>
    )
}

export default App;
