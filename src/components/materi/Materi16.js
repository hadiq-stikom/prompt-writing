'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import PresentationMode from './PresentationMode';

export default function Materi16({ materi }) {
    const [isPresenting, setIsPresenting] = useState(false);
    const [startSlide, setStartSlide] = useState(0);

    const openPresentation = (index) => {
        setStartSlide(index);
        setIsPresenting(true);
        if (typeof document !== 'undefined' && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
    };

    const schemaColumns = [
        { table: 'prompts', column: 'id', type: 'uuid', desc: 'Primary Key' },
        { table: 'prompts', column: 'title', type: 'text', desc: 'Judul Prompt' },
        { table: 'prompts', column: 'content', type: 'text', desc: 'Isi Prompt Utama' },
        { table: 'prompts', column: 'ai_tool', type: 'text', desc: 'Alat (ChatGPT, Midjourney, dll)' },
        { table: 'prompts', column: 'user_id', type: 'uuid', desc: 'Foreign Key ke Profiles' },
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "Sprint 02: Giving a Brain",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-black rounded-full shadow-lg shadow-orange-500/20 uppercase tracking-widest flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">local_fire_department</span> Bonus Workshop
                        </span>
                        <div className="h-px flex-grow bg-white/10"></div>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-6xl font-black text-white leading-tight italic tracking-tighter">
                            CONNECTING THE<br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-600 underline decoration-teal-500/20 underline-offset-8">DATABASE</span>
                        </h2>
                        <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                            Tanpa database, aplikasi Anda hanyalah poster digital. Hari ini kita beri PromptHub sebuah <span className="text-teal-400">Ingatan Permanen</span> menggunakan Supabase.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2">
                            <h4 className="text-xs font-black text-teal-500 uppercase tracking-widest">Alat Tempur:</h4>
                            <p className="text-sm text-slate-400 italic font-medium">&quot;Supabase (PostgreSQL) — Database tercepat dan paling friendly untuk developer Next.js.&quot;</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2 text-center flex flex-col justify-center">
                            <div className="flex justify-center gap-4 text-3xl">⚡ 🔗 📁</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Supabase Client Setup",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 text-2xl font-black">1</div>
                        <h3 className="text-4xl font-black italic text-white">Environment & Connection</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                            <div className="p-8 bg-slate-900 border border-white/5 rounded-[3rem] space-y-4">
                                <p className="text-xs text-slate-300 italic">Install Supabase client library:</p>
                                <div className="p-4 bg-black rounded-2xl border border-teal-500/30">
                                    <pre className="text-xs font-mono text-teal-400">
                                        {`npm install @supabase/supabase-js`}
                                    </pre>
                                </div>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2">
                                <h5 className="text-[10px] font-black text-teal-500 uppercase italic">Kenapa Env Variables?</h5>
                                <p className="text-[11px] text-slate-400 leading-relaxed italic">Jangan pernah simpan API Key di kode. Gunakan file <code className="text-teal-400">.env.local</code> agar kunci rumah Anda tetap rahasia.</p>
                            </div>
                        </div>

                        <div className="p-8 glass rounded-[3rem] border border-white/10 space-y-6">
                            <h5 className="text-xs font-black text-white uppercase tracking-widest italic">File: lib/supabase.ts</h5>
                            <div className="p-4 bg-black/60 rounded-2xl border border-white/5">
                                <pre className="text-[10px] font-mono text-slate-400 leading-relaxed overflow-x-auto">
{`import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Schema Design",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4 text-center justify-center">
                         <h3 className="text-4xl font-black italic text-white text-center">Desain Tabel</h3>
                    </div>
                    
                    <div className="p-8 bg-slate-900 border border-white/5 rounded-[4rem] overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 text-teal-500/10 text-8xl font-black italic">DATA</div>
                        <div className="relative z-10 space-y-6">
                            <p className="text-sm text-slate-400 italic">Tabel Utama kita: <code className="text-teal-400">prompts</code></p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs font-mono border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 text-teal-500">
                                            <th className="pb-3 px-2">Column</th>
                                            <th className="pb-3 px-2">Type</th>
                                            <th className="pb-3 px-2">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-400">
                                        {schemaColumns.map((col, i) => (
                                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                <td className="py-3 px-2 text-white">{col.column}</td>
                                                <td className="py-3 px-2">{col.type}</td>
                                                <td className="py-3 px-2 italic text-[10px]">{col.desc}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Fetching Data (Server)",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 text-2xl font-black italic">?</div>
                        <h3 className="text-4xl font-black italic text-white">The Power of SSR</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <p className="text-sm text-slate-300 italic">Karena PromptHub menggunakan <span className="text-teal-400 font-bold">Server Components</span>, kita bisa ambil data langsung sebelum halaman sampai ke user. Tidak ada &quot;Loading Spinner&quot; yang mengganggu!</p>
                            <div className="p-6 bg-teal-500/10 border border-teal-500/20 rounded-3xl space-y-3">
                                <h6 className="text-[10px] font-black text-teal-500 uppercase tracking-widest">Contoh Query:</h6>
                                <pre className="text-[10px] font-mono text-slate-300 italic">
{`const { data, error } = await supabase
  .from('prompts')
  .select('*')`}
                                </pre>
                            </div>
                        </div>
                        <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-6 italic relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-4 text-teal-500/20 text-3xl font-black">AI</div>
                             <h5 className="text-xs font-black text-teal-500 uppercase tracking-widest">PTCF Prompt:</h5>
                             <p className="text-[10px] text-slate-400 leading-relaxed">
                                &quot;Sebagai <strong>Supabase Expert</strong> [P], bantu saya buat <strong>Fungsi Async</strong> [T] untuk mengambil data prompt berdasarkan kategori tertentu [C]. Sertakan error handling dan kembalikan data dalam <strong>TypeScript Interface</strong> [F].&quot;
                             </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "WORKSHOP",
            title: "Workshop Challenge",
            content: (
                <div className="p-12 glass border border-orange-500/20 rounded-[4rem] space-y-10 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-8">
                         <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-orange-500/30">🔥</div>
                         <div>
                            <h4 className="font-black text-3xl uppercase tracking-tighter italic text-white">CHALLENGE SPRINT 02</h4>
                            <p className="text-xs text-orange-400 font-black uppercase tracking-widest mt-1">Due: Akhir Sesi Ini</p>
                         </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h5 className="text-white font-bold italic border-l-4 border-orange-500 pl-4">To-Do List:</h5>
                            <ul className="space-y-4">
                                {[
                                    'Buat Project baru di Dashboard Supabase',
                                    'Buat Tabel "prompts" dengan kolom yang sesuai',
                                    'Insert 3-5 data contoh secara manual di SQL Editor',
                                    'Setup lib/supabase.ts di project Next.js',
                                    'Fetch data di halaman /browse dan tampilkan judul prompt'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start text-slate-300 group text-sm italic">
                                        <span className="text-orange-500 font-black">{i+1}.</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-teal-500/5 rounded-[3rem] border border-teal-500/20 space-y-6 flex flex-col justify-center text-center">
                             <div className="text-4xl">🚀</div>
                             <h5 className="text-white font-black italic">READY FOR THE NEXT LEVEL?</h5>
                             <p className="text-[10px] text-slate-400 italic">Pastikan data tampil di terminal atau browser sebelum sesi berakhir.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "Next Mission",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-6xl font-black text-white italic tracking-tighter underline decoration-orange-500/20 underline-offset-12">NEXT MISSION</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;Data sudah mengalir. Sekarang, saatnya menjaga keamanan dan akses user.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
                    <div className="pt-12">
                         <div className="p-10 bg-orange-500/10 border border-orange-500/20 rounded-[3rem] inline-block">
                             <p className="text-xs text-orange-500 font-black uppercase tracking-widest mb-2">Up Next:</p>
                             <h4 className="text-2xl font-black text-white italic">M17: Supabase Auth & Protected Routes</h4>
                         </div>
                    </div>
                </div>
            )
        }
    ];

    const sectionsData = getSections();

    return (
        <div className="space-y-32 pb-20 text-white">
            <div className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/10 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-orange-500">database</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none italic">Bootcamp Mode</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 italic">M16 — Data & Logic</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-orange-500/20"
                >
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                    Launch Presentation
                </button>
            </div>

            {sectionsData.map((section, index) => (
                <div key={section.id}>
                    <ScrollReveal>
                        <section className="space-y-8 group/section relative">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-orange-500 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-orange-500"></span>
                                    {section.id}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-orange-500/20 hover:text-orange-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
                                >
                                    <span className="material-symbols-outlined text-sm">visibility</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest italic tracking-tighter">Present</span>
                                </button>
                            </div>
                            {section.content}
                        </section>
                    </ScrollReveal>
                    {index < sectionsData.length - 1 && (
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-orange-500/20 to-transparent mt-24" />
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
