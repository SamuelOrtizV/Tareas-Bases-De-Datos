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
  const { id1 , id2 } = req.params;
  try {
    const reinoTieneDefensa = await prisma.reino_tiene_defensa.findUnique({
      where: {
        id_reino_id_defensa: {
          id_reino: id1,
          id_defensa: id2
        }
      },
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
  const datos = req.body;
  try {
    const reinoTieneDefensa = await prisma.reino_tiene_defensa.create({
      data: datos,
    });
    res.json(reinoTieneDefensa);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar los datos' });
  }
};

const updateReinoTieneDefensa = async (req, res) => {
  const { id1 , id2 } = req.params;
  const datos = req.body;
  try {
    const reinoTieneDefensaActualizado = await prisma.reino_tiene_defensa.update({
      where: {
        id_reino_id_defensa: {
          id_reino: id1,
          id_defensa: id2
        }
      },
      data: datos,
    });
    res.json(reinoTieneDefensaActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar los datos' });
  }
};

const deleteReinoTieneDefensa = async (req, res) => {
  const { id1 , id2 } = req.params;
  try {
    await prisma.reino_tiene_defensa.delete({
      where: {
        id_reino_id_defensa: {
          id_reino: id1,
          id_defensa: id2
        }
      },
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
