import prisma from '../prismaClient.js'

const getTrabajos = async (req, res) => {
    try {
      const trabajos = await prisma.trabajos.findMany();
      res.json(trabajos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los trabajos' });
    }
  };

const getTrabajoById = async (req, res) => {
    const { id } = req.params;
    try {
      const trabajo = await prisma.trabajos.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (trabajo) {
        res.json(trabajo);
      } else {
        res.status(404).json({ message: 'Trabajo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el trabajo' });
    }
  };

const addTrabajo = async (req, res) => {
    const datos = req.body;
    try {
      const trabajo = await prisma.trabajos.create({
        data: datos,
      });
      res.json(trabajo);
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar el trabajo' });
    }
  };

const updateTrabajo = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    try {
      const trabajo = await prisma.trabajos.update({
        where: {
          id: parseInt(id),
        },
        data: datosActualizados,
      });
      res.json(trabajo);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el trabajo' });
    }
  };

const deleteTrabajo = async (req, res) => {
    const { id } = req.params;
    try {
      const trabajo = await prisma.trabajos.delete({
        where: {
          id: parseInt(id),
        },
      });
        res.json({ message: 'Trabajo eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el trabajo' });
    }
  };

const trabajosController = {
    getTrabajos,
    getTrabajoById,
    addTrabajo,
    updateTrabajo,
    deleteTrabajo
}

export default trabajosController