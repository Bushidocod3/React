import './App.css';
import people from "./data/people";

function App() {
    return (
        <>
            {people.map((el) => {
                return (
                    <div className="person" key={el.id}>
                        <img src={el.avatar} alt={`${el.name} ${el.surname}`} />
                        <div className="info">
                            <h1>{`${el.title} ${el.name} ${el.surname}`}</h1>
                            <p>{el.bio}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
export default App;