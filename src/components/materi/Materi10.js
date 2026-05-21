'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi10({ materi }) {
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

    const logicTechniques = [
        {
            name: "Zero-Shot",
            concept: "Direct Instruction",
            desc: "Memberikan instruksi langsung tanpa contoh. Bergantung pada pemahaman internal model.",
            example: '"Klasifikasikan teks ini sebagai Positif atau Negatif: Hari ini sungguh luar biasa!"'
        },
        {
            name: "Few-Shot",
            concept: "Learning by Example",
            desc: "Memberikan beberapa contoh format/logika sebelum instruksi utama untuk mengunci pola.",
            example: '"Teks: Bagus sekali -> Sentimen: Positif; Teks: Buruk -> Sentimen: Negatif; Teks: Mantap -> Sentimen: ..."'
        },
        {
            name: "Chain of Thought",
            concept: "Step-by-Step Logic",
            desc: "Meminta AI untuk menjabarkan langkah-langkah penalarannya sebelum memberikan jawaban akhir.",
            example: '"Pecahkan soal matematika ini. Mari kita berpikir langkah demi langkah (Step by Step)."'
        },
        {
            name: "Chain of Verification",
            concept: "Self-Correction",
            desc: "Meminta AI untuk memverifikasi fakta dalam jawabannya sendiri untuk mengurangi halusinasi.",
            example: '"Tulis jawabanmu, lalu buat daftar pertanyaan untuk mengecek apakah fakta di atas benar."'
        }
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "Mastering AI Logic",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-4 text-cyan-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-cyan-400"></span> Pertemuan 10: Advanced Prompting
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-cyan-500/20 underline-offset-16 italic tracking-tight">Mastering AI Logic</h2>
                    <p className="text-xl text-slate-200 leading-relaxed text-justify font-medium">
                        Prompting tingkat lanjut bukan lagi tentang "apa" yang diminta, melainkan <strong>"Bagaimana" AI harus Berpikir</strong>. Di sini, kita merancang arsitektur penalaran untuk meminimalkan halusinasi dan memaksimalkan akurasi.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-bold text-cyan-300">Reasoning Patterns</span>
                        <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-bold text-cyan-300">Logic Engineering</span>
                        <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-bold text-cyan-300">Accuracy Optimization</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Zero-Shot vs Few-Shot",
            content: (
                <div className="space-y-16 text-left">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-cyan-500 font-bold text-xs uppercase tracking-widest">01. Zero-Shot vs Few-Shot (Learning)</h3>
                            <p className="text-4xl font-bold tracking-tight">Mengajar dengan Contoh (Few-Shot)</p>
                            <p className="text-slate-400 max-w-2xl text-sm">Terkadang instruksi teks saja tidak cukup. Few-Shot prompting memberikan pola yang harus diikuti oleh AI.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 glass rounded-[3rem] border border-white/5 space-y-6 bg-white/2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl font-black">0</div>
                            <h5 className="text-xl font-bold text-cyan-400">Zero-Shot Prompting</h5>
                            <p className="text-sm text-slate-300 leading-relaxed italic">
                                &quot;Buatlah daftar 5 ide nama startup untuk aplikasi kesehatan mental yang fokus pada meditasi.&quot;
                            </p>
                            <div className="p-4 bg-black/40 rounded-2xl border border-white/5 space-y-2">
                                <p className="text-[10px] text-slate-500 uppercase font-bold">Karakteristik:</p>
                                <ul className="text-[11px] text-slate-400 list-disc pl-4">
                                    <li>Cepat dan langsung</li>
                                    <li>Bergantung penuh pada data training model</li>
                                    <li>Berisiko menghasilkan format yang tidak konsisten</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-8 glass rounded-[3rem] border border-cyan-500/20 space-y-6 bg-cyan-500/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl font-black">3+</div>
                            <h5 className="text-xl font-bold text-cyan-400">Few-Shot Prompting</h5>
                            <p className="text-sm text-slate-300 leading-relaxed italic">
                                &quot;Nama Startup (Kesehatan): MindEase; Nama Startup (Fitness): FitFlow; Nama Startup (Kesehatan Mental): ...&quot;
                            </p>
                            <div className="p-4 bg-black/40 rounded-2xl border border-cyan-500/20 space-y-2">
                                <p className="text-[10px] text-cyan-500 uppercase font-bold">Karakteristik:</p>
                                <ul className="text-[11px] text-slate-400 list-disc pl-4">
                                    <li>Memberikan contoh (shots)</li>
                                    <li>Mengunci format output dengan sangat presisi</li>
                                    <li>Sangat efektif untuk klasifikasi dan ekstraksi data</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Chain of Thought (CoT)",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-cyan-500 font-bold text-xs uppercase tracking-widest text-center">02. Chain of Thought (Penalaran Berantai)</h3>
                    <div className="p-12 glass border border-white/5 rounded-[4rem] bg-slate-900 shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full" />
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h4 className="text-3xl font-bold italic tracking-tight underline decoration-cyan-500/30">Thinking Step-by-Step</h4>
                                <p className="text-slate-300 leading-relaxed text-justify">
                                    Chain of Thought memaksa AI untuk "menuliskan coret-coretan" pemikirannya. Teknik ini terbukti meningkatkan performa AI pada tugas-tugas logika, matematika, dan pemecahan masalah kompleks hingga berkali-kali lipat.
                                </p>
                                <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                                    <p className="text-cyan-400 font-bold text-sm italic">&quot;Let&apos;s think step by step.&quot;</p>
                                    <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest">The Magic Phrase</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-3">
                                    <h6 className="text-[10px] font-black text-slate-500 uppercase">Input:</h6>
                                    <p className="text-xs text-slate-300 italic">&quot;Jika saya punya 5 apel, makan 2, lalu beli 1 kantong isi 3 apel, berapa apel saya? Berpikir langkah demi langkah.&quot;</p>
                                </div>
                                <div className="p-6 bg-cyan-500/5 rounded-3xl border border-cyan-500/20 space-y-3">
                                    <h6 className="text-[10px] font-black text-cyan-500 uppercase">Output AI (CoT):</h6>
                                    <ol className="text-[11px] text-slate-400 list-decimal pl-4 space-y-1">
                                        <li>Mulai dengan 5 apel.</li>
                                        <li>Makan 2: 5 - 2 = 3 apel tersisa.</li>
                                        <li>Beli 1 kantong isi 3: 3 + 3 = 6 apel.</li>
                                        <li>Jawaban Akhir: 6 apel.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Advanced Reasoning Frameworks",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-cyan-500 font-bold text-xs uppercase tracking-widest text-center">03. Arsitektur Penalaran Lanjutan</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {logicTechniques.slice(2).map((tech, i) => (
                            <div key={i} className="p-8 glass border border-white/5 rounded-[3rem] bg-white/2 hover:bg-white/5 transition-all group">
                                <div className="w-12 h-12 bg-cyan-500/10 text-cyan-500 rounded-xl flex items-center justify-center mb-6 font-bold text-xl shadow-inner border border-cyan-500/20">
                                    {i === 0 ? '⛓️' : '🔍'}
                                </div>
                                <h5 className="text-xl font-bold text-white mb-2">{tech.name}</h5>
                                <p className="text-[10px] text-cyan-500 font-black uppercase tracking-widest mb-4">{tech.concept}</p>
                                <p className="text-xs text-slate-400 leading-relaxed mb-6">{tech.desc}</p>
                                <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                                    <p className="text-[9px] text-slate-500 uppercase font-black mb-2 tracking-tighter">Contoh Prompt:</p>
                                    <p className="text-[10px] font-mono text-cyan-300 italic leading-relaxed">{tech.example}</p>
                                </div>
                            </div>
                        ))}
                        <div className="p-8 bg-linear-to-br from-cyan-600 to-blue-700 rounded-[3rem] shadow-2xl flex flex-col justify-center space-y-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="relative z-10 space-y-4">
                                <h5 className="text-2xl font-bold italic">Self-Consistency</h5>
                                <p className="text-sm text-cyan-100 leading-relaxed">AI menjalankan proses berpikir 3x, lalu memilih jawaban yang paling sering muncul (mayoritas). Teknik ini hampir menghilangkan error acak.</p>
                                <div className="pt-4">
                                    <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">Precision Hack</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "CHALLENGE",
            title: "The Logic Master Challenge",
            content: (
                <div className="p-12 glass border border-cyan-500/20 rounded-[4rem] space-y-8 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                        <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-lg shadow-cyan-500/30">LM</div>
                        <div>
                            <h4 className="font-bold text-2xl uppercase tracking-tighter italic text-white underline decoration-cyan-500/30">Kasus: &quot;The Inventory Paradox&quot;</h4>
                            <p className="text-xs text-cyan-400 font-black uppercase tracking-widest mt-1">Solving Complex Logic with Few-Shot + CoT</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-200 text-lg leading-relaxed italic">
                            Tantangan: Buatlah satu prompt gabungan yang menggunakan <strong>Few-Shot</strong> (untuk format tabel) dan <strong>Chain of Thought</strong> (untuk menghitung sisa stok) untuk masalah berikut:
                        </p>
                        <p className="text-sm text-slate-400 p-6 bg-black/40 rounded-3xl border border-white/5 italic">
                            &quot;Toko A punya 100 barang. Senin laku 20. Selasa datang 50 barang baru tapi 10 rusak. Rabu laku setengah dari sisa stok hari Selasa. Berapa stok akhir?&quot;
                        </p>
                    </div>
                    <div className="flex justify-end pt-4">
                        <div className="px-10 py-5 bg-cyan-600 text-white rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer shadow-xl shadow-cyan-500/20">Selesaikan Logika</div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "The Architect of Intelligence",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-white italic underline underline-offset-12 decoration-cyan-500/20 capitalize tracking-tight">Thinking Architecture</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;A well-structured prompt is a road map for the AI&apos;s mind.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">Advanced prompting is the bridge between raw data and true machine reasoning.</p>
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
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-cyan-500">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-cyan-500/20"
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
                                <div className="flex items-center gap-4 text-cyan-500 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-cyan-500"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Selesai' :
                                            `Bagian ${section.id.split('-')[1] || section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-cyan-500/20 to-transparent mt-24" />
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
