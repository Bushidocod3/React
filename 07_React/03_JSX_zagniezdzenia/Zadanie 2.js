import './App.css'
import artist from "./data/artist";

function App() {

    return (
        <>
            <h1>{`${artist.nickname} ${artist.firstName} ${artist.lastName}`}</h1>
            <span>{artist.age} lat</span>
        </>
    )
}
export default App
