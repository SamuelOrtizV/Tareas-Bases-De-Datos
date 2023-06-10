import prisma from '../prismaClient.js';

const top5 = async (req, res) => {
    try {
        const topPersonajes = await prisma.personajes.findMany({
            orderBy: {
                fuerza: 'desc'
            },
            take: 5
        });

        res.json(topPersonajes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener el top de personajes' });
    }
};

const maskarts = async (req, res) => {
    try {
        const personajeConMasKarts = await prisma.personajes.findFirst({
            orderBy: {
                _count: {
                    karts: 'desc'
                }
            }
        });

        res.json(personajeConMasKarts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener el personaje con más karts' });
    }
};

const numerohabitantes = async (req, res) => {
    const { id } = req.params;

    try {
        const cantidadHabitantes = await prisma.personaje_habita_reino.count({
            where: {
                id_reino: id
            }
        });

        res.json({ cantidadHabitantes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener la cantidad de personajes por reino' });
    }
};

const gobernanteById = async (req, res) => {
    const { id } = req.params;
    try {
        const gobernante = await prisma.personaje_habita_reino.findMany({
            where: {
                id_reino,
                es_gobernante: true
            },
            include: {
                personaje: true
            }
        });
        res.json(gobernante);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener gobernante' });
    }
};

const gobernantes = async (req, res) => {
    try {
        const Gobernantes = await prisma.personaje_habita_reino.findMany({
            where: {
                es_gobernante: true
            },
            include: {
                personaje: true
            }
        });
        res.json(Gobernantes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los gobernantes' });
    }
};


const endpoints = {
    top5,
    maskarts,
    numerohabitantes,
    gobernanteById,
    gobernantes,
};

export default endpoints;