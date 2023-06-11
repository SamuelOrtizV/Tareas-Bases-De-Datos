import prisma from '../prismaClient.js';

const getDefensas = async (req, res) => {
  try {
    const defensas = await prisma.defensas.findMany();
    res.json(defensas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las defensas' });
  }
};

const getDefensaById = async (req, res) => {
  const { id } = req.params;
  try {
    const defensa = await prisma.defensas.findUnique({
      where: { id: parseInt(id) },
    });
    if (defensa) {
      res.json(defensa);
    } else {
      res.status(404).json({ message: 'Defensa no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la defensa' });
  }
};

const addDefensa = async (req, res) => {
  const nombre = req.body;
  try {
    const defensa = await prisma.defensas.create({
      data: nombre,

    });
    res.json(defensa);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar la defensa' });
  }
};

const updateDefensa = async (req, res) => {
  const { id } = req.params;
  const  nombre = req.body;
  try {
    const defensaActualizada = await prisma.defensas.update({
      where: { id: parseInt(id) },
      data: nombre,
    });
    res.json(defensaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la defensa' });
  }
};

const deleteDefensa = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.defensas.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Defensa eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la defensa' });
  }
};

const defensasController = {
  getDefensas,
  getDefensaById,
  addDefensa,
  updateDefensa,
  deleteDefensa,
};

export default defensasController;
