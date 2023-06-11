import prisma from '../prismaClient.js';

const top5 = async (req, res) => {
    try {
        const topPersonajes = await prisma.personajes.findMany({
            orderBy: {
                fuerza: 'desc'
            },
            take: 5,
            select: {
                nombre: true,
                fuerza: true
            }
        });

        res.json(topPersonajes);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el top de personajes' });
    }
};

const maskarts = async (req, res) => {
    try {
        const argumentoMasRepetido = await prisma.karts
            .groupBy({
                by: ['id_personaje'],
                orderBy:{
                    _count: {
                        id_personaje: 'desc'
                    }
                },
                select: {
                    id_personaje: true,
                    _count: true
                }
            });
        const resultado = argumentoMasRepetido.map(({ id_personaje, _count }) => ({
            id_personaje,
            count: _count.id
        }));
        const id = resultado[0].id_personaje;
        const personaje = await prisma.personajes.findUnique({
            where: {
                id: id
            },
            select: {
                nombre: true
            }
        });
        const resultado2 = {nombre: personaje.nombre, cantidad_karts: resultado[0].count};
        res.json(resultado2);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al encontrar el argumento más repetido' });
    }
};

const numerohabitantes = async (req, res) => {
    const { id } = req.params;

    try {
        const cantidadHabitantes = await prisma.personaje_habita_reino.count({
            where: {
                id_reino: parseInt(id)
            }
        });

        res.json({ cantidadHabitantes });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la cantidad de personajes por reino' });
    }
};

const gobernanteById = async (req, res) => {
    const { id } = req.params;
    try {
        const gobernante = await prisma.personaje_habita_reino.findMany({
            where: {
                id_reino: parseInt(id),
                es_gobernante: true
            },
            select: {
                id_personaje: true
            }
        });
        const id_personaje = gobernante[0].id_personaje;
        const personaje = await prisma.personajes.findUnique({
            where: {
                id: id_personaje
            }
        });
        res.json(personaje);
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
            select: {
                id_personaje: true,
                id_reino: true
            }
        });
        const resultados = await Promise.all(
            Gobernantes.map(async (item) => {
                const personaje = await prisma.personajes.findUnique({
                    where: { id: item.id_personaje },
                    select: { nombre: true }
                });

                const reino = await prisma.reinos.findUnique({
                    where: { id: item.id_reino },
                    select: { nombre: true }
                });

                return {
                    nombre_personaje: personaje.nombre,
                    nombre_reino: reino.nombre
                };
            })
        );

        res.json(resultados);
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