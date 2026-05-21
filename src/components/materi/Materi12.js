'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi12({ materi }) {
    const [isPresenting, setIsPresenting] = useState(false);
    const [startSlide, setStartSlide] = useState(0);

    const openPresentation = (index) => {
        setStartSlide(index);
        setIsPresenting(true);
        if (typeof document !== 'undefined' && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        }
    };

    const workflowStages = [
        {
            title: "Ideation & Brainstorming",
            role: "Creative Partner",
            desc: "Gunakan AI untuk memetakan ide awal, mencari sudut pandang baru, dan membuat outline.",
            icon: "💡"
        },
        {
            title: "Research & Synthesis",
            role: "Information Analyst",
            desc: "AI merangkum dokumen panjang, mengekstrak poin kunci, dan membandingkan sumber data.",
            icon: "🔍"
        },
        {
            title: "Drafting & Creation",
            role: "Co-Writer / Creator",
            desc: "Mengubah outline menjadi draf kasar teks, kode, atau visual secara cepat.",
            icon: "✍️"
        },
        {
            title: "Refining & Polishing",
            role: "Editor / Critic",
            desc: "AI memberikan umpan balik kritis, memperbaiki tata bahasa, dan mengoptimalkan hasil akhir.",
            icon: "✨"
        }
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "The Augmented Professional",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-4 text-sky-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-sky-400"></span> Pertemuan 12: Workflow Integrasi AI
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-sky-500/20 underline-offset-16 italic tracking-tight">The Augmented Professional</h2>
                    <p className="text-xl text-slate-200 leading-relaxed text-justify font-medium">
                        AI bukan pengganti manusia, melainkan <strong>Penguat Kemampuan Manusia (Augmentation)</strong>. Menguasai alur kerja (workflow) yang mengintegrasikan AI akan memisahkan mereka yang bekerja keras dari mereka yang bekerja cerdas.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-xs font-bold text-sky-300">Productivity Flow</span>
                        <span className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-xs font-bold text-sky-300">AI Collaboration</span>
                        <span className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-xs font-bold text-sky-300">Automation</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Alur Kerja Kreatif",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-sky-500 font-bold text-xs uppercase tracking-widest">01. Alur Kerja Kreatif (End-to-End)</h3>
                            <p className="text-4xl font-bold tracking-tight">Dari Ide ke Eksekusi Terakselerasi</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        {workflowStages.map((stage, i) => (
                            <div key={i} className="p-6 glass rounded-[2.5rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all group relative">
                                <div className="text-4xl mb-4">{stage.icon}</div>
                                <h5 className="font-bold text-white text-lg mb-1">{stage.title}</h5>
                                <p className="text-[10px] text-sky-400 font-black uppercase tracking-widest mb-3">{stage.role}</p>
                                <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
                                {i < workflowStages.length - 1 && (
                                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-sky-500 opacity-20">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Research & Synthesis",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-sky-500 font-bold text-xs uppercase tracking-widest text-center">02. Research & Synthesis Workflow</h3>
                    <div className="p-12 glass border border-white/10 rounded-[4rem] bg-slate-900 shadow-2xl relative overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h4 className="text-3xl font-bold italic text-white tracking-tight">The Information Sieve</h4>
                                <p className="text-slate-300 leading-relaxed text-justify">
                                    Jangan biarkan AI hanya merangkum. Gunakan AI untuk <strong>Menganalisis Kontradiksi</strong> dan <strong>Menemukan Gaps</strong> dari informasi yang Anda berikan.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">1</div>
                                        <p className="text-xs text-slate-400"><strong className="text-white">Feed Data:</strong> Masukkan artikel, transkrip, atau data mentah.</p>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">2</div>
                                        <p className="text-xs text-slate-400"><strong className="text-white">Cross-Check:</strong> Minta AI mencari pola yang sama di antara sumber berbeda.</p>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-bold">3</div>
                                        <p className="text-xs text-slate-400"><strong className="text-white">Actionable Summary:</strong> Ubah rangkuman menjadi poin-poin langkah kerja.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-4 shadow-inner">
                                <h6 className="text-[10px] font-black text-sky-500 uppercase tracking-widest">🚀 Agent-Optimized Prompt:</h6>
                                <p className="text-xs font-mono text-slate-200 leading-relaxed italic">
                                    &quot;Saya akan memberikan 3 laporan industri. Bantu saya mensintesis data ini. Identifikasi 3 tren utama [Task], tunjukkan di mana data mereka bertentangan [Context], dan buat dalam format tabel ringkasan eksekutif [Format].&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Multi-Agent Workflows",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-sky-500 font-bold text-xs uppercase tracking-widest text-center">03. Multi-Agent Workflows (Collaborative AI)</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 glass border border-white/10 rounded-[3rem] bg-white/2 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">🤖</div>
                                <h5 className="text-xl font-bold text-white italic">Agent 1: The Producer</h5>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed">Fokus pada pembuatan konten awal secara cepat berdasarkan instruksi user. Mengutamakan kuantitas dan kerangka dasar.</p>
                            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 italic text-[10px] text-indigo-300">
                                &quot;Buat draft pertama artikel tentang masa depan AI...&quot;
                            </div>
                        </div>
                        <div className="p-8 glass border border-white/10 rounded-[3rem] bg-white/2 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">🧐</div>
                                <h5 className="text-xl font-bold text-white italic">Agent 2: The Critic</h5>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed">Menganalisis hasil dari Agent 1. Mencari kelemahan argumen, kesalahan fakta, dan memberikan saran perbaikan.</p>
                            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 italic text-[10px] text-amber-300">
                                &quot;Analisis draft di atas. Berikan 3 kritik tajam dan 2 saran perbaikan...&quot;
                            </div>
                        </div>
                    </div>
                    <div className="p-8 bg-linear-to-r from-sky-600 to-indigo-700 rounded-[3rem] shadow-2xl text-center">
                        <p className="text-white text-lg font-bold italic">&quot;Passing the baton: AI yang satu menyempurnakan AI yang lain.&quot;</p>
                    </div>
                </div>
            )
        },
        {
            id: "CHALLENGE",
            title: "The Workflow Architect Challenge",
            content: (
                <div className="p-12 glass border border-sky-500/20 rounded-[4rem] space-y-8 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                        <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-lg shadow-sky-500/30">WA</div>
                        <div>
                            <h4 className="font-bold text-2xl uppercase tracking-tighter italic text-white underline decoration-sky-500/30">Kasus: &quot;The 24-Hour Project&quot;</h4>
                            <p className="text-xs text-sky-400 font-black uppercase tracking-widest mt-1">Designing a Productivity Loop</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-200 text-lg leading-relaxed italic">
                            Rancanglah sebuah workflow menggunakan minimal 2 tools AI berbeda (Misal: ChatGPT & Midjourney) untuk menyelesaikan tugas berikut dalam waktu sesingkat mungkin:
                        </p>
                        <ul className="text-sm text-slate-400 p-6 bg-black/40 rounded-3xl border border-white/5 space-y-2 italic">
                            <li>1. Membuat Proposal Bisnis (Teks & Struktur).</li>
                            <li>2. Membuat Mockup UI/Produk (Visual).</li>
                            <li>3. Membuat Script Presentasi (Pitch).</li>
                        </ul>
                    </div>
                    <div className="flex justify-end pt-4">
                        <div className="px-10 py-5 bg-sky-600 text-white rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer shadow-xl shadow-sky-500/20">Rancang Workflow</div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "Redefining Productivity",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-white italic underline underline-offset-12 decoration-sky-500/20 capitalize tracking-tight">The Augmented Flow</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;Productivity is not about doing more. It&apos;s about being more with the right tools.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">Systems enable creativity. Workflows enable impact.</p>
                </div>
            )
        }
    ];

    const sectionsData = getSections();

    return (
        <div className="space-y-32 pb-20 text-white">
            {/* Presentation Controls */}
            <div className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/10 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-sky-500">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-sky-500/20"
                >
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                    Mulai Presentasi
                </button>
            </div>

            {sectionsData.map((section, index) => (
                <div key={section.id}>
                    <ScrollReveal>
                        <section className="space-y-8 group/section relative">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sky-500 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-sky-500"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Selesai' :
                                            `Bagian ${section.id.split('-')[1] || section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-sky-500/20 hover:text-sky-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
                                    title="Presentasi bagian ini"
                                >
                                    <span className="material-symbols-outlined text-sm">visibility</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Present</span>
                                </button>
                            </div>

                            {section.content}
                        </section>
                    </ScrollReveal>
                    {index < sectionsData.length - 1 && (
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-sky-500/20 to-transparent mt-24" />
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
