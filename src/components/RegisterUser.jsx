import { useState } from 'react';

import Navbar from "./Navbar";

const RegisterUser = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor o realizar validaciones
      console.log(formData);
    };
  
    return (
      <>
        {/* Menú de navegación */}
        <Navbar/>
        <section className="section">
          <div className="container">
            <h1 className="title">Registro de Usuario</h1>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
    
              <div className="field">
                <label className="label">Correo Electrónico</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
    
              <div className="field">
                <label className="label">Contraseña</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
    
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary">Registrar</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
  
  export default RegisterUser;