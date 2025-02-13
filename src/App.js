
import './App.css';
import Licznik from "./taski 01/Licznik/Licznik"; //task 1 01
import Logowanie from "./taski 01/Logowanie/Logowanie"; // task 2 01
import UserInfo from "./taski 02/UserInfo/userInfo"; // task 1 02
import Loading from "./taski 02/Loading/loading"; // task 2 02
import Czesc from "./taski 03/Czesc/Czesc"; // task 1 03
import RandomNumber from "./taski 03/RandomNumber/RandomNumber"; // task 2 03
import MessegeLogger from "./taski 04/MessegeLogger/MessegeLogger"; // task 2 04
import ProductForm from "./taski 05/ProductForm/ProductForm"; // task 1 05, aby zobaczyc alert trzeba usunąć komentarz w lini 16
import UserSettings from "./taski 05/UserSettings/UserSettings"; // task 2 05
import Profile from "./taski 06/Profile/Profile"; // task 1 06
import OrderDetails from "./taski 06/OrderDetails/OrderDetails"; // task 02 06
import FruitList from "./taski 07/task 01/FruitList" // task 01 07
import TaskManager from "./taski 07/task 02/TaskManager"; // task 02 07
function App() {
  return (
    <div className="App">
        <TaskManager/>
        <Licznik/>
        <Logowanie/>
        <UserInfo/>
        <Loading/>
        <Czesc  name={"Miłosz"} />
        <RandomNumber/>
        <MessegeLogger/>
        <ProductForm name={"Jabłko"} price={"3.14"} category={"Owoce"} />
        <UserSettings/>
        <Profile/>
        <OrderDetails/>
        <FruitList/>

    </div>
  );
}

export default App;
