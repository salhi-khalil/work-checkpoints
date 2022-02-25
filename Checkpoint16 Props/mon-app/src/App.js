import "./App.css";
import Profile from "./profile/profile";

function App() {
  const handleName = (fullName) => alert(fullName);
  const styleProfile = {
    margin: 20,
    padding: 20,
    fontFamily: "Barlow Condensed",
    textAlign: "center",
    border: "5px solid rgb(0,76,63)",
    backgroundColor: "rgb(0,152,127,0.1)",
    borderRadius: 25,
  };
  const styleImg = { width: 300 };
  //handleName sends an alert message with the name of the profile user.
  return (
    <div style={styleProfile}>
      <Profile
        fullName="Nada Nsiri"
        profession="Hydraulic and Environmental Engineer"
        handleName={handleName}
      >
        <img src="/silhouette 1.png" alt="profile photo" style={styleImg} />
      </Profile>
    </div>
  );
}

export default App;
