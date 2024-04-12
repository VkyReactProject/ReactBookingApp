import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './screens/HomeScreen/home.screen';
import Register from './screens/RegisterScreen/register.screen';
import CardComponent from './components/card.components';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/navbar.components';
import PackageDetailsScreen from './screens/PackageDetailsScreen/packageDetails.screen';


function App() {
  return (
    <main className='master-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/package/:id' element = {<PackageDetailsScreen />}/>
      </Routes>
      <div className='Navbar-Main-Container'>
        <NavBarComponent/>
      </div>

    </main>
  );
}

export default App;
