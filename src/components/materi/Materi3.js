'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import PresentationMode from './PresentationMode';

export default function Materi3({ materi }) {
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

    // Define sections as a function to avoid duplicating content
    const getSections = () => [
        {
            id: "01",
            title: "Dari 'Tanya' ke 'Instruksi'",
            content: (
                <div className="max-w-3xl space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">Dari &quot;Tanya&quot; ke &quot;Instruksi&quot;</h2>
                    <p className="text-slate-200 leading-relaxed text-lg text-justify">
                        Banyak pengguna gagal mendapatkan jawaban yang baik dari AI karena mereka hanya <strong>&quot;bertanya&quot;</strong> (seperti pada Google Search), bukan <strong>&quot;memberikan instruksi&quot;</strong>. Struktur prompt yang benar adalah fondasi utama untuk hasil yang presisi.
                    </p>
                    <div className="p-6 bg-primary/10 rounded-2xl border-l-4 border-primary hover:scale-[1.02] transition-transform duration-300">
                        <p className="text-primary italic font-medium">&quot;Berikan konteks yang cukup, dan AI akan memberikan hasil yang melampaui ekspektasi Anda.&quot;</p>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Framework P-C-T-F",
            content: (
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold text-white">Framework P-C-T-F</h2>
                        <p className="text-primary/60 uppercase tracking-widest text-[10px] font-black">The Four Pillars of Precision</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: 'Persona', code: 'P', desc: 'Siapa AI tersebut?' },
                            { title: 'Context', code: 'C', desc: 'Apa situasinya?' },
                            { title: 'Task', code: 'T', desc: 'Apa perintahnya?' },
                            { title: 'Format', code: 'F', desc: 'Apa bentuk outputnya?' },
                        ].map((pill, i) => (
                            <div key={i} className="relative p-8 glass border border-white/5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-6xl font-black">{pill.code}</div>
                                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-primary/20">{pill.code}</div>
                                <h4 className="font-bold text-lg mb-2 text-white">{pill.title}</h4>
                                <p className="text-xs text-slate-200 leading-relaxed">{pill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Persona: Kedalaman Peran",
            content: (
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Persona: Kedalaman Peran</h2>
                        <p className="text-slate-200 leading-relaxed">
                            Mendesain persona bukan sekadar memberi nama jabatan. Ia adalah cara kita memicu <strong>klaster data spesifik</strong> pada AI. Semakin detil personanya, semakin akurat &quot;intuisi&quot; AI dalam menjawab.
                        </p>
                        <div className="space-y-4">
                            <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:border-primary/30 transition-all text-left">
                                <h5 className="text-primary font-black text-[10px] uppercase tracking-widest mb-3">Tingkat Kedalaman Persona</h5>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <p className="text-[10px] text-slate-400 font-bold italic">Umum (Generalist)</p>
                                        <p className="text-xs text-slate-200 font-mono bg-white/5 p-2 rounded">&quot;Anda adalah Software Developer.&quot;</p>
                                        <p className="text-[9px] text-red-400">Hasil: Standar, terkadang terlalu luas.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] text-primary font-bold italic">Spesifik (Expert)</p>
                                        <p className="text-xs text-primary font-mono bg-primary/5 p-2 rounded border border-primary/20">&quot;Anda adalah Senior Fullstack Developer dengan 10 tahun pengalaman di fintech, mengutamakan keamanan dan skalabilitas Node.js.&quot;</p>
                                        <p className="text-[9px] text-emerald-400">Hasil: Presisi, teknis, berfokus pada efisiensi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl relative z-10 text-left"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                                <div className="text-[10px] font-mono text-slate-500">SYSTEM_OVERRIDE_ENABLED</div>
                            </div>
                            <div className="space-y-4 font-mono text-[11px]">
                                <p className="text-slate-500">{"// Persona Configuration"}</p>
                                <p className="text-indigo-400">&quot;base_role&quot;: &quot;Practical Software Architect&quot;,</p>
                                <p className="text-indigo-400">&quot;seniority&quot;: &quot;10+ Years&quot;,</p>
                                <p className="text-indigo-400">&quot;focus&quot;: [&quot;Clean Code&quot;, &quot;Performance&quot;, &quot;Security&quot;],</p>
                                <p className="text-emerald-400">&quot;instruction_depth&quot;: &quot;Level 5 (Advanced)&quot;</p>
                            </div>
                        </motion.div>
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    </div>
                </div>
            )
        },
        {
            id: "04",
            title: "Context: Prinsip 'Goldilocks'",
            content: (
                <div className="grid md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Context: Prinsip &quot;Goldilocks&quot;</h2>
                        <p className="text-slate-200 leading-relaxed">
                            AI tidak hidup di dunia nyata Anda. Anda harus memberikan konteks yang <strong>proporsional</strong>: Tidak terlalu sedikit (Ambigua), dan tidak terlalu banyak (Noise yang mendistraksi).
                        </p>
                        <div className="p-8 glass border border-white/5 rounded-3xl space-y-4 group hover:border-primary/20 transition-all bg-white/2">
                            <h5 className="text-emerald-400 font-black text-[10px] uppercase tracking-widest italic">Checklist Konteks Ideal:</h5>
                            <ul className="space-y-3 text-sm text-slate-200">
                                <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> <strong>Background:</strong> Kondisi saat ini.</li>
                                <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> <strong>Goal:</strong> Apa yang ingin dicapai secara spesifik.</li>
                                <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> <strong>Audience:</strong> Siapa yang akan membaca output ini.</li>
                                <li className="flex gap-3 items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> <strong>Constraints:</strong> Batasan atau aturan khusus.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-bold text-lg text-white italic">Tips Mengembangkan Konteks</h4>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-6 glass border-l-4 border-amber-500 rounded-2xl bg-amber-500/5">
                                <h6 className="font-bold text-sm mb-1">Teknik Bertanya Balik</h6>
                                <p className="text-xs text-slate-300 italic leading-relaxed">&quot;Sebelum kamu mengerjakan tugas ini, ajukan 3-5 pertanyaan kepada saya untuk mendapatkan konteks yang lebih lengkap.&quot;</p>
                            </div>
                            <div className="p-6 glass border-l-4 border-primary rounded-2xl bg-primary/5">
                                <h6 className="font-bold text-sm mb-1">Definisikan &quot;Pain Point&quot;</h6>
                                <p className="text-xs text-slate-300 leading-relaxed italic">Sebutkan masalah utama yang ingin diselesaikan agar AI fokus pada solusi, bukan sekadar teori.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "05",
            title: "Task: Kalimat Imperatif",
            content: (
                <div className="grid md:grid-cols-2 gap-12 items-start text-left">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Task: Kalimat Imperatif</h2>
                        <p className="text-slate-200 ">
                            Kunci dari instruksi yang kuat adalah penggunaan <strong>Kalimat Imperatif (Perintah)</strong>. Hindari kalimat pasif atau terlalu banyak basa-basi yang bisa membingungkan AI.
                        </p>
                        <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl space-y-4">
                            <h5 className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Strong Verbs (Kata Kerja Kuat):</h5>
                            <div className="flex flex-wrap gap-2">
                                {['Analisis', 'Ekstrak', 'Sintesis', 'Rangkum', 'Klasifikasikan', 'Debug', 'Refactor', 'Tulis ulang'].map((verb, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-300 border border-white/10">{verb}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-white/10 shadow-3xl glass backdrop-blur-2xl">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="bg-slate-900">
                                    <th className="p-6 text-xs font-black uppercase tracking-[0.2em] text-red-400 border-b border-white/5">Passive/Weak</th>
                                    <th className="p-6 text-xs font-black uppercase tracking-[0.2em] text-emerald-400 border-b border-white/5">Imperative/Strong</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-xs italic text-slate-400">&quot;Saya ingin tahu tentang...&quot;</td>
                                    <td className="p-6 text-xs font-bold text-emerald-400 italic">&quot;Jelaskan mekanisme...&quot;</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-xs italic text-slate-400">&quot;Bisa tolong buatkan coding...&quot;</td>
                                    <td className="p-6 text-xs font-bold text-emerald-400 italic">&quot;Implementasikan fungsi...&quot;</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-xs italic text-slate-400">&quot;Coba pikirkan ide untuk...&quot;</td>
                                    <td className="p-6 text-xs font-bold text-emerald-400 italic">&quot;Brainstorming 10 ide...&quot;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        },
        {
            id: "06",
            title: "Format: Struktur Penyajian",
            content: (
                <div className="space-y-8 text-left">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">Format: Struktur Penyajian</h2>
                        <p className="text-slate-200">Kendali penuh output ada di tangan Anda. Gunakan format yang paling mendukung efisiensi pengerjaan tugas Anda.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Table', desc: 'Sangat baik untuk perbandingan data.', color: 'blue' },
                            { name: 'JSON / XML', desc: 'Format standar untuk program komputer.', color: 'emerald' },
                            { name: 'Mermaid Chart', desc: 'Visualisasi alur proses atau diagram.', color: 'purple' },
                            { name: 'Markdown', desc: 'Struktur teks kaya (Heading, Bold, List).', color: 'orange' },
                            { name: 'CSV', desc: 'Siap untuk diimpor ke Excel / Google Sheets.', color: 'green' },
                            { name: 'Numbered List', desc: 'Langkah-langkah yang harus berurutan.', color: 'slate' }
                        ].map((fmt, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-6 glass border border-white/5 rounded-3xl flex items-center gap-6 group cursor-default"
                            >
                                <div className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center font-black text-xs group-hover:bg-primary group-hover:text-white transition-all shadow-xl`}>
                                    {fmt.name[0]}
                                </div>
                                <div className="space-y-1">
                                    <h6 className="font-bold text-sm text-white">{fmt.name}</h6>
                                    <p className="text-[10px] text-slate-400 italic leading-tight">{fmt.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "07",
            title: "Constraints: Kompas Output",
            fullContainer: true,
            content: (
                <div className="glass border border-white/10 rounded-[4rem] p-12 text-white overflow-hidden relative shadow-3xl w-full text-left">
                    <div className="absolute -bottom-8 -right-8 p-12 opacity-5 pointer-events-none text-9xl font-black italic">LIMITS</div>
                    <div className="relative z-10 space-y-8">
                        <div className="max-w-2xl space-y-6">
                            <h2 className="text-white text-3xl font-bold italic tracking-tight underline underline-offset-8 decoration-primary/50">Constraints: Kompas Output</h2>
                            <p className="text-slate-200 text-lg leading-relaxed">
                                Tanpa batasan, AI akan cenderung memberikan jawaban yang &quot;paling aman&quot; dan umum. Batasan bertindak sebagai filter untuk membuang hasil yang tidak diinginkan.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6 pt-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3">
                                    <h5 className="text-primary font-black text-[10px] uppercase tracking-widest">Positive Constraints</h5>
                                    <ul className="text-xs text-slate-300 space-y-2">
                                        <li>• &quot;Gunakan analogi dunia otomotif&quot;</li>
                                        <li>• &quot;Gunakan format Markdown dengan tabel&quot;</li>
                                        <li>• &quot;Sebutkan minimal 3 sumber referensi&quot;</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl space-y-3">
                                    <h5 className="text-red-400 font-black text-[10px] uppercase tracking-widest">Negative Constraints</h5>
                                    <ul className="text-xs text-slate-300 space-y-2">
                                        <li>• &quot;Jangan gunakan jargon teknis yang berat&quot;</li>
                                        <li>• &quot;Hindari memberikan solusi yang berbayar&quot;</li>
                                        <li>• &quot;Jangan ulangi informasi yang sudah ada&quot;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "08",
            title: "Tone & Style: Menentukan 'Suara' AI",
            content: (
                <div className="space-y-8 text-left">
                    <h2 className="text-3xl font-bold text-white">Tone & Style: Menentukan &quot;Suara&quot; AI</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Academic', desc: 'Formal, didasarkan pada referensi, objektif.', icon: '🏛️' },
                            { title: 'Persuasive', desc: 'Meyakinkan, emosional, berfokus pada manfaat.', icon: '📣' },
                            { title: 'Socratic', desc: 'Menjawab dengan pertanyaan untuk mengasah logika.', icon: '🤔' },
                            { title: 'Empathetic', desc: 'Mendengar, menenangkan, berpusat pada perasaan.', icon: '🤍' },
                            { title: 'Humorous', desc: 'Kasual, penuh anekdot, dan ringan.', icon: '🎭' },
                            { title: 'Technocratic', desc: 'Presisi, sangat teknis, fokus pada efisiensi.', icon: '⚙️' },
                        ].map((tone, i) => (
                            <div key={i} className="p-6 glass border border-white/5 rounded-3xl hover:-translate-y-2 transition-all duration-300 hover:scale-105 group">
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{tone.icon}</div>
                                <h4 className="font-bold text-white mb-1 italic">{tone.title}</h4>
                                <p className="text-xs text-slate-300 leading-relaxed">{tone.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "09",
            title: "Few-Shot Prompting: Kekuatan Contoh",
            content: (
                <div className="grid md:grid-cols-2 gap-12 items-center text-left">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Few-Shot Prompting: Kekuatan Contoh</h2>
                        <p className="text-slate-200 leading-relaxed italic">
                            &quot;A picture is worth a thousand words, but an example is worth a thousand instructions.&quot;
                        </p>
                        <p className="text-sm text-slate-200 leading-relaxed">
                            Daripada menjelaskan format yang rumit, cukup berikan 2-3 contoh. AI akan mengenali polanya secara otomatis.
                        </p>
                    </div>
                    <div className="p-12 bg-primary rounded-[3.5rem] shadow-3xl text-white space-y-4 relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 opacity-10 text-8xl font-black pointer-events-none group-hover:scale-110 transition-transform">SHOTS</div>
                        <div className="space-y-4 border-b border-white/20 pb-6 relative z-10 text-left">
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Example Input/Output</p>
                            <div className="space-y-2">
                                <p className="text-sm italic flex items-center gap-3">
                                    <span className="opacity-60">Input:</span> 🍎 Buah Apel <span className="text-white/40">&rarr;</span> <span className="font-bold italic">Merah/Hijau, Manis</span>
                                </p>
                                <p className="text-sm italic flex items-center gap-3">
                                    <span className="opacity-60">Input:</span> 🍋 Buah Lemon <span className="text-white/40">&rarr;</span> <span className="font-bold italic">Kuning, Masam</span>
                                </p>
                            </div>
                        </div>
                        <div className="pt-2 relative z-10 text-left">
                            <p className="text-sm font-bold italic flex items-center gap-3">
                                <span className="opacity-60">Input:</span> 🍇 Buah Anggur <span className="text-white/40">&rarr;</span> <span className="animate-pulse">AI follows the pattern...</span>
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "10",
            title: "Iterate to Perfection",
            content: (
                <div className="space-y-12 text-center max-w-4xl mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white italic decoration-primary/20 underline underline-offset-12">Iterate to Perfection</h2>
                        <div className="py-8 flex flex-wrap justify-center gap-4">
                            {['Draft Prompt', 'Analyze Output', 'Add Constraint', 'Refine Role', 'Test Again'].map((step, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="px-6 py-2 bg-slate-900 border border-white/10 text-white rounded-full text-xs font-bold shadow-xl group hover:bg-primary transition-all">
                                        <span className="opacity-50 mr-2">{i + 1}.</span>{step}
                                    </div>
                                    {i < 4 && <span className="text-primary opacity-30 text-xl font-black">→</span>}
                                </div>
                            ))}
                        </div>
                        <div className="p-8 glass border border-white/5 rounded-4xl hover:scale-[1.02] transition-transform duration-300">
                            <h4 className="font-bold italic text-white underline underline-offset-4 decoration-primary/20 mb-6">Diskusi Pekan Ini</h4>
                            <p className="text-sm text-slate-200 leading-relaxed italic max-w-2xl mx-auto">
                                &quot;Framework P-C-T-F mana yang menurut Anda paling sering dilupakan namun paling berdampak pada kualitas jawaban? Berikan alasannya.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "11",
            title: "Galeri Prompt Terapan",
            content: (
                <div className="space-y-12 text-left">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white">Galeri Prompt Terapan</h2>
                        <p className="text-slate-200">Pelajari bagaimana elemen-elemen P-C-T-F menyatu dalam sebuah instruksi tunggal yang kuat.</p>
                    </div>

                    <div className="grid gap-8">
                        {/* Legend */}
                        <div className="flex flex-wrap gap-4 p-4 glass border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] justify-center shadow-2xl">
                            <span className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                                <span className="w-2 h-2 rounded bg-indigo-400"></span> Persona
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                                <span className="w-2 h-2 rounded bg-amber-400"></span> Context
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                                <span className="w-2 h-2 rounded bg-emerald-400"></span> Task
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20">
                                <span className="w-2 h-2 rounded bg-purple-400"></span> Format
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">
                                <span className="w-2 h-2 rounded bg-red-400"></span> Constraints
                            </span>
                        </div>

                        {/* Example 1: Edukasi */}
                        <div className="p-8 glass border border-white/5 rounded-[2.5rem] shadow-sm space-y-6 hover:scale-[1.01] transition-transform duration-300">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-white text-xl italic">Kasus: Penjelasan Materi Kuliah</h4>
                                <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded-full border border-primary/30">Expert Level</span>
                            </div>
                            <div className="p-8 bg-slate-950/40 rounded-3xl font-sans leading-relaxed text-slate-200 border border-white/5 shadow-2xl text-left">
                                &quot;<span className="px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30 font-medium">Anda adalah asisten dosen AI senior yang ahli dalam menjelaskan konsep kompleks kepada pemula dengan analogi kreatif.</span> <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded border border-amber-500/30 font-medium">Saya adalah mahasiswa semester 2 yang sedang mempelajari 'Neural Networks' namun merasa tersesat dengan istilah matematika yang ada.</span> <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30 font-medium">Tolong jelaskan cara kerja Neural Network menggunakan analogi 'Dapur Restoran'.</span> <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30 font-medium">Gunakan format 3 poin utama (Input, Process, Output) dalam tabel Markdown.</span> <span className="px-1.5 py-0.5 bg-red-500/20 text-red-300 rounded border border-red-500/30 font-medium">Jangan gunakan rumus kalkulus atau notasi matematika yang berat.</span>&quot;
                            </div>
                        </div>

                        {/* Example 2: Profesional / Bisnis */}
                        <div className="p-8 glass border border-white/5 rounded-[2.5rem] shadow-sm space-y-6 hover:scale-[1.01] transition-transform duration-300">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-white text-xl italic">Kasus: Email Penawaran Kerjasama</h4>
                                <span className="px-3 py-1 bg-amber-500/20 text-amber-500 text-[10px] font-bold rounded-full border border-amber-500/30">Context Rich</span>
                            </div>
                            <div className="p-8 bg-slate-950/40 rounded-3xl font-sans leading-relaxed text-slate-200 border border-white/5 shadow-2xl text-left">
                                &quot;<span className="px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30 font-medium">Anda adalah seorang spesialis Business Development senior dengan pengalaman 15 tahun di industri SaaS.</span> <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded border border-amber-500/30 font-medium">Perusahaan kita, TechPropel, menawarkan solusi keamanan database otomatis. Target kita adalah CTO dari startup e-commerce yang baru saja mendapat pendanaan Seri A.</span> <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30 font-medium">Tuliskan draft 'Cold Email' yang memicu rasa ingin tahu (curiosity) tanpa terlihat memaksa. Fokuskan pada 'ketenangan pikiran' (peace of mind).</span> <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30 font-medium">Gunakan format struktur email profesional (Subject, Hooks, Body, CTA).</span> <span className="px-1.5 py-0.5 bg-red-500/20 text-red-300 rounded border border-red-500/30 font-medium">Maksimal 3 paragraf pendek dan hindari kata-kata klise seperti 'revolutionary' atau 'game-changing'.</span>&quot;
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const sectionsData = getSections();

    return (
        <div className="space-y-24 pb-20 dark:text-slate-200">
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
                        <section className={`space-y-8 group/section relative`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-primary"></span> Section {section.id}
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
