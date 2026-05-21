'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import PresentationMode from './PresentationMode';

export default function Materi18({ materi }) {
    const [isPresenting, setIsPresenting] = useState(false);
    const [startSlide, setStartSlide] = useState(0);

    const openPresentation = (index) => {
        setStartSlide(index);
        setIsPresenting(true);
        if (typeof document !== 'undefined' && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
    };

    const uploadSteps = [
        { title: 'Selection', desc: 'User pilih gambar dari galeri/kamera.' },
        { title: 'Upload', desc: 'Kirim file ke Cloudinary via API.' },
        { title: 'Storage', desc: 'Simpan URL dari Cloudinary ke Supabase.' },
        { title: 'Rendering', desc: 'Tampilkan gambar di UI dengan Next Image.' },
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "Sprint 04: Visualize Your Prompts",
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
                            IMAGE ASSETS<br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-600 underline decoration-amber-500/20 underline-offset-8">MANAGEMENT</span>
                        </h2>
                        <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                            Sebuah prompt gambar tanpa contoh visualnya? Tidak berguna. Hari ini kita hubungkan PromptHub ke <span className="text-amber-400 font-bold">Cloudinary</span> untuk manajemen aset gambar profesional.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2">
                            <h4 className="text-xs font-black text-amber-500 uppercase tracking-widest">Kenapa Cloudinary?</h4>
                            <p className="text-sm text-slate-400 italic font-medium">&quot;Optimasi gambar otomatis. Tidak perlu resize manual. Cukup ganti URL, gambar berubah.&quot;</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center flex items-center justify-center gap-6">
                            <div className="text-4xl text-amber-500">📸</div>
                            <div className="text-4xl text-orange-500">☁️</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Cloudinary Setup",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 text-2xl font-black">1</div>
                        <h3 className="text-4xl font-black italic text-white">The Cloud Connection</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                            <div className="p-8 bg-slate-900 border border-white/5 rounded-[3rem] space-y-4">
                                <p className="text-xs text-slate-300 italic">Gunakan Unsigned Upload untuk kemudahan setup awal di PromptHub:</p>
                                <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl">
                                    <h6 className="text-[10px] font-black text-amber-500 uppercase">Requirement:</h6>
                                    <ul className="text-[10px] text-slate-400 italic space-y-1 mt-2">
                                        <li>• Cloud Name</li>
                                        <li>• Upload Preset (Unsigned)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 glass rounded-[3rem] border border-white/10 space-y-4">
                             <h5 className="text-xs font-black text-white uppercase italic">Anatomi Upload URL:</h5>
                             <div className="p-4 bg-black/60 rounded-2xl text-[9px] font-mono text-slate-400 overflow-x-auto leading-relaxed">
{`https://api.cloudinary.com/v1_1/{cloud_name}/image/upload`}
                             </div>
                             <p className="text-[10px] text-slate-500 italic mt-4">Kirim data via <strong>FormData</strong> yang berisi file dan upload_preset.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Dynamic Transformations",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4 text-center justify-center">
                         <h3 className="text-4xl font-black italic text-white text-center">Auto-Optimization</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: 'Resize', param: 'w_300,h_200,c_fill', desc: 'Pas untuk Thumbnail' },
                            { title: 'Quality', param: 'q_auto,f_auto', desc: 'Performa Terbaik' },
                            { title: 'Effect', param: 'e_blur:200', desc: 'Background Aesthetic' },
                        ].map((t, i) => (
                            <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-3xl space-y-2 text-center group hover:border-amber-500/30 transition-all">
                                <h6 className="text-xs font-black text-amber-500 uppercase">{t.title}</h6>
                                <code className="text-[9px] bg-black px-2 py-1 rounded text-slate-400">{t.param}</code>
                                <p className="text-[9px] text-slate-500 italic">{t.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 italic text-center">
                        <p className="text-sm text-slate-300">&quot;Cukup tambahkan parameter tersebut di tengah URL Cloudinary Anda, dan server mereka akan melakukan render secara real-time.&quot;</p>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "PTCF for Upload Logic",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 text-2xl font-black italic">!</div>
                        <h3 className="text-4xl font-black italic text-white">Ask AI to Help</h3>
                    </div>

                    <div className="p-10 bg-slate-900 border border-white/5 rounded-[4rem] relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-8 text-amber-500/10 text-8xl font-black italic group-hover:text-amber-500/20 transition-all">AI</div>
                         <div className="relative z-10 space-y-6">
                            <h5 className="text-xs font-black text-amber-500 uppercase tracking-widest">PTCF Prompt:</h5>
                            <div className="bg-black/60 p-8 rounded-[2.5rem] border border-amber-500/20 italic">
                                <p className="text-[11px] text-slate-400 leading-relaxed">
                                    &quot;Sebagai <strong>Next.js Expert</strong> [P], bantu saya buat <strong>Fungsi Upload Client-Side</strong> [T] untuk mengirim file gambar ke Cloudinary tanpa server API [C]. Gunakan `FormData` dan kembalikan URL secure hasil upload [F].&quot;
                                </p>
                            </div>
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
                            <h4 className="font-black text-3xl uppercase tracking-tighter italic text-white">CHALLENGE SPRINT 04</h4>
                            <p className="text-xs text-orange-400 font-black uppercase tracking-widest mt-1">Due: Akhir Sesi Ini</p>
                         </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h5 className="text-white font-bold italic border-l-4 border-orange-500 pl-4">To-Do List:</h5>
                            <ul className="space-y-4">
                                {[
                                    'Setup Akun Cloudinary & Buat Unsigned Upload Preset',
                                    'Buat komponen "ImageUpload" yang bisa pilih file',
                                    'Implementasi Fetch ke Cloudinary API',
                                    'Simpan URL hasil upload ke Supabase (tabel prompts)',
                                    'Tampilkan gambar tersebut di halaman detail prompt'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start text-slate-300 group text-sm italic">
                                        <span className="text-orange-500 font-black">{i+1}.</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-amber-500/5 rounded-[3rem] border border-amber-500/20 space-y-6 flex flex-col justify-center text-center">
                             <div className="text-4xl">📸</div>
                             <h5 className="text-white font-black italic">PICTURE PERFECT</h5>
                             <p className="text-[10px] text-slate-400 italic">Prompt Anda sekarang punya bukti visual. Gak cuma teks, tapi nyata.</p>
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
                        <p className="text-slate-300 text-2xl font-light italic">&quot;Aplikasi sudah cantik dan lengkap. Sekarang saatnya buat dia terasa hidup secara Real-Time.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
                    <div className="pt-12">
                         <div className="p-10 bg-orange-500/10 border border-orange-500/20 rounded-[3rem] inline-block">
                             <p className="text-xs text-orange-500 font-black uppercase tracking-widest mb-2">Up Next:</p>
                             <h4 className="text-2xl font-black text-white italic">M19: Realtime & Row Level Security (RLS)</h4>
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
                        <span className="material-symbols-outlined text-orange-500">cloud_upload</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none italic">Bootcamp Mode</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 italic">M18 — Asset Management</p>
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
