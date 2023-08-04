import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
import CourtList from './components/CourtList';
import CourtDetails from './components/CourtDetails';
import Booking from './components/Booking';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<RegisterUser />} />
        <Route path="/inicio-sesion" element={<Login />} />
        <Route path="/lista-canchas" element={<CourtList />} />
        <Route path="/court-detail" element={<CourtDetails />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;