import Link from 'next/link';
import ScrollReveal from '@/components/materi/ScrollReveal';
import { materiList } from '@/data/materi';

export default function Home() {
  // Heuristic for progress (hardcoded for demo purposes)
  const completedMateri = [1, 2];
  const nextUpMateri = 3;

  return (
    <div className="min-h-screen">
      {/* Header / Top Nav (Desktop & Mobile) */}
      <nav className="sticky top-0 z-50 glass-darker px-4 py-4 mb-8 md:mb-12 rounded-b-xl md:rounded-xl md:mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg flex items-center justify-center border border-primary/40">
              <span className="material-symbols-outlined text-primary">psychology</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              PROMPT <span className="text-primary">WRITING</span>
            </h1>


          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-primary/10 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <div className="h-10 w-10 rounded-full border-2 border-primary overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/lecturer.jpg"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Lecturer Profile Section */}
      <section className="px-4 md:px-0 mb-8 mt-4 md:mt-8">
        <div className="glass p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 border border-white/5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black italic pointer-events-none group-hover:scale-110 transition-transform duration-700">DOSEN</div>
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full border-4 border-slate-800 p-1 relative z-10">
            <div className="w-full h-full rounded-full overflow-hidden border border-primary/30">
              <img
                src="/lecturer.jpg"
                alt="Dosen Pengampu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-full border-2 border-[#010816] shadow-lg">
              <span className="material-symbols-outlined text-[14px]">verified</span>
            </div>
          </div>
          <div className="text-center md:text-left relative z-10 flex-1">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-3">
              <span className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center justify-center md:justify-start gap-1">
                <span className="material-symbols-outlined text-[14px]">school</span>
                Dosen Pengampu
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Hadiq, M.Kom</h3>
            <p className="text-sm text-slate-200 leading-relaxed max-w-3xl">
              Selamat datang di mata kuliah <strong>Prompt Writing & AI Engineering</strong>. Bersama saya, kita akan mengeksplorasi teknik-teknik fundamental hingga lanjutan dalam berdialog dengan model bahasa besar (LLM). Tujuannya bukan sekadar coding, melainkan bagaimana menjadi seorang "AI Architect" yang efisien.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="mb-12 px-4 md:px-0">
        <div className="relative overflow-hidden rounded-xl bg-primary/5 p-px border border-primary/30 shadow-[0_0_30px_rgba(0,168,232,0.05)]">
          <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-primary/20"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-md p-8 md:p-10 rounded-[0.9rem] flex flex-col md:flex-row gap-8 items-center border border-white/5 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <span className="inline-block px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded-full bg-primary/10">
                CURRICULUM OVERVIEW
              </span>
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">
                Master the Art of <br className="hidden md:block" /> Communicating with AI
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                Dari arsitektur dasar LLM hingga pola prompt engineering tingkat lanjut. Jembatani celah antara niat manusia dan eksekusi mesin dalam perjalanan intensif 14 minggu ini.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                  <span className="text-sm font-semibold">14 Minggu</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-sm">auto_stories</span>
                  <span className="text-sm font-semibold">28 Sesi</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                  <span className="text-sm font-semibold">Hands-on Lab</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 max-w-sm rounded-lg overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByigKhBrPXB-6rREgtpeRqP0kKWKgjW8XekZqqz-cGM1JtR6FEHDlsO7oAqBfIWkFH15lNoykCOmZfAeUUV6-B8sOK-Dsycx7OzH2SBst8JNqeKFc6hTdzBgQRHfxS5nEJkZW1WppPzULxv_Z2otXSxtnsUcU9JCLbmnlDiwYG-nIGvE-s-V5rKk8EU_A-4yf76Qe7l467jzaJJi_lRu-NLj749gQrskiaNFGdkleveh9X89O2UFuXUShiE_8HcViAX4CPVnfPL0M"
                alt="AI Concept"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Roadmap Header */}
      <section className="px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Curriculum Roadmap</h3>
            <p className="text-slate-200">Track your progress through the modules</p>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-primary font-bold">14% Complete</span>
            <div className="w-32 md:w-48 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className="bg-primary h-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,168,232,0.5)]"
                style={{ width: '14%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
          {materiList.map((materi, index) => {
            const isCompleted = completedMateri.includes(materi.id);
            const isNextUp = nextUpMateri === materi.id;

            return (
              <ScrollReveal key={materi.id} delay={index * 0.05}>
                <Link
                  href={`/materi/${materi.id}`}
                  className={`glass p-6 rounded-xl flex flex-col justify-between group hover:border-primary transition-all duration-300 hover:scale-105 relative overflow-hidden h-full ${isNextUp ? 'border-2 border-primary shadow-lg shadow-primary/10' : ''}`}
                >
                  {isNextUp && (
                    <div className="absolute top-0 right-0 p-2">
                      <span className="material-symbols-outlined text-primary text-xl animate-pulse">star</span>
                    </div>
                  )}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-lg text-white ${isCompleted ? 'bg-primary' : isNextUp ? 'bg-primary shadow-[0_0_15px_rgba(0,168,232,0.4)]' : 'bg-slate-800'}`}>
                        <span className="material-symbols-outlined">
                          {isCompleted ? 'check' : isNextUp ? 'play_arrow' : 'auto_stories'}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase border ${isCompleted ? 'bg-primary/20 text-primary border-primary/30' : isNextUp ? 'bg-primary text-white border-primary' : 'bg-slate-800 text-slate-200 border-slate-700'}`}>
                        {isCompleted ? 'Completed' : isNextUp ? 'Next Up' : 'Available'}
                      </span>
                    </div>
                    <p className="text-[10px] font-bold text-primary mb-1">WEEK {materi.id}</p>
                    <h4 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors text-white">{materi.title}</h4>
                  </div>
                  <p className="text-sm text-slate-200 mt-4 leading-relaxed">{materi.desc}</p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
