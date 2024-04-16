import { ToDoListAdapter } from './adapters/ToDoListAdapter'
import { Task } from './models/Task'
import { ToDoList } from './services/TodoList'

const anyTask: Task = {
  id: 1,
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

const adapter = new ToDoListAdapter()
const toDoList = new ToDoList(adapter)

toDoList.add(anyTask)

console.log('TASKS', toDoList.getTasks())
