'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi7({ materi }) {
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

    const tools = [
        {
            name: "Midjourney",
            type: "Profesional / Estetik",
            pros: "Kualitas artistik terbaik, mampu menangani tekstur dan pencahayaan yang sangat kompleks.",
            cons: "Hanya bisa diakses via Discord, berbayar (tidak ada trial gratis).",
            suitability: "Sangat Cocok untuk Branding Kelas Atas & Seni Digital."
        },
        {
            name: "DALL-E 3 (via ChatGPT/Bing)",
            type: "Penguasaan Semantik",
            pros: "Sangat patuh pada instruksi teks yang panjang, mampu merender teks dalam gambar dengan cukup akurat.",
            cons: "Kontrol gaya visual terkadang kurang fleksibel dibanding Midjourney.",
            suitability: "Sangat Cocok untuk Brainstorming Konsep & Aset UI."
        },
        {
            name: "Stable Diffusion (XL/3)",
            type: "Open Source / Kontrol Total",
            pros: "Kontrol penuh (via ControlNet), bisa diinstal lokal, gratis tanpa batas.",
            cons: "Membutuhkan spesifikasi komputer tinggi dan kurva belajar yang cukup curam.",
            suitability: "Sangat Cocok untuk Alur Kerja Lanjutan & Rekayasa Gambar Presisi."
        },
        {
            name: "Adobe Firefly",
            type: "Korporat / Legal",
            pros: "Integrasi langsung dengan Photoshop (Generative Fill), aman secara hak cipta untuk penggunaan komersial.",
            cons: "Kreativitas gaya terkadang dibatasi oleh filter keamanan yang ketat.",
            suitability: "Sangat Cocok untuk Desainer Profesional & Iklan Komersial."
        },
        {
            name: "Canva Magic Media",
            type: "Ramah Pemula",
            pros: "Sangat mudah digunakan, langsung terintegrasi dengan ribuan *layout* desain Canva.",
            cons: "Detail dan keunikan visual gambar tidak sekuat Midjourney atau SD.",
            suitability: "Sangat Cocok untuk Konten Media Sosial yang Cepat."
        }
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "The Visual Storyteller",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-4 text-pink-500 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-pink-500"></span> Pertemuan 7: Prompt Desain Grafis
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-pink-500/20 underline-offset-16 italic tracking-tight">The Visual Storyteller</h2>
                    <p className="text-xl text-slate-200 leading-relaxed text-justify font-medium">
                        Desain grafis bukan lagi sekadar keterampilan teknis perangkat lunak, melainkan kemampuan untuk <strong>Memvisualisasikan Imajinasi melalui Kata</strong>. Di sini, penguasaan bahasa visual menentukan kualitas karya Anda.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs font-bold text-pink-300">Generative Art</span>
                        <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs font-bold text-pink-300">Komposisi Visual</span>
                        <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs font-bold text-pink-300">Iterasi Kreatif</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Vokabular Visual",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest">01. Vokabular Visual (Fundamental)</h3>
                            <p className="text-2xl font-bold">Mendikte Seni dengan Presisi Teoretis</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '💡', title: 'Lighting', desc: 'Cinematic, Soft Studio, Golden Hour.', prompt: '"Pencahayaan volumetrik, cahaya neon siber."' },
                            { icon: '📐', title: 'Komposisi', desc: "Bird's eye, Macro, Low angle.", prompt: '"Sudut pandang mata burung, makro f/1.8."' },
                            { icon: '🎨', title: 'Gaya Seni', desc: 'Bauhaus, Brutalisme, Glassmorphism.', prompt: '"Gaya Bauhaus, siberpunk futuristik."' }
                        ].map((item, i) => (
                            <div key={i} className="p-6 glass rounded-3xl border border-white/5 space-y-4 bg-white/2">
                                <div className="text-3xl">{item.icon}</div>
                                <h4 className="font-bold text-lg uppercase">{item.title}</h4>
                                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                                <p className="text-[10px] font-mono text-pink-300 italic">{item.prompt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "02-CASE-1-2",
            title: "Studi Kasus: Logo & Poster",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest">02. Studi Kasus (Logo & Poster)</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[3rem] space-y-6 relative overflow-hidden group">
                            <h5 className="text-[10px] font-black text-pink-400 uppercase tracking-widest">Corporate Identity</h5>
                            <h4 className="text-2xl font-bold italic text-white">Logo Startup Teknologi</h4>
                            <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-pink-500 pl-4">
                                &quot;Sbg Desainer Logo Profesional, buat logo minimalis untuk &apos;Stellar&apos; (startup eksplorasi ruang angkasa). Gabungkan simbol kompas dan bintang, gaya vektor datar (*flat design*)...&quot;
                            </p>
                        </div>
                        <div className="p-8 glass border border-white/10 rounded-[3rem] space-y-6 bg-white/2">
                            <h5 className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Event Marketing</h5>
                            <h4 className="text-2xl font-bold italic text-white">Poster Festival Musik Retro</h4>
                            <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-purple-500 pl-4">
                                &quot;Poster konser festival musik 80-an, gaya *Vaporwave*, warna neon pink dan ungu, tekstur kaset lama, tipografi tebal bergaya chrome...&quot;
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02-CASE-3-4",
            title: "Studi Kasus: Ads & 3D",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest">02. Studi Kasus (Social Media & 3D)</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 glass border border-white/10 rounded-[3rem] space-y-6 bg-white/2">
                            <h5 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Social Media Ads</h5>
                            <h4 className="text-2xl font-bold italic text-white">Iklan Instagram Produk Mewah</h4>
                            <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-4">
                                &quot;Foto sinematik botol parfum kaca mewah di atas permukaan marmer, dikelilingi bunga liar estetik, pencahayaan studio lembut...&quot;
                            </p>
                        </div>
                        <div className="p-8 bg-slate-900 border border-white/10 rounded-[3rem] space-y-6">
                            <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Character Assets</h5>
                            <h4 className="text-2xl font-bold italic text-white">Karakter 3D Claymorphism</h4>
                            <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-emerald-500 pl-4">
                                &quot;Karakter astronot kecil yang imut, gaya klaymorfisme (*claymorphism*), render 3D menggunakan Octane, warna-warna pastel...&quot;
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03-TOOLS-1",
            title: "AI Tools Review (Part 1)",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest text-center">AI Graphic Tools Review 2024 (1/2)</h3>
                    <div className="grid gap-6">
                        {tools.slice(0, 2).map((tool, i) => (
                            <div key={i} className="p-6 glass border border-white/5 rounded-[2.5rem] bg-white/2 grid md:grid-cols-4 gap-6 items-center">
                                <div>
                                    <h5 className="text-xl font-bold text-white">{tool.name}</h5>
                                    <p className="text-[10px] text-pink-500 font-black uppercase tracking-widest">{tool.type}</p>
                                </div>
                                <div className="md:col-span-2 space-y-1">
                                    <p className="text-[11px] leading-relaxed"><strong className="text-emerald-400 text-[10px]">PROS:</strong> {tool.pros}</p>
                                    <p className="text-[11px] leading-relaxed"><strong className="text-red-400 text-[10px]">CONS:</strong> {tool.cons}</p>
                                </div>
                                <div className="p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                                    <p className="text-[10px] text-slate-200 font-medium">{tool.suitability}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "03-TOOLS-2",
            title: "AI Tools Review (Part 2)",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest text-center">AI Graphic Tools Review 2024 (2/2)</h3>
                    <div className="grid gap-4">
                        {tools.slice(2).map((tool, i) => (
                            <div key={i} className="p-4 glass border border-white/5 rounded-[2rem] bg-white/2 grid md:grid-cols-4 gap-6 items-center">
                                <div>
                                    <h5 className="text-lg font-bold text-white">{tool.name}</h5>
                                    <p className="text-[9px] text-pink-500 font-black uppercase mt-1">{tool.type}</p>
                                </div>
                                <div className="md:col-span-2 space-y-1">
                                    <p className="text-[10px] leading-relaxed"><strong className="text-emerald-400 text-[9px]">PROS:</strong> {tool.pros}</p>
                                    <p className="text-[10px] leading-relaxed"><strong className="text-red-400 text-[9px]">CONS:</strong> {tool.cons}</p>
                                </div>
                                <div className="p-3 bg-slate-950/50 rounded-xl border border-white/5">
                                    <p className="text-[9px] text-slate-200">{tool.suitability}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "RECOMMENDATION",
            title: "Rekomendasi Utama",
            content: (
                <div className="p-12 rounded-[4rem] bg-linear-to-br from-pink-500 to-indigo-600 shadow-2xl relative overflow-hidden text-left">
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-3xl m-1 rounded-[3.8rem]" />
                    <div className="relative z-10 flex items-center gap-12">
                        <div className="text-8xl">💡</div>
                        <div className="space-y-6">
                            <h4 className="text-3xl font-bold italic">Rekomendasi untuk Kuliah Ini</h4>
                            <p className="text-slate-200 leading-relaxed text-lg">
                                Gunakan <strong>DALL-E 3 (via Bing Image Creator)</strong> untuk eksplorasi konsep cepat (gratis & paham Bahasa Indonesia). Untuk hasil <strong>Portfolio Profesional</strong>, <strong>Midjourney</strong> tetap menjadi standar emas industri saat ini.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "04",
            title: "Advanced Controls",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest text-center">Advanced Controls: Filtering & Dimensions</h3>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-8 glass border border-white/10 rounded-[3rem] space-y-6 bg-white/2 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-red-400/10 text-red-400 rounded-xl flex items-center justify-center font-bold">🚫</div>
                                <h4 className="text-xl font-bold italic">Negative Prompting</h4>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed">Membersihkan gambar dari elemen teks berantakan atau kualitas rendah.</p>
                            <p className="text-xs font-mono text-red-300 italic p-4 bg-red-400/5 rounded-2xl border border-red-400/10">
                                &quot;--tidak ada teks, tanpa watermark, gambar buram, cacat geometri...&quot;
                            </p>
                        </div>
                        <div className="p-8 glass border border-white/10 rounded-[3rem] space-y-6 bg-white/2 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-400/10 text-blue-400 rounded-xl flex items-center justify-center font-bold">📐</div>
                                <h4 className="text-xl font-bold italic">Rasio Aspek (AR)</h4>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed">Menyesuaikan bentuk keluaran gambar sesuai media publikasi target.</p>
                            <p className="text-xs font-mono text-blue-300 italic p-4 bg-blue-400/5 rounded-2xl border border-blue-400/10">
                                &quot;--ar 16:9 (Lansekap) | --ar 4:5 (Feed IG) | --ar 9:16 (Tik-Tok)&quot;
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "CHALLENGE",
            title: "Creative Challenge",
            content: (
                <div className="p-12 glass border border-pink-500/20 rounded-[4rem] space-y-8 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                        <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-lg shadow-pink-500/30">C1</div>
                        <div>
                            <h4 className="font-bold text-2xl uppercase tracking-tighter italic text-white underline decoration-pink-500/30">Kampanye: &quot;Nebula Watch&quot;</h4>
                            <p className="text-xs text-pink-400 font-black uppercase tracking-widest mt-1">High-End Luxury Smartwatch from Meteorites</p>
                        </div>
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed italic text-justify">
                        &quot;Tuliskan 3 prompt PCTF: 1. Foto Makro detail material meteorit, 2. Iklan display majalah fashion, 3. Pose gaya hidup sinematik astronot.&quot;
                    </p>
                    <div className="flex justify-end pt-4">
                        <div className="px-10 py-5 bg-pink-500 text-white rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer shadow-xl shadow-pink-500/20">Mulai Desain Sekarang</div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "The Visionary",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-white italic underline underline-offset-12 decoration-pink-500/20 capitalize tracking-tight">The Visionary Mind</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;Your creativity is limited only by your vocabulary.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-pink-500 mx-auto rounded-full" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">Precision in visual language is the soul of modern graphics.</p>
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
                    <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-pink-500">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-pink-500/20"
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
                                <div className="flex items-center gap-4 text-pink-500 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-pink-500"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Selesai' :
                                            `Bagian ${section.id.split('-')[1] || section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-pink-500/20 hover:text-pink-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-pink-500/20 to-transparent mt-24" />
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
