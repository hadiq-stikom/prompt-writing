import ScrollReveal from './ScrollReveal';

export default function Materi3({ materi }) {
    return (
        <div className="space-y-24 pb-20 dark:text-slate-200 text-slate-900">
            {/* Section 1: Pendahuluan */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 01
                    </div>
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-4xl font-serif font-bold dark:text-white leading-tight">Dari "Tanya" ke "Instruksi"</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            Banyak pengguna gagal mendapatkan jawaban yang baik dari AI karena mereka hanya <strong>"bertanya"</strong> (seperti pada Google Search), bukan <strong>"memberikan instruksi"</strong>. Struktur prompt yang benar adalah fondasi utama untuk hasil yang presisi.
                        </p>
                        <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl border-l-4 border-indigo-600">
                            <p className="text-indigo-900 dark:text-indigo-300 italic font-medium">"Berikan konteks yang cukup, dan AI akan memberikan hasil yang melampaui ekspektasi Anda."</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 2: Framework P-C-T-F */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 02
                    </div>
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-serif font-bold dark:text-white">Framework P-C-T-F</h2>
                        <p className="text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px] font-black">The Four Pillars of Precision</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: 'Persona', code: 'P', desc: 'Siapa AI tersebut?' },
                            { title: 'Context', code: 'C', desc: 'Apa situasinya?' },
                            { title: 'Task', code: 'T', desc: 'Apa perintahnya?' },
                            { title: 'Format', code: 'F', desc: 'Apa bentuk outputnya?' },
                        ].map((pill, i) => (
                            <div key={i} className="relative p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-6xl font-black font-serif">{pill.code}</div>
                                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-indigo-200 dark:shadow-none">{pill.code}</div>
                                <h4 className="font-bold text-lg mb-2 dark:text-white">{pill.title}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{pill.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 3: Persona (Role) */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 03
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold dark:text-white">Persona: Menentukan Peran</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Mendesain persona berarti Anda mengatur <strong>perspektif, gaya bahasa, dan kedalaman pengetahuan</strong> AI. Tanpa persona, AI akan memberikan jawaban standar (umum).
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <p className="text-xs text-slate-400 uppercase font-bold mb-2 tracking-tighter">Lemah (No Persona)</p>
                                    <p className="text-sm italic">"Jelaskan tentang ekonomi."</p>
                                </div>
                                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                                    <p className="text-xs text-emerald-600 dark:text-emerald-400 uppercase font-bold mb-2 tracking-tighter">Kuat (With Persona)</p>
                                    <p className="text-sm italic">"Bertindaklah sebagai profesor ekonomi dari Harvard. Jelaskan inflasi kepada mahasiswa semester satu."</p>
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
                                <p className="text-slate-500">{"// System Message"}</p>
                                <p className="text-indigo-400 italic">&quot;role&quot;: &quot;Senior Fullstack Developer&quot;</p>
                                <p className="text-indigo-400 italic">&quot;tone&quot;: &quot;Professional, brief&quot;</p>
                                <p className="text-indigo-400 italic">&quot;expertise&quot;: &quot;Node.js, Security&quot;</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 4: Context (Background) */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 04
                    </div>
                    <h2 className="text-3xl font-serif font-bold dark:text-white">Context: Latar Belakang & Tujuan</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-3xl">AI tidak hidup di dunia nyata Anda. Anda harus "mengimpor" realitas Anda ke dalam percakapan melalui konteks.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4">
                            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg flex items-center justify-center text-indigo-600">🎯</div>
                            <h4 className="font-bold dark:text-white italic capitalize">Apa target audiensnya?</h4>
                            <p className="text-sm text-slate-500">Materi untuk anak TK tentu berbeda dengan materi untuk direktur perusahaan.</p>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4">
                            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg flex items-center justify-center text-indigo-600">🏢</div>
                            <h4 className="font-bold dark:text-white italic capitalize">Apa tujuan akhirnya?</h4>
                            <p className="text-sm text-slate-500">Apakah ini untuk meyakinkan investor, menghibur audiens, atau dokumentasi teknis?</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 5: Task (Action) */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 05
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-serif font-bold dark:text-white">Task: Instruksi yang Operasional</h2>
                        <p className="text-slate-600 dark:text-slate-400">Gunakan kata kerja yang <strong>tidak ambigu</strong>. Hindari kata-kata pasif.</p>
                    </div>
                    <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-sm">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800 text-left">
                                <th className="p-4 text-sm font-bold uppercase tracking-widest dark:text-white border-b border-slate-200 dark:border-slate-700">Hindari (Abigu)</th>
                                <th className="p-4 text-sm font-bold uppercase tracking-widest dark:text-white border-b border-slate-200 dark:border-slate-700">Gunakan (Spesifik)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-900">
                            <tr className="border-b border-slate-50 dark:border-slate-800">
                                <td className="p-4 text-sm italic text-red-500">"Tolong buat sesuatu tentang..."</td>
                                <td className="p-4 text-sm font-medium text-emerald-600 italic">"Buatlah daftar 5 poin mengenai..."</td>
                            </tr>
                            <tr className="border-b border-slate-50 dark:border-slate-800">
                                <td className="p-4 text-sm italic text-red-500">"Tuliskan artikel pendek."</td>
                                <td className="p-4 text-sm font-medium text-emerald-600 italic">"Tulis artikel maksimal 300 kata."</td>
                            </tr>
                            <tr className="border-b border-slate-50 dark:border-slate-800">
                                <td className="p-4 text-sm italic text-red-500">"Coba analisis data ini."</td>
                                <td className="p-4 text-sm font-medium text-emerald-600 italic">"Ekstrak tren utama dari tabel berikut."</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 6: Format (Output) */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 06
                    </div>
                    <h2 className="text-3xl font-serif font-bold dark:text-white">Format: Struktur Penyajian</h2>
                    <p className="text-slate-600 dark:text-slate-400">Mintalah AI untuk menyajikan informasi dalam bentuk yang paling mudah Anda konsumsi.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Tabel', 'JSON / Kode', 'Bullet Points', 'Diagram Mermaid', 'Spreadsheet Ready', 'Mind-map Style', 'Email Draft', 'Markdown'].map((fmt, i) => (
                            <div key={i} className="p-4 text-center border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 hover:text-white transition-all cursor-default shadow-sm">
                                {fmt}
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 7: Constraints (Limit) */}
            <ScrollReveal>
                <section className="bg-slate-950 dark:bg-black rounded-[3rem] p-12 text-white overflow-hidden relative">
                    <div className="absolute -bottom-8 -right-8 p-12 opacity-5 pointer-events-none text-9xl font-serif font-black italic">LIMITS</div>
                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-700 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-slate-700"></span> Section 07
                        </div>
                        <div className="max-w-2xl space-y-6">
                            <h2 className="text-slate-500 text-3xl font-serif font-bold italic tracking-tight underline underline-offset-8 decoration-indigo-500/50">Constraints: Batasan yang Tegas</h2>
                            <p className="text-slate-400 text-lg leading-relaxed">Jangan hanya memberi tahu AI apa yang harus dilakukan, beri tahu juga apa yang <strong>TIDAK BOLEH</strong> dilakukan (Negative Constraints).</p>
                            <div className="grid sm:grid-cols-2 gap-4 pt-6">
                                <div className="space-y-2">
                                    <h5 className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Contoh Batasan</h5>
                                    <ul className="text-sm text-slate-400 space-y-1">
                                        <li>• "Hindari jargon teknis"</li>
                                        <li>• "Gunakan Bahasa Indonesia baku"</li>
                                        <li>• "Jangan sebutkan merk kompetitor"</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Contoh Negative Prompt</h5>
                                    <p className="text-sm text-slate-400 italic">"Jangan memberikan kesimpulan, cukup sajikan datanya saja."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 8: Tone & Style */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 08
                    </div>
                    <h2 className="text-3xl font-serif font-bold dark:text-white">Tone & Style: Menentukan "Suara" AI</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Academic', desc: 'Formal, didasarkan pada referensi, objektif.', icon: '🏛️' },
                            { title: 'Persuasive', desc: 'Meyakinkan, emosional, berfokus pada manfaat.', icon: '📣' },
                            { title: 'Socratic', desc: 'Menjawab dengan pertanyaan untuk mengasah logika.', icon: '🤔' },
                            { title: 'Empathetic', desc: 'Mendengar, menenangkan, berpusat pada perasaan.', icon: '🤍' },
                            { title: 'Humorous', desc: 'Kasual, penuh anekdot, dan ringan.', icon: '🎭' },
                            { title: 'Technocratic', desc: 'Presisi, sangat teknis, fokus pada efisiensi.', icon: '⚙️' },
                        ].map((tone, i) => (
                            <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl hover:-translate-y-2 transition-transform">
                                <div className="text-2xl mb-4">{tone.icon}</div>
                                <h4 className="font-bold dark:text-white mb-1 italic">{tone.title}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{tone.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 9: Few-Shot Prompting */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 09
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold dark:text-white">Few-Shot Prompting: Kekuatan Contoh</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                "A picture is worth a thousand words, but an example is worth a thousand instructions."
                            </p>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Daripada menjelaskan format yang rumit, cukup berikan 2-3 contoh. AI akan mengenali polanya secara otomatis.
                            </p>
                        </div>
                        <div className="p-6 bg-indigo-600 rounded-[2.5rem] shadow-xl text-white space-y-4">
                            <div className="space-y-2 border-b border-indigo-500/50 pb-4">
                                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-200">Example Input/Output</p>
                                <p className="text-xs italic">Input: Buah Apel &rarr; Output: Merah/Hijau, Manis</p>
                                <p className="text-xs italic">Input: Buah Lemon &rarr; Output: Kuning, Masam</p>
                            </div>
                            <div className="pt-2">
                                <p className="text-xs font-bold italic">Input: Buah Anggur &rarr; AI akan mengikuti pola (Output: ...)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 10: Iterative Process */}
            <ScrollReveal>
                <section className="space-y-12 text-center max-w-4xl mx-auto pt-20 border-t border-slate-100 dark:border-slate-800">
                    <div className="space-y-6">
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">Section 10</div>
                            <h2 className="text-4xl font-serif font-bold dark:text-white italic decoration-indigo-500/20 underline underline-offset-12">Iterate to Perfection</h2>
                        </div>
                        <div className="py-12 flex flex-wrap justify-center gap-4">
                            {['Draft Prompt', 'Analyze Output', 'Add Constraint', 'Refine Role', 'Test Again'].map((step, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="px-6 py-2 bg-indigo-600 text-white rounded-full text-xs font-bold shadow-lg shadow-indigo-100/50 dark:shadow-none">{step}</div>
                                    {i < 4 && <span className="text-indigo-300">→</span>}
                                </div>
                            ))}
                        </div>
                        <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-4xl">
                            <h4 className="font-bold italic dark:text-white underline underline-offset-4 decoration-indigo-500/20 mb-6">Diskusi Pekan Ini</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic max-w-2xl mx-auto">
                                "Framework P-C-T-F mana yang menurut Anda paling sering dilupakan namun paling berdampak pada kualitas jawaban? Berikan alasannya."
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 11: Galeri Prompt Terapan */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Section 11
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-serif font-bold dark:text-white">Galeri Prompt Terapan</h2>
                        <p className="text-slate-600 dark:text-slate-400">Pelajari bagaimana elemen-elemen P-C-T-F menyatu dalam sebuah instruksi tunggal yang kuat.</p>
                    </div>

                    <div className="grid gap-8">
                        {/* Legend */}
                        <div className="flex flex-wrap gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 text-[10px] font-bold uppercase tracking-widest justify-center">
                            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-indigo-100 dark:bg-indigo-900 border border-indigo-200 dark:border-indigo-800"></span> Persona</span>
                            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-amber-100 dark:bg-amber-900 border border-amber-200 dark:border-amber-800"></span> Context</span>
                            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-emerald-100 dark:bg-emerald-900 border border-emerald-200 dark:border-emerald-800"></span> Task</span>
                            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-purple-100 dark:bg-purple-900 border border-purple-200 dark:border-purple-800"></span> Format</span>
                            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800"></span> Constraints</span>
                        </div>

                        {/* Example 1: Edukasi */}
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] shadow-sm space-y-6">
                            <h4 className="font-serif font-bold dark:text-white text-xl italic">Kasus: Penjelasan Materi Kuliah</h4>
                            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl font-sans leading-relaxed text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800">
                                &quot;<span className="px-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded">Bertindaklah sebagai asisten dosen yang sabar dan ahli dalam bidang AI.</span> <span className="px-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded">Saya adalah mahasiswa semester 2 yang sedang kesulitan memahami konsep Deep Learning.</span> <span className="px-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded">Tolong jelaskan apa itu Neural Networks menggunakan analogi kehidupan sehari-hari yang sangat sederhana.</span> <span className="px-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded">Sajikan dalam bentuk 3 poin utama yang mudah diingat.</span> <span className="px-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded">Jangan gunakan istilah matematika yang kompleks atau kode pemrograman.</span>&quot;
                            </div>
                        </div>

                        {/* Example 2: Profesional / Bisnis */}
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] shadow-sm space-y-6">
                            <h4 className="font-serif font-bold dark:text-white text-xl italic">Kasus: Email Penawaran Kerjasama</h4>
                            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl font-sans leading-relaxed text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800">
                                &quot;<span className="px-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded">Anda adalah seorang spesialis Business Development senior.</span> <span className="px-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded">Perusahaan kita, TechPropel, ingin menawarkan solusi optimasi database kepada startup e-commerce yang baru saja mendapatkan pendanaan Seri A.</span> <span className="px-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded">Tuliskan draft email perkenalan (cold email) yang profesional namun tetap terdengar personal.</span> <span className="px-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded">Gunakan format struktur: Subjek, Pembukaan, Value Proposition, Call to Action.</span> <span className="px-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded">Maksimal panjang email adalah 150 kata and hindari kesan 'pushy' atau terlalu memaksa.</span>&quot;
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
