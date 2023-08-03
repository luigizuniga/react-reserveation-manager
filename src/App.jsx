import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
import CourtList from './components/CourtList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<RegisterUser />} />
      <Route path="/inicio-sesion" element={<Login />} />
      <Route path="/lista-canchas" element={<CourtList />} />
    </Routes>
  );
}

export default App;