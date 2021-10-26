import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Spinner from "./components/Spinner";
import TaskList, { TaskInterface } from "./components/TaskList";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskSelected, setTaskSelected] = useState(0);
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [loading, setLoading] = useState(Boolean);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (index: number) => {
    setTaskSelected(index);
    setIsOpen(true);
  };

  const fetchData = async () => {
    try {
      const result = await axios.get<TaskInterface[]>(
        "/.netlify/functions/tasks"
      );
      setLoading(true);
      setTasks(result.data);
      setTimeout(() => {
        setLoading(false);
      }, 600);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen dark:text-white">
      <Header label="My task" />
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <TaskList tasks={tasks} openModal={openModal} />
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            title={`Task ${taskSelected + 1}`}
          >
            <div className="mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ID: {tasks[taskSelected]?.id}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100">
                {tasks[taskSelected]?.description}
              </p>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;
