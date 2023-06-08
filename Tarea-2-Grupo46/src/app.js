import express from 'express';
import UsersController from './controllers/UsersController.js';
import personajesController from "./controllers/personajesController.js";
import morgan from 'morgan';


const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
app.get('/api/personajes', personajesController.getPersonajes)
app.get('/api/personajes/:id', personajesController.getPersonajeById)
app.post('/api/personajes', personajesController.addPersonaje)
app.put('/api/personajes/:id', personajesController.updatePersonaje)
app.delete('/api/personajes/:id', personajesController.deletePersonaje)


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