import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Student from "./interfaces/student/Student";
import Footer from "./components/footer/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Footer />
        </div>
    );
}

export default App;
