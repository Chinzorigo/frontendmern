import "./App.css";
import {LoginContext} from './Context/UserContext/Login';
import LoginSuccessful from './Pages/Login/LoginSuccessful';

function App() {
  return (
    <div className="App">
     <LoginContext> <LoginSuccessful/> </LoginContext> 
    </div>
  );
}
export default App;

