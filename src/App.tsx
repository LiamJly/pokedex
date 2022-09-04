import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Footer from './components/Footer';



const App = () => {
  return (
    <Router>
    <div className="App bg-indigo-200">
      <Navbar/>
        <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/signup' element={<SignupScreen />} />
        <Route path='/favorites' element={<FavoritesScreen />} />
        <Route path='/' element={<HomeScreen />} />
        </Routes>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
