'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi5({ materi }) {
    const [isPresenting, setIsPresenting] = useState(false);
    const [startSlide, setStartSlide] = useState(0);

    const openPresentation = (index) => {
        setStartSlide(index);
        setIsPresenting(true);
        // Request fullscreen immediately in the click handler to satisfy browser security
        if (typeof document !== 'undefined' && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        }
    };

    const getSections = () => [
        {
            id: "INTRO",
            title: "Membangun 'Wajah' Aplikasi Inventaris",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-primary/20 underline-offset-16 italic tracking-tight">Membangun &quot;Wajah&quot; Aplikasi Inventaris</h2>
                    <p className="text-xl text-slate-400 leading-relaxed text-justify font-medium">
                        Fokus sesi ini adalah membangun antarmuka fungsional menggunakan <strong>Antigravity (Agentic AI)</strong>. Meskipun AI ini sangat cerdas, penggunaan struktur <strong>PCTF</strong> tetap krusial agar hasil kodenya profesional, rapi, dan sesuai standar industri.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400">Next.js (App Router)</span>
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400">Tailwind CSS</span>
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400">TypeScript</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Scaffolding & Setup",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-primary font-bold text-xl uppercase tracking-widest">01. Scaffolding & Setup</h3>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-slate-400 leading-relaxed text-justify text-lg">
                                Memulai dengan proyek bersih adalah langkah fundamental. Kita akan menyiapkan struktur dasar aplikasi termasuk Sidebar dan Navbar untuk navigasi dashboard.
                            </p>
                            <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-4">
                                <h5 className="text-xs font-bold text-primary uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                                <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                                    &quot;Sebagai Senior Frontend Dev (Persona), buat proyek Next.js baru dengan App Router & Tailwind (Task) untuk sistem Inventaris (Context). Pastikan struktur folder rapi di direktori src/ dan gunakan tema dark premium (Format).&quot;
                                </p>
                            </div>
                        </div>
                        <div className="p-8 glass rounded-[2.5rem] border border-white/10 space-y-6 bg-slate-900/50 flex flex-col justify-center shadow-3xl">
                            <h5 className="text-xs font-black uppercase tracking-widest text-slate-500">Checklist Setup:</h5>
                            <ul className="space-y-4">
                                {[
                                    'Struktur folder App Router terbentuk',
                                    'Konfigurasi Tailwind CSS aktif',
                                    'Sidebar & Navbar muncul di browser',
                                    'Tidak ada error saat npm run dev'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                                        <span className="text-primary">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "UI Components & Mock Data",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-primary font-bold text-xl uppercase tracking-widest">02. UI Components & Mock Data</h3>
                    <div className="space-y-8">
                        <p className="text-slate-400 max-w-3xl text-lg">Langkah ini mengubah kebutuhan fungsional menjadi komponen visual yang nyata menggunakan data dummy agar kita bisa melihat *feel* aplikasinya secara instan.</p>
                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[3rem] text-white space-y-6 shadow-2xl">
                            <h5 className="text-xs font-bold text-primary uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                            <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                                &quot;Definisikan interface Product di lib/types.ts (id, name, sku, price, stock). Kemudian, buat komponen ProductTable.tsx and ProductForm.tsx yang responsif. Gunakan styling Tailwind yang modern dengan efek hover pada baris tabel (Format).&quot;
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                                <div className="text-center p-4 rounded-2xl bg-white/2">
                                    <p className="text-xs font-bold text-slate-400">types.ts</p>
                                    <p className="text-[10px] text-slate-600 mt-1 uppercase">Contract Data</p>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-white/2">
                                    <p className="text-xs font-bold text-slate-400">ProductTable.tsx</p>
                                    <p className="text-[10px] text-slate-600 mt-1 uppercase">Read Operation</p>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-white/2">
                                    <p className="text-xs font-bold text-slate-400">ProductForm.tsx</p>
                                    <p className="text-[10px] text-slate-600 mt-1 uppercase">Create Operation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Client-Side Interaction",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-primary font-bold text-xl uppercase tracking-widest">03. Client-Side Interaction</h3>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-slate-400 leading-relaxed text-justify text-lg">
                                Kita menghubungkan Form ke Tabel di memori browser menggunakan <strong>React State</strong>. Ini memungkinkan interaksi tanpa harus menunggu database di sesi berikutnya.
                            </p>
                            <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-4">
                                <h5 className="text-xs font-bold text-primary uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                                <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                                    &quot;Hubungkan Form dan Tabel di app/inventaris/page.tsx menggunakan React State. Pastikan saat form di-submit, data baru ditambahkan ke array state dan tabel melakukan render ulang secara otomatis (Task).&quot;
                                </p>
                            </div>
                        </div>
                        <div className="p-8 bg-slate-950/50 rounded-4xl border border-white/5 space-y-4 font-mono text-xs shadow-3xl">
                            <p className="text-slate-500">{"// Apa yang dipelajari?"}</p>
                            <p className="text-emerald-400">1. useState untuk Array of Objects</p>
                            <p className="text-emerald-400">2. Event Handling pada Form Submit</p>
                            <p className="text-emerald-400">3. Spread Operator untuk update state</p>
                            <p className="text-emerald-400">4. Conditional Rendering</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "04",
            title: "Testing & Troubleshooting",
            content: (
                <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-12 text-white overflow-hidden relative shadow-2xl text-left w-full">
                    <div className="absolute -bottom-12 -right-12 p-12 opacity-5 pointer-events-none text-[12rem] font-black italic">DEBUG</div>
                    <div className="relative z-10 space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold italic underline underline-offset-12 decoration-primary/50 flex items-center gap-4">
                                🔍 Sesi Khusus: Testing & Troubleshooting
                            </h3>
                            <p className="text-slate-400 text-lg">Memastikan setiap baris kode berjalan sesuai ekspektasi adalah ciri developer profesional.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 glass border border-white/10 rounded-4xl space-y-6 bg-white/2">
                                <h5 className="font-bold text-emerald-400 flex items-center gap-2">
                                    <span>🧪</span> Testing Prompt
                                </h5>
                                <p className="text-xs text-slate-400 leading-relaxed italic">
                                    &quot;Buat instruksi manual atau script kecil untuk memastikan: 1. Apakah data baru benar-benar masuk ke state tabel? 2. Apakah tombol &apos;Hapus&apos; berfungsi menghapus baris dari state?&quot;
                                </p>
                            </div>
                            <div className="p-8 glass border border-white/10 rounded-4xl space-y-6 bg-white/2">
                                <h5 className="font-bold text-red-400 flex items-center gap-2">
                                    <span>🔧</span> Troubleshooting Prompt
                                </h5>
                                <p className="text-xs text-slate-400 leading-relaxed italic">
                                    &quot;Tabel saya tidak muncul meski data dummy sudah ada. Baca @ProductTable.tsx and @page.tsx. Cek apakah ada kesalahan pada map function atau key prop. Perbaiki kodenya.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "Next Phase",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white italic underline underline-offset-12 decoration-primary/20 capitalize tracking-tight">Step into the Next Phase</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Setelah wajah aplikasi selesai, saatnya kita memberikan <strong>Otak</strong> dan <strong>Ingatan</strong> permanen di Pertemuan berikutnya.</p>
                    </div>
                    <div className="p-10 bg-primary/20 border border-primary/20 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <p className="text-xl font-bold italic relative z-10">Lanjut ke Backend & Database →</p>
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">&quot;Frontend excellence is where aesthetics meets performance through clear instructions.&quot;</p>
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
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-primary/20"
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
                                <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-primary"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Next Step' :
                                            `Section ${section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-primary/20 hover:text-primary text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-primary/20 to-transparent mt-24" />
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
