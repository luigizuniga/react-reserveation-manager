import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const CourtCard = ({ court }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          {/* Imagen de baja calidad para visualizar */}
          <img
            src={`https://via.placeholder.com/300x200?text=${court.name}`}
            alt={court.name}
          />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{court.name}</p>
        <p className="subtitle is-6">Ubicación: {court.location}</p>
        <p className="subtitle is-6">Tipo: {court.type}</p>
        {/* Agrega más información básica de la cancha aquí */}
      </div>
      <div className="buttons is-right is-rounded p-3">
            <Link to="/" className="button is-light">Detalle</Link>
            <Link to="/reservar" className="button is-primary" >Reservar</Link>
          </div>
    </div>
  );
};

export default CourtCard;
