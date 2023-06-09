import prisma from '../prismaClient.js'

const getPersonajeTrabajo = async (req, res) => {
    try {
      const personaje_trabajo = await prisma.personaje_tiene_trabajo.findMany();
      res.json(personaje_trabajo);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los datos' });
    }
  };

const getPersonajeTrabajoById = async (req, res) => {
    const { id1, id2 } = req.params;
    try {
      const personaje_trabajo = await prisma.personaje_tiene_trabajo.findUnique({
        where: {
          id_trabajo_id_personaje: {
            id_trabajo: parseInt(id1),
            id_personaje: parseInt(id2),
          },
        },
      });
      if (personaje_trabajo) {
        res.json(personaje_trabajo);
      } else {
        res.status(404).json({ message: 'Datos no encontrados' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los datos' });
    }
  };

const addPersonajeTrabajo = async (req, res) => {
    const datos = req.body;
    try {
      const personaje_trabajo = await prisma.personaje_tiene_trabajo.create({
        data: datos,
      });
      res.json(personaje_trabajo);
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar los datos' });
    }
  };

const updatePersonajeTrabajo = async (req, res) => {
    const { id1, id2 } = req.params;
    const datosActualizados = req.body;
    try {
      const personaje_trabajo = await prisma.personaje_tiene_trabajo.update({
        where: {
          id_trabajo_id_personaje: {
            id_trabajo: parseInt(id1),
            id_personaje: parseInt(id2),
          },
        },
        data: datosActualizados,
      });
      res.json(personaje_trabajo);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar los datos' });
    }
  };

const deletePersonajeTrabajo = async (req, res) => {
    const { id1, id2 } = req.params;
    try {
      await prisma.personaje_tiene_trabajo.delete({
        where: {
          id_trabajo_id_personaje: {
            id_trabajo: parseInt(id1),
            id_personaje: parseInt(id2),
          },
        },
      });
      res.json({ message: 'Datos eliminados correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar los datos' });
    }
  };

const personaje_trabajoController = {
    getPersonajeTrabajo,
    getPersonajeTrabajoById,
    addPersonajeTrabajo,
    updatePersonajeTrabajo,
    deletePersonajeTrabajo
}

export default personaje_trabajoController