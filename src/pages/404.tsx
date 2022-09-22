import Error from "../components/Error/Error";
import './App.css';

const NotFound = () => {
    return (
        <div className="App">
            <Error errorMessage="Page not found" />
        </div>
    )
}
export default NotFound;