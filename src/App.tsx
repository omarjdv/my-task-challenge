import { useEffect, useState } from "react";
import ErrorWidget from "./components/ErrorWidget";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Spinner from "./components/Spinner";
import TaskList, { TaskInterface } from "./components/TaskList";
import { getTask, updatedTask } from "./taskServices";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskSelected, setTaskSelected] = useState(0);
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getTask();
        setTasks(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const openModal = (index: number) => {
    setTaskSelected(index);
    setIsOpen(true);
  };

  const updateTask = async () => {
    try {
      const data = await updatedTask(
        tasks[taskSelected].id,
        tasks[taskSelected]
      );
      console.log("data modified", data);
      const newTasks = tasks.map((task, index) => {
        if (index === taskSelected) {
          return {
            ...task,
            complete: true,
          };
        }
        return task;
      });
      setTasks(newTasks);
    } catch (error) {
      console.log("error", error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const completeTask = async () => {
    await updateTask();
    setIsOpen(false);
  };

  return (
    <div
      className={`min-h-screen dark:text-white flex flex-col ${
        isOpen && "opacity-30"
      } `}
    >
      <Header label="My task" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error && <ErrorWidget />}
          <TaskList tasks={tasks} openModal={openModal} />
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            title={`Task ${taskSelected + 1}`}
            onCompleteTask={completeTask}
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
