import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from "./Navbar";

const CourtDetails = () => {
  // Datos específicos de la cancha (sustituye estos valores con datos reales)
  const courtData = {
    name: 'Cancha 1',
    location: 'Ubicación 1',
    type: 'Tipo 1',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
    ],
    availableTimes: [
      { day: 'Lunes', time: '09:00 - 11:00', available: true },
      { day: 'Martes', time: '10:00 - 12:00', available: false },
      // Agrega más horarios disponibles aquí
    ],
  };

  return (
    <>
    {/* Menú de navegación */}
     <Navbar/>
    <div className="columns">
      {/* Galería de imágenes */}
      <div className="column">
        <Carousel showThumbs={false}>
          {courtData.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Imagen ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* Información de la cancha */}
      <div className="column is-two-thirds">
        <h2 className="title is-3">{courtData.name}</h2>
        <p className="subtitle is-6">Ubicación: {courtData.location}</p>
        <p className="subtitle is-6">Tipo: {courtData.type}</p>

        {/* Tabla con horarios disponibles */}
        <table className="table is-striped is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>Día</th>
              <th>Horario</th>
              <th>Disponibilidad</th>
            </tr>
          </thead>
          <tbody>
            {courtData.availableTimes.map((time, index) => (
              <tr key={index}>
                <td>{time.day}</td>
                <td>{time.time}</td>
                <td>
                  {time.available ? (
                    // <button className="button is-success">Reservar</button>
                    <Link to="/booking" className="button is-primary" >Reservar</Link>
                  
                  ) : (
                    <button className="button is-danger">Campeonato</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default CourtDetails;
