import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Student from "./interfaces/student/Student";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar/admin/SideBar";

function App() {
    return (
        <div className="App">
            <Navigation />
            <SideBar />
            <Footer />
        </div>
    );
}

export default App;
