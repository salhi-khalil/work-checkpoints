import './App.css';
import './style.css';

import imageInSrc from './imageInSrc.JPG';

function App() {
  return (
    <div className="App">
      <div className="checkpoint" style={{border:"solid 1px black", maxWidth:"100vw"}}>
        <h1 className={"title red"}>Nada NSIRI</h1>
        <br />
 
        <img src={imageInSrc} alt='image in the src folder'/>
        <br />
  
        <img src="/imageInPublic.jpg" alt='image in the public folder'/>
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />          
        </video>
    </div>
  );
}

export default App;
