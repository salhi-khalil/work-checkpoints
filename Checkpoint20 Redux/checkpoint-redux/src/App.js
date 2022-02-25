import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import ListTasks from "./Components/ListTasks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="AppTitle">
      <h1>Checkpoint Redux</h1>
      <h3>ToDo App</h3>
      <hr />
      </div>
      <ListTasks />
      <MyFooter />
    </div>
  );
}

export default App;
