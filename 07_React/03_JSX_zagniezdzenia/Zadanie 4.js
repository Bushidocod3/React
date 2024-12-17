import './App.css';
import examresults from './data/examresults';

function App() {

    return (
        <>
            <ul>
                {students
                    .filter(student => student.passed)
                    .map((student, index) => (
                        <li key={index}>{`${student.firstName} ${student.lastName}`}</li>
                    ))}
            </ul>
            <ul>
                {students
                    .sort((a, b) => b.score - a.score)
                    .map((student, index) => (
                        <li key={index}
                            style={{color: student.passed ? "green" : "red"}}>
                            {`${student.firstName} ${student.lastName} - ${student.score}`}
                        </li>
                    ))}
            </ul>
        </>
    )
}
export default App;