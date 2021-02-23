import logo from './logo.svg';
import './App.css';
import MainNavBar from './Components/MainNavBar';
import background from './bg2.svg'
function App() {
  return (
    <div className="App">
      <MainNavBar/>
      <img src={background} className='background'/>
      <p className="tagline-2 ">
      <span>{"{"}<br/></span>
      <span>{"innovate:'Begin the Build', "}<br/></span>
      <span>{"build:'Contribute in real projects', "}<br/></span>
      <span>{"grow:'Gain the Hands-on experience and polish the skills', "}<br/></span>
      <span>{"}"}<br/></span>

      </p>
    <p className="tagline-1">Innovate.Build.Grow.</p>
    <svg className="svg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,266.7C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    {/* <svg className="svg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,266.7C1120,277,1280,235,1360,213.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
    </div>
  );
}

export default App;
