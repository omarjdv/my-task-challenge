import { useState } from "react";
import DarkModeButton from "./components/DarkModeButton";
import Modal from "./components/Modal";

interface TaskInterface {
  description: string;
  id: string;
  complete: boolean;
}

const tasks: TaskInterface[] = [
  {
    description: "Lorem Impsu 1",
    id: "1",
    complete: false,
  },
  {
    description: "Lorem Impsu 2",
    id: "2",
    complete: false,
  },
  {
    description: "Lorem Impsu 3",
    id: "3",
    complete: false,
  },
  {
    description: "Lorem Impsu 4",
    id: "4",
    complete: false,
  },
  {
    description: "Lorem Impsu 4",
    id: "4",
    complete: false,
  },
  {
    description: "Lorem Impsu 4",
    id: "4",
    complete: false,
  },
  {
    description: "Lorem Impsu 4",
    id: "4",
    complete: false,
  },
  {
    description: "Lorem Impsu 4",
    id: "4",
    complete: false,
  },
  {
    description: "Lorem Impsu 4",
    id: "4",
    complete: false,
  },
  {
    description: "Lorem Impsu 4",
    id: "4",
    complete: false,
  },
  {
    description: "Lorem Impsu 4",
    id: "4",
    complete: false,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskSelected, setTaskSelected] = useState(0);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (index: number) => {
    setTaskSelected(index);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen dark:text-white">
      <header className="border-b py-4 dark:border-gray-800">
        <div className="max-w-4xl mx-auto font-semibold text-lg flex justify-between items-center">
          <div className="mx-4 md:mx-none dark:text-white">My Task</div>
          <DarkModeButton />
        </div>
      </header>
      <div className="max-w-4xl  mx-auto ">
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 mx-4 md:mx-0">
          {tasks.map((task, index) => (
            <li
              className="border p-4 rounded-md cursor-pointer shadow-sm dark:border-gray-800"
              onClick={() => openModal(index)}
            >
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Task {index + 1}
              </div>
              <div className="text-md text-gray-900 dark:text-gray-100">
                {task.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={`Task ${taskSelected + 1}`}
      >
        <div className="mt-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ID: {tasks[taskSelected].id}
          </p>
          <p className="text-md text-gray-900 dark:text-gray-100">
            {tasks[taskSelected].description}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
