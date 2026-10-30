import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-7 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3"><span className="font-bold text-gray-800">п. пространство</span><span className="hidden h-4 w-px bg-gray-300 sm:block"/><span>© 2026 Пространство. Все права защищены</span></div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2"><a href="#about" className="hover:text-violet-700">О нас</a><a href="mailto:support@example.com" className="hover:text-violet-700">Поддержка</a><a href="#posts" className="hover:text-violet-700">Блог</a><a href="#about" className="hover:text-violet-700">Вакансии</a></nav>
        <div className="flex items-center gap-4"><a aria-label="GitHub" href="https://github.com" className="hover:text-violet-700"><Github size={18}/></a><a aria-label="LinkedIn" className="hover:text-violet-700"><Linkedin size={18}/></a><a aria-label="Instagram"className="hover:text-violet-700"> size={18}</a></div>
        <div className="flex gap-4 text-xs"><a href="#about" className="hover:text-gray-800">Конфиденциальность</a><a href="#about" className="hover:text-gray-800">Условия использования</a></div>
      </div>
    </footer>
  );
}