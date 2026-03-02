'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Materi2({ materi }) {
    return (
        <div className="space-y-24 pb-20 dark:text-slate-200">
            {/* Section 1: Pengenalan AI Generatif */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 01
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-white leading-tight underline decoration-primary/20 underline-offset-8">Tradisional vs Generatif</h2>
                            <p className="text-slate-200 leading-relaxed text-lg">
                                Dahulu, AI bersifat <strong>Diskriminatif</strong>—ia bertindak seperti "Satpam" yang mengelompokkan data (Misal: &quot;Apakah ini spam?&quot;). Sekarang, kita memasuki era <strong>Generatif</strong>—di mana AI bertindak seperti "Seniman" yang mampu menciptakan konten baru dari nol berdasarkan pola yang dipelajarinya. Pergeseran ini bukan sekadar alat baru, melainkan perubahan paradigma dalam cara kita berkolaborasi dengan mesin.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 glass rounded-2xl border border-white/5 hover:bg-white/5 transition-all duration-300 hover:scale-[1.02]">
                                    <h4 className="font-bold text-white mb-2 italic text-sm">Discriminative</h4>
                                    <p className="text-[10px] text-slate-300 leading-relaxed">Mempelajari batasan antar kategori. Fokus pada klasifikasi.</p>
                                </div>
                                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-[1.02]">
                                    <h4 className="font-bold text-primary mb-2 italic text-sm">Generative</h4>
                                    <p className="text-[10px] text-primary/70 leading-relaxed">Mempelajari distribusi data. Fokus pada penciptaan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-linear-to-tr from-primary/20 to-purple-500/20 rounded-[3rem] blur-2xl group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="relative glass p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
                                <div className="aspect-video bg-slate-950 rounded-2xl flex items-center justify-center overflow-hidden border border-white/5">
                                    <div className="text-primary font-mono text-sm animate-pulse flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span> [GENERATE_CONTENT] &gt; _
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
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 02
                    </div>
                    <div className="max-w-3xl space-y-4">
                        <h2 className="text-3xl font-bold text-white leading-tight">Evolusi: Dari Aturan ke Pola</h2>
                        <p className="text-primary/60 uppercase tracking-widest text-[10px] font-black">Paradigm Shift in Computation</p>
                    </div>
                    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-white/10 before:to-transparent">
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-slate-900 text-primary shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-black text-xs">
                                01
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl glass border border-white/5 shadow-xl group-hover:bg-white/5 transition-all duration-300 group-hover:scale-[1.02]">
                                <h4 className="font-bold text-white mb-2">Rule-Based (Expert Systems)</h4>
                                <p className="text-sm text-slate-200 leading-relaxed">Sistem pakar yang mengandalkan ribuan logika &quot;If-Then&quot;. Sangat kaku dan gagal jika menghadapi skenario yang tidak diprogram secara manual oleh manusia.</p>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-slate-900 text-primary shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-black text-xs">
                                02
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl glass border border-white/5 shadow-xl group-hover:bg-white/5 transition-all duration-300 group-hover:scale-[1.02]">
                                <h4 className="font-bold text-white mb-2">Statistical Learning</h4>
                                <p className="text-sm text-slate-200 leading-relaxed">AI mulai belajar dari probabilitas data tanpa diprogram secara eksplisit untuk setiap skenario.</p>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-primary/20 bg-primary text-white shadow-xl shadow-primary/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-black text-xs">
                                03
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-primary text-white shadow-2xl relative overflow-hidden group/card transition-transform duration-300 group-hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent"></div>
                                <h4 className="font-bold mb-2 italic tracking-tight relative z-10">Pattern-Based (Deep Learning)</h4>
                                <p className="text-sm text-white/90 leading-relaxed relative z-10 font-medium">AI mampu mengenali pola abstrak yang sangat kompleks dalam data masif, menyerupai cara kerja saraf manusia.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 3: LLM (Large Language Models) */}
            <ScrollReveal>
                <section className="bg-primary rounded-[3rem] p-16 text-white overflow-hidden relative shadow-3xl">
                    <div className="absolute top-0 right-0 p-16 opacity-10 pointer-events-none text-9xl font-black italic group-hover:scale-110 transition-transform">LLM</div>
                    <div className="relative z-10 space-y-12">
                        <div className="flex items-center gap-4 text-white/60 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-white/60"></span> Section 03
                        </div>
                        <div className="grid md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <h2 className="text-5xl font-bold leading-tight decoration-white/20 underline underline-offset-12">The Giants of Language</h2>
                                <p className="text-white/90 text-lg leading-relaxed">
                                    LLM (Large Language Models) adalah model kecerdasan buatan yang dilatih pada skala data masif (Triliunan token dari internet, buku, dan kode). <strong>&quot;Large&quot;</strong> merujuk pada miliaran parameter yang dimilikinya. Fenomena menarik terjadi di sini: <em>Emergent Abilities</em>—kemampuan cerdas (seperti penalaran logika) yang tiba-tiba muncul hanya setelah model mencapai skala ukuran tertentu.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 items-center">
                                <div className="p-10 rounded-4xl glass border border-white/20 flex flex-col justify-center text-center bg-white/5 backdrop-blur-3xl shadow-2xl">
                                    <div className="text-4xl font-black text-white mb-2">175B+</div>
                                    <div className="text-[10px] text-white/60 uppercase tracking-widest font-black">Parameters</div>
                                </div>
                                <div className="p-10 rounded-4xl glass border border-white/20 flex flex-col justify-center text-center bg-white/5 backdrop-blur-3xl shadow-2xl">
                                    <div className="text-4xl font-black text-white mb-2">TBs</div>
                                    <div className="text-[10px] text-white/60 uppercase tracking-widest font-black">Training Data</div>
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
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 04
                    </div>
                    <h2 className="text-3xl font-bold text-white">Tokenisasi: Bahasa dalam &apos;Kotak&apos;</h2>
                    <p className="text-slate-200 max-w-2xl text-lg">
                        AI tidak melihat kata &quot;Kucing&quot; sebagai satu kesatuan utuh. Ia memecahnya menjadi potongan kecil yang disebut <strong>Tokens</strong>.
                    </p>
                    <div className="p-12 glass border border-white/5 rounded-[3rem] shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex flex-wrap gap-4 items-center justify-center relative z-10">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-2xl text-slate-300 font-bold italic mr-8 whitespace-nowrap"
                            >
                                &quot;Jakarta adalah ibukota&quot;
                            </motion.span>
                            {[
                                { text: 'Jak', color: 'primary' },
                                { text: 'arta', color: 'primary' },
                                { text: 'adalah', color: 'slate-200' },
                                { text: ' ibu', color: 'emerald-400' },
                                { text: 'kota', color: 'emerald-400' }
                            ].map((token, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: i * 0.15 + 0.5
                                    }}
                                    className={`px-8 py-4 glass border-2 border-${token.color === 'primary' ? 'primary/20' : token.color === 'emerald-400' ? 'emerald-500/20' : 'white/10'} rounded-2xl font-mono text-${token.color} shadow-lg transition-transform hover:-translate-y-2 hover:bg-${token.color === 'primary' ? 'primary/10' : token.color === 'emerald-400' ? 'emerald-500/10' : 'white/5'}`}
                                >
                                    {token.text}
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                            className="mt-12 text-center relative z-10 space-y-2"
                        >
                            <p className="text-[10px] text-slate-300 font-black uppercase tracking-widest italic animate-pulse">Satu kata bisa terdiri dari satu atau lebih kotak (token).</p>
                            <p className="text-[10px] text-primary/50 font-medium italic">Catatan: Bahasa selain Inggris (seperti Indonesia) seringkali memerlukan lebih banyak token untuk satu kata yang sama, yang mempengaruhi efisiensi dan biaya penggunaan AI.</p>
                        </motion.div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 5: Probabilitas & Prediksi Kata Berikutnya */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 05
                    </div>
                    <h2 className="text-3xl font-bold text-white leading-tight">Probabilitas & Prediksi Kata Berikutnya</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-slate-200 leading-relaxed text-lg">
                                Secara matematis, LLM hanyalah mesin prediksi. Ia tidak &quot;tahu&quot; apa yang ia katakan, melainkan menghitung probabilitas token apa yang paling masuk akal muncul setelah urutan teks yang Anda berikan. Proses ini disebut <strong>Sampling</strong>. Dengan mengatur parameter <strong>Temperature</strong>, kita bisa memilih apakah AI harus selalu memilih kata yang paling pasti (Top 1) atau lebih kreatif dengan memilih kata yang kurang umum.
                            </p>
                            <ul className="space-y-4">
                                <motion.li
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex gap-4 items-start p-6 glass border border-white/5 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                                >
                                    <span className="text-primary font-black text-xs bg-primary/10 w-6 h-6 rounded flex items-center justify-center">01</span>
                                    <p className="text-sm text-slate-300"><strong>Input:</strong> &quot;Setiap pagi saya minum...&quot;</p>
                                </motion.li>
                                <motion.li
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex gap-4 items-start p-6 bg-primary text-white rounded-2xl shadow-2xl shadow-primary/30 relative overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
                                >
                                    <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent"></div>
                                    <span className="font-black text-xs bg-white/20 w-6 h-6 rounded flex items-center justify-center relative z-10">02</span>
                                    <div className="text-sm relative z-10">
                                        <strong>Prediction:</strong>
                                        <div className="inline-flex flex-col h-[1.2em] overflow-hidden ml-2 align-bottom">
                                            <motion.div
                                                animate={{ y: [0, -20, -40, -60] }}
                                                transition={{
                                                    duration: 2,
                                                    times: [0, 0.3, 0.6, 1],
                                                    repeat: Infinity,
                                                    repeatDelay: 1
                                                }}
                                                className="flex flex-col"
                                            >
                                                <span className="h-[20px] font-black underline">&quot;Kopi&quot; (85%)</span>
                                                <span className="h-[20px] opacity-50">&quot;Teh&quot; (10%)</span>
                                                <span className="h-[20px] opacity-30">&quot;Air&quot; (5%)</span>
                                                <span className="h-[20px] font-black underline">&quot;Kopi&quot; (85%)</span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 rounded-4xl p-12 flex items-center justify-center border border-white/5 overflow-hidden relative group shadow-2xl">
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="text-center space-y-4 relative z-10 transition-transform group-hover:scale-110">
                                <div className="text-7xl">🎲</div>
                                <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">P(token | context)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 6: Arsitektur Transformer & Self-Attention */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 06
                    </div>
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-4xl font-bold text-white tracking-tight italic decoration-primary/20 underline underline-offset-12">Transformer & Self-Attention</h2>
                        <p className="text-slate-300 mt-4 italic text-sm">&quot;The revolution of &apos;All You Need is Attention&apos;&quot;</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '⚡', title: 'Parallel Processing', desc: 'Berbeda dengan model lawas (RNN) yang membaca kata demi kata secara berurutan, Transformer memproses seluruh paragraf sekaligus. Ini mempercepat pelatihan secara masif.' },
                            { icon: '👀', title: 'Self-Attention', desc: 'Inilah kunci kecerdasan AI. Mekanisme ini memungkinkan AI memberikan "perhatian" lebih besar pada kata-kata kunci dalam satu kalimat untuk menangkap makna yang benar.', featured: true },
                            { icon: '📦', title: 'Positional Encoding', desc: 'Karena diproses sekaligus, AI membutuhkan "label koordinat" untuk memahami urutan kata (Misal: membedakan "Kucing memakan tikus" dengan "Tikus memakan kucing").' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className={`p-10 rounded-4xl glass border ${item.featured ? 'border-primary/30 bg-primary/5 scale-105 shadow-2xl relative overflow-hidden' : 'border-white/5'} space-y-4 hover:shadow-2xl transition-all duration-300 group hover:scale-105`}
                            >
                                {item.featured && <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent"></div>}
                                <div className={`w-14 h-14 ${item.featured ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-primary/10'} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-lg relative z-10`}>
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-white text-lg leading-tight relative z-10">{item.title}</h4>
                                <p className={`text-sm ${item.featured ? 'text-slate-300 font-medium' : 'text-slate-200'} leading-relaxed relative z-10`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    {/* Visual Attention Demo */}
                    <div className="mt-8 p-10 glass border border-white/5 rounded-3xl overflow-hidden space-y-6">
                        <div className="text-center">
                            <h5 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Simulasi Konteks (Self-Attention)</h5>
                            <p className="text-xs text-slate-400 italic">"Coba arahkan kursor pada kata yang memiliki makna ganda"</p>
                        </div>
                        <div className="flex justify-center gap-8 relative py-8">
                            {[
                                { word: 'Saya', attention: [] },
                                { word: 'pergi', attention: [] },
                                { word: 'ke', attention: [] },
                                { word: 'bank', attention: ['nabung', 'uang'], type: 'target' },
                                { word: 'untuk', attention: [] },
                                { word: 'menabung', attention: ['bank'], type: 'context' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover="hover"
                                    className="relative cursor-pointer group/word"
                                >
                                    <span className={`text-xl font-mono ${item.type === 'target' ? 'text-primary font-bold underline decoration-primary/30' : 'text-slate-300 group-hover/word:text-white transition-colors'}`}>{item.word}</span>
                                    {item.type === 'target' && (
                                        <motion.div
                                            variants={{
                                                hover: { opacity: 1, scale: 1, y: 0 }
                                            }}
                                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                            className="absolute -top-16 -left-1/2 w-48 pointer-events-none z-20"
                                        >
                                            <div className="bg-primary px-3 py-2 rounded-xl text-[10px] text-white shadow-2xl border border-white/20 leading-tight">
                                                <strong className="block mb-1">Attention Mechanism:</strong>
                                                AI melihat kata <strong>"menabung"</strong>, sehingga ia yakin 100% <strong>"bank"</strong> di sini adalah lembaga keuangan, bukan pinggiran sungai.
                                            </div>
                                            <div className="w-3 h-3 bg-primary rotate-45 mx-auto -mt-1.5 border-r border-b border-white/20"></div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 7: Pelatihan: Pre-training vs RLHF */}
            <ScrollReveal>
                <section className="bg-primary rounded-[3rem] p-16 text-white shadow-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-black/20 to-transparent"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 text-white/60 font-bold tracking-widest text-sm uppercase mb-12">
                            <span className="w-8 h-px bg-white/60"></span> Section 07
                        </div>
                        <div className="grid md:grid-cols-2 gap-16">
                            <div className="space-y-6 border-r border-white/10 pr-12">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Phase 01: Pre-training</h4>
                                <h3 className="text-4xl font-bold italic tracking-tight">The Librarian Phase</h3>
                                <p className="text-white/80 text-sm leading-relaxed font-medium">
                                    AI membaca triliunan dokumen dari Wikipedia, buku, artikel berita, hingga kode sumber (GitHub). Di fase ini, AI belajar &quot;bagaimana bahasa bekerja&quot; dan membangun pengetahuan umum tentang dunia. Ia menjadi sangat pintar dalam memprediksi kata, namun belum tahu cara berinteraksi dengan manusia secara sopan atau mengikuti instruksi spesifik.
                                </p>
                            </div>
                            <div className="space-y-6 pl-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Phase 02: RLHF</h4>
                                <h3 className="text-4xl font-bold italic tracking-tight">The Etiquette Phase</h3>
                                <p className="text-white/80 text-sm leading-relaxed font-medium">
                                    <em>Reinforcement Learning from Human Feedback</em>. Setelah &quot;pintar&quot;, AI dilatih ulang oleh manusia yang memberikan peringkat pada jawaban-jawabannya. Fase ini krusial untuk <strong>Alignment</strong>—menyelaraskan AI agar bersikap membantu, jujur, tidak berbahaya, dan mampu menjawab pertanyaan dalam format percakapan.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 8: Batasan (Halusinasi, Bias, Knowledge Cut-off) */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 08
                    </div>
                    <h2 className="text-3xl font-bold text-white">Batasan Sang Raksasa</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {[
                            { title: 'Hallucination', desc: 'AI adalah "Stochastic Parrot"—ia hanya mengulang pola tanpa pemahaman makna yang nyata. Ini membuatnya sering mengarang fakta dengan nada yang sangat meyakinkan.', icon: '🌀', color: 'red' },
                            { title: 'Systemic Bias', desc: 'Karena belajar dari data internet yang tidak difilter sepenuhnya, AI bisa merefeksikan prasangka atau ketidakadilan sistemik yang ada dalam bahasa manusia.', icon: '⚖️', color: 'orange' },
                            { title: 'Knowledge Cut-off', desc: 'AI adalah sistem tertutup. Ia tidak tahu apa yang terjadi setelah database pelatihannya berhenti (misal: Januari 2024), kecuali jika dihubungkan ke internet.', icon: '✂️', color: 'slate' },
                        ].map((item, i) => (
                            <div key={i} className={`p-10 glass border border-${item.color}-500/10 rounded-4xl space-y-4 shadow-xl group hover:bg-${item.color}-500/5 transition-all duration-300 hover:scale-105`}>
                                <div className="text-4xl group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                                <h4 className={`font-black text-${item.color}-400 uppercase tracking-widest text-[10px]`}>{item.title}</h4>
                                <p className="text-sm text-slate-200 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 9: Hubungan dengan Prompt Writing */}
            <ScrollReveal>
                <section className="grid md:grid-cols-2 gap-12 items-center glass border border-white/5 p-16 rounded-[3.5rem] shadow-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-9xl font-black italic group-hover:scale-110 transition-transform">WHY</div>
                    <div className="space-y-8 relative z-10">
                        <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-primary"></span> Section 09
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl font-bold text-white leading-tight italic decoration-primary/20 underline underline-offset-12"
                        >
                            Kenapa Kita Belajar Ini?
                        </motion.h2>
                        <p className="text-slate-200 leading-relaxed text-lg">
                            Memahami bahwa AI adalah &quot;mesin prediksi token berbasis konteks&quot; mengubah cara kita menulis prompt secara fundamental. Kita tidak lagi &quot;tanya-jawab&quot; secara pasif, melainkan melakukan <strong>Context Engineering</strong>. Dengan memberikan konteks yang kaya dan spesifik, kita memaksa probabilitas statistik AI untuk mengerucut hanya pada jawaban yang kita inginkan.
                        </p>
                    </div>
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [2, 1, 2]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="p-12 bg-primary rounded-[2.5rem] text-white shadow-3xl rotate-2 relative overflow-hidden group/box"
                    >
                        <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent"></div>
                        <p className="text-xl font-bold italic relative z-10">&quot;Kualitas output berbanding lurus dengan kualitas konteks yang memicu probabilitas tersebut.&quot;</p>
                    </motion.div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 10: Ringkasan & Diskusi */}
            <ScrollReveal>
                <section className="space-y-12 text-center max-w-4xl mx-auto pt-24">
                    <div className="space-y-8 group">
                        <div className="flex items-center justify-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-primary group-hover:w-24 transition-all duration-700"></span> Section 10
                        </div>
                        <h2 className="text-5xl font-bold text-white tracking-tighter italic decoration-primary/20 underline underline-offset-12">Synthetic Minds: Summary</h2>
                        <div className="grid sm:grid-cols-2 gap-8 text-left mt-16 relative z-10">
                            <div className="p-10 rounded-4xl glass border border-white/5 shadow-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105">
                                <h5 className="font-black text-primary mb-6 uppercase tracking-widest text-xs">Poin Utama</h5>
                                <ul className="text-sm text-slate-200 space-y-4">
                                    <li className="flex gap-3"><span className="text-primary font-bold">•</span> AI Generatif memproses token, bukan kata.</li>
                                    <li className="flex gap-3"><span className="text-primary font-bold">•</span> Transformer adalah otak dibalik LLM modern.</li>
                                    <li className="flex gap-3"><span className="text-primary font-bold">•</span> RLHF menyelaraskan AI dengan moral manusia.</li>
                                </ul>
                            </div>
                            <div className="p-10 rounded-4xl glass border border-white/5 shadow-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105 text-center flex flex-col items-center justify-center space-y-4">
                                <h5 className="font-black text-primary uppercase tracking-widest text-xs">Diskusi Kelas</h5>
                                <p className="text-lg text-slate-300 italic leading-relaxed font-bold">
                                    &quot;Dapatkah AI benar-benar memahami makna, atau ia hanya aktor probabilitas yang sangat mahir?&quot;
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-300 font-bold tracking-widest uppercase text-xs mt-20 group cursor-default">
                            Next Lesson: <span className="text-primary animate-pulse decoration-primary/50 underline underline-offset-8">Struktur Prompt yang Efektif</span>
                        </p>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
