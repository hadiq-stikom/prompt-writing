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
            title: "REST API Routes",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-emerald-400 font-bold text-xl uppercase tracking-widest">02. REST API Routes</h3>
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
            id: "03",
            title: "Integrasi & Refactoring",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-emerald-400 font-bold text-xl uppercase tracking-widest">03. Integrasi & Refactoring</h3>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-slate-400 leading-relaxed text-justify text-lg">
                                Sekarang saatnya menghapus data palsu (*mock data*) dan menyambungkan halaman utama ke API asli menggunakan <strong>useEffect</strong> dan <strong>fetch()</strong>.
                            </p>
                            <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-4">
                                <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                                <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                                    &quot;Lakukan refactor pada app/inventaris/page.tsx (Frontend) untuk mengganti mock data with integrasi API asli. Gunakan useEffect untuk fetch data secara sinkron, and pastikan form submission mengirim request POST ke server sebelum melakukan refresh state UI (Format).&quot;
                                </p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-blue-500 rounded-[2.5rem] blur opacity-25"></div>
                            <div className="relative p-8 glass rounded-[2.5rem] border border-white/10 space-y-4 bg-slate-900 font-mono text-[11px] leading-relaxed shadow-3xl">
                                <p className="text-slate-500">{"// Workflow Integrasi:"}</p>
                                <p className="text-slate-300">1. Client requests data via fetch()</p>
                                <p className="text-slate-300">2. API Route handles the request</p>
                                <p className="text-slate-300">3. Prisma Queries MySQL</p>
                                <p className="text-slate-300">4. Data returns as JSON to UI</p>
                                <p className="text-emerald-400 mt-4 italic font-bold">Result: Persistent Dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "04",
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
