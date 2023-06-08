import prisma from '../prismaClient.js'

const getPersonajeTrabajo = async (req , res) => {
    const personaje_trabajo = await prisma.personaje_tiene_trabajo.findMany()
    res.json(personaje_trabajo)
}


const getPersonajeTrabajoById = async (req, res) => {
    const { id1 , id2 } = req.params
    const personaje_trabajo = await prisma.personaje_tiene_trabajo.findUnique({
        where: {
            id_trabajo_id_personaje: {
                id_trabajo: id1,
                id_personaje: id2
            }
        }
    })
    res.json(personaje_trabajo)
}

const addPersonajeTrabajo = async (req, res) => {
    const datos = req.body
    const personaje_trabajo = await prisma.personaje_tiene_trabajo.create({
        data: datos
    })
    res.json(personaje_trabajo)
}

const updatePersonajeTrabajo = async (req, res) => {
    const { id1 , id2 } = req.params
    const datosActualizados = req.body;
    const personaje_trabajo = await prisma.personaje_tiene_trabajo.update({
        where: {
            id_trabajo_id_personaje: {
                id_trabajo: id1,
                id_personaje: id2
            }
        },
        data: datosActualizados
    })
    res.json(personaje_trabajo)
}

const deletePersonajeTrabajo = async (req, res) => {
    const { id1 , id2 } = req.params
    const personaje_trabajo = await prisma.personaje_tiene_trabajo.delete({
        where: {
            id_trabajo_id_personaje: {
                id_trabajo: id1,
                id_personaje: id2
            }
        }
    })
    res.json(personaje_trabajo)
}


const personaje_trabajoController = {
    getPersonajeTrabajo,
    getPersonajeTrabajoById,
    addPersonajeTrabajo,
    updatePersonajeTrabajo,
    deletePersonajeTrabajo
}

export default personaje_trabajoController