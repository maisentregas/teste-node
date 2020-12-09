import Task from '../models/task-model';
import * as Yup from 'yup';


export default new class TaskController {
  async index(req, res) {
    if(req.query.done) {
      const queryParams = Yup.object().shape({
        done: Yup.number().required().min(0).max(1)
      });
      
      if(!(await queryParams.isValid(req.query))) {
        return res.status(400).json({ error: 'Done param must be 1 to done and 0 to pending' });
      };

      const allTasks = await Task.findAll({ where: { done: req.query.done }});
      
      return res.json(allTasks);
    };

    const allTasks = await Task.findAll();

    return res.json(allTasks);
  };

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

  async delete(req, res) {
    if(!req.body.id) {
      return res.json({ error: "Task id must be sendly" })
    };

    const taskExists = await Task.findOne({ where: { id: req.body.id }});

    if(!taskExists) {
      return res.json({ error: "Task not found" });
    };

    taskExists.destroy();

    return res.json({ message: 'Task deleted successfully' });
  };
};