import './App.css'
import fruits from './data/fruits';

function App() {

    return (
        <div>
            <p>Owoce: {fruits.length}</p>
            <p>{fruits.join("-")}</p>
        </div>
    );
}

export default App;
