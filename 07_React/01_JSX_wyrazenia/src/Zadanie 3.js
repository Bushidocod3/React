import './App.css'
import artist from '../../../my-react-app/src/data/artist';

function App() {
    return (
        <>
            <ul>
                <li>
                    {artist.firstName}
                </li>
                <li>
                    {artist.lastName}
                </li>
                <li>
                    {artist.nickname}
                </li>
                <li>
                    {artist.age}
                </li>
            </ul>
        </>
    )
}

export default App
