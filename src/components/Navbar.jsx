import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <h1 className="title is-3">Logo de la Plataforma</h1>
          </Link>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">Inicio</Link>
            <Link to="/nosotros" className="navbar-item">Nosotros</Link>
            <Link to="/aplicacion" className="navbar-item">¿Qué es la Aplicación?</Link>
            <Link to="/beneficios" className="navbar-item">Beneficios</Link>
            <Link to="/contacto" className="navbar-item">Contáctanos</Link>
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/inicio-sesion" className="button is-primary">Iniciar Sesión</Link>
                <Link to="/registro" className="button is-light">Registro</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
