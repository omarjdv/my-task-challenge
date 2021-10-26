import axios from "axios";
import { TaskInterface } from "./components/TaskList";

export async function getTask() {
  const result = await axios.get<TaskInterface[]>("/.netlify/functions/tasks");
  return result.data;
}

export async function updatedTask(id: string, body: TaskInterface) {
  const result = await axios.put(`/.netlify/functions/tasks/${id}`, body);
  return result.data;
}
