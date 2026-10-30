import { FileText, Users, UserRound, Heart } from "lucide-react";

const stats = [
  { label: "Публикации", value: "48", Icon: FileText },
  { label: "Подписчики", value: "1111", Icon: Users },
  { label: "Подписки", value: "333", Icon: UserRound },
  { label: "Лайки", value: "6752", Icon: Heart },
];

export function ProfileStats() {
  return (
    <section aria-label="Статистика" className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map(({ label, value, Icon }) => (
        <div key={label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-gray-500"><Icon size={17} className="text-violet-600"/>{label}</div>
          <p className="mt-3 text-2xl font-bold">{value}</p>
        </div>
      ))}
    </section>
  );
}