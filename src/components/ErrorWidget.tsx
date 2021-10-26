import { ExclamationCircleIcon } from "@heroicons/react/solid";

export default function ErrorWidget() {
  return (
    <div className="max-w-4xl  mx-auto mt-4 flex-1  ">
      <div className=" mx-4 md:mx-0 flex items-center border p-4 rounded-md cursor-pointer shadow-sm dark:border-gray-800 last:mb-4 md:last:mb-0 bg-red-100 dark:bg-red-900 ">
        <div>
          <ExclamationCircleIcon className="w-10 h-10 text-red-600 dark:text-red-400" />
        </div>
        <div className="text-lg text-gray-700 dark:text-gray-300 ml-5 font-semibold">
          Error connecting to the server. Please retry later.
        </div>
      </div>
    </div>
  );
}
