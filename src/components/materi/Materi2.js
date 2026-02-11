import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function Materi2({ materi }) {
    return (
        <div className="space-y-24 pb-20 dark:text-slate-200">
            {/* Section 1: Pengenalan AI Generatif */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 01
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white leading-tight">Tradisional vs Generatif</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                Dahulu, AI bersifat <strong>Diskriminatif</strong>—ia mengelompokkan data yang sudah ada (Misal: "Apakah ini gambar kucing?"). Sekarang, kita memasuki era <strong>Generatif</strong>—AI menciptakan data baru (Misal: "Buatkan saya gambar kucing").
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 italic">Discriminative</h4>
                                    <p className="text-xs text-slate-500">Mempelajari batasan antar kategori. Fokus pada klasifikasi.</p>
                                </div>
                                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl border border-indigo-100 dark:border-indigo-900/50">
                                    <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2 italic">Generative</h4>
                                    <p className="text-xs text-indigo-500/80 dark:text-indigo-400/80">Mempelajari distribusi data. Fokus pada penciptaan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-linear-to-tr from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-2xl group-hover:opacity-75 transition-opacity duration-1000"></div>
                            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                                <div className="aspect-video bg-slate-950 rounded-2xl flex items-center justify-center overflow-hidden">
                                    <div className="text-indigo-500 font-mono text-sm animate-pulse">
                                        [GENERATE_CONTENT] &gt; _
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 2: Evolusi: Dari Aturan ke Pola */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 02
                    </div>
                    <div className="max-w-3xl space-y-4">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Evolusi: Dari Aturan ke Pola</h2>
                        <p className="text-slate-600 dark:text-slate-400 uppercase tracking-tighter text-xs font-bold">Paradigm Shift in Computation</p>
                    </div>
                    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                1
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Rule-Based (Expert Systems)</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Logika "If-Then" yang kaku. Manusia menulis aturannya secara manual.</p>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                2
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Statistical Learning</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">AI mulai belajar dari probabilitas data tanpa diprogram secara eksplisit untuk setiap skenario.</p>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-indigo-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                3
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-indigo-600 text-white shadow-xl">
                                <h4 className="font-bold mb-1 italic tracking-tight">Pattern-Based (Deep Learning)</h4>
                                <p className="text-sm text-indigo-100">AI mampu mengenali pola abstrak yang sangat kompleks dalam data masif, menyerupai cara kerja saraf manusia.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 3: LLM (Large Language Models) */}
            <ScrollReveal>
                <section className="bg-slate-950 dark:bg-black rounded-[3rem] p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-[12rem] font-serif font-black italic">LLM</div>
                    <div className="relative z-10 space-y-12">
                        <div className="flex items-center gap-4 text-slate-500 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-slate-700"></span> Section 03
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h2 className="text-5xl font-serif font-bold italic underline decoration-indigo-500/50 underline-offset-8">The Giants of Language</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    LLM adalah model deep learning yang dilatih pada skala data yang luar biasa (Triliunan kata). "Large" bukan sekadar ukurannya, melainkan kemampuannya yang muncul (emergent abilities) saat parameter mencapai angka miliaran.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-center text-center">
                                    <div className="text-4xl font-black text-indigo-500 mb-2">175B+</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Parameters</div>
                                </div>
                                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-center text-center">
                                    <div className="text-4xl font-black text-white mb-2">TBs</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Training Data</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 4: Tokenisasi */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 04
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Tokenisasi: Bahasa dalam 'Kotak'</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                        AI tidak melihat kata "Kucing" sebagai satu kesatuan utuh. Ia memecahnya menjadi potongan kecil yang disebut <strong>Tokens</strong>.
                    </p>
                    <div className="p-12 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800">
                        <div className="flex flex-wrap gap-3 items-center justify-center">
                            <span className="text-2xl text-slate-400 font-serif italic mr-6 whitespace-nowrap">"Jakarta adalah ibukota"</span>
                            <div className="px-6 py-3 bg-white dark:bg-slate-800 border-2 border-indigo-200 dark:border-indigo-900 rounded-xl font-mono text-indigo-600 dark:text-indigo-400 shadow-sm transition-transform hover:-translate-y-1">Jak</div>
                            <div className="px-6 py-3 bg-white dark:bg-slate-800 border-2 border-indigo-200 dark:border-indigo-900 rounded-xl font-mono text-indigo-600 dark:text-indigo-400 shadow-sm transition-transform hover:-translate-y-1">arta</div>
                            <div className="px-6 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-mono text-slate-600 dark:text-slate-400 shadow-sm transition-transform hover:-translate-y-1">adalah</div>
                            <div className="px-6 py-3 bg-white dark:bg-slate-800 border-2 border-emerald-200 dark:border-emerald-900 rounded-xl font-mono text-emerald-600 dark:text-emerald-400 shadow-sm transition-transform hover:-translate-y-1"> ibu</div>
                            <div className="px-6 py-3 bg-white dark:bg-slate-800 border-2 border-emerald-200 dark:border-emerald-900 rounded-xl font-mono text-emerald-600 dark:text-emerald-400 shadow-sm transition-transform hover:-translate-y-1">kota</div>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-xs text-slate-400 font-bold tracking-tighter italic">Satu kata bisa terdiri dari satu atau lebih kotak (token).</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 5: Probabilitas & Prediksi Kata Berikutnya */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 05
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Probabilitas & Prediksi</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Secara matematis, LLM hanyalah mesin prediksi. Ia menghitung probabilitas token apa yang paling mungkin muncul setelah urutan teks yang Anda berikan.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    <span className="text-indigo-600 font-bold">01</span>
                                    <p className="text-sm"><strong>Input:</strong> "Setiap pagi saya minum..."</p>
                                </li>
                                <li className="flex gap-4 items-start p-4 bg-indigo-600 text-white rounded-2xl shadow-lg ring-4 ring-indigo-50 dark:ring-indigo-900/20">
                                    <span className="font-bold">02</span>
                                    <p className="text-sm"><strong>Prediction:</strong> "Kopi" (85%), "Teh" (10%), "Air" (5%)</p>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 rounded-4xl p-8 flex items-center justify-center border border-slate-800 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="text-center space-y-2 relative z-10">
                                <div className="text-5xl">🎲</div>
                                <p className="text-indigo-400 font-mono text-sm tracking-tighter">P(token | context)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 6: Arsitektur Transformer & Self-Attention */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 06
                    </div>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">Transformer & Self-Attention</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 italic">The revolution of "All You Need is Attention"</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-4xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-4 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center text-xl">⚡</div>
                            <h4 className="font-bold dark:text-white text-lg leading-tight">Parallel Processing</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Berbeda dengan model lama yang membaca satu per satu, Transformer membaca seluruh teks sekaligus.</p>
                        </div>
                        <div className="p-8 rounded-4xl bg-white dark:bg-slate-900 border-2 border-indigo-600 shadow-2xl space-y-4 scale-105">
                            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-xl text-white">👀</div>
                            <h4 className="font-bold dark:text-white text-lg leading-tight">Self-Attention</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">AI menentukan kata mana yang paling relevan dengan kata lainnya dalam satu kalimat untuk memahami konteks utuh.</p>
                        </div>
                        <div className="p-8 rounded-4xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-4 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center text-xl">📦</div>
                            <h4 className="font-bold dark:text-white text-lg leading-tight">Positional Encoding</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Karena dibaca sekaligus, AI memberi "label posisi" agar tahu urutan kata yang sebenarnya.</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 7: Pelatihan: Pre-training vs RLHF */}
            <ScrollReveal>
                <section className="bg-indigo-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-indigo-200 dark:shadow-none">
                    <div className="flex items-center gap-4 text-indigo-200 font-bold tracking-widest text-sm uppercase mb-12">
                        <span className="w-8 h-px bg-indigo-200"></span> Section 07
                    </div>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-6 border-r border-indigo-500/50 pr-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-300">Phase 01: Pre-training</h4>
                            <h3 className="text-3xl font-serif font-bold italic">The Librarian Phase</h3>
                            <p className="text-indigo-100 text-sm leading-relaxed">AI membaca triliunan dokumen internet untuk belajar "bagaimana bahasa bekerja" dan "pengetahuan umum tentang dunia". Ia menjadi sangat pintar tapi belum tahu cara mengobrol dengan sopan.</p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-300">Phase 02: RLHF</h4>
                            <h3 className="text-3xl font-serif font-bold italic">The Etiquette Phase</h3>
                            <p className="text-indigo-100 text-sm leading-relaxed"><em>Reinforcement Learning from Human Feedback</em>. Manusia memberikan peringkat pada jawaban AI. Ini mengajarkan AI untuk bersikap membantu, jujur, dan tidak berbahaya.</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 8: Batasan (Halusinasi, Bias, Knowledge Cut-off) */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 08
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Batasan Sang Raksasa</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {[
                            { title: 'Hallucination', desc: 'AI terkadang mengarang fakta dengan nada yang sangat meyakinkan karena ia hanya menebak probabilitas.', icon: '🌀' },
                            { title: 'Systemic Bias', desc: 'Karena belajar dari data internet, AI bisa merefleksikan prasangka manusia dalam datanya.', icon: '⚖️' },
                            { title: 'Knowledge Cut-off', desc: 'AI tidak tahu peristiwa yang terjadi setelah tanggal terakhir pelatihan datanya selesai.', icon: '✂️' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/50 rounded-3xl space-y-3">
                                <div className="text-2xl">{item.icon}</div>
                                <h4 className="font-bold text-red-900 dark:text-red-400">{item.title}</h4>
                                <p className="text-xs text-red-800/70 dark:text-red-300/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 9: Hubungan dengan Prompt Writing */}
            <ScrollReveal>
                <section className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 dark:bg-slate-900/50 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white underline decoration-wavy decoration-indigo-500/30">Kenapa Kita Belajar Ini?</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Memahami bahwa AI adalah "mesin prediksi token berbasis konteks" mengubah cara kita menulis prompt. Kita tidak lagi "meminta", tapi memberikan <strong>konteks statis</strong> agar probabilitas jawaban yang kita inginkan menjadi yang tertinggi.
                        </p>
                    </div>
                    <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl rotate-2">
                        <p className="text-lg font-bold italic">"Kualitas output berbanding lurus dengan kualitas konteks yang memicu probabilitas tersebut."</p>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 10: Ringkasan & Diskusi */}
            <ScrollReveal>
                <section className="space-y-12 text-center max-w-4xl mx-auto pt-20 border-t border-slate-100 dark:border-slate-800">
                    <div className="space-y-6">
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">Section 10</div>
                            <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white italic">Synthetic Minds: Summary</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 text-left mt-12">
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <h5 className="font-bold text-slate-900 dark:text-white mb-2">Poin Utama</h5>
                                <ul className="text-sm text-slate-500 space-y-2">
                                    <li>• AI Generatif memproses token, bukan kata.</li>
                                    <li>• Transformer adalah otak dibalik LLM modern.</li>
                                    <li>• RLHF menyeleraskan AI dengan moral manusia.</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <h5 className="font-bold text-slate-900 dark:text-white mb-2">Diskusi Kelas</h5>
                                <p className="text-sm text-slate-500 italic leading-relaxed">"Dapatkah AI benar-benar memahami makna, atau ia hanya aktor probabilitas yang sangat mahir?"</p>
                            </div>
                        </div>
                        <p className="text-slate-400 font-bold tracking-tighter italic text-xl mt-16 group cursor-default">
                            Next Lesson: <span className="text-indigo-600 group-hover:underline underline-offset-4">Struktur Prompt yang Efektif</span>
                        </p>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
