import prisma from '../prismaClient.js';

const getDiplomacias = async (req, res) => {
  try {
    const diplomacias = await prisma.diplomacias.findMany();
    res.json(diplomacias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las diplomacias' });
  }
};

const getDiplomaciaById = async (req, res) => {
  const { id1 , id2 } = req.params;
  try {
    const diplomacia = await prisma.diplomacias.findUnique({
      where: {
        id_reino_1_id_reino_2: {
          id_reino_1: id1,
          id_reino_2: id2
        }
      },
    });
    if (diplomacia) {
      res.json(diplomacia);
    } else {
      res.status(404).json({ message: 'Diplomacia no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la diplomacia' });
  }
};

const addDiplomacia = async (req, res) => {
  const datos = req.body;
  try {
    const diplomacia = await prisma.diplomacias.create({
      data: datos,
    });
    res.json(diplomacia);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar la diplomacia' });
  }
};

const updateDiplomacia = async (req, res) => {
  const { id1 , id2 } = req.params;
  const datos = req.body;
  try {
    const diplomaciaActualizada = await prisma.diplomacias.update({
      where: {
        id_reino_1_id_reino_2: {
          id_reino_1: id1,
          id_reino_2: id2
        }
      },
      data: datos,
    });
    res.json(diplomaciaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la diplomacia' });
  }
};

const deleteDiplomacia = async (req, res) => {
  const { id1 , id2 } = req.params;
  try {
    await prisma.diplomacias.delete({
      where: {
        id_reino_1_id_reino_2: {
          id_reino_1: id1,
          id_reino_2: id2
        }
      },
    });
    res.json({ message: 'Diplomacia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la diplomacia' });
  }
};

const diplomaciasController = {
  getDiplomacias,
  getDiplomaciaById,
  addDiplomacia,
  updateDiplomacia,
  deleteDiplomacia,
};

export default diplomaciasController;
