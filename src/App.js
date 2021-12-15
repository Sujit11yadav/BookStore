import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import CommonLogin from "./pages/commonlogin/CommomLogin"
import MyCart from './components/mycart/MyCart';
import OrderPlaced from './pages/orderplaced/OrderPlaced';

function App() {
  return (
    <div className="App">
      {/* <CommonLogin/> */}
      <Dashboard/>
      {/* <MyCart/> */}
      {/* <OrderPlaced/> */}
    </div>
  );
}

export default App;
