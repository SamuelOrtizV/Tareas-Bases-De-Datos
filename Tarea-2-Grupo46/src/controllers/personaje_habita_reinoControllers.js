import prisma from '../prismaClient.js';

const getPersonajeHabitaReinos = async (req, res) => {
  try {
    const personajeHabitaReinos = await prisma.personaje_habita_reino.findMany();
    res.json(personajeHabitaReinos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};

const getPersonajeHabitaReinoById = async (req, res) => {
  const { id } = req.params;
  try {
    const personajeHabitaReino = await prisma.personaje_habita_reino.findUnique({
      where: { id: parseInt(id) },
    });
    if (personajeHabitaReino) {
      res.json(personajeHabitaReino);
    } else {
      res.status(404).json({ message: 'Datos no encontrados' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};

const addPersonajeHabitaReino = async (req, res) => {
  const { id_personaje, id_reino } = req.body;
  try {
    const personajeHabitaReino = await prisma.personaje_habita_reino.create({
      data: {
        id_personaje,
        id_reino,
      },
    });
    res.json(personajeHabitaReino);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar los datos' });
  }
};

const updatePersonajeHabitaReino = async (req, res) => {
  const { id } = req.params;
  const { id_personaje, id_reino } = req.body;
  try {
    const personajeHabitaReinoActualizado = await prisma.personaje_habita_reino.update({
      where: { id: parseInt(id) },
      data: {
        id_personaje,
        id_reino,
      },
    });
    res.json(personajeHabitaReinoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar los datos' });
  }
};

const deletePersonajeHabitaReino = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.personaje_habita_reino.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Datos eliminados correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar los datos' });
  }
};

const personajeHabitaReinoController = {
  getPersonajeHabitaReinos,
  getPersonajeHabitaReinoById,
  addPersonajeHabitaReino,
  updatePersonajeHabitaReino,
  deletePersonajeHabitaReino,
};

export default personajeHabitaReinoController;
