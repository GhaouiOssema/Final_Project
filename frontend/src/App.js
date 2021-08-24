import Student from "./interfaces/student/Student";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/student/SideBar";
import Admin from "./interfaces/admin/Admin";

function App() {
    const role = 2;
    return (
        <div className="App">
            {role === 0 ? <Admin /> : role === 2 ? <Student /> : null}
        </div>
    );
}

export default App;
