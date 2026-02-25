import ScrollReveal from './ScrollReveal';

export default function Materi3({ materi }) {
    return (
        <div className="space-y-24 pb-20 text-white">
            {/* Section 1: Pendahuluan */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 01
                    </div>
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-4xl font-bold dark:text-white leading-tight">Dari "Tanya" ke "Instruksi"</h2>
                        <p className="text-slate-400 dark:text-slate-400 leading-relaxed text-lg text-justify">
                            Banyak pengguna gagal mendapatkan jawaban yang baik dari AI karena mereka hanya <strong>"bertanya"</strong> (seperti pada Google Search), bukan <strong>"memberikan instruksi"</strong>. Struktur prompt yang benar adalah fondasi utama untuk hasil yang presisi.
                        </p>
                        <div className="p-6 bg-primary/10 rounded-2xl border-l-4 border-primary">
                            <p className="text-primary italic font-medium">"Berikan konteks yang cukup, dan AI akan memberikan hasil yang melampaui ekspektasi Anda."</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 2: Framework P-C-T-F */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 02
                    </div>
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold dark:text-white">Framework P-C-T-F</h2>
                        <p className="text-primary/60 uppercase tracking-widest text-[10px] font-black">The Four Pillars of Precision</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: 'Persona', code: 'P', desc: 'Siapa AI tersebut?' },
                            { title: 'Context', code: 'C', desc: 'Apa situasinya?' },
                            { title: 'Task', code: 'T', desc: 'Apa perintahnya?' },
                            { title: 'Format', code: 'F', desc: 'Apa bentuk outputnya?' },
                        ].map((pill, i) => (
                            <div key={i} className="relative p-8 glass border border-white/5 rounded-3xl shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-6xl font-black">{pill.code}</div>
                                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-primary/20">{pill.code}</div>
                                <h4 className="font-bold text-lg mb-2 dark:text-white">{pill.title}</h4>
                                <p className="text-xs text-slate-400 dark:text-slate-400 leading-relaxed">{pill.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 3: Persona (Role) */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 03
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold dark:text-white">Persona: Menentukan Peran</h2>
                            <p className="text-slate-400 dark:text-slate-400 leading-relaxed">
                                Mendesain persona berarti Anda mengatur <strong>perspektif, gaya bahasa, dan kedalaman pengetahuan</strong> AI. Tanpa persona, AI akan memberikan jawaban standar (umum).
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
                                    <p className="text-xs text-red-400 uppercase font-black mb-2 tracking-tighter">Lemah (No Persona)</p>
                                    <p className="text-sm italic text-slate-500">"Jelaskan tentang ekonomi."</p>
                                </div>
                                <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                                    <p className="text-xs text-emerald-400 uppercase font-black mb-2 tracking-tighter">Kuat (With Persona)</p>
                                    <p className="text-sm italic text-slate-300">"Bertindaklah sebagai profesor ekonomi dari Harvard. Jelaskan inflasi kepada mahasiswa semester satu."</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-slate-900 dark:bg-black rounded-[2.5rem] border border-slate-800 shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                            </div>
                            <div className="space-y-4 font-mono text-[11px]">
                                <p className="text-slate-400">{"// System Message"}</p>
                                <p className="text-indigo-400 italic">&quot;role&quot;: &quot;Senior Fullstack Developer&quot;</p>
                                <p className="text-indigo-400 italic">&quot;tone&quot;: &quot;Professional, brief&quot;</p>
                                <p className="text-indigo-400 italic">&quot;expertise&quot;: &quot;Node.js, Security&quot;</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 4: Context (Background) */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 04
                    </div>
                    <h2 className="text-3xl font-bold dark:text-white">Context: Latar Belakang & Tujuan</h2>
                    <p className="text-slate-400 dark:text-slate-400 max-w-3xl">AI tidak hidup di dunia nyata Anda. Anda harus "mengimpor" realitas Anda ke dalam percakapan melalui konteks.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 glass border border-white/5 rounded-3xl space-y-4 group hover:border-primary/20 transition-all">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">🎯</div>
                            <h4 className="font-bold dark:text-white italic capitalize">Apa target audiensnya?</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">Materi untuk anak TK tentu berbeda dengan materi untuk direktur perusahaan.</p>
                        </div>
                        <div className="p-8 glass border border-white/5 rounded-3xl space-y-4 group hover:border-primary/20 transition-all">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">🏢</div>
                            <h4 className="font-bold dark:text-white italic capitalize">Apa tujuan akhirnya?</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">Apakah ini untuk meyakinkan investor, menghibur audiens, atau dokumentasi teknis?</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 5: Task (Action) */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 05
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold dark:text-white">Task: Instruksi yang Operasional</h2>
                        <p className="text-slate-400 dark:text-slate-400">Gunakan kata kerja yang <strong>tidak ambigu</strong>. Hindari kata-kata pasif.</p>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-white/10 shadow-3xl glass backdrop-blur-2xl">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-left">
                                    <th className="p-6 text-xs font-black uppercase tracking-[0.2em] text-red-400/80 border-b border-white/5">Hindari (Ambigua)</th>
                                    <th className="p-6 text-xs font-black uppercase tracking-[0.2em] text-emerald-400/80 border-b border-white/5">Gunakan (Spesifik)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white/2">
                                <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-sm italic text-slate-500">"Tolong buat sesuatu tentang..."</td>
                                    <td className="p-6 text-sm font-medium text-emerald-400/90 italic">"Buatlah daftar 5 poin mengenai..."</td>
                                </tr>
                                <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-sm italic text-slate-500">"Tuliskan artikel pendek."</td>
                                    <td className="p-6 text-sm font-medium text-emerald-400/90 italic">"Tulis artikel maksimal 300 kata."</td>
                                </tr>
                                <tr className="group hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-sm italic text-slate-500">"Coba analisis data ini."</td>
                                    <td className="p-6 text-sm font-medium text-emerald-400/90 italic">"Ekstrak tren utama dari tabel berikut."</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 6: Format (Output) */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 06
                    </div>
                    <h2 className="text-3xl font-bold dark:text-white">Format: Struktur Penyajian</h2>
                    <p className="text-slate-400 dark:text-slate-400">Mintalah AI untuk menyajikan informasi dalam bentuk yang paling mudah Anda konsumsi.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Tabel', 'JSON / Kode', 'Bullet Points', 'Diagram Mermaid', 'Spreadsheet Ready', 'Mind-map Style', 'Email Draft', 'Markdown'].map((fmt, i) => (
                            <div key={i} className="p-4 text-center glass border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all cursor-default shadow-sm">
                                {fmt}
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 7: Constraints (Limit) */}
            <ScrollReveal>
                <section className="glass border border-white/10 rounded-[4rem] p-16 text-white overflow-hidden relative shadow-3xl">
                    <div className="absolute -bottom-8 -right-8 p-12 opacity-5 pointer-events-none text-9xl font-black italic">LIMITS</div>
                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center gap-4 text-slate-500 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-slate-500"></span> Section 07
                        </div>
                        <div className="max-w-2xl space-y-6">
                            <h2 className="text-white text-3xl font-bold italic tracking-tight underline underline-offset-8 decoration-primary/50">Constraints: Batasan yang Tegas</h2>
                            <p className="text-slate-400 text-lg leading-relaxed">Jangan hanya memberi tahu AI apa yang harus dilakukan, beri tahu juga apa yang <strong>TIDAK BOLEH</strong> dilakukan (Negative Constraints).</p>
                            <div className="grid sm:grid-cols-2 gap-4 pt-6">
                                <div className="space-y-2">
                                    <h5 className="text-primary font-black text-[10px] uppercase tracking-widest">Contoh Batasan</h5>
                                    <ul className="text-sm text-slate-400 space-y-1">
                                        <li>• "Hindari jargon teknis"</li>
                                        <li>• "Gunakan Bahasa Indonesia baku"</li>
                                        <li>• "Jangan sebutkan merk kompetitor"</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-primary font-black text-[10px] uppercase tracking-widest">Contoh Negative Prompt</h5>
                                    <p className="text-sm text-slate-400 italic">"Jangan memberikan kesimpulan, cukup sajikan datanya saja."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 8: Tone & Style */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 08
                    </div>
                    <h2 className="text-3xl font-bold dark:text-white">Tone & Style: Menentukan "Suara" AI</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Academic', desc: 'Formal, didasarkan pada referensi, objektif.', icon: '🏛️' },
                            { title: 'Persuasive', desc: 'Meyakinkan, emosional, berfokus pada manfaat.', icon: '📣' },
                            { title: 'Socratic', desc: 'Menjawab dengan pertanyaan untuk mengasah logika.', icon: '🤔' },
                            { title: 'Empathetic', desc: 'Mendengar, menenangkan, berpusat pada perasaan.', icon: '🤍' },
                            { title: 'Humorous', desc: 'Kasual, penuh anekdot, dan ringan.', icon: '🎭' },
                            { title: 'Technocratic', desc: 'Presisi, sangat teknis, fokus pada efisiensi.', icon: '⚙️' },
                        ].map((tone, i) => (
                            <div key={i} className="p-6 glass border border-white/5 rounded-3xl hover:-translate-y-2 transition-all group">
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{tone.icon}</div>
                                <h4 className="font-bold dark:text-white mb-1 italic">{tone.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{tone.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 9: Few-Shot Prompting */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 09
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold dark:text-white">Few-Shot Prompting: Kekuatan Contoh</h2>
                            <p className="text-slate-400 dark:text-slate-400 leading-relaxed italic">
                                "A picture is worth a thousand words, but an example is worth a thousand instructions."
                            </p>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Daripada menjelaskan format yang rumit, cukup berikan 2-3 contoh. AI akan mengenali polanya secara otomatis.
                            </p>
                        </div>
                        <div className="p-12 bg-primary rounded-[3.5rem] shadow-3xl text-white space-y-4 relative overflow-hidden group">
                            <div className="absolute -top-4 -right-4 opacity-10 text-8xl font-black pointer-events-none group-hover:scale-110 transition-transform">SHOTS</div>
                            <div className="space-y-4 border-b border-white/20 pb-6 relative z-10">
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
                            <div className="pt-2 relative z-10">
                                <p className="text-sm font-bold italic flex items-center gap-3">
                                    <span className="opacity-60">Input:</span> 🍇 Buah Anggur <span className="text-white/40">&rarr;</span> <span className="animate-pulse">AI follows the pattern...</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 10: Iterative Process */}
            <ScrollReveal>
                <section className="space-y-12 text-center max-w-4xl mx-auto pt-20">
                    <div className="space-y-6">
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-primary font-bold tracking-widest text-sm uppercase">Section 10</div>
                            <h2 className="text-4xl font-bold dark:text-white italic decoration-primary/20 underline underline-offset-12">Iterate to Perfection</h2>
                        </div>
                        <div className="py-12 flex flex-wrap justify-center gap-4">
                            {['Draft Prompt', 'Analyze Output', 'Add Constraint', 'Refine Role', 'Test Again'].map((step, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="px-6 py-2 bg-slate-900 border border-white/10 text-white rounded-full text-xs font-bold shadow-xl group hover:bg-primary transition-all">
                                        <span className="opacity-50 mr-2">{i + 1}.</span>{step}
                                    </div>
                                    {i < 4 && <span className="text-primary opacity-30 text-xl font-black">→</span>}
                                </div>
                            ))}
                        </div>
                        <div className="p-8 glass border border-white/5 rounded-4xl">
                            <h4 className="font-bold italic dark:text-white underline underline-offset-4 decoration-primary/20 mb-6">Diskusi Pekan Ini</h4>
                            <p className="text-sm text-slate-400 leading-relaxed italic max-w-2xl mx-auto">
                                "Framework P-C-T-F mana yang menurut Anda paling sering dilupakan namun paling berdampak pada kualitas jawaban? Berikan alasannya."
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent pt-12" />

            {/* Section 11: Galeri Prompt Terapan */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 11
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold dark:text-white">Galeri Prompt Terapan</h2>
                        <p className="text-slate-400">Pelajari bagaimana elemen-elemen P-C-T-F menyatu dalam sebuah instruksi tunggal yang kuat.</p>
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
                        <div className="p-8 glass border border-white/5 rounded-[2.5rem] shadow-sm space-y-6">
                            <h4 className="font-bold dark:text-white text-xl italic">Kasus: Penjelasan Materi Kuliah</h4>
                            <div className="p-8 bg-slate-950/40 rounded-3xl font-sans leading-relaxed text-slate-400 border border-white/5 shadow-2xl">
                                &quot;<span className="px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30 font-medium">Bertindaklah sebagai asisten dosen yang sabar dan ahli dalam bidang AI.</span> <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded border border-amber-500/30 font-medium">Saya adalah mahasiswa semester 2 yang sedang kesulitan memahami konsep Deep Learning.</span> <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30 font-medium">Tolong jelaskan apa itu Neural Networks menggunakan analogi kehidupan sehari-hari yang sangat sederhana.</span> <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30 font-medium">Sajikan dalam bentuk 3 poin utama yang mudah diingat.</span> <span className="px-1.5 py-0.5 bg-red-500/20 text-red-300 rounded border border-red-500/30 font-medium">Jangan gunakan istilah matematika yang kompleks atau kode pemrograman.</span>&quot;
                            </div>
                        </div>

                        {/* Example 2: Profesional / Bisnis */}
                        <div className="p-8 glass border border-white/5 rounded-[2.5rem] shadow-sm space-y-6">
                            <h4 className="font-bold dark:text-white text-xl italic">Kasus: Email Penawaran Kerjasama</h4>
                            <div className="p-8 bg-slate-950/40 rounded-3xl font-sans leading-relaxed text-slate-400 border border-white/5 shadow-2xl">
                                &quot;<span className="px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30 font-medium">Anda adalah seorang spesialis Business Development senior.</span> <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded border border-amber-500/30 font-medium">Perusahaan kita, TechPropel, ingin menawarkan solusi optimasi database kepada startup e-commerce yang baru saja mendapatkan pendanaan Seri A.</span> <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30 font-medium">Tuliskan draft email perkenalan (cold email) yang profesional namun tetap terdengar personal.</span> <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30 font-medium">Gunakan format struktur: Subjek, Pembukaan, Value Proposition, Call to Action.</span> <span className="px-1.5 py-0.5 bg-red-500/20 text-red-300 rounded border border-red-500/30 font-medium">Maksimal panjang email adalah 150 kata and hindari kesan 'pushy' atau terlalu memaksa.</span>&quot;
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
