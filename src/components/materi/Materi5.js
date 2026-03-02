'use client';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

export default function Materi5({ materi }) {
    return (
        <div className="space-y-32 pb-20 text-white">
            {/* 0. INTRO: THE PROJECT */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-primary"></span> Pertemuan 5: Frontend First
                    </div>
                    <div className="max-w-4xl space-y-6">
                        <h2 className="text-5xl font-bold text-white leading-tight underline decoration-primary/20 underline-offset-16 italic tracking-tight">Membangun "Wajah" Aplikasi Inventaris</h2>
                        <p className="text-xl text-slate-400 leading-relaxed text-justify font-medium">
                            Fokus sesi ini adalah membangun antarmuka fungsional menggunakan <strong>Antigravity (Agentic AI)</strong>. Meskipun AI ini sangat cerdas, penggunaan struktur <strong>PCTF</strong> tetap krusial agar hasil kodenya profesional, rapi, dan sesuai standar industri.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400">Next.js (App Router)</span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400">Tailwind CSS</span>
                            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400">TypeScript</span>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 1. SCAFFOLDING & SETUP */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex justify-between items-end">
                        <div className="px-8 py-4 glass rounded-full border border-white/10 inline-block">
                            <h3 className="text-primary font-bold text-xs uppercase tracking-widest">01. Scaffolding & Setup (40 Menit)</h3>
                        </div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Goal: localhost:3000 online</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-slate-400 leading-relaxed text-justify">
                                Memulai dengan proyek bersih adalah langkah fundamental. Kita akan menyiapkan struktur dasar aplikasi termasuk Sidebar dan Navbar untuk navigasi dashboard.
                            </p>
                            <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-4">
                                <h5 className="text-xs font-bold text-primary uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                                <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                                    "Sebagai Senior Frontend Dev (Persona), buat proyek Next.js baru dengan App Router & Tailwind (Task) untuk sistem Inventaris (Context). Pastikan struktur folder rapi di direktori src/ dan gunakan tema dark premium (Format)."
                                </p>
                            </div>
                        </div>

                        <div className="p-8 glass rounded-[2.5rem] border border-white/10 space-y-6 bg-slate-900/50 flex flex-col justify-center">
                            <h5 className="text-xs font-black uppercase tracking-widest text-slate-500">Checklist Setup:</h5>
                            <ul className="space-y-4">
                                {[
                                    'Struktur folder App Router terbentuk',
                                    'Konfigurasi Tailwind CSS aktif',
                                    'Sidebar & Navbar muncul di browser',
                                    'Tidak ada error saat npm run dev'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                                        <span className="text-primary">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 2. UI COMPONENTS & MOCK DATA */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex justify-between items-end">
                        <div className="px-8 py-4 glass rounded-full border border-white/10 inline-block">
                            <h3 className="text-primary font-bold text-xs uppercase tracking-widest">02. UI Components & Mock Data (50 Menit)</h3>
                        </div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Goal: Visualizing Functional Needs</span>
                    </div>

                    <div className="space-y-8">
                        <p className="text-slate-400 max-w-3xl">Langkah ini mengubah kebutuhan fungsional menjadi komponen visual yang nyata menggunakan data dummy agar kita bisa melihat *feel* aplikasinya secara instan.</p>

                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[3rem] text-white space-y-6 shadow-2xl group hover:border-primary/40 transition-all">
                            <h5 className="text-xs font-bold text-primary uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                            <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                                "Definisikan interface Product di lib/types.ts (id, name, sku, price, stock). Kemudian, buat komponen ProductTable.tsx dan ProductForm.tsx yang responsif. Gunakan styling Tailwind yang modern dengan efek hover pada baris tabel (Format)."
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                                <div className="text-center p-4 rounded-2xl bg-white/2">
                                    <p className="text-xs font-bold text-slate-400">types.ts</p>
                                    <p className="text-[10px] text-slate-600 mt-1 uppercase">Contract Data</p>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-white/2">
                                    <p className="text-xs font-bold text-slate-400">ProductTable.tsx</p>
                                    <p className="text-[10px] text-slate-600 mt-1 uppercase">Read Operation</p>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-white/2">
                                    <p className="text-xs font-bold text-slate-400">ProductForm.tsx</p>
                                    <p className="text-[10px] text-slate-600 mt-1 uppercase">Create Operation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 3. CLIENT-SIDE INTERACTION */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex justify-between items-end">
                        <div className="px-8 py-4 glass rounded-full border border-white/10 inline-block">
                            <h3 className="text-primary font-bold text-xs uppercase tracking-widest">03. Client-Side Interaction (30 Menit)</h3>
                        </div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Goal: Real-time Memory Management</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-slate-400 leading-relaxed text-justify">
                                Kita menghubungkan Form ke Tabel di memori browser menggunakan <strong>React State</strong>. Ini memungkinkan interaksi tanpa harus menunggu database di sesi berikutnya.
                            </p>
                            <div className="p-8 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl space-y-4">
                                <h5 className="text-xs font-bold text-primary uppercase tracking-widest">🚀 Agent-Optimized Prompt (PCTF):</h5>
                                <p className="text-sm font-mono text-slate-200 leading-relaxed italic">
                                    "Hubungkan Form dan Tabel di app/inventaris/page.tsx menggunakan React State. Pastikan saat form di-submit, data baru ditambahkan ke array state dan tabel melakukan render ulang secara otomatis (Task)."
                                </p>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-950/50 rounded-4xl border border-white/5 space-y-4 font-mono text-xs">
                            <p className="text-slate-500">{"// Apa yang dipelajari?"}</p>
                            <p className="text-emerald-400">1. useState untuk Array of Objects</p>
                            <p className="text-emerald-400">2. Event Handling pada Form Submit</p>
                            <p className="text-emerald-400">3. Spread Operator untuk update state</p>
                            <p className="text-emerald-400">4. Conditional Rendering</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 4. TESTING & TROUBLESHOOTING */}
            <ScrollReveal>
                <section className="bg-slate-900 border border-white/5 rounded-[4rem] p-16 text-white overflow-hidden relative shadow-2xl">
                    <div className="absolute -bottom-12 -right-12 p-12 opacity-5 pointer-events-none text-[12rem] font-black italic">DEBUG</div>
                    <div className="relative z-10 space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold italic underline underline-offset-12 decoration-primary/50 flex items-center gap-4">
                                🔍 Sesi Khusus: Testing & Troubleshooting <span className="text-sm font-normal text-slate-500 no-underline">(30 Menit)</span>
                            </h3>
                            <p className="text-slate-400 text-lg">Memastikan setiap baris kode berjalan sesuai ekspektasi adalah ciri developer profesional.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Testing */}
                            <div className="p-8 glass border border-white/10 rounded-4xl space-y-6 group hover:border-emerald-500/30 transition-all">
                                <h5 className="font-bold text-emerald-400 flex items-center gap-2">
                                    <span>🧪</span> Testing Prompt
                                </h5>
                                <p className="text-xs text-slate-400 leading-relaxed italic">
                                    "Buat instruksi manual atau script kecil untuk memastikan: 1. Apakah data baru benar-benar masuk ke state tabel? 2. Apakah tombol 'Hapus' berfungsi menghapus baris dari state?"
                                </p>
                            </div>

                            {/* Troubleshooting */}
                            <div className="p-8 glass border border-white/10 rounded-4xl space-y-6 group hover:border-red-500/30 transition-all">
                                <h5 className="font-bold text-red-400 flex items-center gap-2">
                                    <span>🔧</span> Troubleshooting Prompt
                                </h5>
                                <p className="text-xs text-slate-400 leading-relaxed italic">
                                    "Tabel saya tidak muncul meski data dummy sudah ada. Baca @ProductTable.tsx dan @page.tsx. Cek apakah ada kesalahan pada map function atau key prop. Perbaiki kodenya."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* FINAL CHALLENGE */}
            <ScrollReveal>
                <section className="text-center max-w-4xl mx-auto py-24 space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold dark:text-white italic underline underline-offset-12 decoration-primary/20 capitalize tracking-tight">Step into the Next Phase</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Setelah wajah aplikasi selesai, saatnya kita memberikan <strong>Otak</strong> dan <strong>Ingatan</strong> permanen di Pertemuan berikutnya.</p>
                    </div>

                    <div className="flex justify-center gap-6">
                        <div className="px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-primary/20 hover:shadow-lg transition-all cursor-pointer">Lanjut ke Backend & Database →</div>
                    </div>

                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">Frontend excellence is where aesthetics meets performance through clear instructions.</p>
                </section>
            </ScrollReveal>
        </div>
    );
}
