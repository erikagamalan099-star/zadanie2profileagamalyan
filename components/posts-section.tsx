"use client";

import { useState } from "react";
import { Plus, Bookmark } from "lucide-react";

const posts = [
  { title: "Мой первый сайт", kind: "Медиа", date: "12 октября 2026", emoji: "💻" },
  { title: "Учебный проект: дизайн", kind: "Документы", date: "5 октября 2026", emoji: "🎨" },
  { title: "Небольшие заметки о React", kind: "Медиа", date: "28 сентября 2026", emoji: "⚛️" },
];
const tabs = ["Все посты", "Медиа", "Документы", "Избранное"];

export function PostsSection({ onAdd }: { onAdd: () => void }) {
  const [activeTab, setActiveTab] = useState("Все посты");
  const [saved, setSaved] = useState(false);
  const shownPosts = activeTab === "Все посты" ? posts
    : activeTab === "Избранное" ? (saved ? posts.slice(0, 2) : posts.slice(0, 1))
    : posts.filter(post => post.kind === activeTab);

  return (
    <section id="posts" className="mt-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold">Публикации</h2>
      <div className="mt-5 flex gap-2 overflow-x-auto border-b border-gray-100 pb-3">
        {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium ${activeTab === tab ? "bg-violet-50 text-violet-700" : "text-gray-500 hover:bg-gray-50"}`}>{tab}</button>)}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {shownPosts.map((post, index) => <article key={post.title} className="rounded-2xl border border-gray-100 p-4 hover:border-violet-200">
          <div className="flex h-28 items-center justify-center rounded-xl bg-violet-50 text-4xl">{post.emoji}</div>
          <div className="mt-4 flex items-start justify-between gap-2">
            <div><span className="text-xs text-violet-700">{post.kind}</span><h3 className="mt-1 font-semibold">{post.title}</h3></div>
          </div>
        </article>)}
      </div>
    </section>
  );
}