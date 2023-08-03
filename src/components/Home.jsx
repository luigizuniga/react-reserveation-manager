import { Link } from 'react-router-dom'; // Importamos Link para los enlaces de navegación

const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Bienvenido a la Plataforma de Reserva de Canchas</h1>
        <p className="subtitle">Reserva canchas para tus deportes favoritos.</p>
        <div className="buttons">
          <Link to="/registro" className="button is-primary">Registrarse</Link>
          <Link to="/inicio-sesion" className="button is-link">Iniciar Sesión</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;