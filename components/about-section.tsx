import { Mail, Globe, CalendarDays, MapPin } from "lucide-react";

const skills = ["HTML", "CSS", "Figma",];

export function AboutSection() {
  return (
    <section id="about" className="mt-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold">О себе</h2>
      <p className=" text-gray-600">Я студент второго курса  изучаю веб-разработку. В свободное время смотрю уроки, хочу стать хорошим frontend-разработчиком.</p>
      <h3 className="mt-6 text-sm font-semibold">Навыки</h3>
      <div>{skills.map(skill => <span key={skill} className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">{skill}</span>)}</div>
      <div className="mt-7 grid gap-4 border-t border-gray-100 pt-6 text-sm sm:grid-cols-2">
        <a className="text-violet-600"> erik.a06@mail.ru</a>
        <a className="text-violet-600"> erik-portfolio.</a>
        <a className="text-violet-600"> Социальные сети</a>
        <div className="text-violet-600"> На платформе с декабря 2067</div>
      </div>
    </section>
  );
}