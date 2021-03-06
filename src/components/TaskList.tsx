import { CheckCircleIcon } from "@heroicons/react/solid";

export interface TaskInterface {
  description: string;
  id: string;
  complete: boolean;
}

interface TaskListProps {
  tasks: TaskInterface[];
  openModal: (index: number) => void;
}

export default function TaskList({ tasks, openModal }: TaskListProps) {
  return (
    <div className="max-w-4xl  md:mx-auto ">
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 mx-4 md:mx-0">
        {tasks.map((task, index) => (
          <li
            className="border p-4 rounded-md cursor-pointer shadow-sm dark:border-gray-800 last:mb-4 md:last:mb-0"
            onClick={() => openModal(index)}
            key={index}
          >
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Task {index + 1}
              </div>
              {task.complete && (
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
              )}
            </div>
            <div className="text-md text-gray-900 dark:text-gray-100">
              {task.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
