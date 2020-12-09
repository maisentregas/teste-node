import Task from '../models/task-model';
import * as Yup from 'yup';


export default new class TaskController {
  async store(req, res) {
    const taskData = Yup.object().shape({
      task: Yup.string().required().max(255)
    });
    
    if(!(await taskData.isValid(req.body))) {
      return res.status(400).json({ error: 'Task must be sendly or less than 255 characters' });
    };

    const { task } = req.body;

    const { id, done } = await Task.create({ task: task });

    return res.json({ id, task, done });
  };
  

  async update(req, res) {
    const taskData = Yup.object().shape({
      id: Yup.number().required(),
      task: Yup.string().max(255),
      done: Yup.boolean()
    });
    
    if(!(await taskData.isValid(req.body))) {
      return res.status(400).json({ error: 'Task id must be sendly or data types are incorrect' });
    };

    const taskExists = await Task.findOne({ where: { id: req.body.id }});

    if(!taskExists) {
      return res.json({ error: "Task not found" })
    };

    const { id, task, done } = await taskExists.update(req.body, {
      where: { id: req.body.id }
    });


    return res.json({ id, task, done });
  };
};