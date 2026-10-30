import { Settings } from "lucide-react";

export function Header({ onSettings }: { onSettings: () => void }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">п.</span>
          пространство
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-500 sm:flex">
          <a className="text-violet-700" href="#profile">Профиль</a>
          <a className="hover:text-gray-900" href="#posts">Публикации</a>
          <a className="hover:text-gray-900" href="#about">О себе</a>
        </nav>
        <button aria-label="Настройки" onClick={onSettings} className="rounded-xl border border-gray-200 p-2.5 hover:bg-gray-50">
          <Settings size={19} />
        </button>
      </div>
    </header>
  );
}