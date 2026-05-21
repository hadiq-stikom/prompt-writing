'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi14({ materi }) {
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

    const projectThemes = [
        {
            title: "Startup Launchpad",
            desc: "Rancang seluruh aset untuk startup baru: Logo (Image), Proposal Bisnis (Text), Landing Page (Code), dan Jingle (Music).",
            tags: ["Multimodal", "Business", "Tech"]
        },
        {
            title: "Cultural Storyteller",
            desc: "Buat kampanye pelestarian budaya lokal: Narasi sejarah (Text), Poster promosi (Image), dan Video script (Cinematic).",
            tags: ["Creative", "Social", "Storytelling"]
        },
        {
            title: "Edu-Tech Innovation",
            desc: "Kembangkan modul pembelajaran interaktif: Kurikulum otomatis (Text), Diagram visual (Image), dan API prototype (Code).",
            tags: ["Education", "Logic", "Structure"]
        },
        {
            title: "AI Ethics Campaign",
            desc: "Buat kampanye kesadaran etika AI: Artikel opini (Text), Infografis (Image), dan Manifesto video (Script).",
            tags: ["Ethics", "Analysis", "Impact"]
        }
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "The Grand Finale",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-4 text-amber-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-amber-400"></span> Pertemuan 14: Projek Akhir
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-amber-500/20 underline-offset-16 italic tracking-tight">The Grand Finale</h2>
                    <p className="text-xl text-slate-200 leading-relaxed text-justify font-medium">
                        Perjalanan Anda sebagai <strong>Prompt Writer</strong> mencapai puncaknya di sini. Saatnya menggabungkan semua teknik—mulai dari PTCF, CoT, hingga optimasi hasil—ke dalam sebuah karya komprehensif yang menunjukkan kematangan Anda dalam berkolaborasi dengan AI.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-bold text-amber-300">Capstone Project</span>
                        <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-bold text-amber-300">Multimodal Mastery</span>
                        <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-bold text-amber-300">AI Integration</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Brief Projek Akhir",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-amber-500 font-bold text-xs uppercase tracking-widest">01. Brief Projek Akhir</h3>
                            <p className="text-4xl font-bold tracking-tight">Membangun Ekosistem Digital Berbasis AI</p>
                        </div>
                    </div>

                    <div className="p-10 bg-slate-900 border border-amber-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full" />
                        <div className="relative z-10 space-y-6">
                            <h4 className="text-2xl font-bold text-white italic tracking-tight">Tujuan Utama:</h4>
                            <p className="text-slate-300 leading-relaxed text-justify">
                                Mahasiswa diwajibkan untuk menciptakan sebuah <strong>Solusi Kreatif atau Bisnis</strong> yang menggunakan minimal 3 modalitas AI yang berbeda (Teks, Gambar, Kode, atau Musik). Projek ini harus didokumentasikan mulai dari prompt awal hingga hasil akhir yang telah dioptimasi.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                                <div className="space-y-3">
                                    <h6 className="text-[10px] font-black text-amber-500 uppercase tracking-widest italic">Must Include:</h6>
                                    <ul className="text-xs text-slate-400 space-y-2">
                                        <li className="flex gap-3 items-start"><span className="text-amber-500">✓</span> Penggunaan Framework PTCF secara eksplisit.</li>
                                        <li className="flex gap-3 items-start"><span className="text-amber-500">✓</span> Dokumentasi proses Iterasi (Minimal 3 tahap).</li>
                                        <li className="flex gap-3 items-start"><span className="text-amber-500">✓</span> Analisis Etika penggunaan AI dalam projek tersebut.</li>
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <h6 className="text-[10px] font-black text-amber-500 uppercase tracking-widest italic">Output Format:</h6>
                                    <ul className="text-xs text-slate-400 space-y-2">
                                        <li className="flex gap-3 items-start"><span className="text-amber-500">✓</span> File Presentasi / Deck Projek.</li>
                                        <li className="flex gap-3 items-start"><span className="text-amber-500">✓</span> Folder Aset (Gambar, Teks, Kode).</li>
                                        <li className="flex gap-3 items-start"><span className="text-amber-500">✓</span> Log Perjalanan Prompt (Prompt Journey).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Tema Pilihan Projek",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-amber-500 font-bold text-xs uppercase tracking-widest text-center">02. Tema Pilihan Projek</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projectThemes.map((theme, i) => (
                            <div key={i} className="p-8 glass border border-white/5 rounded-[3rem] bg-white/2 hover:bg-white/5 transition-all group flex flex-col h-full relative overflow-hidden">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/5 blur-2xl group-hover:bg-amber-500/10 transition-colors" />
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-2">
                                        {theme.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[8px] font-black text-amber-400 uppercase tracking-widest">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold italic text-white mb-4">{theme.title}</h4>
                                <p className="text-sm text-slate-400 leading-relaxed flex-grow">{theme.desc}</p>
                                <div className="mt-8 flex justify-end">
                                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Alur Pengerjaan",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-amber-500 font-bold text-xs uppercase tracking-widest text-center">03. Alur Pengerjaan (Step-by-Step)</h3>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber-500 via-amber-500/20 to-transparent hidden md:block" />
                        <div className="space-y-12">
                            {[
                                { step: 1, title: "Konseptualisasi", desc: "Tentukan tema dan buat outline projek menggunakan AI sebagai partner brainstorming." },
                                { step: 2, title: "Prompt Engineering", desc: "Rancang prompt utama menggunakan framework PTCF untuk setiap modalitas yang dipilih." },
                                { step: 3, title: "Iterasi & Optimasi", desc: "Jalankan prompt, analisis output, dan lakukan perbaikan minimal 3 kali untuk setiap aset." },
                                { step: 4, title: "Integrasi & Finalisasi", desc: "Satukan seluruh aset ke dalam satu narasi projek yang koheren dan profesional." }
                            ].map((s, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-8 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-amber-500 flex-shrink-0 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-amber-500/20 relative z-10">
                                        {s.step}
                                    </div>
                                    <div className="pt-2">
                                        <h5 className="text-xl font-bold text-white mb-2 italic underline decoration-amber-500/30">{s.title}</h5>
                                        <p className="text-slate-400 leading-relaxed text-sm max-w-2xl">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "04",
            title: "Kriteria Penilaian",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-amber-500 font-bold text-xs uppercase tracking-widest text-center">04. Kriteria Penilaian</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { title: "Presisi & Logika", score: "30%", desc: "Seberapa baik Anda menggunakan framework PTCF dan teknik penalaran (CoT) dalam prompt." },
                            { title: "Kreativitas", score: "25%", desc: "Keunikan konsep dan kemampuan mengeksplorasi potensi multimodalitas AI." },
                            { title: "Kualitas Output", score: "25%", desc: "Hasil akhir aset (teks, gambar, kode) harus memenuhi standar profesional." },
                            { title: "Refleksi & Etika", score: "20%", desc: "Kedalaman analisis proses iterasi dan kesadaran terhadap batasan etika AI." }
                        ].map((k, i) => (
                            <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-[3rem] text-center space-y-4 shadow-xl">
                                <h5 className="text-4xl font-black text-amber-500">{k.score}</h5>
                                <h6 className="font-bold text-white text-sm uppercase tracking-widest">{k.title}</h6>
                                <p className="text-[10px] text-slate-500 leading-relaxed italic">{k.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "CHALLENGE",
            title: "Pitch Your Concept",
            content: (
                <div className="p-12 glass border border-amber-500/20 rounded-[4rem] space-y-8 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                        <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-lg shadow-amber-500/30">FP</div>
                        <div>
                            <h4 className="font-bold text-2xl uppercase tracking-tighter italic text-white underline decoration-amber-500/30">First Step: &quot;The Elevator Pitch&quot;</h4>
                            <p className="text-xs text-amber-400 font-black uppercase tracking-widest mt-1">Starting Your Final Journey</p>
                        </div>
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed italic">
                        Tugas awal Anda: Tuliskan satu paragraf konsep projek yang ingin Anda buat. Gunakan AI untuk membantu Anda mempertajam konsep tersebut agar memenuhi kriteria &quot;Multimodal&quot; dan &quot;Impactful&quot;.
                    </p>
                    <div className="flex justify-end pt-4">
                        <div className="px-10 py-5 bg-amber-600 text-white rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer shadow-xl shadow-amber-500/20">Submit Concept Outline</div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "The Future is Yours",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-6xl font-bold text-white italic underline underline-offset-12 decoration-amber-500/20 capitalize tracking-tight">The Future is Yours</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;You didn&apos;t just learn to write prompts; you learned to speak the language of the future.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
                    <div className="space-y-4 pt-12">
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black italic">Congratulations on completing the course.</p>
                        <p className="text-amber-500 text-xs font-bold uppercase tracking-tighter italic">Precision. Logic. Creativity. Ethics.</p>
                    </div>
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
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-500">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-amber-500/20"
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
                                <div className="flex items-center gap-4 text-amber-500 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-amber-500"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Selesai' :
                                            `Bagian ${section.id.split('-')[1] || section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-amber-500/20 hover:text-amber-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-amber-500/20 to-transparent mt-24" />
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
