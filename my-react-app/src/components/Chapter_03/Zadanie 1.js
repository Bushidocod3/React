import './App.css'
import people from "./data/people";

function App() {

    return (
        <>
            {
                people.map((el) => <div key={el.id}><h3>{el.name} {el.surname}</h3></div>)
            }
        </>
    )
}
export default App
