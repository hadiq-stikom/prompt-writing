'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/materi/ScrollReveal';
import PresentationMode from '@/components/materi/PresentationMode';
import { materiList } from '@/data/materi';

export default function Home() {
  const [isPresenting, setIsPresenting] = useState(false);
  const [startSlide, setStartSlide] = useState(0);

  // Heuristic for progress
  const completedMateri = [1, 2];
  const nextUpMateri = 3;

  const openPresentation = (index) => {
    setStartSlide(index);
    setIsPresenting(true);
    if (typeof document !== 'undefined' && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    }
  };

  const getSections = () => {
    // Splitting curriculum into chunks of 4 for presentation slides
    const chunks = [];
    for (let i = 0; i < materiList.length; i += 4) {
      chunks.push(materiList.slice(i, i + 4));
    }

    const roadmapSlides = chunks.map((chunk, index) => ({
      id: `ROADMAP-${index + 1}`,
      title: `Curriculum Roadmap (Part ${index + 1}/${chunks.length})`,
      content: (
        <div className="space-y-12 w-full max-w-6xl mx-auto text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-white tracking-tighter italic">Curriculum Roadmap</h3>
              <p className="text-xl text-slate-400 font-light">Part {index + 1} of {chunks.length}: Journey through Weeks {chunk[0].id}-{chunk[chunk.length - 1].id}</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <span className="text-primary font-black text-2xl">14% Total Progress</span>
              <div className="w-64 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700 shadow-inner">
                <div
                  className="bg-primary h-full transition-all duration-1000 shadow-[0_0_20px_rgba(0,168,232,0.6)]"
                  style={{ width: '14%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chunk.map((materi) => (
              <div key={materi.id} className="p-8 glass border border-white/10 bg-white/5 rounded-4xl space-y-4 flex flex-col justify-between h-full hover:bg-white/10 transition-colors">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xs font-black text-primary uppercase tracking-widest">Week {materi.id}</p>
                    <div className={`w-3 h-3 rounded-full ${completedMateri.includes(materi.id) ? 'bg-primary shadow-[0_0_15px_rgba(0,168,232,0.8)]' : 'bg-slate-700'}`} />
                  </div>
                  <h4 className="text-xl font-bold text-white leading-tight mb-4">{materi.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">{materi.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 mt-auto">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500 italic">Core Competency</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }));

    return [
      {
        id: "HERO",
        title: "Master the Art of AI Communication",
        content: (
          <div className="relative overflow-hidden rounded-[4rem] bg-primary/5 p-px border border-primary/30 shadow-3xl w-full max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-primary/20"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl p-16 rounded-[3.9rem] flex flex-col md:flex-row gap-12 items-center border border-white/5">
              <div className="flex-1 space-y-8 text-left">
                <span className="inline-block px-4 py-1.5 border border-primary text-primary text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10">
                  CURRICULUM OVERVIEW
                </span>
                <h2 className="text-6xl font-black leading-tight text-white tracking-tighter">
                  Master the Art of <br /> Communicating with AI
                </h2>
                <p className="text-slate-200 text-2xl leading-relaxed max-w-2xl font-light">
                  Jembatani celah antara niat manusia dan eksekusi mesin dalam perjalanan intensif 14 minggu ini.
                </p>
                <div className="flex flex-wrap gap-6 pt-6">
                  <div className="flex items-center gap-3 px-6 py-3 bg-primary/20 rounded-2xl border border-primary/30 shadow-lg shadow-primary/10">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    <span className="text-lg font-bold">14 Minggu</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-primary/20 rounded-2xl border border-primary/30 shadow-lg shadow-primary/10">
                    <span className="material-symbols-outlined text-primary">auto_stories</span>
                    <span className="text-lg font-bold">28 Sesi</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 rounded-4xl overflow-hidden shadow-4xl border-2 border-primary/20 aspect-video relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByigKhBrPXB-6rREgtpeRqP0kKWKgjW8XekZqqz-cGM1JtR6FEHDlsO7oAqBfIWkFH15lNoykCOmZfAeUUV6-B8sOK-Dsycx7OzH2SBst8JNqeKFc6hTdzBgQRHfxS5nEJkZW1WppPzULxv_Z2otXSxtnsUcU9JCLbmnlDiwYG-nIGvE-s-V5rKk8EU_A-4yf76Qe7l467jzaJJi_lRu-NLj749gQrskiaNFGdkleveh9X89O2UFuXUShiE_8HcViAX4CPVnfPL0M"
                  alt="AI Concept"
                />
              </div>
            </div>
          </div>
        )
      },
      {
        id: "DOSEN",
        title: "Profil Dosen Pengampu",
        content: (
          <div className="glass p-16 rounded-[4rem] flex flex-col md:flex-row items-center gap-12 border border-white/10 relative overflow-hidden group shadow-4xl w-full max-w-5xl mx-auto bg-slate-900/60 backdrop-blur-3xl">
            <div className="absolute top-0 right-0 p-16 opacity-5 text-9xl font-black italic pointer-events-none">PROFESOR</div>
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full border-8 border-slate-800 p-2 relative z-10 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_40px_rgba(0,168,232,0.3)]">
                <img
                  src="/lecturer.jpg"
                  alt="Dosen Pengampu"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-full border-4 border-[#010816] shadow-2xl">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
            </div>
            <div className="text-center md:text-left relative z-10 flex-1 space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary text-xs font-black uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                  <span className="material-symbols-outlined">school</span>
                  Dosen Pengampu Utama
                </span>
              </div>
              <h3 className="text-5xl font-bold text-white tracking-tight italic">Hadiq, M.Kom</h3>
              <p className="text-xl text-slate-200 leading-relaxed max-w-2xl font-light">
                Selamat datang di mata kuliah <strong>Prompt Writing & AI Engineering</strong>. Bersama saya, kita akan mengeksplorasi teknik-teknik fundamental hingga lanjutan untuk menjadi seorang &quot;AI Architect&quot; yang efisien.
              </p>
            </div>
          </div>
        )
      },
      ...roadmapSlides
    ];
  };

  const sectionsData = getSections();

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
            <button
              onClick={() => openPresentation(0)}
              className="hidden md:flex items-center gap-2 bg-primary/20 hover:bg-primary/40 text-primary px-4 py-2 rounded-xl border border-primary/30 transition-all font-bold text-xs uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-sm">present_to_all</span>
              Present
            </button>
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

      {/* Content Sections with individual presentation buttons */}

      {/* Lecturer Profile */}
      <section className="px-4 md:px-0 mb-8 mt-4 md:mt-8 group relative">
        <button
          onClick={() => openPresentation(1)}
          className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 hover:bg-primary/20 text-slate-400 hover:text-primary p-2 rounded-xl border border-white/10 flex items-center gap-2 px-3 backdrop-blur-md"
        >
          <span className="material-symbols-outlined text-sm">visibility</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Present</span>
        </button>
        <ScrollReveal>
          <div className="glass p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 border border-white/5 relative overflow-hidden group/card hover:scale-[1.01] transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black italic pointer-events-none">DOSEN</div>
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full border-4 border-slate-800 p-1 relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden border border-primary/30">
                <img src="/lecturer.jpg" alt="Dosen Pengampu" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-center md:text-left relative z-10 flex-1">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-3">
                <span className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">school</span>
                  Dosen Pengampu
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Hadiq, M.Kom</h3>
              <p className="text-sm text-slate-200 leading-relaxed max-w-3xl">
                Selamat datang di mata kuliah <strong>Prompt Writing & AI Engineering</strong>. Bersama saya, kita akan mengeksplorasi teknik-teknik fundamental hingga lanjutan dalam berdialog dengan model bahasa besar (LLM).
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Hero Section */}
      <section className="mb-12 px-4 md:px-0 group relative">
        <button
          onClick={() => openPresentation(0)}
          className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 hover:bg-primary/20 text-slate-400 hover:text-primary p-2 rounded-xl border border-white/10 flex items-center gap-2 px-3 backdrop-blur-md"
        >
          <span className="material-symbols-outlined text-sm">visibility</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Present</span>
        </button>
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-xl bg-primary/5 p-px border border-primary/30 shadow-[0_0_30px_rgba(0,168,232,0.05)]">
            <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-primary/20"></div>
            <div className="relative bg-slate-900/60 backdrop-blur-md p-8 md:p-10 rounded-[0.9rem] flex flex-col md:flex-row gap-8 items-center border border-white/5 hover:scale-[1.01] transition-all duration-300">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <span className="inline-block px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded-full bg-primary/10">
                  CURRICULUM OVERVIEW
                </span>
                <h2 className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tighter">
                  Master the Art of <br className="hidden md:block" /> Communicating with AI
                </h2>
                <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
                  Dari arsitektur dasar LLM hingga pola prompt engineering tingkat lanjut.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 text-xs md:text-sm">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                    <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                    <span className="font-semibold">14 Minggu</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                    <span className="material-symbols-outlined text-primary text-sm">auto_stories</span>
                    <span className="font-semibold">28 Sesi</span>
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
        </ScrollReveal>
      </section>

      {/* Curriculum Roadmap Header */}
      <section className="px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Curriculum Roadmap</h3>
            <p className="text-slate-200 font-light">Track your progress through the modules</p>
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
                        <span className="material-symbols-outlined text-sm">
                          {isCompleted ? 'check' : isNextUp ? 'play_arrow' : 'auto_stories'}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase border ${isCompleted ? 'bg-primary/20 text-primary border-primary/30' : isNextUp ? 'bg-primary text-white border-primary' : 'bg-slate-800 text-slate-200 border-slate-700'}`}>
                        {isCompleted ? 'Done' : isNextUp ? 'Next' : 'Available'}
                      </span>
                    </div>
                    <p className="text-[10px] font-bold text-primary mb-1">WEEK {materi.id}</p>
                    <h4 className="text-base font-bold leading-tight group-hover:text-primary transition-colors text-white">{materi.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 mt-4 leading-relaxed font-light">{materi.desc}</p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {isPresenting && (
        <PresentationMode
          slides={sectionsData.map(s => ({ sectionTitle: s.title, content: s.content }))}
          initialSlide={startSlide}
          onClose={() => setIsPresenting(false)}
        />
      )}
    </div>
  );
}
