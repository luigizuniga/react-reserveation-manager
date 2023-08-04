import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ showMenu }) => {
  return (
    <nav className={`navbar ${showMenu ? 'is-active' : ''}`}>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          {/* <Link to="/nosotros" className="navbar-item">Nosotros</Link>
          <Link to="/aplicacion" className="navbar-item">¿Qué es la Aplicación?</Link>
          <Link to="/beneficios" className="navbar-item">Beneficios</Link>
          <Link to="/contacto" className="navbar-item">Contáctanos</Link> */}
        </div>
        <div className="navbar-end">
          <div className="buttons">
            <Link to="/inicio-sesion" className="button is-primary">Iniciar Sesión</Link>
            <Link to="/registro" className="button is-light" >Registro</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
