import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Student from "./interfaces/student/Student";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/admin/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Route path="/" component={SideBar} />
                <Footer />
            </div>
            {/* <Switch> */}

            {/* </Switch> */}
        </Router>
    );
}

export default App;
