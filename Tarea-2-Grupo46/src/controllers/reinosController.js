import prisma from '../prismaClient.js';

// Obtener todos los reinos
const getReinos = async (req, res) => {
  try {
    const reinos = await prisma.reinos.findMany();
    res.json(reinos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los reinos' });
  }
};

// Obtener un reino por su ID
const getReinoById = async (req, res) => {
  const { id } = req.params;
  try {
    const reino = await prisma.reinos.findUnique({
      where: { id: parseInt(id) },
    });
    if (reino) {
      res.json(reino);
    } else {
      res.status(404).json({ message: 'Reino no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el reino' });
  }
};

// Agregar un nuevo reino
const addReino = async (req, res) => {
  const { nombre, poblacion, monarca } = req.body;
  try {
    const reino = await prisma.reinos.create({
      data: {
        nombre,
        poblacion,
        monarca,
      },
    });
    res.json(reino);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el reino' });
  }
};

// Actualizar un reino
const updateReino = async (req, res) => {
  const { id } = req.params;
  const { nombre, poblacion, monarca } = req.body;
  try {
    const reinoActualizado = await prisma.reinos.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        poblacion,
        monarca,
      },
    });
    res.json(reinoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el reino' });
  }
};

// Eliminar un reino
const deleteReino = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.reinos.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Reino eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el reino' });
  }
};

const reinosController = {
  getReinos,
  getReinoById,
  addReino,
  updateReino,
  deleteReino,
};

export default reinosController;
