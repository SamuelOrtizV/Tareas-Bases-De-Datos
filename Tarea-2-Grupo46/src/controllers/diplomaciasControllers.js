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
  const { id } = req.params;
  try {
    const diplomacia = await prisma.diplomacias.findUnique({
      where: { id: parseInt(id) },
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
  const { id_reino_1, id_reino_2 } = req.body;
  try {
    const diplomacia = await prisma.diplomacias.create({
      data: {
        id_reino_1,
        id_reino_2,
      },
    });
    res.json(diplomacia);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar la diplomacia' });
  }
};

const updateDiplomacia = async (req, res) => {
  const { id } = req.params;
  const { id_reino_1, id_reino_2 } = req.body;
  try {
    const diplomaciaActualizada = await prisma.diplomacias.update({
      where: { id: parseInt(id) },
      data: {
        id_reino_1,
        id_reino_2,
      },
    });
    res.json(diplomaciaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la diplomacia' });
  }
};

const deleteDiplomacia = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.diplomacias.delete({
      where: { id: parseInt(id) },
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
