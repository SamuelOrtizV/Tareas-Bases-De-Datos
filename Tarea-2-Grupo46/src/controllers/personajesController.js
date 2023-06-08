import prisma from '../prismaClient.js'

const getPersonajes = async (req , res) => {
    const personajes = await prisma.personajes.findMany()
    res.json(personajes)
}


const getPersonajeById = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.personajes.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(personaje)
}

const addPersonaje = async (req, res) => {
    const { nombre, fuerza, fecha_nacimiento, objeto } = req.body
    const personaje = await prisma.personajes.create({
        data: {
            nombre,
            fuerza,
            fecha_nacimiento,
            objeto
        }
    })
    res.json(personaje)
}

const updatePersonaje = async (req, res) => {
    const { id } = req.params
    const datosActualizados = req.body;
    const personaje = await prisma.personajes.update({
        where: {
            id: Number(id)
        },
        data: datosActualizados
    })
    res.json(personaje)
}

const deletePersonaje = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.personajes.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(personaje)
}


const personajesController = {
    getPersonajes,
    getPersonajeById,
    addPersonaje,
    updatePersonaje,
    deletePersonaje
}

export default personajesController