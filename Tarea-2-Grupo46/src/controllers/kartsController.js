import prisma from '../prismaClient.js'

const getKarts = async (req , res) => {
    const karts = await prisma.karts.findMany()
    res.json(karts)
}


const getKartById = async (req, res) => {
    const { id } = req.params
    const kart = await prisma.karts.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(kart)
}

const addKart = async (req, res) => {
    const datos = req.body
    const kart = await prisma.karts.create({
        data: datos
    })
    res.json(kart)
}

const updateKart = async (req, res) => {
    const { id } = req.params
    const datosActualizados = req.body;
    const kart = await prisma.karts.update({
        where: {
            id: Number(id)
        },
        data: datosActualizados
    })
    res.json(kart)
}

const deleteKart = async (req, res) => {
    const { id } = req.params
    const kart = await prisma.karts.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(kart)
}


const kartsController = {
    getKarts,
    getKartById,
    addKart,
    updateKart,
    deleteKart
}

export default kartsController