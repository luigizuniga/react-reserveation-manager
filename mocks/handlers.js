import { rest } from 'msw';

const handlers = [
  rest.get('/api/canchas', (req, res, ctx) => {
    // Simulamos la respuesta de la API para obtener la lista de canchas
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, nombre: 'Cancha 1', deporte: 'Fútbol', ubicacion: 'Calle Principal 123', tarifa_por_hora: 50.00 },
        { id: 2, nombre: 'Cancha 2', deporte: 'Tenis', ubicacion: 'Avenida Central 456', tarifa_por_hora: 30.00 },
        // Agregar más datos de canchas aquí
      ])
    );
  }),
  // Agregar más rutas simuladas de la API aquí si es necesario
];

export default handlers;