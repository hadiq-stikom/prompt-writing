'use client';
import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import PresentationMode from './PresentationMode';

export default function Materi1({ materi }) {
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

    const getSections = () => [
        {
            id: "01",
            title: "Pendahuluan & Evolusi AI",
            content: (
                <div className="grid md:grid-cols-2 gap-12 items-center text-left">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white leading-tight">Pendahuluan & Evolusi AI</h2>
                        <div className="space-y-4">
                            <p className="text-slate-200 leading-relaxed text-lg">
                                Dunia telah berubah sejak kemunculan <strong>Large Language Models (LLM)</strong>. Bermula dari pencarian kata kunci sederhana, kini kita berada di era di mana mesin mampu memahami konteks, nuansa, dan kreativitas manusia.
                            </p>
                            <div className="p-6 bg-slate-800/40 border-l-4 border-primary rounded-2xl">
                                <p className="text-slate-100 italic">&quot;Prompt writing bukan sekadar mengetik teks, melainkan cara kita memprogram kecerdasan buatan menggunakan bahasa manusia.&quot;</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[300px]">
                        <Image
                            src="/prompt_writing_concept.png"
                            alt="Evolusi AI"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            )
        },
        {
            id: "01-DEFINITION",
            title: "Apa itu Prompt Writing?",
            content: (
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <div className="bg-primary/10 border border-primary/20 p-12 rounded-3xl shadow-2xl">
                        <h4 className="text-primary font-black uppercase tracking-widest text-xl mb-6">Apa itu Prompt Writing?</h4>
                        <p className="text-slate-200 text-2xl leading-relaxed">
                            <strong>Prompt writing</strong> adalah proses memberikan instruksi, stimulus, atau masukan kepada model AI untuk memicu respons tertentu. Ini adalah jembatan komunikasi yang memandu AI agar memahami tujuan dan konteks yang diinginkan pengguna.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Jenis-Jenis Prompt AI",
            content: (
                <div className="space-y-8 text-left">
                    <h2 className="text-3xl font-bold text-white">Jenis-Jenis Prompt AI</h2>
                    <p className="text-slate-200 max-w-3xl">Berdasarkan kompleksitas dan tujuannya, prompt dapat dibagi menjadi beberapa kategori utama:</p>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        {[
                            { title: 'Prompt Sederhana', type: 'Basic', example: 'Apa ibu kota Italia?' },
                            { title: 'Prompt Kompleks', type: 'Structured', example: 'Tulis email formal...' },
                            { title: 'Prompt Kontekstual', type: 'Framed', example: 'Bertindaklah sebagai ahli SEO...' }
                        ].map((item, i) => (
                            <div key={i} className="p-6 glass rounded-2xl border border-white/5 bg-white/5">
                                <span className="px-2 py-0.5 bg-primary/20 text-primary text-[8px] font-black uppercase tracking-widest rounded-full">{item.type}</span>
                                <h4 className="font-bold text-white mt-2 mb-2">{item.title}</h4>
                                <div className="p-3 bg-slate-950/50 rounded-xl text-[10px] font-mono text-slate-300 italic">
                                    &quot;{item.example}&quot;
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "02-CONT",
            title: "Jenis-Jenis Prompt AI (Lanjut)",
            content: (
                <div className="space-y-8 text-left">
                    <h2 className="text-3xl font-bold text-white opacity-50">Jenis-Jenis Prompt AI (Lanjut)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Prompt Kreatif', type: 'Generative', example: 'Buat desain logo minimalis...' },
                            { title: 'Prompt Instruksional', type: 'Step-by-step', example: 'Lakukan analisis data ini...' },
                            { title: 'Prompt Informatif', type: 'Summarization', example: 'Ringkas jurnal ini...' }
                        ].map((item, i) => (
                            <div key={i} className="p-6 glass rounded-2xl border border-white/5 bg-white/5">
                                <span className="px-2 py-0.5 bg-primary/20 text-primary text-[8px] font-black uppercase tracking-widest rounded-full">{item.type}</span>
                                <h4 className="font-bold text-white mt-2 mb-2">{item.title}</h4>
                                <div className="p-3 bg-slate-950/50 rounded-xl text-[10px] font-mono text-slate-300 italic">
                                    &quot;{item.example}&quot;
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Anatomi Prompt",
            content: (
                <div className="space-y-12 text-left">
                    <h2 className="text-3xl font-bold text-white">Anatomi Prompt (Struktur Dasar)</h2>
                    <p className="text-slate-200 max-w-3xl">Efektifitas prompt bergantung pada empat elemen kunci:</p>
                    <div className="grid md:grid-cols-4 gap-6 mt-4">
                        {[
                            { title: 'Role', icon: '👤', desc: 'Siapa AI tersebut?' },
                            { title: 'Task', icon: '🎯', desc: 'Apa yang harus dilakukan?' },
                            { title: 'Context', icon: '🌍', desc: 'Latar belakang informasi?' },
                            { title: 'Format', icon: '📄', desc: 'Bagaimana bentuk hasilnya?' }
                        ].map((item, i) => (
                            <div key={i} className="p-8 glass rounded-3xl border border-white/5 bg-white/5 text-center">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "04",
            title: "Bagaimana AI Berpikir?",
            content: (
                <div className="p-12 bg-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden text-left w-full">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none text-9xl font-black italic">Tokens</div>
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl font-bold italic tracking-tighter underline underline-offset-12 decoration-white/20">Bagaimana AI &quot;Berpikir&quot;?</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <p className="text-white text-xl leading-relaxed">AI tidak memahami kata seperti manusia. AI memproses <strong>Tokens</strong> dan memprediksi kata berikutnya berdasarkan probabilitas statistik.</p>
                            <div className="space-y-4">
                                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                    <p className="font-bold text-sm">Context Window:</p>
                                    <p className="text-xs opacity-80 italic">Kapasitas memori AI dalam satu percakapan.</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                    <p className="font-bold text-sm">Pattern Recognition:</p>
                                    <p className="text-xs opacity-80 italic">AI mencari pola dari prompt untuk menentukan gaya bahasa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "05",
            title: "3 Prinsip Emas (S.C.C)",
            content: (
                <div className="space-y-12 text-center w-full">
                    <h2 className="text-4xl font-bold text-white italic tracking-tighter">3 Prinsip Emas (S.C.C)</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { code: 'S', title: 'Specificity', color: 'blue', desc: 'Detail sebanyak mungkin.' },
                            { code: 'C', title: 'Clarity', color: 'emerald', desc: 'Bahasa instruktif & jelas.' },
                            { code: 'C', title: 'Context', color: 'amber', desc: 'Batasan & latar belakang.' }
                        ].map((p, idx) => (
                            <div key={idx} className="p-8 glass border border-white/5 rounded-[2.5rem] bg-white/2">
                                <div className={`w-16 h-16 bg-${p.color}-500/20 text-${p.color}-400 rounded-3xl flex items-center justify-center text-3xl mx-auto font-black mb-4`}>{p.code}</div>
                                <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                                <p className="text-slate-300 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "06",
            title: "Zero-shot vs Few-shot",
            content: (
                <div className="space-y-12 text-left w-full">
                    <h2 className="text-3xl font-bold text-white uppercase tracking-tighter underline underline-offset-8 decoration-primary/30">Teknik Instruksi Dasar</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-4xl bg-slate-900 border border-white/10 space-y-4">
                            <h4 className="text-primary font-black uppercase tracking-widest text-xs">Zero-shot Prompting</h4>
                            <p className="text-sm text-slate-300 italic">&quot;Klasifikasikan teks ini: &apos;Saya senang sekali hari ini!&apos; -&gt; Positif&quot;</p>
                        </div>
                        <div className="p-8 rounded-4xl glass border border-white/10 space-y-4">
                            <h4 className="text-primary font-black uppercase tracking-widest text-xs">Few-shot Prompting</h4>
                            <p className="text-sm text-slate-300 italic">&quot;Kecil -&gt; Besar, Lambat -&gt; Cepat, Sedih -&gt; ...&quot;</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "07",
            title: "Good vs Bad Prompt",
            content: (
                <div className="space-y-12 text-left w-full">
                    <h2 className="text-3xl font-bold text-white text-center">Good vs Bad Prompt</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 glass border border-red-500/20 rounded-4xl bg-red-500/5">
                            <div className="text-red-400 font-black text-xs uppercase mb-4">✕ Bad Prompt</div>
                            <p className="text-slate-200 italic mb-4">&quot;Buat artikel tentang AI.&quot;</p>
                            <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-bold">Kenapa? Terlalu umum, tanpa target, tanpa gaya.</p>
                        </div>
                        <div className="p-8 glass border border-emerald-500/20 rounded-4xl bg-emerald-500/5">
                            <div className="text-emerald-400 font-black text-xs uppercase mb-4">✓ Good Prompt</div>
                            <p className="text-slate-200 italic mb-4">&quot;Bertindaklah sebagai jurnalis teknologi senior. Buatkan artikel 500 kata untuk mahasiswa...&quot;</p>
                            <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-bold">Kenapa? P-C-T-F (Role, Task, Context, Format) terpenuhi.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "08",
            title: "Masa Depan Anda",
            content: (
                <div className="space-y-12 text-center w-full max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-white italic tracking-tighter underline underline-offset-12 decoration-primary/20">Prompt Engineering sebagai Skill Esensial</h2>
                    <p className="text-xl text-slate-300 leading-relaxed">Sama seperti kemampuan Google Search 15 tahun lalu, prompt engineering akan menjadi standar dasar di hampir semua profesi.</p>
                    <div className="p-12 glass border border-white/5 rounded-[4rem] bg-primary shadow-3xl relative overflow-hidden">
                        <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full flex items-center justify-center text-white text-5xl shadow-xl animate-bounce">🚀</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Mengapa Inilah Masa Depan Anda?</h3>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">✓</div>
                                <p className="text-white text-sm">Industrial Revolution 4.0 memerlukan kolaborasi AI.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">✓</div>
                                <p className="text-white text-sm">Productivity multiplier: Kerja 10x lebih cepat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "09",
            title: "Proses Iterasi",
            content: (
                <div className="p-12 glass border border-white/10 rounded-[4rem] shadow-2xl relative overflow-hidden group text-left w-full">
                    <div className="absolute -top-12 -right-12 p-24 opacity-[0.03] pointer-events-none text-9xl font-black italic">ITERATE</div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-white italic tracking-tighter">Proses Iterasi: &quot;Prompt-Fail-Refine&quot;</h2>
                            <div className="space-y-4">
                                {['Draft: Buat prompt awal.', 'Analyze: Lihat kekurangan AI.', 'Refine: Tambah detail/batasan.', 'Repeat: Ulangi prosesnya.'].map((step, i) => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center font-black text-primary text-xs shadow-lg">{i + 1}</div>
                                        <p className="text-slate-200 text-sm font-medium">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center flex-col items-center">
                            <div className="text-8xl animate-spin-slow">🔄</div>
                            <p className="text-primary font-black uppercase tracking-widest text-xs mt-8 italic">Iterative Excellence</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "10-11",
            title: "Halusinasi & Chaining",
            content: (
                <div className="space-y-12 text-left w-full">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 glass border border-red-500/20 rounded-4xl bg-white/2 space-y-6">
                            <div className="text-4xl">⚠️</div>
                            <h4 className="text-xl font-bold text-red-400 italic">Bahaya Halusinasi</h4>
                            <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-red-500 pl-4">&quot;Jika AI tidak tahu, katakan tidak tahu. Minta sumber referensi.&quot;</p>
                        </div>
                        <div className="p-10 glass border border-emerald-500/20 rounded-4xl bg-white/2 space-y-6 shadow-2xl">
                            <div className="text-4xl text-emerald-400">🔗</div>
                            <h4 className="text-xl font-bold text-emerald-400 italic">Chaining Prompt</h4>
                            <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-emerald-500 pl-4">Bagi tugas besar menjadi langkah-langkah kecil untuk hasil mendalam.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "Kesimpulan & Etika",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <h2 className="text-4xl font-bold text-white italic underline underline-offset-12 decoration-primary/20">Etika & Tanggung Jawab AI</h2>
                    <p className="text-slate-200 text-2xl leading-relaxed font-light">
                        AI adalah alat pendukung. Anda tetap memegang kendali penuh atas akurasi, integritas, dan orisinalitas karya akhir.
                    </p>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-12" />
                    <p className="text-primary font-black uppercase tracking-widest italic text-4xl mt-12 animate-pulse">Happy Prompting!</p>
                </div>
            )
        }
    ];

    const sectionsData = getSections();

    return (
        <div className="space-y-32 pb-20 dark:text-slate-200">
            {/* Presentation Controls */}
            <div className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/10 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none text-sm md:text-base">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-primary/20 text-xs md:text-sm"
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
                                <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase">
                                    <span className="w-8 h-px bg-primary"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Penutup' :
                                            `Sekuen ${section.id.split('-')[0]}`}
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
