import ScrollReveal from './ScrollReveal';

export default function Materi5({ materi }) {
    return (
        <div className="space-y-32 pb-20 dark:text-slate-200 text-slate-900">
            {/* 0. INTRO: THE AI-NATIVE DEVELOPER */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Core Module
                    </div>
                    <div className="max-w-4xl space-y-6">
                        <h2 className="text-5xl font-serif font-bold dark:text-white leading-tight">The AI-Native Developer</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            Di era AI, koding bukan lagi tentang menghafal sintaks, melainkan tentang <strong>kemampuan problem solving, desain sistem, dan komunikasi presisi</strong> kepada mesin. Mahasiswa Informatika harus mampu beralih dari "Code Writer" menjadi "AI Architect".
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            {/* 1. FUNDAMEN: CODING AS DIALOGUE */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="px-8 py-4 bg-slate-900 dark:bg-black rounded-full border border-slate-800 inline-block">
                        <h3 className="text-indigo-400 font-bold text-xs uppercase tracking-widest">Section 01: Mindset & Fundamen</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-serif font-bold dark:text-white">AI sebagai Pair Programmer</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                AI tidak tahu apa yang ingin Anda bangun kecuali Anda menjelaskannya. Kesalahan terbesar programmer pemula adalah meminta kode tanpa menjelaskan <strong>arsitektur</strong> dan <strong>konteks</strong>.
                            </p>
                            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
                                <h5 className="font-bold text-sm dark:text-white">Mengapa Prompt Koding Berbeda?</h5>
                                <ul className="space-y-2 text-xs text-slate-500">
                                    <li className="flex gap-2"><span>•</span> <span><strong>Presisi:</strong> Satu titik-koma bisa merusak segalanya.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span><strong>Dependensi:</strong> Kode bergantung pada library dan versi tertentu.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span><strong>Skalabilitas:</strong> Kode hari ini harus bisa dikembangkan esok hari.</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative p-8 bg-white dark:bg-slate-950 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 space-y-6">
                                <h5 className="text-xs font-black uppercase tracking-widest text-indigo-500 text-center">Prompt Mantra</h5>
                                <p className="text-center font-serif italic text-lg dark:text-white">
                                    "Explain the Logic First, <br /> Generate the Code Second."
                                </p>
                                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest">The Architect Rule #1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 2. ARCHITECTURE & TECH STACK */}
            <ScrollReveal>
                <section className="space-y-16">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold dark:text-white italic">02. Architecture & Tech Selection</h3>
                        <p className="text-slate-500 max-w-2xl">Sebelum koding, Anda harus memilih alat dan struktur yang tepat. Gunakan AI untuk melakukan <strong>Trade-off Analysis</strong>.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Example Stack Comparison */}
                        <div className="p-8 bg-slate-950 rounded-[3rem] text-white space-y-6">
                            <h5 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Case: Memilih Database</h5>
                            <div className="space-y-4 font-mono text-[11px]">
                                <p className="text-slate-500">{"// Prompt Pemilihan Stack"}</p>
                                <p className="text-indigo-300">"Tolong bandingkan PostgreSQL dan MongoDB untuk aplikasi E-commerce dengan 10.000 transaksi per detik. Fokus pada konsistensi data (ACID) dan skalabilitas horizontal."</p>
                            </div>
                            <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 text-[10px] text-slate-400 italic">
                                AI akan memberikan tabel perbandingan biaya, performa, dan kemudahan pengembangan.
                            </div>
                        </div>

                        {/* Architecture Prompt */}
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] space-y-6 shadow-sm">
                            <h5 className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Case: Desain Sistem</h5>
                            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                                <p className="italic">"Buatkan diagram Mermaid untuk sistem microservices yang menangani manajemen user, payment, dan notifikasi menggunakan Kafka sebagai message broker."</p>
                            </div>
                            <div className="h-24 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center text-[10px] font-mono text-slate-400">
                                [Mermaid Diagram Preview]
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-indigo-200 dark:via-slate-800 to-transparent" />

            {/* 3. SCALING PROJECTS: FROM SNIPPETS TO SYSTEMS */}
            <ScrollReveal>
                <section className="space-y-20">
                    <div className="text-center space-y-4">
                        <h3 className="text-3xl font-serif font-bold dark:text-white">Scaling with AI</h3>
                        <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black">Leveling Up Your Development Workflow</p>
                    </div>

                    <div className="grid gap-12">
                        {/* Small Task */}
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 rounded-2xl flex items-center justify-center font-bold">1</div>
                                <h4 className="text-xl font-bold dark:text-white">Small: The Snippet Layer</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Fokus pada satu fungsi atau komponen terisolasi.</p>
                            </div>
                            <div className="md:col-span-2 p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                                <p className="text-xs font-bold text-slate-400 mb-4 uppercase">Prompt Contoh (Small):</p>
                                <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 italic">"Buatkan fungsi JavaScript untuk memformat tanggal ke dalam format '2 hari yang lalu' secara relatif."</p>
                            </div>
                        </div>

                        {/* Medium Task */}
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">2</div>
                                <h4 className="text-xl font-bold dark:text-white">Medium: The Feature Layer</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Integrasi beberapa komponen dan state management.</p>
                            </div>
                            <div className="md:col-span-2 p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                                <p className="text-xs font-bold text-slate-400 mb-4 uppercase">Prompt Contoh (Medium):</p>
                                <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400 italic">"Implementasikan halaman Shopping Cart di React menggunakan Context API untuk mengelola item, total harga, dan persistensi data ke LocalStorage."</p>
                            </div>
                        </div>

                        {/* Large Task */}
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 text-amber-600 rounded-2xl flex items-center justify-center font-bold">3</div>
                                <h4 className="text-xl font-bold dark:text-white">Large: The System Layer</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Arsitektur multi-layar, keamanan, dan performa.</p>
                            </div>
                            <div className="md:col-span-2 p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                                <p className="text-xs font-bold text-slate-400 mb-4 uppercase">Prompt Contoh (Large):</p>
                                <p className="text-sm font-mono text-amber-600 dark:text-amber-400 italic">"Rancang boilerplate untuk API menggunakan NestJS dengan Clean Architecture. Pisahkan layer domain, infrastructure, dan application. Gunakan TypeORM, JWT Auth, dan Swagger documentation."</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

            {/* 4. CLEAN CODE & REFACTORING */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-emerald-600 dark:bg-emerald-400"></span> Refactoring & Quality
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h4 className="text-3xl font-serif font-bold dark:text-white">Clean Code via Prompting</h4>
                            <p className="text-slate-600 dark:text-slate-400">Jangan puas dengan kode yang hanya "jalan". Minta AI untuk meninjau kodenya berdasarkan standar industri.</p>
                            <div className="space-y-4">
                                {[
                                    { p: 'SOLID Principle', d: 'Minta AI memastikan Single Responsibility.' },
                                    { p: 'Dry Principle', d: 'Minta AI menghilangkan redundansi kode.' },
                                    { p: 'Complexity Analysis', d: 'Minta AI menganalisis Big O Notation.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-2xl transition-colors">
                                        <div className="text-emerald-500 font-bold">✓</div>
                                        <div>
                                            <p className="text-sm font-bold dark:text-white">{item.p}</p>
                                            <p className="text-xs text-slate-500">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-slate-900 dark:bg-black rounded-[2.5rem] border border-slate-800 shadow-2xl space-y-6">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                            </div>
                            <p className="text-xs text-slate-500 font-mono italic">{"// The Refactor Prompt"}</p>
                            <p className="text-sm text-indigo-400 font-mono">
                                &quot;Review kode JavaScript berikut. Perbaiki agar mengikuti prinsip DRY dan tingkatkan readability. Tambahkan JSDoc untuk dokumentasi fungsi.&quot;
                            </p>
                            <div className="h-20 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center">
                                <p className="text-[10px] text-slate-600 italic">Pastikan lampirkan kodenya di bawah instruksi.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 5. DEBUGGING: THE SCIENTIFIC METHOD */}
            <ScrollReveal>
                <section className="bg-slate-950 dark:bg-black rounded-[4rem] p-16 text-white overflow-hidden relative">
                    <div className="absolute -bottom-12 -right-12 p-12 opacity-5 pointer-events-none text-[12rem] font-serif font-black italic">DEBUG</div>
                    <div className="relative z-10 max-w-4xl space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-serif font-bold italic underline underline-offset-12 decoration-indigo-500/50">Modern Debugging</h3>
                            <p className="text-slate-400 text-lg">Jangan gunakan AI hanya untuk "copy-paste fix". Gunakan AI untuk **memahami kesalahan Anda**.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-4xl space-y-4">
                                <h5 className="font-bold text-indigo-400">❌ Prompt Salah</h5>
                                <p className="text-sm text-slate-500 italic">"Kodingan ini error, tolong perbaiki."</p>
                                <p className="text-xs text-red-500">Kekurangan: Tanpa pesan error, tanpa konteks lingkungan.</p>
                            </div>
                            <div className="p-8 bg-emerald-950/20 border border-emerald-900/30 rounded-4xl space-y-4">
                                <h5 className="font-bold text-emerald-400">✅ Prompt Benar</h5>
                                <p className="text-sm text-slate-200 mt-2 italic">"Saya mendapat error 500 saat mencoba menyimpan data ke MySQL. Berikut draf kodenya dan pesan error log saya. Apa akar permasalahannya dan bagaimana cara mencegahnya di masa depan?"</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 6. TESTING & DEV OPS */}
            <ScrollReveal>
                <section className="space-y-16">
                    <div className="flex items-center gap-4 text-amber-600 dark:text-amber-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-amber-600 dark:bg-amber-400"></span> Testing & Deployment
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Testing */}
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] space-y-6">
                            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/50 rounded-2xl flex items-center justify-center text-xl text-amber-600">🧪</div>
                            <h4 className="text-xl font-bold dark:text-white">Unit & Integration Testing</h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic">
                                "Tuliskan Unit Test menggunakan Jest untuk fungsi kalkulasi pajak ini. Sertakan edge case seperti input null, angka negatif, dan nilai ekstrim."
                            </p>
                        </div>

                        {/* DevOps */}
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] space-y-6">
                            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950/50 rounded-2xl flex items-center justify-center text-xl text-indigo-600">🚀</div>
                            <h4 className="text-xl font-bold dark:text-white">DevOps & Deployment</h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic">
                                "Buatkan Dockerfile untuk aplikasi Node.js ini dengan optimasi multi-stage build agar ukuran image minimum."
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* FINAL PROJECT CHALLENGE */}
            <ScrollReveal>
                <section className="text-center max-w-4xl mx-auto py-24 border-t border-slate-100 dark:border-slate-800 space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-serif font-bold dark:text-white italic capitalize">The Informatics Challenge</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Terapkan semua pengetahuan Anda untuk membangun sistem yang nyata.</p>
                    </div>

                    <div className="p-1 px-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[3.5rem] shadow-2xl">
                        <div className="bg-white dark:bg-slate-950 p-12 rounded-[3.4rem] space-y-8">
                            <div className="flex flex-wrap justify-center gap-6">
                                {['Architecture', 'Database', 'Backend', 'Frontend', 'Auth', 'Testing', 'Docker'].map((tag, i) => (
                                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">{tag}</span>
                                ))}
                            </div>
                            <h4 className="text-2xl font-bold dark:text-white">"Sistem Portal Tugas Akhir"</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto italic">
                                "Rancang sistem portal tugas akhir yang mencakup manajemen dosen pembimbing, pengajuan judul, dan monitoring progres. Gunakan database relasional dan buatlah draf skema, API docs, serta satu fitur utama secara mendalam menggunakan prompt koding yang komprehensif."
                            </p>
                            <div className="pt-4 flex justify-center gap-4">
                                <div className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all cursor-pointer">Submit Proposal Projek</div>
                                <div className="px-8 py-4 border border-slate-200 text-slate-500 rounded-2xl font-bold">Inspiration Gallery</div>
                            </div>
                        </div>
                    </div>

                    <p className="text-[10px] text-slate-300 uppercase tracking-widest font-black">Success in informatics is defined by your ability to guide the machine, not just type for it.</p>
                </section>
            </ScrollReveal>
        </div>
    );
}
