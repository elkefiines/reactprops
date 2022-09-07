import "./App.css";
import Profile from "./Profile/components/Profile";
import Ines from "./Ines.png";
import Card from "react-bootstrap/Card";
function App() {
  const showName = (fullName) => alert(`Profile user: ${fullName}`);
  return (
    <div className="App">
      <Profile
        fullName="Ines Elkefi"
        bio="A curious, Autonomous, ambitious girl ready to take up new challenges. After graduating with a professional master's in computer systems and network security, she chose to change her career path. She was interested in web development and decided to dive into that world. "
        profession=" JS Full Stack Developer"
        showName={showName}
      >
        <Card.Img src={Ines} alt="profile" className="img" />
      </Profile>
    </div>
  );
}

export default App;
