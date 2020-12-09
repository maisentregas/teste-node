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
};