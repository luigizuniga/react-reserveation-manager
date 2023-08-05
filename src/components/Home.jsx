import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import CourtList from './CourtList';

const courts = [
  {
    id: 1,
    name: 'Cancha 1',
    location: 'Ubicación 1',
    type: 'Tipo 1',
  },
  {
    id: 2,
    name: 'Cancha 2',
    location: 'Ubicación 2',
    type: 'Tipo 2',
  },
  {
    id: 3,
    name: 'Cancha 1',
    location: 'Ubicación 1',
    type: 'Tipo 1',
  },
  {
    id: 4,
    name: 'Cancha 2',
    location: 'Ubicación 2',
    type: 'Tipo 2',
  },
  {
    id: 5,
    name: 'Cancha 1',
    location: 'Ubicación 1',
    type: 'Tipo 1',
  },
  {
    id: 6,
    name: 'Cancha 2',
    location: 'Ubicación 2',
    type: 'Tipo 2',
  },
  {
    id: 7,
    name: 'Cancha 1',
    location: 'Ubicación 1',
    type: 'Tipo 1',
  },
  {
    id: 8,
    name: 'Cancha 2',
    location: 'Ubicación 2',
    type: 'Tipo 2',
  },
  // Agrega más canchas aquí
];

const Home = () => {
  return (
    <>

      {/* Menú de navegación */}
      <Navbar/>
        {/* Contenido del componente Home */}

        {/* ... Código de las secciones ... */}
        <section className="hero is-fullheight is-primary is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Bienvenido a la Aplicación de Reservas de Canchas</h1>
              <p className="subtitle">
                Esta es una aplicación para agendar canchas deportivas de manera sencilla.
              </p>
              <div className="buttons is-centered">
                <Link to="/courts" className="button is-primary is-large">
                  Ver Canchas Disponibles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Listado Canchas */}
        <section className="court-list-section" style={{ backgroundColor: '#00d1b2', padding: '50px 0' }}>
          <div className="container">
            <CourtList courts={courts} itemsPerPage={3} />
          </div>
        </section>


        {/* Sección Nosotros */}
        <section className="about-us-section" style={{ backgroundColor: '#ffffff', padding: '50px 0' }}>
          <div className="container">
            <h2 className="title is-2">Nosotros</h2>
            <p>Descripción de quiénes somos y qué ofrecemos en nuestra plataforma.</p>
          </div>
        </section>

        {/* Sección Qué es la Aplicación */}
        <section className="app-description-section" style={{ backgroundColor: '#f2f2f2', padding: '50px 0' }}>
          <div className="container">
            <h2 className="title is-2">¿Qué es la Aplicación?</h2>
            <p>Explicación detallada de cómo funciona la aplicación y sus características.</p>
          </div>
        </section>

        {/* Sección Beneficios */}
        <section className="benefits-section" style={{ backgroundColor: '#ffffff', padding: '50px 0' }}>
          <div className="container">
            <h2 className="title is-2">Beneficios</h2>
            <ul>
              <li>Beneficio 1</li>
              <li>Beneficio 2</li>
              <li>Beneficio 3</li>
              {/* Agrega más beneficios aquí */}
            </ul>
          </div>
        </section>

        {/* Sección Contáctanos */}
        <section className="contact-section" style={{ backgroundColor: '#f2f2f2', padding: '50px 0' }}>
          <div className="container">
            <h2 className="title is-2">Contáctanos</h2>
            <p>Información de contacto y formulario de contacto.</p>
          </div>
        </section>
    

    </>
  );
}

export default Home;