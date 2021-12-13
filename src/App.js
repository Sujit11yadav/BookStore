import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import CommonLogin from "./pages/commonlogin/CommomLogin"
import MyCart from './components/mycart/MyCart';

function App() {
  return (
    <div className="App">
      {/* <CommonLogin/> */}
      <Dashboard/>
      {/* <MyCart/> */}
    </div>
  );
}

export default App;
