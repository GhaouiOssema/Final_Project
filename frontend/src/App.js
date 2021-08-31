import Student from "./interfaces/student/Student";
import Admin from "./interfaces/admin/Admin";
import Teacher from "./interfaces/teacher/Teacher";
import Register from "./interfaces/register/Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const role = 1;
    return (
        <Router>
            <div className="App">
                {role === 0 ? (
                    <Route path="/admin">
                        <Admin />
                    </Route>
                ) : role === 1 ? (
                    <Route path="/teacher">
                        <Teacher />
                    </Route>
                ) : role === 2 ? (
                    <Route path="/Student">
                        <Student />
                    </Route>
                ) : (
                    <Register path="/register" />
                )}
            </div>
        </Router>
    );
}

export default App;
