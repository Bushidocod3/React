import './App.css'

function App() {

    const redDiv = <div style={{ height: "100px", backgroundColor: "red" }}></div>;
    const greenDiv = <div style={{ height: "100px", backgroundColor: "green" }}></div>;
    const blueDiv = <div style={{ height: "100px", backgroundColor: "blue" }}></div>;

    return (
        <div>
            {redDiv}
            {greenDiv}
            {blueDiv}
        </div>
    );
}

export default App;
