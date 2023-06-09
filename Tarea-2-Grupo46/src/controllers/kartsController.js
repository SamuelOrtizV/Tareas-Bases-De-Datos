import prisma from '../prismaClient.js'

const getKarts = async (req, res) => {
    try {
      const karts = await prisma.karts.findMany();
      res.json(karts);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los datos' });
    }
  };

const getKartById = async (req, res) => {
    const { id } = req.params;
    try {
      const kart = await prisma.karts.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (kart) {
        res.json(kart);
      } else {
        res.status(404).json({ message: 'Datos no encontrados' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los datos' });
    }
  };

const addKart = async (req, res) => {
  const datos = req.body;
  try {
    const kart = await prisma.karts.create({
      data: datos,
    });
    res.json(kart);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar los datos' });
  }
};

const updateKart = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    try {
      const kart = await prisma.karts.update({
        where: {
          id: parseInt(id),
        },
        data: datosActualizados,
      });
      res.json(kart);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar los datos' });
    }
  };

  const deleteKart = async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.karts.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json({ message: 'Datos eliminados correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar los datos' });
    }
  };
  


const kartsController = {
    getKarts,
    getKartById,
    addKart,
    updateKart,
    deleteKart
}

export default kartsController