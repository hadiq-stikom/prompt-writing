'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import PresentationMode from './PresentationMode';

export default function Materi15({ materi }) {
    const [isPresenting, setIsPresenting] = useState(false);
    const [startSlide, setStartSlide] = useState(0);

    const openPresentation = (index) => {
        setStartSlide(index);
        setIsPresenting(true);
        if (typeof document !== 'undefined' && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
    };

    const folderStructure = [
        { name: 'app/', type: 'folder', desc: 'Routing & Pages', accent: 'text-orange-400' },
        { name: '  layout.js', type: 'file', desc: 'Global Layout' },
        { name: '  page.js', type: 'file', desc: 'Home Page' },
        { name: 'components/', type: 'folder', desc: 'UI Components', accent: 'text-orange-400' },
        { name: 'lib/', type: 'folder', desc: 'Utilities', accent: 'text-orange-400' },
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "Sprint 01: Project Kickoff",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-black rounded-full shadow-lg shadow-orange-500/20 uppercase tracking-widest flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">local_fire_department</span> Bonus Workshop
                        </span>
                        <div className="h-px flex-grow bg-white/10"></div>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-6xl font-black text-white leading-tight italic tracking-tighter">
                            LET&apos;S BUILD:<br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-600 underline decoration-orange-500/20 underline-offset-8">PROMPTHUB</span>
                        </h2>
                        <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                            Lupakan teori yang membosankan. Kita mulai perjalanan 8 modul untuk membangun platform full-stack pertama Anda. Hari ini: <span className="text-orange-400">Fondasi & UI Awal.</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2">
                            <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest">Target Akhir:</h4>
                            <p className="text-sm text-slate-400 italic font-medium">&quot;Sebuah platform komunitas AI Prompt yang live, punya database, sistem login, dan upload gambar.&quot;</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2">
                            <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest">Stack Kita:</h4>
                            <div className="flex gap-2 flex-wrap">
                                <span className="text-[10px] font-bold text-white bg-black/40 px-2 py-1 rounded-md border border-white/5">Next.js 14</span>
                                <span className="text-[10px] font-bold text-white bg-black/40 px-2 py-1 rounded-md border border-white/5">Supabase</span>
                                <span className="text-[10px] font-bold text-white bg-black/40 px-2 py-1 rounded-md border border-white/5">Cloudinary</span>
                                <span className="text-[10px] font-bold text-white bg-black/40 px-2 py-1 rounded-md border border-white/5">Tailwind</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Setup & Architecture",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 text-2xl font-black">1</div>
                        <h3 className="text-4xl font-black italic text-white">Setup Project</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                            <div className="p-8 bg-slate-900 border border-white/5 rounded-[3rem] space-y-4">
                                <p className="text-sm text-slate-300">Buka terminal Anda, copy-paste perintah ini:</p>
                                <div className="p-4 bg-black rounded-2xl border border-orange-500/30 group relative">
                                    <pre className="text-xs font-mono text-orange-400 overflow-x-auto">
                                        {`npx create-next-app@latest prompthub \\
  --typescript --tailwind --app --src-dir \\
  --import-alias "@/*"`}
                                    </pre>
                                </div>
                            </div>
                            <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-3xl">
                                <h5 className="text-xs font-black text-orange-500 uppercase mb-2 italic">Kenapa Next.js?</h5>
                                <p className="text-xs text-slate-400 leading-relaxed italic">Next.js adalah pilihan #1 industri saat ini. Framework ini handle semuanya: SEO, Routing, dan Performa secara otomatis.</p>
                            </div>
                        </div>

                        <div className="p-8 glass rounded-[3rem] border border-white/10 space-y-6">
                            <h5 className="text-xs font-black text-white uppercase tracking-widest italic">Anatomi Folder:</h5>
                            <div className="space-y-3 font-mono text-xs">
                                {folderStructure.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className={item.accent || 'text-slate-400'}>{item.name}</span>
                                        <span className="text-slate-600 text-[10px]">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Server vs Client Components",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4 text-center justify-center">
                         <h3 className="text-4xl font-black italic text-white text-center">Server vs Client</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-[3rem] space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl">🖥️</span>
                                <h5 className="text-lg font-bold text-blue-400 italic">Server Components</h5>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed italic">Default di Next.js. Sangat cepat karena dirender di server. Bagus untuk mengambil data dari database.</p>
                            <div className="p-4 bg-black/40 rounded-2xl text-[10px] text-slate-400 font-mono italic">
                                // Langsung ambil data di sini
                            </div>
                        </div>
                        <div className="p-8 bg-orange-600/10 border border-orange-500/20 rounded-[3rem] space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl">🖱️</span>
                                <h5 className="text-lg font-bold text-orange-400 italic">Client Components</h5>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed italic">Wajib pakai <code className="text-orange-400 bg-orange-500/10 px-1 rounded">&apos;use client&apos;</code>. Dipakai kalau butuh interaksi (klik, input) atau React Hooks.</p>
                            <div className="p-4 bg-black/40 rounded-2xl text-[10px] text-slate-400 font-mono italic">
                                &quot;use client&quot;; // Wajib di baris pertama
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Coding with AI (PTCF)",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 text-2xl font-black italic">!</div>
                        <h3 className="text-4xl font-black italic text-white">The Secret Weapon: PTCF</h3>
                    </div>

                    <div className="p-10 bg-slate-900 border border-white/5 rounded-[4rem] relative overflow-hidden">
                         <div className="space-y-6">
                            <p className="text-slate-300 italic">Gunakan prompt ini ke ChatGPT/Claude/Copilot untuk membuat Navbar PromptHub dalam sekejap:</p>
                            <div className="p-8 bg-black/60 rounded-[2.5rem] border border-orange-500/20 space-y-6 italic">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Persona (P)</p>
                                        <p className="text-xs text-slate-400">Senior Next.js Developer</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Task (T)</p>
                                        <p className="text-xs text-slate-400">Buat komponen Navbar responsif</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Context (C)</p>
                                        <p className="text-xs text-slate-400">Aplikasi &apos;PromptHub&apos;, menu: Home, Browse, Submit</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Format (F)</p>
                                        <p className="text-xs text-slate-400">TypeScript, Tailwind CSS, Modern UI</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            )
        },
        {
            id: "WORKSHOP",
            title: "Workshop Challenge",
            content: (
                <div className="p-12 glass border border-orange-500/20 rounded-[4rem] space-y-10 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-8">
                         <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-orange-500/30">🔥</div>
                         <div>
                            <h4 className="font-black text-3xl uppercase tracking-tighter italic text-white">CHALLENGE SPRINT 01</h4>
                            <p className="text-xs text-orange-400 font-black uppercase tracking-widest mt-1">Due: Akhir Sesi Ini</p>
                         </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h5 className="text-white font-bold italic border-l-4 border-orange-500 pl-4">To-Do List:</h5>
                            <ul className="space-y-4">
                                {[
                                    'Inisialisasi Project "prompthub"',
                                    'Buat Navbar dengan Logo & Menu',
                                    'Buat Hero Section di page.js (Landing Page)',
                                    'Implementasi Tailwind untuk UI yang "Premium"',
                                    'Deploy project ke GitHub'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start text-slate-300 group">
                                        <div className="w-6 h-6 rounded-full border border-orange-500/40 flex-shrink-0 mt-0.5 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                                            <span className="text-[10px] font-black group-hover:text-white transition-colors">{i+1}</span>
                                        </div>
                                        <span className="text-sm italic">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 self-start">
                             <h5 className="text-white font-bold italic">Tips:</h5>
                             <p className="text-xs text-slate-400 leading-relaxed italic">
                                &quot;Jangan tulis CSS manual. Gunakan utility classes dari Tailwind. Kalau bingung, tanyakan AI dengan framework PTCF yang sudah kita pelajari.&quot;
                             </p>
                             <div className="pt-4 flex justify-end">
                                <button className="bg-orange-600 text-white text-[10px] font-black px-6 py-3 rounded-xl uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-orange-500/20">Mulai Coding</button>
                             </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "Next Mission",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-6xl font-black text-white italic tracking-tighter underline decoration-orange-500/20 underline-offset-12">NEXT MISSION</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;UI sudah jadi. Sekarang saatnya beri &apos;otak&apos; pada aplikasi kita.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
                    <div className="pt-12">
                         <div className="p-10 bg-orange-500/10 border border-orange-500/20 rounded-[3rem] inline-block">
                             <p className="text-xs text-orange-500 font-black uppercase tracking-widest mb-2">Up Next:</p>
                             <h4 className="text-2xl font-black text-white italic">M16: Database & CRUD with Supabase</h4>
                         </div>
                    </div>
                </div>
            )
        }
    ];

    const sectionsData = getSections();

    return (
        <div className="space-y-32 pb-20 text-white">
            <div className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/10 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-orange-500">bolt</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none italic">Bootcamp Mode</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 italic">Speed & Precision</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-orange-500/20"
                >
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                    Launch Presentation
                </button>
            </div>

            {sectionsData.map((section, index) => (
                <div key={section.id}>
                    <ScrollReveal>
                        <section className="space-y-8 group/section relative">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-orange-500 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-orange-500"></span>
                                    {section.id}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-orange-500/20 hover:text-orange-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
                                >
                                    <span className="material-symbols-outlined text-sm">visibility</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest italic tracking-tighter">Present</span>
                                </button>
                            </div>
                            {section.content}
                        </section>
                    </ScrollReveal>
                    {index < sectionsData.length - 1 && (
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-500/20 to-transparent mt-24" />
                    )}
                </div>
            ))}

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
