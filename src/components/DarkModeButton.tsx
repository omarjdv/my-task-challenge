import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function DarkModeButton() {
  const [enabled, setEnabled] = useLocalStorage<boolean>("dark-mode", false);
  useEffect(() => {
    if (!enabled) {
      let root = document.getElementsByTagName("html")[0]; // '0' to assign the first (and only `HTML` tag)
      root.classList.remove("bg-black");
      root.classList.remove("dark");
    }
    if (enabled) {
      let root = document.getElementsByTagName("html")[0]; // '0' to assign the first (and only `HTML` tag)
      root.classList.add("bg-black");
      root.classList.add("dark");
    }
  }, [enabled]);

  return (
    <div
      className="rounded-full border w-8 h-8 cursor-pointer flex items-center justify-center"
      onClick={() => setEnabled(!enabled)}
    >
      {enabled ? (
        <SunIcon className="w-5 h-5 text-gray-200" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-800" />
      )}
    </div>
  );
}
