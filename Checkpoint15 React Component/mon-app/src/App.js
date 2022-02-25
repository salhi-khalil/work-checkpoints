import './App.css';
import './style.css';
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";



function App() {
  return (
    <div className="App">
      <div className="el">
      <h1>Checkpoint 15 </h1>
      <h3>React Components</h3>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      </div>
    </div>
  );
}

export default App;
