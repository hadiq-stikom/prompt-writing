'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi6({ materi }) {
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

    const getSections = () => [
        {
            id: "INTRO",
            title: "Menghubungkan UI ke 'Otak' Digital",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-4 text-emerald-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-emerald-400"></span> Pertemuan 6: Backend & Integrasi
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-emerald-500/20 underline-offset-16 italic tracking-tight">Menghubungkan UI ke &quot;Otak&quot; Digital</h2>
                    <p className="text-xl text-slate-400 leading-relaxed text-justify font-medium">
                        Fokus sesi ini adalah membangun &quot;otak&quot; aplikasi menggunakan <strong>Antigravity</strong>. Kita akan mengotomatisasi pembuatan skema dan API, namun tetap menggunakan struktur <strong>PCTF</strong> untuk memastikan integritas data dan keamanan arsitektur.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-400">MySQL</span>
                        <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-400">Prisma ORM</span>
                        <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-400">REST API</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Konfigurasi MySQL & Prisma",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-emerald-400 font-bold text-xl uppercase tracking-widest">01. Konfigurasi MySQL & Prisma</h3>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-slate-400 leading-relaxed text-justify text-lg">
                                Kita menghubungkan aplikasi Next.js ke database MySQL lokal. Prisma akan bertindak sebagai jembatan yang memudahkan kita mengelola skema database tanpa harus menulis SQL manual yang panjang.
                            </p>
                            <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-4">
                                <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                                <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                                    &quot;Sebagai Backend Architect, bantu saya setup persistence layer. Install Prisma, inisialisasi dengan provider MySQL, dan buat file .env yang aman. Definisikan model &apos;Product&apos; di schema.prisma dengan field id, name, sku, price, dan stock sesuai kontrak data (Format).&quot;
                                </p>
                            </div>
                        </div>
                        <div className="p-8 glass rounded-[2.5rem] border border-white/10 space-y-6 bg-slate-900/50 flex flex-col justify-center">
                            <h5 className="text-xs font-black uppercase tracking-widest text-slate-500 italic">Database Schema (prisma):</h5>
                            <pre className="text-[10px] text-emerald-500 font-mono bg-black/30 p-4 rounded-xl">
                                {`model Product {
  id    Int    @id @default(autoincrement())
  name  String
  sku   String @unique
  price Float
  stock Int
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Koneksi DB & Migrasi Tabel",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-emerald-400 font-bold text-xl uppercase tracking-widest">02. Koneksi DB & Migrasi Tabel</h3>

                    <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                        Skema sudah dibuat, tapi tabelnya <strong className="text-white">belum ada di MySQL</strong>. Langkah ini menghubungkan aplikasi ke database nyata dan menjalankan migrasi agar Prisma bisa membuat tabel secara otomatis.
                    </p>

                    {/* Step-by-step flow */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-6 bg-slate-900 border border-white/10 rounded-3xl space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 font-black text-sm">1</span>
                                <p className="text-white font-bold text-sm">Buat Database MySQL</p>
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed">Database harus sudah ada di MySQL sebelum Prisma bisa konek. Buat via terminal atau tools seperti phpMyAdmin.</p>
                            <div className="p-3 bg-black/40 rounded-xl font-mono text-[10px] text-emerald-300 border border-white/5">
                                CREATE DATABASE inventaris;
                            </div>
                        </div>
                        <div className="p-6 bg-slate-900 border border-white/10 rounded-3xl space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 font-black text-sm">2</span>
                                <p className="text-white font-bold text-sm">Isi DATABASE_URL di .env</p>
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed">String koneksi yang memberi tahu Prisma bagaimana cara terhubung ke MySQL.</p>
                            <div className="p-3 bg-black/40 rounded-xl font-mono text-[10px] text-amber-300 border border-white/5 leading-relaxed">
                                DATABASE_URL=<br />"mysql://root:pass<br />@localhost:3306<br />/inventaris"
                            </div>
                        </div>
                        <div className="p-6 bg-slate-900 border border-white/10 rounded-3xl space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 font-black text-sm">3</span>
                                <p className="text-white font-bold text-sm">Jalankan Migrasi</p>
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed">Prisma membaca schema dan membuat tabel di MySQL. Sekaligus men-generate Prisma Client.</p>
                            <div className="p-3 bg-black/40 rounded-xl font-mono text-[10px] text-blue-300 border border-white/5">
                                npx prisma migrate dev<br />--name init
                            </div>
                        </div>
                    </div>

                    {/* Prompt box */}
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-4">
                        <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                        <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                            &quot;Sebagai Database Engineer, bantu saya menghubungkan Prisma ke MySQL lokal. Jelaskan format DATABASE_URL yang benar untuk file .env, perintah untuk membuat database kosong di MySQL, dan cara menjalankan prisma migrate dev untuk membuat tabel Product secara otomatis dari schema yang ada (Task).&quot;
                        </p>
                    </div>

                    {/* What happens after migrate */}
                    <div className="p-6 bg-slate-900/70 border border-white/10 rounded-3xl space-y-4">
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Apa yang terjadi setelah migrate dev?</h5>
                        <div className="grid sm:grid-cols-3 gap-3 text-xs">
                            <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl space-y-1">
                                <p className="text-emerald-400 font-bold">📁 prisma/migrations/</p>
                                <p className="text-slate-400">File SQL history migrasi tersimpan otomatis</p>
                            </div>
                            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-1">
                                <p className="text-blue-400 font-bold">🗄️ Tabel di MySQL</p>
                                <p className="text-slate-400">Tabel Product langsung terbuat di database</p>
                            </div>
                            <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-2xl space-y-1">
                                <p className="text-purple-400 font-bold">⚙️ Prisma Client</p>
                                <p className="text-slate-400">Client ter-generate, siap dipakai di kode</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "REST API Routes",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-emerald-400 font-bold text-xl uppercase tracking-widest">03. REST API Routes</h3>
                    <div className="space-y-8">
                        <p className="text-slate-400 max-w-3xl text-lg">API Route adalah jembatan antara Frontend dan Database. Di sini kita mendefinisikan bagaimana aplikasi &quot;meminta&quot; data dan &quot;mengirim&quot; data baru ke MySQL.</p>
                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[3rem] text-white space-y-6 shadow-2xl group hover:border-emerald-500/40 transition-all">
                            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                            <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                                &quot;Buat RESTful API Route di app/api/products/route.ts yang bertindak sebagai jembatan data. Implementasikan handler GET untuk mengambil semua produk dan POST untuk validasi serta penyimpanan data baru ke MySQL menggunakan Prisma Client (Task).&quot;
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                <div className="p-4 rounded-2xl bg-white/2">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Method GET</p>
                                    <p className="text-[10px] text-slate-500 mt-1 italic">prisma.product.findMany()</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/2">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Method POST</p>
                                    <p className="text-[10px] text-slate-500 mt-1 italic">prisma.product.create({`{data}`})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "04",
            title: "Integrasi & Refactoring",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-emerald-400 font-bold text-xl uppercase tracking-widest">04. Integrasi & Refactoring</h3>

                    {/* Callout: Server Component is better */}
                    <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl flex gap-4 items-start">
                        <span className="text-2xl mt-0.5">💡</span>
                        <div className="space-y-1">
                            <p className="text-emerald-300 font-bold text-sm uppercase tracking-widest">Best Practice: Next.js App Router</p>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Karena <code className="bg-white/10 px-1.5 py-0.5 rounded text-emerald-300">app/inventaris/page.tsx</code> adalah sebuah <strong>Page</strong>,
                                ia bisa langsung dijadikan <strong>async Server Component</strong> — artinya data di-fetch
                                <em> di server</em> sebelum halaman dikirim ke browser. Tidak perlu <code className="bg-white/10 px-1.5 py-0.5 rounded text-emerald-300">useEffect</code> untuk initial load.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Approach 1: Server Component */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-[10px] font-black text-emerald-400 uppercase tracking-widest">✅ Direkomendasikan</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Gunakan <strong className="text-white">Server Component</strong> untuk mengambil data awal langsung dari database menggunakan Prisma — tanpa API roundtrip, tanpa loading state.
                            </p>
                            <div className="p-6 bg-slate-900 border border-white/10 rounded-4xl shadow-2xl space-y-3">
                                <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">🚀 Prompt (Server Component):</h5>
                                <p className="text-xs font-mono text-slate-200 leading-relaxed italic">
                                    &quot;Refactor app/inventaris/page.tsx menjadi async Server Component. Fetch data produk langsung menggunakan Prisma Client di server (tanpa API route), lalu teruskan sebagai props ke Client Component yang menangani form dan interaksi UI (Task).&quot;
                                </p>
                            </div>
                            <div className="p-4 bg-black/40 rounded-2xl font-mono text-[10px] text-slate-300 leading-relaxed border border-white/5">
                                <p className="text-slate-500">{"// app/inventaris/page.tsx"}</p>
                                <p className="text-blue-400">export default <span className="text-emerald-400">async</span> function Page() {'{'}</p>
                                <p className="ml-4 text-slate-300">const products = <span className="text-emerald-400">await</span> prisma.product.findMany();</p>
                                <p className="ml-4 text-slate-300">return &lt;InventarisClient data={'{products}'} /&gt;;</p>
                                <p className="text-blue-400">{'}'}</p>
                            </div>
                        </div>

                        {/* Approach 2: useEffect (Client) */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-[10px] font-black text-amber-400 uppercase tracking-widest">⚡ Untuk Data Dinamis</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Gunakan <strong className="text-white">useEffect + fetch()</strong> hanya saat data perlu di-refresh
                                berdasarkan <em>aksi user</em> — misalnya setelah form submit, filter berubah, atau polling realtime.
                            </p>
                            <div className="p-6 bg-slate-900 border border-white/10 rounded-4xl shadow-2xl space-y-3">
                                <h5 className="text-xs font-bold text-amber-400 uppercase tracking-widest">🚀 Prompt (Client Refetch):</h5>
                                <p className="text-xs font-mono text-slate-200 leading-relaxed italic">
                                    &quot;Di dalam InventarisClient.tsx, tambahkan fungsi fetchProducts() yang memanggil GET /api/products dan update state. Panggil fungsi ini setelah form POST berhasil agar tabel otomatis refresh tanpa reload halaman (Format).&quot;
                                </p>
                            </div>
                            <div className="p-4 bg-black/40 rounded-2xl font-mono text-[10px] text-slate-300 leading-relaxed border border-white/5">
                                <p className="text-slate-500">{"// Hanya untuk refetch setelah aksi user"}</p>
                                <p className="text-purple-400">const fetchProducts = <span className="text-amber-400">async</span> () =&gt; {'{'}</p>
                                <p className="ml-4">const res = <span className="text-amber-400">await</span> fetch(<span className="text-emerald-300">&apos;/api/products&apos;</span>);</p>
                                <p className="ml-4">setProducts(<span className="text-amber-400">await</span> res.json());
                                </p>
                                <p className="text-purple-400">{'}'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="p-6 bg-slate-900/70 border border-white/10 rounded-3xl">
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Kapan Menggunakan Mana?</h5>
                        <div className="grid grid-cols-3 gap-2 text-xs text-center">
                            <div className="p-3 bg-white/5 rounded-xl font-bold text-slate-400 uppercase tracking-widest">Skenario</div>
                            <div className="p-3 bg-emerald-500/10 rounded-xl font-bold text-emerald-400">Server Component</div>
                            <div className="p-3 bg-amber-500/10 rounded-xl font-bold text-amber-400">useEffect</div>

                            <div className="p-3 bg-white/2 rounded-xl text-slate-400 text-left">Initial page load</div>
                            <div className="p-3 bg-emerald-500/5 rounded-xl text-emerald-300">✅ Ideal</div>
                            <div className="p-3 bg-white/2 rounded-xl text-slate-500">❌ Kurang optimal</div>

                            <div className="p-3 bg-white/2 rounded-xl text-slate-400 text-left">Setelah form submit</div>
                            <div className="p-3 bg-white/2 rounded-xl text-slate-500">—</div>
                            <div className="p-3 bg-amber-500/5 rounded-xl text-amber-300">✅ Ideal</div>

                            <div className="p-3 bg-white/2 rounded-xl text-slate-400 text-left">SEO & performa</div>
                            <div className="p-3 bg-emerald-500/5 rounded-xl text-emerald-300">✅ Lebih baik</div>
                            <div className="p-3 bg-white/2 rounded-xl text-slate-500">❌ Client-only</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "05",
            title: "Testing & Troubleshooting",
            content: (
                <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-12 text-white overflow-hidden relative shadow-2xl text-left w-full">
                    <div className="absolute -bottom-12 -right-12 p-12 opacity-5 pointer-events-none text-[12rem] font-black italic">DATABASE</div>
                    <div className="relative z-10 space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold italic underline underline-offset-12 decoration-emerald-500/50 flex items-center gap-4">
                                🔍 Sesi Khusus: Testing & Troubleshooting
                            </h3>
                            <p className="text-slate-400 text-lg">Validasi integrasi sistem dan penanganan kendala umum saat instalasi database.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-8 glass border border-white/10 rounded-4xl space-y-4 bg-white/2">
                                    <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">🧪 Testing (Database)</h5>
                                    <p className="text-xs text-slate-300 italic">&quot;Buat script prisma/seed.ts untuk insert satu data test ke MySQL. Beritahu cara menjalankannya untuk memastikan koneksi DB sukses.&quot;</p>
                                </div>
                                <div className="p-8 glass border border-white/10 rounded-4xl space-y-4 bg-white/2">
                                    <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">🧪 Testing (API)</h5>
                                    <p className="text-xs text-slate-300 italic">&quot;Berikan perintah fetch yang bisa saya jalankan di Console Browser untuk ngetes endpoint GET /api/products apakah sudah mengembalikan JSON dari MySQL.&quot;</p>
                                </div>
                            </div>
                            <div className="p-8 glass border border-white/10 rounded-4xl flex flex-col justify-center space-y-6 bg-white/2">
                                <h5 className="text-[10px] font-black text-red-400 uppercase tracking-widest flex items-center gap-2">
                                    <span>🔧</span> Troubleshooting
                                </h5>
                                <p className="text-xs text-slate-300 leading-relaxed italic">
                                    &quot;Saya dapat error P1001 atau Access Denied saat konek MySQL. Analisis file .env saya dan berikan solusi perintah SQL jika saya perlu mengubah authentication plugin user MySQL saya.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "System Ready",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white italic underline underline-offset-12 decoration-emerald-500/20 capitalize tracking-tight">System Ready for Production</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Selamat! Anda telah membangun aplikasi Full-stack pertama Anda melalui panduan prompt yang sistematis.</p>
                    </div>
                    <div className="p-10 bg-emerald-500/20 border border-emerald-500/20 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <p className="text-xl font-bold italic relative z-10 text-emerald-400">Next Level: Advanced Architectures →</p>
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">&quot;Precision in instruction leads to integrity in data architecture.&quot;</p>
                </div>
            )
        }
    ];

    const sectionsData = getSections();

    return (
        <div className="space-y-32 pb-20 text-white">
            {/* Presentation Controls */}
            <div className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/10 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-emerald-500">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-emerald-500/20"
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
                                <div className="flex items-center gap-4 text-emerald-400 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-emerald-400"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Selesai' :
                                            `Bagian ${section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-emerald-500/20 to-transparent mt-24" />
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
