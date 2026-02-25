import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function Materi1({ materi }) {
    return (
        <div className="space-y-24 pb-20">
            {/* Section 1: Pendahuluan & Evolusi AI */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 01
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-white leading-tight">Pendahuluan & Evolusi AI</h2>
                            <div className="space-y-4">
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    Dunia telah berubah sejak kemunculan <strong>Large Language Models (LLM)</strong>. Bermula dari pencarian kata kunci sederhana, kini kita berada di era di mana mesin mampu memahami konteks, nuansa, dan kreativitas manusia.
                                </p>
                                <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl">
                                    <h4 className="text-primary font-bold text-sm mb-1">Apa itu Prompt Writing?</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        <strong>Prompt writing</strong> adalah proses memberikan instruksi, stimulus, atau masukan kepada model AI untuk memicu respons tertentu. Ini adalah jembatan komunikasi yang memandu AI agar memahami tujuan dan konteks yang diinginkan pengguna.
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-800/40 border-l-4 border-primary rounded-2xl">
                                <p className="text-slate-300 italic">"Prompt writing bukan sekadar mengetik teks, melainkan cara kita memprogram kecerdasan buatan menggunakan bahasa manusia."</p>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-transparent z-10"></div>
                            <Image
                                src="/prompt_writing_concept.png"
                                alt="Evolusi AI"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 2: Jenis-Jenis Prompt */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 02
                    </div>
                    <h2 className="text-3xl font-bold text-white">Jenis-Jenis Prompt AI</h2>
                    <p className="text-slate-400 max-w-3xl">Berdasarkan kompleksitas dan tujuannya, prompt dapat dibagi menjadi beberapa kategori utama:</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {[
                            { title: 'Prompt Sederhana', type: 'Basic', desc: 'Instruksi dasar dan langsung untuk pertanyaan faktual.', example: 'Apa ibu kota Italia?' },
                            { title: 'Prompt Kompleks', type: 'Structured', desc: 'Melibatkan beberapa instruksi atau variabel dalam satu perintah.', example: 'Tulis email formal dan minta konfirmasi dalam 2 hari.' },
                            { title: 'Prompt Kontekstual', type: 'Framed', desc: 'Memberikan latar belakang atau peran spesifik pada AI.', example: 'Bertindaklah sebagai ahli SEO senior dengan pengalaman 10 tahun...' },
                            { title: 'Prompt Kreatif', type: 'Generative', desc: 'Digunakan untuk menghasilkan karya seni, puisi, atau desain.', example: 'Buat desain logo minimalis untuk brand kopi.' },
                            { title: 'Prompt Instruksional', type: 'Step-by-step', desc: 'Memberikan langkah-langkah tugas yang harus dikerjakan AI.', example: 'Lakukan analisis data ini, buat kesimpulan, lalu simpulkan.' },
                            { title: 'Prompt Informatif', type: 'Summarization', desc: 'Bertujuan untuk mendapatkan ringkasan dari topik tertentu.', example: 'Ringkas jurnal ini menjadi 5 poin utama.' },
                        ].map((item, i) => (
                            <div key={i} className="group p-6 glass rounded-3xl border border-white/5 hover:border-primary/30 transition-all hover:bg-white/5">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{item.type}</span>
                                </div>
                                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                                <div className="p-3 bg-slate-950/50 border border-white/5 rounded-xl text-[11px] font-mono text-slate-500 italic">
                                    "{item.example}"
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 3: Anatomi Prompt */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 03
                    </div>
                    <h2 className="text-3xl font-bold text-white">Anatomi Prompt (Struktur Dasar)</h2>
                    <p className="text-slate-400 max-w-3xl">Prompt yang efektif biasanya terdiri dari empat elemen kunci. Semakin lengkap elemen ini, semakin akurat hasil yang diberikan AI.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {[
                            { title: 'Role', icon: '👤', desc: 'Siapa AI tersebut? (Contoh: Ahli Gizi, Senior Developer)' },
                            { title: 'Task', icon: '🎯', desc: 'Apa yang harus dilakukan? (Contoh: Buat ringkasan, Debug kode)' },
                            { title: 'Context', icon: '🌍', desc: 'Latar belakang informasi? (Contoh: Untuk anak SD, Untuk profesional)' },
                            { title: 'Format', icon: '📄', desc: 'Bagaimana bentuk hasilnya? (Contoh: Tabel, Poin-poin, JSON)' },
                        ].map((item, i) => (
                            <div key={i} className="p-8 glass rounded-3xl border border-white/5 hover:bg-white/5 transition-all group">
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 4: Mekanisme Kerja AI */}
            <ScrollReveal>
                <section className="bg-primary rounded-[3rem] p-12 text-white overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none text-9xl font-black italic">Tokens</div>
                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center gap-4 text-white/60 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-white/60"></span> Section 04
                        </div>
                        <div className="max-w-2xl space-y-6">
                            <h2 className="text-4xl font-bold">Bagaimana AI "Berpikir"?</h2>
                            <p className="text-white/90 text-lg leading-relaxed">AI tidak memahami kata seperti manusia. AI memproses <strong>Tokens</strong>—potongan karakter—dan memprediksi kata berikutnya berdasarkan probabilitas statistik dari data pelatihan yang masif.</p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <span className="text-white/40 mt-1">✦</span>
                                    <p><span className="font-bold">Context Window:</span> Kapasitas memori AI dalam satu percakapan.</p>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-white/40 mt-1">✦</span>
                                    <p><span className="font-bold">Pattern Recognition:</span> AI mencari pola dari prompt Anda untuk menentukan gaya bahasa.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 5: Prinsip Utama Prompting */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 05
                    </div>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white">3 Prinsip Emas (S.C.C)</h2>
                        <p className="text-slate-400 mt-4">Pegang prinsip ini agar setiap prompt Anda selalu memberikan hasil maksimal.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { code: 'S', title: 'Specificity', desc: 'Berikan detail sebanyak mungkin. Hindari instruksi yang terlalu umum.', color: 'blue' },
                            { code: 'C', title: 'Clarity', desc: 'Gunakan bahasa yang instruktif and jelas. Hindari ambiguitas.', color: 'emerald' },
                            { code: 'C', title: 'Context', desc: 'Berikan batasan atau latar belakang mengapa tugas ini dilakukan.', color: 'amber' },
                        ].map((p, idx) => (
                            <div key={idx} className="space-y-6 text-center p-8 glass border border-white/5 rounded-[2.5rem] transition-all hover:-translate-y-2">
                                <div className={`w-16 h-16 bg-${p.color}-500/10 text-${p.color}-400 rounded-2xl flex items-center justify-center text-3xl mx-auto font-black shadow-lg shadow-${p.color}-500/5`}>{p.code}</div>
                                <h4 className="text-xl font-bold text-white">{p.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 6: Zero-shot vs Few-shot */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 06
                    </div>
                    <h2 className="text-3xl font-bold text-white">Teknik Instruksi Dasar</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-4 shadow-xl">
                            <h4 className="text-primary font-black uppercase tracking-widest text-[10px]">Zero-shot Prompting</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">Memberikan instruksi langsung tanpa contoh. Mengandalkan pengetahuan dasar AI.</p>
                            <div className="p-4 bg-slate-950 rounded-xl text-xs font-mono border border-white/5 text-slate-500 italic">
                                "Klasifikasikan teks ini: 'Saya senang sekali hari ini!' -&gt; Positif"
                            </div>
                        </div>
                        <div className="p-8 rounded-3xl glass border border-white/5 space-y-4 shadow-xl">
                            <h4 className="text-primary font-black uppercase tracking-widest text-[10px]">Few-shot Prompting</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">Memberikan beberapa contoh pola sebelum tugas akhir. Efektif untuk format khusus.</p>
                            <div className="p-4 bg-slate-950 rounded-xl text-xs font-mono border border-white/5 text-slate-500 italic">
                                "Kecil -&gt; Besar<br />
                                Lambat -&gt; Cepat<br />
                                Sedih -&gt; ..."
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 7: Good vs Bad Prompt (Implicitly requested enhancement) */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 07
                    </div>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white">Perbandingan: Good vs Bad Prompt</h2>
                        <p className="text-slate-400 mt-4">Lihat perbedaan hasil ketika kita memberikan instruksi yang samar vs instruksi yang spesifik.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 glass border border-red-500/20 rounded-3xl space-y-4 group hover:bg-red-500/5 transition-all">
                            <div className="flex items-center gap-2 text-red-400 font-black text-[10px] uppercase tracking-widest">
                                <span className="w-4 h-4 bg-red-500/20 rounded flex items-center justify-center text-[12px]">✕</span> Bad Prompt
                            </div>
                            <p className="text-slate-500 italic text-sm">"Buat artikel tentang AI."</p>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-[10px] text-red-400 font-black uppercase tracking-tighter mb-1">Kenapa Buruk?</p>
                                <p className="text-xs text-slate-500 leading-relaxed">Terlalu umum, tidak ada target pembaca, tidak ada gaya bahasa, dan tidak ada batasan panjang.</p>
                            </div>
                        </div>
                        <div className="p-8 glass border border-emerald-500/20 rounded-3xl space-y-4 group hover:bg-emerald-500/5 transition-all">
                            <div className="flex items-center gap-2 text-emerald-400 font-black text-[10px] uppercase tracking-widest">
                                <span className="w-4 h-4 bg-emerald-500/20 rounded flex items-center justify-center text-[12px]">✓</span> Good Prompt
                            </div>
                            <p className="text-slate-300 leading-relaxed italic text-sm">
                                "Bertindaklah sebagai jurnalis teknologi senior. Buatkan artikel 500 kata untuk mahasiswa tentang dampak AI pada pendidikan tinggi. Gunakan nada yang optimistis namun kritis, sertakan tips praktis, dan berikan judul yang menarik."
                            </p>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-[10px] text-emerald-400 font-black uppercase tracking-tighter mb-1">Kenapa Baik?</p>
                                <p className="text-xs text-slate-500 leading-relaxed">Menggunakan Role (Jurnalis), Task (Artikel), Context (Mahasiswa), dan Format (500 kata).</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 8: AI as a New Skill */}
            <ScrollReveal>
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative p-12 glass border border-white/5 rounded-4xl shadow-2xl">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl shadow-xl animate-bounce">🚀</div>
                            <h3 className="text-2xl font-bold text-white mb-6">Mengapa Inilah Masa Depan Anda?</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">✓</div>
                                    <p className="text-slate-400 text-sm leading-relaxed">Industrial Revolution 4.0 mensyaratkan kolaborasi manusia & AI.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">✓</div>
                                    <p className="text-slate-400 text-sm leading-relaxed">Productivity multiplier: Kerja 10x lebih cepat dengan kualitas yang sama.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 order-1 md:order-2">
                        <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-primary"></span> Section 08
                        </div>
                        <h2 className="text-3xl font-bold text-white leading-tight underline decoration-primary/20 underline-offset-8">Prompt Engineering sebagai Skill Esensial</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">Sama seperti kemampuan menggunakan mesin pencari (Google Search) 15 tahun lalu, kemampuan melakukan prompt engineering akan menjadi standar dasar di hampir semua profesi di masa mendatang.</p>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 9: Iterasi & Refinement */}
            <ScrollReveal>
                <section className="space-y-12 glass border border-white/5 rounded-[3rem] p-12 shadow-2xl overflow-hidden relative group">
                    <div className="absolute -top-12 -right-12 p-24 opacity-[0.03] pointer-events-none text-9xl font-black italic group-hover:scale-110 transition-transform">ITERATE</div>
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase relative z-10">
                        <span className="w-8 h-px bg-primary"></span> Section 09
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Proses Iterasi: "Prompt-Fail-Refine"</h2>
                            <p className="text-slate-400 leading-relaxed">Jangan mengharapkan prompt pertama Anda langsung sempurna. Prompt writing adalah proses dialogis.</p>
                            <div className="space-y-4">
                                {[
                                    { step: '1', label: 'Draft', content: 'Buat prompt awal Anda.' },
                                    { step: '2', label: 'Analyze', content: 'Lihat apa yang kurang dari jawaban AI.' },
                                    { step: '3', label: 'Refine', content: 'Tambah detail, batasan, atau contoh baru.' },
                                    { step: '4', label: 'Repeat', content: 'Ulangi hingga mendapatkan output yang diinginkan.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center group/item transition-all hover:translate-x-2">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-primary text-xs shadow-lg">{item.step}</div>
                                        <p className="text-slate-400 text-sm leading-relaxed"><span className="font-bold text-slate-200">{item.label}:</span> {item.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full aspect-square max-w-[300px] glass rounded-full border border-white/10 flex flex-col items-center justify-center space-y-4 animate-pulse-slow relative">
                                <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
                                <div className="text-6xl relative z-10">🔄</div>
                                <p className="text-primary font-black uppercase tracking-widest text-xs relative z-10">Iterative Process</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 10: Mengatasi Halusinasi */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 10
                    </div>
                    <h2 className="text-3xl font-bold text-white">Bahaya & Solusi: Halusinasi AI</h2>
                    <div className="p-10 glass border border-red-500/20 rounded-[2.5rem] flex flex-col md:flex-row gap-10 items-center shadow-2xl">
                        <div className="w-24 h-24 bg-red-500/10 rounded-3xl flex items-center justify-center text-5xl shadow-lg border border-red-500/20 shrink-0">⚠️</div>
                        <div className="space-y-4 text-center md:text-left">
                            <h4 className="text-red-400 font-black uppercase tracking-widest text-[10px]">Apa itu Halusinasi?</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Kondisi di mana AI memberikan informasi yang terdengar sangat meyakinkan namun faktanya salah total. AI &quot;menebak&quot; kata berikutnya tanpa database kebenaran real-time.</p>
                            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs font-bold">
                                Solusi: Berikan instruksi &quot;Jika Anda tidak tahu, katakan Anda tidak tahu&quot; dan minta sumber referensi.
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 11: Contoh Kasus Kompleks */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 11
                    </div>
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold text-white">Case Study: Prompt vs Multi-Step Prompt</h2>
                        <p className="text-slate-400">Terkadang satu prompt besar tidak cukup. Anda perlu membaginya menjadi langkah-langkah kecil.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 glass border border-red-500/10 rounded-3xl space-y-4 group hover:border-red-500/30 transition-all">
                            <h4 className="font-black uppercase tracking-widest text-red-400 text-[10px]">Satu Prompt Besar</h4>
                            <div className="p-4 bg-slate-950/50 rounded-xl border border-white/5 font-mono text-xs text-slate-500 italic">
                                &quot;Buat analisis pasar mobil listrik, buat kesimpulan, lalu buat 5 judul artikel untuk itu.&quot;
                            </div>
                            <p className="text-xs text-red-400 italic font-medium">Risiko: Hasil dangkal karena AI kehilangan fokus.</p>
                        </div>
                        <div className="p-8 glass border border-emerald-500/20 rounded-3xl space-y-4 shadow-xl group hover:border-emerald-500/40 transition-all scale-105">
                            <h4 className="font-black uppercase tracking-widest text-emerald-400 text-[10px]">Chaining Prompt (Multi-Step)</h4>
                            <ol className="text-xs text-slate-400 space-y-3 list-decimal pl-4">
                                <li>&quot;Tolong identifikasi tren utama mobil listrik saat ini.&quot;</li>
                                <li>&quot;Dari tren di atas, buat ringkasan data teknisnya.&quot;</li>
                                <li>&quot;Sekarang, buat 5 judul artikel yang menarik berdasarkan data tersebut.&quot;</li>
                            </ol>
                            <p className="text-xs text-emerald-400 italic font-medium">Hasil: Sangat mendalam dan fokus.</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 12: Contoh Penggunaan dalam Studi & Pekerjaan */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Section 12
                    </div>
                    <h2 className="text-3xl font-bold text-white">Implementasi: Studi & Pekerjaan</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="p-8 glass border border-white/5 rounded-3xl shadow-xl hover:bg-white/5 transition-all">
                                <h4 className="font-bold text-primary mb-4 text-lg">🎓 Dalam Studi</h4>
                                <ul className="text-sm text-slate-400 space-y-4">
                                    <li className="flex gap-3"><span className="text-primary font-bold">•</span> Meringkas jurnal ilmiah yang panjang menjadi poin utama.</li>
                                    <li className="flex gap-3"><span className="text-primary font-bold">•</span> Membuat mind-map atau kerangka berpikir untuk makalah.</li>
                                    <li className="flex gap-3"><span className="text-primary font-bold">•</span> Membantu menjelaskan konsep sulit dengan analogi sederhana.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-8 glass border border-white/5 rounded-3xl shadow-xl hover:bg-white/5 transition-all">
                                <h4 className="font-bold text-primary mb-4 text-lg">💼 Dalam Pekerjaan</h4>
                                <ul className="text-sm text-slate-400 space-y-4">
                                    <li className="flex gap-3"><span className="text-primary font-bold">•</span> Menyusun email profesional atau draft proposal bisnis.</li>
                                    <li className="flex gap-3"><span className="text-primary font-bold">•</span> Optimasi konten media sosial dengan keyword tertentu.</li>
                                    <li className="flex gap-3"><span className="text-primary font-bold">•</span> Automasi laporan rutin dari data mentah.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Section 13: Etika & Kesimpulan */}
            <ScrollReveal>
                <section className="text-center max-w-4xl mx-auto pt-20">
                    <div className="flex flex-col items-center gap-8 group">
                        <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-primary group-hover:w-24 transition-all duration-700"></span> Section 13
                        </div>
                        <h2 className="text-4xl font-bold text-white tracking-tight italic decoration-primary/20 underline underline-offset-12">Etika & Tanggung Jawab AI</h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                            Sebagai penutup, ingatlah bahwa AI adalah alat pendukung. Anda tetap memegang kendali penuh atas akurasi, integritas, dan orisinalitas karya akhir. Gunakanlah prompt writing untuk memberdayakan potensi kemanusiaan Anda, bukan untuk menggantikannya.
                        </p>
                        <div className="flex gap-3 pt-12">
                            <div className="w-4 h-4 rounded-full bg-primary/20 animate-pulse"></div>
                            <div className="w-4 h-4 rounded-full bg-primary/40 animate-pulse delay-75"></div>
                            <div className="w-4 h-4 rounded-full bg-primary animate-pulse delay-150"></div>
                        </div>
                        <p className="text-primary font-black uppercase tracking-widest italic text-2xl mt-8 animate-pulse">Happy Prompting!</p>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
