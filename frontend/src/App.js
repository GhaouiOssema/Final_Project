import Student from "./interfaces/student/Student";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/student/SideBar";
import Admin from "./interfaces/admin/Admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const role = 0;
    return (
        <Router>
            <div className="App">
                {role === 0 ? (
                    <Route path="/admin">
                        <Admin />
                    </Route>
                ) : role === 2 ? (
                    <Route path="/Student">
                        <Student />
                    </Route>
                ) : null}
            </div>
        </Router>
    );
}

export default App;
