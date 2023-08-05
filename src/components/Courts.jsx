import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Ejemplo de datos de las canchas (sustituir con datos reales)
const canchasData = [
  {
    id: 1,
    nombre: 'Cancha 1',
    ciudad: 'Ciudad 1',
    comuna: 'Comuna 1',
    tipoReserva: 'Simple',
    deporte: 'Fútbol',
    valoracion: 7.8,
    imagenes: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      // Agregar más URLs de imágenes aquí
    ],
  },
  {
    id: 2,
    nombre: 'Cancha 2',
    ciudad: 'Ciudad 2',
    comuna: 'Comuna 2',
    tipoReserva: 'Mensual',
    deporte: 'Tenis',
    valoracion: 9.2,
    imagenes: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      // Agregar más URLs de imágenes aquí
    ],
  },
  // Agregar más datos de las canchas aquí
];

const Courts = () => {

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Canchas Disponibles</h1>
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            {canchasData.map((cancha) => (
              <div key={cancha.id} className="card">
                <div className="columns is-vcentered">
                  <div className="column">
                    <div className="card-content">
                      <p className="title is-4">{cancha.nombre}</p>
                      <p>Ciudad: {cancha.ciudad}</p>
                      <p>Comuna: {cancha.comuna}</p>
                      <p>Tipo de Reserva: {cancha.tipoReserva}</p>
                      <p>Deporte: {cancha.deporte}</p>
                      <p>Valoración: {cancha.valoracion}/10</p>
                      {/* <Link to={`/canchas/${cancha.id}`} className="button is-primary"> */}
                      <Link to="/court-detail" className="button is-primary">
                        Ver Detalles
                      </Link>
                    </div>
                  </div>
                  <div className="column">
                    <Carousel showThumbs={false} showStatus={false}>
                      {cancha.imagenes.map((imagen, index) => (
                        <div key={index}>
                          <img src={imagen} alt={`Imagen ${index + 1}`} />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courts;
