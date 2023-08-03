/* eslint-disable react/prop-types */
const CourtDetails = ({ court }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{court.name}</h1>
        <p>Deporte: {court.sport}</p>
        <p>Ubicación: {court.location}</p>
        <p>Tarifa por Hora: {court.hourly_rate}</p>
        {/* Formulario para seleccionar fecha y hora de reserva */}
        {/* Enlace para reservar la cancha */}
      </div>
    </section>
  );
}

export default CourtDetails;