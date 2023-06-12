import express from 'express';
import personajesController from "./controllers/personajesController.js";
import trabajosController from "./controllers/trabajosController.js";
import personaje_trabajoController from "./controllers/personaje_trabajo.js";
import reinosController from "./controllers/reinosController.js";
import kartsController from "./controllers/kartsController.js";
import defensasController from './controllers/defensasControllers.js';
import diplomaciasController from './controllers/diplomaciasControllers.js';
import reino_tiene_defensaController from './controllers/reino_tiene_defensaControllers.js';
import personaje_habita_reinoController from './controllers/personaje_habita_reinoControllers.js';
import endpoints from './controllers/endpoints.js';
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

//CRUD reinos
app.get('/api/reinos', reinosController.getReinos);
app.get('/api/reinos/:id', reinosController.getReinoById);
app.post('/api/reinos', reinosController.addReino);
app.put('/api/reinos/:id', reinosController.updateReino);
app.delete('/api/reinos/:id', reinosController.deleteReino);

//CRUD karts
app.get('/api/karts', kartsController.getKarts)
app.get('/api/karts/:id', kartsController.getKartById)
app.post('/api/karts', kartsController.addKart)
app.put('/api/karts/:id', kartsController.updateKart)
app.delete('/api/karts/:id', kartsController.deleteKart)

//CRUD defensas
app.get('/api/defensas', defensasController.getDefensas);
app.get('/api/defensas/:id', defensasController.getDefensaById);
app.post('/api/defensas', defensasController.addDefensa);
app.put('/api/defensas/:id', defensasController.updateDefensa);
app.delete('/api/defensas/:id', defensasController.deleteDefensa);

//CRUD diplomacias
app.get('/api/diplomacias', diplomaciasController.getDiplomacias);
app.get('/api/diplomacias/:id1/:id2', diplomaciasController.getDiplomaciaById);
app.post('/api/diplomacias', diplomaciasController.addDiplomacia);
app.put('/api/diplomacias/:id1/:id2', diplomaciasController.updateDiplomacia);
app.delete('/api/diplomacias/:id1/:id2', diplomaciasController.deleteDiplomacia);

//CRUD reino tiene defensa
app.get('/api/reino_tiene_defensa', reino_tiene_defensaController.getReinoTieneDefensas);
app.get('/api/reino_tiene_defensa/:id1/:id2', reino_tiene_defensaController.getReinoTieneDefensaById);
app.post('/api/reino_tiene_defensa', reino_tiene_defensaController.addReinoTieneDefensa);
app.put('/api/reino_tiene_defensa/:id1/:id2', reino_tiene_defensaController.updateReinoTieneDefensa);
app.delete('/api/reino_tiene_defensa/:id1/:id2', reino_tiene_defensaController.deleteReinoTieneDefensa);

//CRUD personaje habita reino
app.get('/api/personaje_habita_reino', personaje_habita_reinoController.getPersonajeHabitaReinos);
app.get('/api/personaje_habita_reino/:id1/:id2', personaje_habita_reinoController.getPersonajeHabitaReinoById);
app.post('/api/personaje_habita_reino', personaje_habita_reinoController.addPersonajeHabitaReino);
app.put('/api/personaje_habita_reino/:id1/:id2', personaje_habita_reinoController.updatePersonajeHabitaReino);
app.delete('/api/personaje_habita_reino/:id1/:id2', personaje_habita_reinoController.deletePersonajeHabitaReino);

//endpoints
app.get('/api/top5personajesConMasFuerza', endpoints.top5);
app.get('/api/personajeConMasKarts', endpoints.maskarts);
app.get('/api/cantidadHabitantes/:id', endpoints.numerohabitantes);
app.get('/api/gobernante', endpoints.gobernantes);
app.get('/api/gobernante/:id', endpoints.gobernanteById);




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