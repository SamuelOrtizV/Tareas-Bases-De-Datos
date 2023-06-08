import prisma from '../prismaClient.js'

const getTrabajos = async (req , res) => {
    const trabajos = await prisma.trabajos.findMany()
    res.json(trabajos)
}


const getTrabajoById = async (req, res) => {
    const { id } = req.params
    const trabajo = await prisma.trabajos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajo)
}

const addTrabajo = async (req, res) => {
    const datos = req.body
    const trabajo = await prisma.trabajos.create({
        data: datos
    })
    res.json(trabajo)
}

const updateTrabajo = async (req, res) => {
    const { id } = req.params
    const datosActualizados = req.body;
    const trabajo = await prisma.trabajos.update({
        where: {
            id: Number(id)
        },
        data: datosActualizados
    })
    res.json(trabajo)
}

const deleteTrabajo = async (req, res) => {
    const { id } = req.params
    const trabajo = await prisma.trabajos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajo)
}


const trabajosController = {
    getTrabajos,
    getTrabajoById,
    addTrabajo,
    updateTrabajo,
    deleteTrabajo
}

export default trabajosController