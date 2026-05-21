'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import PresentationMode from './PresentationMode';

export default function Materi17({ materi }) {
    const [isPresenting, setIsPresenting] = useState(false);
    const [startSlide, setStartSlide] = useState(0);

    const openPresentation = (index) => {
        setStartSlide(index);
        setIsPresenting(true);
        if (typeof document !== 'undefined' && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
    };

    const authFlow = [
        { step: '1', title: 'Register', desc: 'User mendaftar via Email/Password.' },
        { step: '2', title: 'Confirm', desc: 'User verifikasi email (opsional).' },
        { step: '3', title: 'Session', desc: 'Supabase simpan session di Cookies.' },
        { step: '4', title: 'Access', desc: 'Middleware cek cookie sebelum render.' },
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "Sprint 03: Security First",
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
                            SECURE YOUR<br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-600 underline decoration-violet-500/20 underline-offset-8">APPLICATION</span>
                        </h2>
                        <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                            Siapa saja bisa melihat, tapi hanya <span className="text-violet-400 font-bold">Member</span> yang bisa berkontribusi. Hari ini kita bangun sistem Autentikasi dan Proteksi Route.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2">
                            <h4 className="text-xs font-black text-violet-500 uppercase tracking-widest">Kunci Keamanan:</h4>
                            <p className="text-sm text-slate-400 italic font-medium">&quot;Supabase Auth + Next.js Middleware. Kombinasi maut untuk mengamankan data user.&quot;</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center flex items-center justify-center gap-6">
                            <div className="text-4xl text-violet-500">🔒</div>
                            <div className="text-4xl text-fuchsia-500">🔑</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "The Auth Flow",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-500 text-2xl font-black">1</div>
                        <h3 className="text-4xl font-black italic text-white">Konsep Autentikasi</h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        {authFlow.map((f, i) => (
                            <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-3xl space-y-3 relative group">
                                <div className="text-3xl font-black text-white/10 group-hover:text-violet-500/20 transition-colors absolute top-4 right-4">{f.step}</div>
                                <h5 className="font-bold text-violet-400 italic">{f.title}</h5>
                                <p className="text-[10px] text-slate-400 leading-relaxed italic">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-violet-500/5 border border-violet-500/20 rounded-3xl">
                        <p className="text-xs text-slate-300 italic">Di Next.js App Router, kita menggunakan <code className="text-violet-400">@supabase/ssr</code> untuk handle session baik di Server maupun Client side secara otomatis.</p>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Middleware Gatekeeper",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4 text-center justify-center">
                         <h3 className="text-4xl font-black italic text-white text-center">Middleware: Si Penjaga Pintu</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                            <p className="text-sm text-slate-300 italic">Middleware berjalan <strong>sebelum</strong> request sampai ke halaman. Ini tempat terbaik untuk cek apakah user sudah login atau belum.</p>
                            <div className="p-6 bg-black/40 border border-white/10 rounded-[2.5rem] space-y-4">
                                <h6 className="text-[10px] font-black text-violet-500 uppercase">Logic Dasar:</h6>
                                <div className="space-y-2 text-xs italic text-slate-400">
                                    <p>1. Ambil session dari cookie.</p>
                                    <p>2. Jika ke <code className="text-violet-400">/submit</code> & session kosong?</p>
                                    <p>3. Redirect ke <code className="text-violet-400">/login</code>.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 glass rounded-[3rem] border border-white/10 space-y-4">
                             <h5 className="text-xs font-black text-white uppercase italic">File: middleware.ts</h5>
                             <div className="p-4 bg-black/60 rounded-2xl text-[10px] font-mono text-slate-400 overflow-x-auto leading-relaxed">
{`export async function middleware(req) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user && req.nextUrl.pathname === '/submit') {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}`}
                             </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Profiles & Triggers",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-500 text-2xl font-black italic">!</div>
                        <h3 className="text-4xl font-black italic text-white">Database Magic</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <p className="text-sm text-slate-300 italic">Supabase memisahkan data Auth (email/pass) dengan data Profil (nama/bio). Kita gunakan <strong>SQL Trigger</strong> agar setiap kali ada user baru, baris profil otomatis terbuat.</p>
                            <div className="p-6 bg-violet-500/10 border border-violet-500/20 rounded-3xl">
                                <p className="text-[10px] text-violet-400 font-black uppercase mb-2">Benefit:</p>
                                <p className="text-xs text-slate-400 italic">Gak perlu insert manual ke tabel profil setiap kali register. Database yang kerjakan buat kita!</p>
                            </div>
                        </div>
                        <div className="p-8 bg-black/40 rounded-[3rem] border border-white/5 space-y-4 italic relative group">
                             <div className="absolute top-0 right-0 p-4 text-violet-500/10 text-3xl font-black">AI</div>
                             <h5 className="text-xs font-black text-violet-500 uppercase tracking-widest">PTCF Prompt:</h5>
                             <p className="text-[10px] text-slate-400 leading-relaxed">
                                &quot;Sebagai <strong>PostgreSQL Expert</strong> [P], tuliskan <strong>SQL Script</strong> [T] untuk membuat trigger function yang otomatis menyalin `id` dan `email` user baru dari schema `auth.users` ke tabel `public.profiles` [C]. Sertakan penjelasan langkah-langkahnya [F].&quot;
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
                            <h4 className="font-black text-3xl uppercase tracking-tighter italic text-white">CHALLENGE SPRINT 03</h4>
                            <p className="text-xs text-orange-400 font-black uppercase tracking-widest mt-1">Due: Akhir Sesi Ini</p>
                         </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h5 className="text-white font-bold italic border-l-4 border-orange-500 pl-4">To-Do List:</h5>
                            <ul className="space-y-4">
                                {[
                                    'Aktifkan Email Auth di Dashboard Supabase',
                                    'Buat Halaman /login dan /register dengan form',
                                    'Implementasi Register & Login via Supabase Auth',
                                    'Setup middleware.ts untuk proteksi halaman /submit',
                                    'Buat tabel profiles & jalankan SQL Trigger via SQL Editor'
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start text-slate-300 group text-sm italic">
                                        <span className="text-orange-500 font-black">{i+1}.</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-violet-500/5 rounded-[3rem] border border-violet-500/20 space-y-6 flex flex-col justify-center text-center">
                             <div className="text-4xl text-violet-500">🔒</div>
                             <h5 className="text-white font-black italic">LOCK & LOAD</h5>
                             <p className="text-[10px] text-slate-400 italic">User Anda sekarang aman. Data mereka terlindungi oleh sistem kelas dunia.</p>
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
                        <p className="text-slate-300 text-2xl font-light italic">&quot;User sudah aman. Sekarang saatnya visualkan kreativitas mereka dengan gambar.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
                    <div className="pt-12">
                         <div className="p-10 bg-orange-500/10 border border-orange-500/20 rounded-[3rem] inline-block">
                             <p className="text-xs text-orange-500 font-black uppercase tracking-widest mb-2">Up Next:</p>
                             <h4 className="text-2xl font-black text-white italic">M18: Cloudinary — Upload & Image Management</h4>
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
                        <span className="material-symbols-outlined text-orange-500">lock</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none italic">Bootcamp Mode</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 italic">M17 — Security & Auth</p>
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
