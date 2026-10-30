"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ProfileHeader } from "@/components/profile-header";
import { ProfileStats } from "@/components/profile-stats";
import { AboutSection } from "@/components/about-section";
import { PostsSection } from "@/components/posts-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [notice, setNotice] = useState("");

  function shareProfile() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setNotice("Ссылка на профиль скопирована!");
    } else {
      setNotice("Скопируйте адрес страницы из браузера.");
    }
    window.setTimeout(() => setNotice(""), 2500);
  }

  return (
    <main className="min-h-screen">
      <Header onSettings={() => setNotice("Настройки профиля (демо)")} />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <ProfileHeader onEdit={() => setNotice("Редактирование профиля (демо)")} onShare={shareProfile} />
        {notice && <p role="status" className="mt-3 text-sm text-violet-700">{notice}</p>}
        <ProfileStats />
        <AboutSection />
        <PostsSection onAdd={() => setNotice("Добавление публикации (демо)")} />
      </div>
    </main>
  );
}
