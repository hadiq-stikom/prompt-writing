'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi13({ materi }) {
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

    const optimizationTechniques = [
        {
            title: "The Critique Loop",
            desc: "Mintalah AI untuk memberikan kritik pada jawabannya sendiri sebelum Anda memintanya memperbaiki.",
            icon: "🔄"
        },
        {
            title: "Format Anchor",
            desc: "Gunakan batasan format yang ketat (seperti tabel atau bullet points) untuk mencegah AI berbicara melantur.",
            icon: "⚓"
        },
        {
            title: "Tone Shift",
            desc: "Berikan contoh nada bicara yang diinginkan (misal: 'seperti artikel majalah Wired' atau 'seperti memo internal').",
            icon: "🎭"
        },
        {
            title: "Length Control",
            desc: "Berikan batas kata atau jumlah paragraf yang sangat spesifik untuk memastikan kepadatan informasi.",
            icon: "📏"
        }
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "The Master Refiner",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-4 text-emerald-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-emerald-400"></span> Pertemuan 13: Optimasi Hasil Output
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-emerald-500/20 underline-offset-16 italic tracking-tight">The Master Refiner</h2>
                    <p className="text-xl text-slate-200 leading-relaxed text-justify font-medium">
                        Hasil pertama dari AI jarang sekali menjadi hasil terbaik. <strong>Seni Prompt Writing</strong> yang sesungguhnya terletak pada kemampuan Anda untuk melakukan <strong>Iterasi dan Optimasi</strong> hingga mencapai kesempurnaan.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-300">Output Optimization</span>
                        <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-300">Iterative Design</span>
                        <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-300">Quality Control</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "The Iterative Loop",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-emerald-500 font-bold text-xs uppercase tracking-widest">01. Lingkaran Iterasi (The Loop)</h3>
                            <p className="text-4xl font-bold tracking-tight">Jangan Pernah Puas dengan Output Pertama</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="p-8 bg-slate-900 border-l-4 border-emerald-500 rounded-r-3xl space-y-4">
                                <h5 className="text-xl font-bold text-white italic">Langkah 1: Analisis</h5>
                                <p className="text-sm text-slate-400 leading-relaxed">Baca output pertama dengan kritis. Apa yang kurang? Apakah nadanya terlalu kaku? Apakah datanya kurang detail? Apakah formatnya berantakan?</p>
                            </div>
                            <div className="p-8 bg-slate-900 border-l-4 border-emerald-500 rounded-r-3xl space-y-4">
                                <h5 className="text-xl font-bold text-white italic">Langkah 2: Umpan Balik Korektif</h5>
                                <p className="text-sm text-slate-400 leading-relaxed">Berikan perintah spesifik untuk memperbaiki kelemahan tersebut. Jangan hanya bilang &quot;buat lebih bagus&quot;.</p>
                                <div className="p-4 bg-black/40 rounded-2xl border border-white/5 italic text-[10px] text-emerald-300">
                                    &quot;Bagus, tapi buat paragraf kedua lebih ringkas dan tambahkan data statistik untuk mendukung argumennya.&quot;
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {optimizationTechniques.map((tech, i) => (
                                <div key={i} className="p-6 glass border border-white/5 rounded-3xl bg-white/2 hover:bg-white/5 transition-all">
                                    <div className="text-3xl mb-4">{tech.icon}</div>
                                    <h6 className="font-bold text-white mb-2 text-sm">{tech.title}</h6>
                                    <p className="text-[10px] text-slate-400 leading-relaxed">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Transformation Techniques",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-emerald-500 font-bold text-xs uppercase tracking-widest text-center">02. Teknik Transformasi (Style & Tone)</h3>
                    <div className="p-12 glass border border-white/10 rounded-[4rem] bg-slate-900 shadow-2xl relative overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h4 className="text-3xl font-bold text-white italic underline decoration-emerald-500/30">The Shape Shifter</h4>
                                <p className="text-slate-300 leading-relaxed text-justify">
                                    Salah satu kekuatan terbesar AI adalah kemampuannya mengubah satu informasi menjadi berbagai gaya bahasa yang berbeda tanpa kehilangan inti pesannya.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <p className="text-[10px] text-emerald-400 font-black uppercase mb-1">Formal</p>
                                        <p className="text-[9px] text-slate-500 italic">Laporan eksekutif, jurnal ilmiah, hukum.</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <p className="text-[10px] text-emerald-400 font-black uppercase mb-1">Conversational</p>
                                        <p className="text-[9px] text-slate-500 italic">Blog post, newsletter, media sosial.</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <p className="text-[10px] text-emerald-400 font-black uppercase mb-1">Poetic / Story</p>
                                        <p className="text-[9px] text-slate-500 italic">Narasi kreatif, marketing storytelling.</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <p className="text-[10px] text-emerald-400 font-black uppercase mb-1">Technical</p>
                                        <p className="text-[9px] text-slate-500 italic">Dokumentasi API, manual penggunaan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-4 flex flex-col justify-center">
                                <h6 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">🚀 Transformation Prompt:</h6>
                                <p className="text-xs font-mono text-slate-200 leading-relaxed italic">
                                    &quot;Ambil teks laporan teknis di bawah ini dan ubah menjadi 3 post Twitter (X) yang menarik bagi audiens umum. Gunakan emoji, kalimat pendek yang mengundang rasa ingin tahu (hook), dan sertakan hashtag yang relevan [Task]. Jangan hilangkan inti datanya [Context].&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Verification & QC",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-emerald-500 font-bold text-xs uppercase tracking-widest text-center">03. Kontrol Kualitas & Verifikasi</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 glass border border-white/5 rounded-[3rem] bg-white/2 space-y-4">
                            <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center font-bold">🚫</div>
                            <h5 className="text-lg font-bold text-white italic">Hallucination Check</h5>
                            <p className="text-xs text-slate-400 leading-relaxed">Gunakan prompt: &quot;Apakah pernyataan [X] didukung oleh sumber data yang valid? Jika ragu, katakan Anda tidak tahu.&quot;</p>
                        </div>
                        <div className="p-8 glass border border-white/5 rounded-[3rem] bg-white/2 space-y-4">
                            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center font-bold">🧠</div>
                            <h5 className="text-lg font-bold text-white italic">Logic Verification</h5>
                            <p className="text-xs text-slate-400 leading-relaxed">Minta AI untuk memverifikasi langkah-langkah penalarannya sendiri: &quot;Tunjukkan perhitungan matematis di balik angka ini.&quot;</p>
                        </div>
                        <div className="p-8 glass border border-white/5 rounded-[3rem] bg-white/2 space-y-4">
                            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center font-bold">🎭</div>
                            <h5 className="text-lg font-bold text-white italic">Style Consistency</h5>
                            <p className="text-xs text-slate-400 leading-relaxed">Gunakan AI lain untuk mengevaluasi nada bicara: &quot;Apakah teks ini sudah terdengar profesional dan empatik?&quot;</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "CHALLENGE",
            title: "The 5-Step Iteration Challenge",
            content: (
                <div className="p-12 glass border border-emerald-500/20 rounded-[4rem] space-y-8 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                        <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-lg shadow-emerald-500/30">IC</div>
                        <div>
                            <h4 className="font-bold text-2xl uppercase tracking-tighter italic text-white underline decoration-emerald-500/30">Projek: &quot;The Perfect Article&quot;</h4>
                            <p className="text-xs text-emerald-400 font-black uppercase tracking-widest mt-1">Evolving a prompt from Vague to Masterpiece</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-200 text-lg leading-relaxed italic">
                            Tugas Anda: Mulailah dengan prompt sederhana &quot;Tulis artikel tentang kopi.&quot; Lakukan 5 kali iterasi dengan memberikan feedback spesifik:
                        </p>
                        <ol className="text-sm text-slate-400 p-6 bg-black/40 rounded-3xl border border-white/5 space-y-2 list-decimal pl-10 italic">
                            <li>Fokuskan pada manfaat kesehatan.</li>
                            <li>Gunakan nada bicara yang santai dan humoris.</li>
                            <li>Tambahkan data tentang konsumsi kopi di Indonesia.</li>
                            <li>Buat format dengan sub-judul yang menarik (clickbait).</li>
                            <li>Ringkas hasil akhirnya menjadi maksimal 300 kata.</li>
                        </ol>
                    </div>
                    <div className="flex justify-end pt-4">
                        <div className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer shadow-xl shadow-emerald-500/20">Mulai Iterasi</div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "Quality is a Journey",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-white italic underline underline-offset-12 decoration-emerald-500/20 capitalize tracking-tight">The Pursuit of Perfection</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;Don&apos;t settle for what the AI gives you. Demand what your vision requires.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">Great output is the result of a great dialogue between man and machine.</p>
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
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-emerald-500">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-emerald-500/20"
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
                                <div className="flex items-center gap-4 text-emerald-400 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-emerald-400"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Selesai' :
                                            `Bagian ${section.id.split('-')[1] || section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-emerald-500/20 to-transparent mt-24" />
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
