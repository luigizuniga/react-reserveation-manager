import { useState } from "react";
import Navbar from "./Navbar";

const Booking = () => {
  const [selectedType, setSelectedType] = useState('Simple');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const renderReservationDetails = () => {
    return (
      <div className="card">
        <div className="card-content">
          <h2 className="title is-4">Detalles de la Reserva</h2>
          <table className="table is-striped is-bordered is-fullwidth">
            <tbody>
              <tr>
                <td><strong>Fecha:</strong></td>
                <td>25 de agosto, 2023</td>
              </tr>
              <tr>
                <td><strong>Hora:</strong></td>
                <td>3:00 PM - 5:00 PM</td>
              </tr>
              <tr>
                <td><strong>Lugar:</strong></td>
                <td>Cancha 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderSimpleReservation = () => {
    return (
      <div className="card">
        <div className="card-content">
          <p className="title is-5">Reserva Simple</p>
          <p><strong>Costo:</strong> $100</p>
          <button className="button is-primary">Realizar Pago</button>
        </div>
      </div>
    );
  };

  const renderReservationTypeOptions = () => {
    return (
      <div>
        <label>Tipo de Reserva:</label>
        <div className="select">
          <select onChange={handleTypeChange} value={selectedType}>
            <option value="Simple">Simple</option>
            <option value="Mensual">Mensual</option>
            <option value="Grupal">Grupal</option>
            <option value="Regalo">Regalo</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Menú de navegación */}
      <Navbar/>
      {renderReservationDetails()}

      {renderReservationTypeOptions()}

      {selectedType === 'Simple' && renderSimpleReservation()}
    </div>
  );
};

export default Booking;
