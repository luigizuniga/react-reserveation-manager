import { useState } from 'react';
import CourtDetails from './CourtDetails'; // Importamos el componente CourtDetails

const CourtList = () => {
  const [selectedCourt, setSelectedCourt] = useState(null);

  // Supongamos que recibimos el listado de canchas como prop desde el estado del componente padre
  const courts = [
    { id: 1, name: 'Cancha 1', sport: 'Fútbol', location: 'Calle Principal 123', hourly_rate: 50.00 },
    { id: 2, name: 'Cancha 2', sport: 'Tenis', location: 'Avenida Central 456', hourly_rate: 30.00 },
    // Agregar más datos de canchas aquí
  ];

  const handleCourtClick = (court) => {
    // Cuando el usuario haga clic en una cancha, actualizamos el estado para mostrar los detalles de esa cancha
    setSelectedCourt(court);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Lista de Canchas</h1>
        <div className="columns">
          {courts.map((court) => (
            <div className="column" key={court.id} onClick={() => handleCourtClick(court)}>
              <div className={`box ${selectedCourt && selectedCourt.id === court.id ? 'selected' : ''}`}>
                <h2 className="subtitle">{court.name}</h2>
                <p>Deporte: {court.sport}</p>
                <p>Ubicación: {court.location}</p>
                <p>Tarifa por Hora: {court.hourly_rate}</p>
                {/* Enlace para ver detalles de la cancha */}
              </div>
            </div>
          ))}
        </div>
        {selectedCourt && <CourtDetails court={selectedCourt} />}
      </div>
    </section>
  );
}

export default CourtList;