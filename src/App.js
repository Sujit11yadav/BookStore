import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import CommonLogin from "./pages/commonlogin/CommonLogin"
import MyCart from './components/mycart/MyCart';
import OrderPlaced from './pages/orderplaced/OrderPlaced';
import Router from "./router/Router"

function App() {
  return (
    <div className="App">
      {/* <CommonLogin/> */}
      {/* <Dashboard/> */}
      {/* <MyCart/> */}
      {/* <OrderPlaced/> */}
      <Router/>
    </div>
  );
}

export default App;
