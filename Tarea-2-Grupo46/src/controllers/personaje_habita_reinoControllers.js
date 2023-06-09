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
  const { id1 , id2 } = req.params
  try {
    const personajeHabitaReino = await prisma.personaje_habita_reino.findUnique({
      where: {
        id_personaje_id_reino: {
          id_personaje: id1,
          id_reino: id2
        }
      },
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
  const datos = req.body;
  try {
    const personajeHabitaReino = await prisma.personaje_habita_reino.create({
      data: datos,
    });
    res.json(personajeHabitaReino);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar los datos' });
  }
};

const updatePersonajeHabitaReino = async (req, res) => {
  const { id1 , id2 } = req.params
  const datos = req.body;
  try {
    const personajeHabitaReinoActualizado = await prisma.personaje_habita_reino.update({
      where: {
        id_personaje_id_reino: {
          id_personaje: id1,
          id_reino: id2
        }
      },
      data: datos,
    });
    res.json(personajeHabitaReinoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar los datos' });
  }
};

const deletePersonajeHabitaReino = async (req, res) => {
  const { id1 , id2 } = req.params
  try {
    await prisma.personaje_habita_reino.delete({
      where: {
        id_personaje_id_reino: {
          id_personaje: id1,
          id_reino: id2
        }
      },
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
