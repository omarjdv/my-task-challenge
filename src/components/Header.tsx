import DarkModeButton from "./DarkModeButton";

interface HeaderProps {
  label: string;
}

export default function Header({ label }: HeaderProps) {
  return (
    <header className="border-b py-4 dark:border-gray-800">
      <div className="max-w-4xl mx-auto font-semibold text-lg flex justify-between items-center">
        <div className="mx-4 md:mx-none dark:text-white">{label}</div>
        <DarkModeButton />
      </div>
    </header>
  );
}
