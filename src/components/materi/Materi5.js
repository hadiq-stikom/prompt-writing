import ScrollReveal from './ScrollReveal';

export default function Materi5({ materi }) {
    return (
        <div className="space-y-32 pb-20 text-white">
            {/* 0. INTRO: THE AI-NATIVE DEVELOPER */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Core Module
                    </div>
                    <div className="max-w-4xl space-y-6">
                        <h2 className="text-5xl font-bold text-white leading-tight underline decoration-primary/20 underline-offset-16 italic tracking-tight">The AI-Native Developer</h2>
                        <p className="text-xl text-slate-400 leading-relaxed text-justify font-medium">
                            Di era AI, koding bukan lagi tentang menghafal sintaks, melainkan tentang <strong>kemampuan problem solving, desain sistem, dan komunikasi presisi</strong> kepada mesin. Mahasiswa Informatika harus mampu beralih dari &quot;Code Writer&quot; menjadi &quot;AI Architect&quot;.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            {/* 1. FUNDAMEN: CODING AS DIALOGUE */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="px-8 py-4 glass rounded-full border border-white/10 inline-block">
                        <h3 className="text-primary font-bold text-xs uppercase tracking-widest">Section 01: Mindset & Fundamen</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold dark:text-white">AI sebagai Pair Programmer</h4>
                            <p className="text-slate-400 dark:text-slate-400 leading-relaxed">
                                AI tidak tahu apa yang ingin Anda bangun kecuali Anda menjelaskannya. Kesalahan terbesar programmer pemula adalah meminta kode tanpa menjelaskan <strong>arsitektur</strong> dan <strong>konteks</strong>.
                            </p>
                            <div className="p-6 bg-slate-800/40 border border-white/5 rounded-3xl space-y-4">
                                <h5 className="font-bold text-sm dark:text-white">Mengapa Prompt Koding Berbeda?</h5>
                                <ul className="space-y-2 text-xs text-slate-500">
                                    <li className="flex gap-2"><span>•</span> <span><strong className="text-white">Presisi:</strong> Satu titik-koma bisa merusak segalanya.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span><strong className="text-white">Dependensi:</strong> Kode bergantung pada library dan versi tertentu.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span><strong className="text-white">Skalabilitas:</strong> Kode hari ini harus bisa dikembangkan esok hari.</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-primary to-purple-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative p-8 glass rounded-[2.5rem] border border-white/10 space-y-6">
                                <h5 className="text-xs font-black uppercase tracking-widest text-primary text-center">Prompt Mantra</h5>
                                <p className="text-center italic text-xl dark:text-white font-bold tracking-tight">
                                    "Explain the Logic First, <br /> Generate the Code Second."
                                </p>
                                <div className="pt-6 border-t border-white/10">
                                    <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-black">The Architect Rule #1</p>
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
                        <h3 className="text-2xl font-bold dark:text-white italic">02. Architecture & Tech Selection</h3>
                        <p className="text-slate-400 max-w-2xl">Sebelum koding, Anda harus memilih alat dan struktur yang tepat. Gunakan AI untuk melakukan <strong>Trade-off Analysis</strong>.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Example Stack Comparison */}
                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[3rem] text-white space-y-6 shadow-2xl">
                            <h5 className="text-xs font-bold text-primary uppercase tracking-widest">Case: Memilih Database</h5>
                            <div className="space-y-4 font-mono text-[11px]">
                                <p className="text-slate-500">{"// Prompt Pemilihan Stack"}</p>
                                <p className="text-primary/90">"Tolong bandingkan PostgreSQL dan MongoDB untuk aplikasi E-commerce dengan 10.000 transaksi per detik. Fokus pada konsistensi data (ACID) dan skalabilitas horizontal."</p>
                            </div>
                            <div className="p-4 bg-slate-950 rounded-2xl border border-white/5 text-[10px] text-slate-500 italic">
                                AI akan memberikan tabel perbandingan biaya, performa, dan kemudahan pengembangan.
                            </div>
                        </div>

                        {/* Architecture Prompt */}
                        <div className="p-8 glass border border-white/5 rounded-[3rem] space-y-6 shadow-sm">
                            <h5 className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Case: Desain Sistem</h5>
                            <div className="space-y-4 text-sm text-slate-400">
                                <p className="italic">"Buatkan diagram Mermaid untuk sistem microservices yang menangani manajemen user, payment, dan notifikasi menggunakan Kafka sebagai message broker."</p>
                            </div>
                            <div className="h-24 bg-slate-950 rounded-2xl border border-white/5 flex items-center justify-center text-[10px] font-mono text-slate-500">
                                [Mermaid Diagram Preview]
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* 3. SCALING PROJECTS: FROM SNIPPETS TO SYSTEMS */}
            <ScrollReveal>
                <section className="space-y-20">
                    <div className="text-center space-y-4">
                        <h3 className="text-3xl font-bold dark:text-white">Scaling with AI</h3>
                        <p className="text-primary/60 uppercase tracking-widest text-[10px] font-black">Leveling Up Your Development Workflow</p>
                    </div>

                    <div className="grid gap-12">
                        {/* Small Task */}
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-primary/10 text-primary border border-primary/20 rounded-2xl flex items-center justify-center font-bold">1</div>
                                <h4 className="text-xl font-bold dark:text-white">Small: The Snippet Layer</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">Fokus pada satu fungsi atau komponen terisolasi.</p>
                            </div>
                            <div className="md:col-span-2 p-8 glass border border-white/5 rounded-[2.5rem]">
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase">Prompt Contoh (Small):</p>
                                <p className="text-sm font-mono text-primary italic">"Buatkan fungsi JavaScript untuk memformat tanggal ke dalam format '2 hari yang lalu' secara relatif."</p>
                            </div>
                        </div>

                        {/* Medium Task */}
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-2xl flex items-center justify-center font-bold">2</div>
                                <h4 className="text-xl font-bold dark:text-white">Medium: The Feature Layer</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">Integrasi beberapa komponen dan state management.</p>
                            </div>
                            <div className="md:col-span-2 p-8 glass border border-white/5 rounded-[2.5rem]">
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase">Prompt Contoh (Medium):</p>
                                <p className="text-sm font-mono text-emerald-400 italic">"Implementasikan halaman Shopping Cart di React menggunakan Context API untuk mengelola item, total harga, dan persistensi data ke LocalStorage."</p>
                            </div>
                        </div>

                        {/* Large Task */}
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-2xl flex items-center justify-center font-bold">3</div>
                                <h4 className="text-xl font-bold dark:text-white">Large: The System Layer</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">Arsitektur multi-layar, keamanan, dan performa.</p>
                            </div>
                            <div className="md:col-span-2 p-8 glass border border-white/5 rounded-[2.5rem]">
                                <p className="text-xs font-bold text-slate-500 mb-4 uppercase">Prompt Contoh (Large):</p>
                                <p className="text-sm font-mono text-amber-400 italic">"Rancang boilerplate untuk API menggunakan NestJS dengan Clean Architecture. Pisahkan layer domain, infrastructure, dan application. Gunakan TypeORM, JWT Auth, dan Swagger documentation."</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* 4. CLEAN CODE & REFACTORING */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-emerald-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-emerald-400"></span> Refactoring & Quality
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h4 className="text-3xl font-bold dark:text-white">Clean Code via Prompting</h4>
                            <p className="text-slate-400">Jangan puas dengan kode yang hanya "jalan". Minta AI untuk meninjau kodenya berdasarkan standar industri.</p>
                            <div className="space-y-4">
                                {[
                                    { p: 'SOLID Principle', d: 'Minta AI memastikan Single Responsibility.' },
                                    { p: 'Dry Principle', d: 'Minta AI menghilangkan redundansi kode.' },
                                    { p: 'Complexity Analysis', d: 'Minta AI menganalisis Big O Notation.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 hover:bg-slate-800/40 border border-transparent hover:border-white/5 rounded-2xl transition-all group">
                                        <div className="text-emerald-500 font-bold group-hover:scale-110 transition-transform">✓</div>
                                        <div>
                                            <p className="text-sm font-bold dark:text-white">{item.p}</p>
                                            <p className="text-xs text-slate-500">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-4xl font-mono pointer-events-none">{"{...}"}</div>
                            <div className="flex gap-2 relative z-10">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                            </div>
                            <p className="text-xs text-slate-500 font-mono italic relative z-10">{"// The Refactor Prompt"}</p>
                            <p className="text-sm text-primary font-mono relative z-10">
                                &quot;Review kode JavaScript berikut. Perbaiki agar mengikuti prinsip DRY dan tingkatkan readability. Tambahkan JSDoc untuk dokumentasi fungsi.&quot;
                            </p>
                            <div className="p-6 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center relative z-10">
                                <p className="text-[10px] text-slate-600 italic">Pastikan lampirkan kodenya di bawah instruksi.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 5. DEBUGGING: THE SCIENTIFIC METHOD */}
            <ScrollReveal>
                <section className="bg-slate-900 border border-white/5 rounded-[4rem] p-16 text-white overflow-hidden relative shadow-2xl">
                    <div className="absolute -bottom-12 -right-12 p-12 opacity-5 pointer-events-none text-[12rem] font-black italic">DEBUG</div>
                    <div className="relative z-10 max-w-4xl space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold italic underline underline-offset-12 decoration-primary/50">Modern Debugging</h3>
                            <p className="text-slate-400 text-lg">Jangan gunakan AI hanya untuk "copy-paste fix". Gunakan AI untuk **memahami kesalahan Anda**.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-slate-950/50 border border-white/5 rounded-4xl space-y-4">
                                <h5 className="font-bold text-red-400">❌ Prompt Salah</h5>
                                <p className="text-sm text-slate-500 italic">"Kodingan ini error, tolong perbaiki."</p>
                                <p className="text-xs text-red-500/70 font-medium uppercase tracking-widest mt-4">Kekurangan:</p>
                                <p className="text-[10px] text-slate-600">Tanpa pesan error, tanpa konteks lingkungan.</p>
                            </div>
                            <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-4xl space-y-4 relative group">
                                <div className="absolute top-4 right-6 text-[10px] font-black text-emerald-500 uppercase">Recommended</div>
                                <h5 className="font-bold text-emerald-400">✅ Prompt Benar</h5>
                                <p className="text-sm text-slate-300 mt-2 italic leading-relaxed">"Saya mendapat error 500 saat mencoba menyimpan data ke MySQL. Berikut draf kodenya dan pesan error log saya. Apa akar permasalahannya dan bagaimana cara mencegahnya di masa depan?"</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 6. TESTING & DEV OPS */}
            <ScrollReveal>
                <section className="space-y-16">
                    <div className="flex items-center gap-4 text-amber-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-amber-400"></span> Testing & Deployment
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Testing */}
                        <div className="p-8 glass border border-white/5 rounded-[3rem] space-y-6 group hover:border-amber-500/30 transition-all">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-xl text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">🧪</div>
                            <h4 className="text-xl font-bold dark:text-white">Unit & Integration Testing</h4>
                            <p className="text-sm text-slate-400 leading-relaxed italic">
                                "Tuliskan Unit Test menggunakan Jest untuk fungsi kalkulasi pajak ini. Sertakan edge case seperti input null, angka negatif, dan nilai ekstrim."
                            </p>
                        </div>

                        {/* DevOps */}
                        <div className="p-8 glass border border-white/5 rounded-[3rem] space-y-6 group hover:border-primary/30 transition-all">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-xl text-primary border border-primary/20 group-hover:scale-110 transition-transform">🚀</div>
                            <h4 className="text-xl font-bold dark:text-white">DevOps & Deployment</h4>
                            <p className="text-sm text-slate-400 leading-relaxed italic">
                                "Buatkan Dockerfile untuk aplikasi Node.js ini dengan optimasi multi-stage build agar ukuran image minimum."
                            </p>
                        </div>
                    </div>
                </section>
                <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent pt-12" />
            </ScrollReveal>

            {/* FINAL PROJECT CHALLENGE */}
            <ScrollReveal>
                <section className="text-center max-w-4xl mx-auto py-24 space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold dark:text-white italic underline underline-offset-12 decoration-primary/20 capitalize">The Informatics Challenge</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Terapkan semua pengetahuan Anda untuk membangun sistem yang nyata.</p>
                    </div>

                    <div className="p-px bg-linear-to-r from-primary via-purple-500 to-pink-500 rounded-[3.5rem] shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]">
                        <div className="bg-slate-950/90 backdrop-blur-xl p-12 rounded-[3.4rem] space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent" />
                            <div className="flex flex-wrap justify-center gap-6 relative z-10">
                                {['Architecture', 'Database', 'Backend', 'Frontend', 'Auth', 'Testing', 'Docker'].map((tag, i) => (
                                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-primary/20 pb-2">{tag}</span>
                                ))}
                            </div>
                            <h4 className="text-3xl font-bold dark:text-white relative z-10">"Sistem Portal Tugas Akhir"</h4>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-xl mx-auto italic relative z-10">
                                "Rancang sistem portal tugas akhir yang mencakup manajemen dosen pembimbing, pengajuan judul, dan monitoring progres. Gunakan database relasional dan buatlah draf skema, API docs, serta satu fitur utama secara mendalam menggunakan prompt koding yang komprehensif."
                            </p>
                            <div className="pt-4 flex justify-center gap-4 relative z-10">
                                <div className="px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-primary/20 hover:shadow-lg transition-all cursor-pointer">Submit Proposal Projek</div>
                                <div className="px-10 py-4 glass border border-white/10 text-slate-400 rounded-2xl font-bold hover:text-white transition-all cursor-pointer">Inspiration Gallery</div>
                            </div>
                        </div>
                    </div>

                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12">Success in informatics is defined by your ability to guide the machine, not just type for it.</p>
                </section>
            </ScrollReveal>
        </div>
    );
}
