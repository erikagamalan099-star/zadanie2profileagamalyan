import { BriefcaseBusiness, MapPin, Share2, Plus, Check } from "lucide-react";
import { useState } from "react";

export function ProfileHeader({ onEdit, onShare }: { onEdit: () => void; onShare: () => void }) {
  const [following, setFollowing] = useState(false);
  return (
    <section id="profile" className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-200 to-indigo-300 text-4xl font-bold text-violet-800 ring-4 ring-violet-50">А</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold sm:text-3xl">Агамалян Эрик</h1>
            <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">Студент</span>
          </div>
          <p className="mt-3 flex items-center gap-2 text-sm text-gray-600"><BriefcaseBusiness size={16}/> Начинающий веб-разработчик</p>
          <p className="mt-3 max-w-2xl leading-7 text-gray-600">Учусь создавать красивые и удобные сайты. Люблю пробовать новые технологии.</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-gray-500"><MapPin size={15}/> Москва</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={onEdit} className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700">Редактировать профиль</button>
            <button onClick={onShare} className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50"><Share2 size={16}/> Поделиться</button>
            <button onClick={() => setFollowing(!following)} className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50">{following ? <><Check size={16}/> Вы подписаны</> : <><Plus size={16}/> Подписаться</>}</button>
          </div>
        </div>
      </div>
    </section>
  );
}