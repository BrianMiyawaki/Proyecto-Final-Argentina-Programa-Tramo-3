import Task from "../models/task.model.js"

//Buscar Tareas
export const getAllTask = async(req,res) => {
    try {
        const allTask = await Task.find({
            user:req.user.id
        }).populate("user");
        res.status(200).json(allTask)

    } catch (error) {
        return res.status(400).json({ message: "Error al buscar las tareas", error });
    }
}

//Buscar Tareas por ID
export const getTaskById = async(req,res) => {
    const {id} = req.params;

    try {
        const taskFound = await Task.findById(id);

        if(!taskFound)
            return res.status(400).json({message:"Tarea no encontrada"});

        res.status(200).json(taskFound)
    } catch (error) {
        return res.status(400).json({ message: "Error al buscar la tarea", error });
    }
}

//Crear Tareas
export const createTask = async(req,res) => {
    const { title, description, completed, } = req.body;
  try {
    const newTask = new Task({
      title,
      description,
      completed,

      //para cuando agregamos la logica para cada usuario
      user: req.user.id,
    });

    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (error) {
    return res.status(400).json({ message: "Error al crear la tarea", error });
  }
}

//Actualizar Tareas
export const updateTask = async(req,res) => {
     try {
       const updateTask = await Task.findByIdAndUpdate( req.params.id,req.body, {new:true}).populate("user");
       
       if (!updateTask) return res.status(400).json({message:"Tarea no encontrada"});

       res.status(200).json(updateTask)
     } catch (error) {
        return res.status(400).json ({message:"Error al actualizar la tarea"})
     }
}

//Eliminar Tareas
export const deleteTask = async(req,res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id)

        if(!deleteTask) return res.status(400).json({message:"Tarea no encontrada"});
        res.status(200).json({message:"Tarea eliminada"});
    } catch (error) {
        return res.status(400).json ({message:"Error al eliminar la tarea"})
    }
}