import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function Materi1({ materi }) {
    return (
        <div className="space-y-24 pb-20">
            {/* Section 1: Pendahuluan & Evolusi AI */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 01
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-slate-900 leading-tight">Pendahuluan & Evolusi AI</h2>
                            <div className="space-y-4">
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Dunia telah berubah sejak kemunculan <strong>Large Language Models (LLM)</strong>. Bermula dari pencarian kata kunci sederhana, kini kita berada di era di mana mesin mampu memahami konteks, nuansa, dan kreativitas manusia.
                                </p>
                                <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                                    <h4 className="text-indigo-900 font-bold text-sm mb-1">Apa itu Prompt Writing?</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        <strong>Prompt writing</strong> adalah proses memberikan instruksi, stimulus, atau masukan (teks, gambar, atau data) kepada model AI untuk memicu respons tertentu. Ini adalah jembatan komunikasi yang memandu AI agar memahami tujuan dan konteks yang diinginkan pengguna.
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-indigo-600">
                                <p className="text-slate-700 italic">"Prompt writing bukan sekadar mengetik teks, melainkan cara kita memprogram kecerdasan buatan menggunakan bahasa manusia."</p>
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
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 02
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Jenis-Jenis Prompt AI</h2>
                    <p className="text-slate-600 max-w-3xl">Berdasarkan kompleksitas dan tujuannya, prompt dapat dibagi menjadi beberapa kategori utama:</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {[
                            { title: 'Prompt Sederhana', type: 'Basic', desc: 'Instruksi dasar dan langsung untuk pertanyaan faktual.', example: 'Apa ibu kota Italia?' },
                            { title: 'Prompt Kompleks', type: 'Structured', desc: 'Melibatkan beberapa instruksi atau variabel dalam satu perintah.', example: 'Tulis email formal dan minta konfirmasi dalam 2 hari.' },
                            { title: 'Prompt Kontekstual', type: 'Framed', desc: 'Memberikan latar belakang atau peran spesifik pada AI.', example: 'Bertindaklah sebagai ahli SEO senior dengan pengalaman 10 tahun...' },
                            { title: 'Prompt Kreatif', type: 'Generative', desc: 'Digunakan untuk menghasilkan karya seni, puisi, atau desain.', example: 'Buat desain logo minimalis untuk brand kopi.' },
                            { title: 'Prompt Instruksional', type: 'Step-by-step', desc: 'Memberikan langkah-langkah tugas yang harus dikerjakan AI.', example: 'Lakukan analisis data ini, buat kesimpulan, lalu simpulkan.' },
                            { title: 'Prompt Informatif', type: 'Summarization', desc: 'Bertujuan untuk mendapatkan ringkasan dari topik tertentu.', example: 'Ringkas jurnal ini menjadi 5 poin utama.' },
                        ].map((item, i) => (
                            <div key={i} className="group p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase rounded-full">{item.type}</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.desc}</p>
                                <div className="p-3 bg-slate-50 rounded-xl text-[11px] font-mono text-slate-600 border border-slate-100 italic">
                                    "{item.example}"
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 3: Anatomi Prompt */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 03
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Anatomi Prompt (Struktur Dasar)</h2>
                    <p className="text-slate-600 max-w-3xl">Prompt yang efektif biasanya terdiri dari empat elemen kunci. Semakin lengkap elemen ini, semakin akurat hasil yang diberikan AI.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {[
                            { title: 'Role', icon: '👤', desc: 'Siapa AI tersebut? (Contoh: Ahli Gizi, Senior Developer)' },
                            { title: 'Task', icon: '🎯', desc: 'Apa yang harus dilakukan? (Contoh: Buat ringkasan, Debug kode)' },
                            { title: 'Context', icon: '🌍', desc: 'Latar belakang informasi? (Contoh: Untuk anak SD, Untuk profesional)' },
                            { title: 'Format', icon: '📄', desc: 'Bagaimana bentuk hasilnya? (Contoh: Tabel, Poin-poin, JSON)' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 4: Mekanisme Kerja AI */}
            <ScrollReveal>
                <section className="bg-indigo-600 rounded-[3rem] p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none text-9xl font-serif font-black italic">Tokens</div>
                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center gap-4 text-indigo-200 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-indigo-200"></span> Section 04
                        </div>
                        <div className="max-w-2xl space-y-6">
                            <h2 className="text-4xl font-serif font-bold">Bagaimana AI "Berpikir"?</h2>
                            <p className="text-indigo-100 text-lg">AI tidak memahami kata seperti manusia. AI memproses <strong>Tokens</strong>—potongan karakter—dan memprediksi kata berikutnya berdasarkan probabilitas statistik dari data pelatihan yang masif.</p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <span className="text-indigo-300 mt-1">✦</span>
                                    <p><span className="font-bold">Context Window:</span> Kapasitas memori AI dalam satu percakapan.</p>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-indigo-300 mt-1">✦</span>
                                    <p><span className="font-bold">Pattern Recognition:</span> AI mencari pola dari prompt Anda untuk menentukan gaya bahasa.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 5: Prinsip Utama Prompting */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 05
                    </div>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">3 Prinsip Emas (S.C.C)</h2>
                        <p className="text-slate-500 mt-4">Pegang prinsip ini agar setiap prompt Anda selalu memberikan hasil maksimal.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4 text-center p-8 transition-transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto font-bold mb-6">S</div>
                            <h4 className="text-xl font-bold">Specificity</h4>
                            <p className="text-slate-500 text-sm">Berikan detail sebanyak mungkin. Hindari instruksi yang terlalu umum.</p>
                        </div>
                        <div className="space-y-4 text-center p-8 transition-transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mx-auto font-bold mb-6">C</div>
                            <h4 className="text-xl font-bold">Clarity</h4>
                            <p className="text-slate-500 text-sm">Gunakan bahasa yang instruktif and jelas. Hindari ambiguitas.</p>
                        </div>
                        <div className="space-y-4 text-center p-8 transition-transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mx-auto font-bold mb-6">C</div>
                            <h4 className="text-xl font-bold">Context</h4>
                            <p className="text-slate-500 text-sm">Berikan batasan atau latar belakang mengapa tugas ini dilakukan.</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 6: Zero-shot vs Few-shot */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 06
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Teknik Instruksi Dasar</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
                            <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Zero-shot Prompting</h4>
                            <p className="text-sm text-slate-300">Memberikan instruksi langsung tanpa memberikan contoh terlebih dahulu. Mengandalkan pengetahuan dasar AI.</p>
                            <div className="p-4 bg-slate-800 rounded-xl text-xs font-mono border border-slate-700">
                                Klasifikasikan teks ini: 'Saya senang sekali hari ini!' -&gt; Positif
                            </div>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                            <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Few-shot Prompting</h4>
                            <p className="text-sm text-slate-500">Memberikan beberapa contoh pola sebelum memberikan tugas akhir. Sangat efektif untuk tugas yang membutuhkan format khusus.</p>
                            <div className="p-4 bg-white rounded-xl text-xs font-mono border border-slate-200">
                                Kecil -&gt; Besar<br />
                                Lambat -&gt; Cepat<br />
                                Sedih -&gt; ...
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 7: Good vs Bad Prompt (Implicitly requested enhancement) */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 07
                    </div>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Perbandingan: Good vs Bad Prompt</h2>
                        <p className="text-slate-500 mt-4">Lihat perbedaan hasil ketika kita memberikan instruksi yang samar vs instruksi yang spesifik.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-red-50 border border-red-100 rounded-3xl space-y-4">
                            <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase">
                                <span>✕</span> Bad Prompt
                            </div>
                            <p className="text-slate-800 italic text-sm">"Buatkan saya artikel tentang AI."</p>
                            <div className="pt-4 border-t border-red-200">
                                <p className="text-xs text-red-600 font-bold">Kenapa Buruk?</p>
                                <p className="text-xs text-slate-500 mt-1">Terlalu umum, tidak ada target pembaca, tidak ada gaya bahasa, dan tidak ada batasan panjang.</p>
                            </div>
                        </div>
                        <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-3xl space-y-4">
                            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase">
                                <span>✓</span> Good Prompt
                            </div>
                            <p className="text-slate-800 leading-relaxed italic text-sm">
                                "Bertindaklah sebagai jurnalis teknologi senior. Buatkan artikel 500 kata untuk mahasiswa tentang dampak ChatGPT pada pendidikan tinggi. Gunakan nada yang optimistis namun kritis, sertakan tips praktis, dan berikan judul yang menarik."
                            </p>
                            <div className="pt-4 border-t border-emerald-200">
                                <p className="text-xs text-emerald-600 font-bold">Kenapa Baik?</p>
                                <p className="text-xs text-slate-500 mt-1">Menggunakan Role (Jurnalis), Task (Artikel), Context (Mahasiswa), dan Format (500 kata, Judul).</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 8: AI as a New Skill */}
            <ScrollReveal>
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative p-8 bg-white border border-slate-100 rounded-4xl shadow-xl shadow-indigo-100/50">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">🚀</div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Mengapa Inilah Masa Depan Anda?</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">✓</div>
                                    <p className="text-slate-600 text-sm">Industrial Revolution 4.0 mensyaratkan kolaborasi manusia & AI.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">✓</div>
                                    <p className="text-slate-600 text-sm">Productivity multiplier: Kerja 10x lebih cepat dengan kualitas yang sama.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 order-1 md:order-2">
                        <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-indigo-600"></span> Section 08
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 leading-tight">Prompt Engineering sebagai Skill Esensial</h2>
                        <p className="text-slate-600 leading-relaxed">Sama seperti kemampuan menggunakan mesin pencari (Google Search) 15 tahun lalu, kemampuan melakukan prompt engineering akan menjadi standar dasar di hampir semua profesi di masa mendatang.</p>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 9: Iterasi & Refinement */}
            <ScrollReveal>
                <section className="space-y-12 bg-slate-50 rounded-[3rem] p-12">
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 09
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold">Proses Iterasi: "Prompt-Fail-Refine"</h2>
                            <p className="text-slate-600 leading-relaxed">Jangan mengharapkan prompt pertama Anda langsung sempurna. Prompt writing adalah proses dialogis.</p>
                            <div className="space-y-4">
                                {[
                                    { step: '1', label: 'Draft', content: 'Buat prompt awal Anda.' },
                                    { step: '2', label: 'Analyze', content: 'Lihat apa yang kurang dari jawaban AI.' },
                                    { step: '3', label: 'Refine', content: 'Tambah detail, batasan, atau contoh baru.' },
                                    { step: '4', label: 'Repeat', content: 'Ulangi hingga mendapatkan output yang diinginkan.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs">{item.step}</div>
                                        <p className="text-slate-700 text-sm"><span className="font-bold">{item.label}:</span> {item.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full aspect-square bg-white rounded-full border border-slate-200 flex flex-col items-center justify-center space-y-4 animate-pulse duration-4000">
                                <div className="text-4xl">🔄</div>
                                <p className="text-indigo-600 font-bold">Iterative Process</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 10: Mengatasi Halusinasi */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 10
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Bahaya & Solusi: Halusinasi AI</h2>
                    <div className="p-8 bg-red-50 border border-red-100 rounded-3xl flex gap-8 items-center">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-sm">⚠️</div>
                        <div className="space-y-2">
                            <h4 className="text-red-700 font-bold uppercase tracking-widest text-xs">Apa itu Halusinasi?</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">Kondisi di mana AI memberikan informasi yang terdengar sangat meyakinkan namun faktanya salah total. AI "menebak" kata berikutnya tanpa database kebenaran real-time.</p>
                            <p className="text-slate-900 text-sm font-bold pt-2">Solusi: Berikan instruksi "Jika Anda tidak tahu, katakan Anda tidak tahu" dan minta sumber referensi.</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 11: Contoh Kasus Kompleks */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 11
                    </div>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Case Study: Prompt vs Multi-Step Prompt</h2>
                        <p className="text-slate-500 mt-4">Terkadang satu prompt besar tidak cukup. Anda perlu membaginya menjadi langkah-langkah kecil.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 border border-slate-100 rounded-3xl space-y-4">
                            <h4 className="font-bold text-slate-800">Satu Prompt Besar</h4>
                            <p className="text-xs text-slate-500">"Buat analisis pasar mobil listrik, buat kesimpulan, lalu buat 5 judul artikel untuk itu."</p>
                            <p className="text-xs text-amber-600 italic">Risiko: Hasil dangkal karena AI kehilangan fokus.</p>
                        </div>
                        <div className="p-8 border-2 border-indigo-100 bg-indigo-50/30 rounded-3xl space-y-4">
                            <h4 className="font-bold text-slate-800">Chaining Prompt (Multi-Step)</h4>
                            <ol className="text-xs text-slate-600 space-y-2 list-decimal pl-4">
                                <li>"Tolong identifikasi tren utama mobil listrik saat ini."</li>
                                <li>"Dari tren di atas, buat ringkasan data teknisnya."</li>
                                <li>"Sekarang, buat 5 judul artikel yang menarik berdasarkan data tersebut."</li>
                            </ol>
                            <p className="text-xs text-emerald-600 italic">Hasil: Sangat mendalam dan fokus.</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 12: Contoh Penggunaan dalam Studi & Pekerjaan */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600"></span> Section 12
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Implementasi: Studi & Pekerjaan</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-indigo-600 mb-2">🎓 Dalam Studi</h4>
                                <ul className="text-sm text-slate-600 space-y-3">
                                    <li className="flex gap-2"><span>•</span> Meringkas jurnal ilmiah yang panjang menjadi poin utama.</li>
                                    <li className="flex gap-2"><span>•</span> Membuat mind-map atau kerangka berpikir untuk makalah.</li>
                                    <li className="flex gap-2"><span>•</span> Membantu menjelaskan konsep sulit dengan analogi sederhana.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-indigo-600 mb-2">💼 Dalam Pekerjaan</h4>
                                <ul className="text-sm text-slate-600 space-y-3">
                                    <li className="flex gap-2"><span>•</span> Menyusun email profesional atau draft proposal bisnis.</li>
                                    <li className="flex gap-2"><span>•</span> Optimasi konten media sosial dengan keyword tertentu.</li>
                                    <li className="flex gap-2"><span>•</span> Automasi laporan rutin dari data mentah.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />

            {/* Section 13: Etika & Kesimpulan */}
            <ScrollReveal>
                <section className="text-center max-w-4xl mx-auto border-t border-slate-100">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4 text-indigo-600 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-indigo-600"></span> Section 13
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-slate-900">Etika & Tanggung Jawab AI</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Sebagai penutup, ingatlah bahwa AI adalah alat pendukung. Anda tetap memegang kendali penuh atas akurasi, integritas, dan orisinalitas karya akhir. Gunakanlah prompt writing untuk memberdayakan potensi kemanusiaan Anda, bukan untuk menggantikannya.
                        </p>
                        <div className="flex gap-4 pt-12">
                            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                            <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                            <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
                        </div>
                        <p className="text-slate-400 font-bold tracking-tighter italic text-xl mt-8">Happy Prompting!</p>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
