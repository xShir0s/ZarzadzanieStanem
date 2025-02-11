
import './App.css';
import Licznik from "./taski 01/Licznik/Licznik"; //task 1 01
import Logowanie from "./taski 01/Logowanie/Logowanie"; // task 2 01
import UserInfo from "./taski 02/UserInfo/userInfo"; // task 1 02
import Loading from "./taski 02/Loading/loading"; // task 2 02
import Czesc from "./taski 03/Czesc/Czesc"; // task 1 03
import RandomNumber from "./taski 03/RandomNumber/RandomNumber"; // task 2 03
import MessegeLogger from "./taski 04/MessegeLogger/MessegeLogger"; // task 2 04
function App() {
  return (
    <div className="App">
        <Licznik/>
        <Logowanie/>
        <UserInfo/>
        <Loading/>
        <Czesc  name={"Miłosz"} />
        <RandomNumber/>
        <MessegeLogger/>
    </div>
  );
}

export default App;
