import logo from './logo.svg';
import './App.css';

import MainNavBar from './Components/MainNavBar';
import SecondPage from './Components/SecondPage';
import FirstPage from './Components/FirstPage';

function App() {
  return (
    <div className="App">
      <MainNavBar/>
      <FirstPage/>
    <SecondPage/>
    </div>
  );
}

export default App;
