import './Home.css'
import './Home.scss'
import { Counter } from '../features/counter/Counter';

function App() {
    return (
        <h1 className="text-3xl font-bold underline">
            Hello world!
            <Counter />
        </h1>
    )
}

export default App
