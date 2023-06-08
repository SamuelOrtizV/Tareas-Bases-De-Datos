import express from 'express';
import personajesController from "./controllers/personajesController.js";
import trabajosController from "./controllers/trabajosController.js";
import personaje_trabajoController from "./controllers/personaje_trabajo.js";
import morgan from 'morgan';


const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//CRUD personajes
app.get('/api/personajes', personajesController.getPersonajes)
app.get('/api/personajes/:id', personajesController.getPersonajeById)
app.post('/api/personajes', personajesController.addPersonaje)
app.put('/api/personajes/:id', personajesController.updatePersonaje)
app.delete('/api/personajes/:id', personajesController.deletePersonaje)

//CRUD trabajos
app.get('/api/trabajos', trabajosController.getTrabajos)
app.get('/api/trabajos/:id', trabajosController.getTrabajoById)
app.post('/api/trabajos', trabajosController.addTrabajo)
app.put('/api/trabajos/:id', trabajosController.updateTrabajo)
app.delete('/api/trabajos/:id', trabajosController.deleteTrabajo)

//CRUD personaje tiene trabajo
app.get('/api/personaje_tiene_trabajo', personaje_trabajoController.getPersonajeTrabajo)
app.get('/api/personaje_tiene_trabajo/:id1/:id2', personaje_trabajoController.getPersonajeTrabajoById)
app.post('/api/personaje_tiene_trabajo', personaje_trabajoController.addPersonajeTrabajo)
app.put('/api/personaje_tiene_trabajo/:id1/:id2', personaje_trabajoController.updatePersonajeTrabajo)
app.delete('/api/personaje_tiene_trabajo/:id1/:id2', personaje_trabajoController.deletePersonajeTrabajo)


//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})