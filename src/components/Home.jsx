import Navbar from './NavBar';

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Sección de Bienvenida */}
      <section className="welcome-section" style={{ backgroundColor: '#f2f2f2', padding: '50px 0' }}>
          <div className="container">
            <h2 className="title is-2">¡Bienvenido a la Plataforma de Reserva de Canchas!</h2>
            <p>Aquí podrás reservar canchas para diferentes deportes de forma rápida y sencilla.</p>
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