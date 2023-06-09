import prisma from '../prismaClient.js';

const getReinoTieneDefensas = async (req, res) => {
  try {
    const reinoTieneDefensas = await prisma.reino_tiene_defensa.findMany();
    res.json(reinoTieneDefensas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};

const getReinoTieneDefensaById = async (req, res) => {
  const { id } = req.params;
  try {
    const reinoTieneDefensa = await prisma.reino_tiene_defensa.findUnique({
      where: { id: parseInt(id) },
    });
    if (reinoTieneDefensa) {
      res.json(reinoTieneDefensa);
    } else {
      res.status(404).json({ message: 'Datos no encontrados' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};

const addReinoTieneDefensa = async (req, res) => {
  const { id_reino, id_defensa } = req.body;
  try {
    const reinoTieneDefensa = await prisma.reino_tiene_defensa.create({
      data: {
        id_reino,
        id_defensa,
      },
    });
    res.json(reinoTieneDefensa);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar los datos' });
  }
};

const updateReinoTieneDefensa = async (req, res) => {
  const { id } = req.params;
  const { id_reino, id_defensa } = req.body;
  try {
    const reinoTieneDefensaActualizado = await prisma.reino_tiene_defensa.update({
      where: { id: parseInt(id) },
      data: {
        id_reino,
        id_defensa,
      },
    });
    res.json(reinoTieneDefensaActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar los datos' });
  }
};

const deleteReinoTieneDefensa = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.reino_tiene_defensa.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Datos eliminados correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar los datos' });
  }
};

const reinoTieneDefensaController = {
  getReinoTieneDefensas,
  getReinoTieneDefensaById,
  addReinoTieneDefensa,
  updateReinoTieneDefensa,
  deleteReinoTieneDefensa,
};

export default reinoTieneDefensaController;
