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
                <div className="space-y-16 text-left">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest">01. Vokabular Visual (Fundamental)</h3>
                            <p className="text-4xl font-bold tracking-tight">Mendikte Seni dengan Presisi Teoretis</p>
                            <p className="text-slate-400 max-w-2xl text-sm">Memahami terminologi desain adalah kunci untuk berkomunikasi dengan AI. Berikut adalah tiga pilar utama yang harus Anda kuasai.</p>
                        </div>
                    </div>

                    <div className="grid gap-16">
                        {/* Lighting Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-yellow-500/20">💡</div>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase tracking-tight text-white">1. Lighting (Pencahayaan)</h4>
                                    <p className="text-[10px] text-yellow-500/70 font-black uppercase tracking-widest">Atmosphere & Mood</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { 
                                        name: 'Cinematic', 
                                        desc: 'Pencahayaan dramatis ala film layar lebar, biasanya memiliki kontras tinggi antara area terang dan bayangan yang dalam.', 
                                        example: '"Cinematic lighting, dramatic shadows, moody atmosphere"' 
                                    },
                                    { 
                                        name: 'Soft Studio', 
                                        desc: 'Cahaya lembut dan merata tanpa bayangan tajam. Umum digunakan untuk foto produk atau portrait profesional.', 
                                        example: '"Soft studio lighting, high-key photography, clean background"' 
                                    },
                                    { 
                                        name: 'Golden Hour', 
                                        desc: 'Cahaya hangat keemasan yang muncul sesaat sebelum matahari terbenam atau setelah terbit. Memberi kesan magis.', 
                                        example: '"Golden hour, warm orange glow, soft sunlight, long shadows"' 
                                    },
                                    { 
                                        name: 'Volumetric', 
                                        desc: 'Efek "berkas cahaya" (God rays) yang terlihat jelas menembus udara yang berdebu, berasap, atau berkabut.', 
                                        example: '"Volumetric lighting, sunbeams, hazy atmosphere, rays of light"' 
                                    }
                                ].map((l, i) => (
                                    <div key={i} className="p-6 glass rounded-[2rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-3xl -mr-12 -mt-12 group-hover:bg-yellow-500/10 transition-colors" />
                                        <h5 className="font-bold text-yellow-500 mb-3 text-lg">{l.name}</h5>
                                        <p className="text-[11px] text-slate-300 leading-relaxed mb-4 min-h-[60px]">{l.desc}</p>
                                        <div className="space-y-1">
                                            <p className="text-[8px] text-slate-500 uppercase font-black tracking-tighter">Prompt Keyword:</p>
                                            <code className="text-[10px] font-mono text-pink-300 block p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-pink-500/30 transition-colors">
                                                {l.example}
                                            </code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Composition Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-blue-500/20">📐</div>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase tracking-tight text-white">2. Komposisi (Sudut Pandang)</h4>
                                    <p className="text-[10px] text-blue-500/70 font-black uppercase tracking-widest">Perspective & Framing</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { 
                                        name: "Bird's Eye", 
                                        desc: 'Sudut pandang tegak lurus dari atas ke bawah. Memberikan kesan skala yang luas seperti dari drone atau satelit.', 
                                        example: '"Bird\'s eye view, top-down perspective, aerial photography"' 
                                    },
                                    { 
                                        name: 'Macro', 
                                        desc: 'Pengambilan gambar jarak sangat dekat untuk menonjolkan detail tekstur atau objek kecil yang tidak kasat mata.', 
                                        example: '"Macro photography, extreme close-up, f/1.8, bokeh background"' 
                                    },
                                    { 
                                        name: 'Low Angle', 
                                        desc: 'Kamera diletakkan di bawah subjek menghadap ke atas. Memberikan kesan subjek yang megah, kuat, atau heroik.', 
                                        example: '"Low angle shot, heroic perspective, looking up at the sky"' 
                                    },
                                    { 
                                        name: 'Rule of Thirds', 
                                        desc: 'Menempatkan objek utama pada titik potong garis imajiner yang membagi frame menjadi 9 bagian seimbang.', 
                                        example: '"Rule of thirds composition, perfectly balanced, symmetrical framing"' 
                                    }
                                ].map((c, i) => (
                                    <div key={i} className="p-6 glass rounded-[2rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-colors" />
                                        <h5 className="font-bold text-blue-400 mb-3 text-lg">{c.name}</h5>
                                        <p className="text-[11px] text-slate-300 leading-relaxed mb-4 min-h-[60px]">{c.desc}</p>
                                        <div className="space-y-1">
                                            <p className="text-[8px] text-slate-500 uppercase font-black tracking-tighter">Prompt Keyword:</p>
                                            <code className="text-[10px] font-mono text-pink-300 block p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-pink-500/30 transition-colors">
                                                {c.example}
                                            </code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Art Style Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-purple-500/20">🎨</div>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase tracking-tight text-white">3. Gaya Seni (Art Style)</h4>
                                    <p className="text-[10px] text-purple-500/70 font-black uppercase tracking-widest">Aesthetic & Direction</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { 
                                        name: 'Bauhaus', 
                                        desc: 'Gaya desain fungsional yang mengutamakan bentuk geometris dasar (kotak, lingkaran) dan warna primer.', 
                                        example: '"Bauhaus style, geometric shapes, minimalist, primary colors"' 
                                    },
                                    { 
                                        name: 'Brutalisme', 
                                        desc: 'Estetika yang "mentah" dan jujur, seringkali menggunakan tekstur beton, tipografi besar, dan layout asimetris.', 
                                        example: '"Brutalist design, raw concrete texture, bold typography, industrial"' 
                                    },
                                    { 
                                        name: 'Glassmorphism', 
                                        desc: 'Tren desain modern dengan efek kaca buram (frosted glass) yang transparan dan cahaya lembut di tepiannya.', 
                                        example: '"Glassmorphism UI, frosted glass, vibrant background, soft blur"' 
                                    },
                                    { 
                                        name: 'Cyberpunk', 
                                        desc: 'Visual masa depan distopia yang didominasi lampu neon (pink/biru), suasana malam hari, hujan, dan teknologi tinggi.', 
                                        example: '"Cyberpunk aesthetic, neon lights, rainy night city, high-tech grit"' 
                                    }
                                ].map((s, i) => (
                                    <div key={i} className="p-6 glass rounded-[2rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 blur-3xl -mr-12 -mt-12 group-hover:bg-purple-500/10 transition-colors" />
                                        <h5 className="font-bold text-purple-400 mb-3 text-lg">{s.name}</h5>
                                        <p className="text-[11px] text-slate-300 leading-relaxed mb-4 min-h-[60px]">{s.desc}</p>
                                        <div className="space-y-1">
                                            <p className="text-[8px] text-slate-500 uppercase font-black tracking-tighter">Prompt Keyword:</p>
                                            <code className="text-[10px] font-mono text-pink-300 block p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-pink-500/30 transition-colors">
                                                {s.example}
                                            </code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Studi Kasus PTCF",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/5 pb-8 gap-4">
                        <div className="space-y-2">
                            <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest">02. Studi Kasus (Implementasi PTCF)</h3>
                            <p className="text-4xl font-bold tracking-tight">Dari Ide ke Visual yang Presisi</p>
                        </div>
                        <div className="flex gap-2">
                            {['P', 'T', 'C', 'F'].map(letter => (
                                <span key={letter} className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-[10px] font-black text-pink-500" title={
                                    letter === 'P' ? 'Persona' : letter === 'T' ? 'Task' : letter === 'C' ? 'Context' : 'Format/Fundamental'
                                }>{letter}</span>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                type: "Logo & Branding",
                                title: "Identity Startup",
                                color: "pink",
                                prompt: "Sebagai Desainer Logo Profesional [P], buat logo minimalis untuk 'Stellar' startup eksplorasi ruang angkasa [T]. Gabungkan simbol kompas dan bintang dengan palet warna biru dongker dan perak [C]. Hasil akhir vektor datar, latar belakang putih, gaya modern dan bersih [F]."
                            },
                            {
                                type: "Event Marketing",
                                title: "Poster Festival Retro",
                                color: "purple",
                                prompt: "Sebagai Ilustrator Poster Poster Digital [P], rancang poster konser festival musik 80-an [T]. Gunakan gaya Vaporwave, warna neon pink-ungu, dan tekstur kaset lama [C]. Format poster vertikal, tipografi tebal bergaya chrome, pencahayaan siberpunk [F]."
                            },
                            {
                                type: "Outdoor Ads",
                                title: "Baliho Properti",
                                color: "blue",
                                prompt: "Sebagai Fotografer Iklan Komersial [P], buat visual untuk baliho perumahan mewah 'The Oasis' [T]. Tampilkan eksterior rumah modern dengan taman hijau luas dan pencahayaan matahari terbenam yang hangat [C]. Sudut pandang wide angle, resolusi ultra-tinggi 8k, sinematik [F]."
                            },
                            {
                                type: "Social Media",
                                title: "Instagram Fashion Ads",
                                color: "indigo",
                                prompt: "Sebagai Social Media Content Creator [P], buat foto katalog untuk koleksi jam tangan mewah [T]. Jam diletakkan di atas permukaan marmer hitam dengan dekorasi bunga liar minimalis [C]. Pencahayaan soft studio, kedalaman bidang (bokeh) yang artistik, format rasio 4:5 [F]."
                            },
                            {
                                type: "Architecture",
                                title: "Interior Smart Home",
                                color: "emerald",
                                prompt: "Sebagai Arsitek Interior Modern [P], rancang visual ruang tamu konsep Smart Home masa depan [T]. Integrasikan layar hologram tipis di dinding, furnitur ergonomis, dan pencahayaan LED tersembunyi [C]. Foto arsitektural, sudut pandang mata burung (bird's eye), gaya minimalis futuristik [F]."
                            },
                            {
                                type: "UI/UX Concept",
                                title: "Mobile App Interface",
                                color: "orange",
                                prompt: "Sebagai UI/UX Desainer Senior [P], buat tampilan antarmuka (interface) aplikasi pelacak kesehatan [T]. Fokus pada desain 'Glassmorphism', grafik statistik yang halus, dan palet warna pastel [C]. Render 3D bersih, resolusi tajam, pencahayaan lembut, tampilan depan (front view) [F]."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 glass border border-white/5 rounded-[3rem] bg-white/2 hover:bg-white/5 transition-all group flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`px-4 py-1.5 rounded-full bg-${item.color}-500/10 border border-${item.color}-500/20 text-[10px] font-black uppercase tracking-widest text-${item.color}-400`}>
                                        {item.type}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold italic text-white mb-4">{item.title}</h4>
                                <div className="relative flex-grow">
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-pink-500 to-transparent opacity-50 rounded-full" />
                                    <p className="text-xs text-slate-300 leading-relaxed italic pl-2">
                                        {item.prompt.split(/\[|\]/).map((part, index) => (
                                            index % 2 === 1 ? (
                                                <span key={index} className="text-pink-500 font-bold mx-1">[{part}]</span>
                                            ) : part
                                        ))}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                            <div key={i} className="p-4 glass border border-white/5 rounded-4xl bg-white/2 grid md:grid-cols-4 gap-6 items-center">
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
