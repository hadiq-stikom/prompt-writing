'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi8({ materi }) {
    const [isPresenting, setIsPresenting] = useState(false);
    const [startSlide, setStartSlide] = useState(0);

    const openPresentation = (index) => {
        setStartSlide(index);
        setIsPresenting(true);
        if (typeof document !== 'undefined' && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        }
    };

    const videoTools = [
        {
            name: "Runway (Gen-3 Alpha)",
            type: "Video Generation / AI Film",
            pros: "Fisika video sangat realistis, kontrol kamera presisi, kualitas sinematik tinggi.",
            cons: "Berbayar (sistem kredit), proses render memakan waktu.",
            suitability: "Sangat Cocok untuk Iklan High-End & Film Pendek."
        },
        {
            name: "Luma Dream Machine",
            type: "High Fidelity Video",
            pros: "Gerakan konsisten, mampu memproses prompt teks yang kompleks menjadi aksi nyata.",
            cons: "Terkadang ada artefak visual pada gerakan cepat.",
            suitability: "Sangat Cocok untuk Konten Media Sosial & Visualisasi Konsep."
        },
        {
            name: "HeyGen / Synthesia",
            type: "AI Avatars",
            pros: "Lip-sync sempurna, ribuan pilihan bahasa, sangat hemat waktu produksi studio.",
            cons: "Gerakan tubuh terkadang masih terasa kaku (robotic).",
            suitability: "Sangat Cocok untuk Video Tutorial, Training, & Presentasi."
        },
        {
            name: "InVideo AI",
            type: "Script to Video",
            pros: "Mengotomatisasi seluruh alur: script, voiceover, stock footage, hingga musik.",
            cons: "Kreativitas terbatas pada stok footage yang tersedia.",
            suitability: "Sangat Cocok untuk Konten YouTube & Berita Cepat."
        }
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "The Digital Director",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-4 text-violet-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-violet-400"></span> Pertemuan 8: Prompt Produksi Video
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-violet-500/20 underline-offset-16 italic tracking-tight">The Digital Director</h2>
                    <p className="text-xl text-slate-200 leading-relaxed text-justify font-medium">
                        Di era AI, peran sutradara bergeser dari sekadar mengarahkan kru fisik menjadi <strong>Arsitek Instruksi Visual</strong>. Penguasaan bahasa sinematik adalah "tongkat sihir" baru Anda dalam menciptakan narasi video yang memukau.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs font-bold text-violet-300">Cinematic Scripting</span>
                        <span className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs font-bold text-violet-300">AI Storyboarding</span>
                        <span className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs font-bold text-violet-300">Generative Video</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Vokabular Sinematik",
            content: (
                <div className="space-y-16 text-left">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-violet-500 font-bold text-xs uppercase tracking-widest">01. Vokabular Sinematik (Fundamental)</h3>
                            <p className="text-4xl font-bold tracking-tight">Mengarahkan Kamera dengan Kata</p>
                            <p className="text-slate-400 max-w-2xl text-sm">Untuk menghasilkan video AI yang berkualitas, Anda harus berbicara seperti seorang sutradara profesional. Berikut adalah elemen kunci yang wajib ada dalam prompt video Anda.</p>
                        </div>
                    </div>

                    <div className="grid gap-16">
                        {/* Camera Movement */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-cyan-500/10 text-cyan-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-cyan-500/20">🎥</div>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase tracking-tight text-white">1. Camera Movement (Gerakan Kamera)</h4>
                                    <p className="text-[10px] text-cyan-500/70 font-black uppercase tracking-widest">Dynamics & Action</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { 
                                        name: 'Dolly Shot', 
                                        desc: 'Kamera bergerak mendekati atau menjauhi subjek secara fisik. Memberikan kesan keterlibatan emosional.', 
                                        example: '"Dolly zoom in on the character\'s face, intense expression, slow motion"' 
                                    },
                                    { 
                                        name: 'Pan & Tilt', 
                                        desc: 'Pan (Horizontal) atau Tilt (Vertical). Mengikuti subjek atau memperlihatkan skala lingkungan.', 
                                        example: '"Slow pan from left to right revealing the futuristic city landscape"' 
                                    },
                                    { 
                                        name: 'Handheld', 
                                        desc: 'Gerakan kamera yang sedikit tidak stabil (goyang). Memberikan kesan dokumenter atau aksi yang mendesak.', 
                                        example: '"Shaky handheld camera, first-person perspective, running through a forest"' 
                                    },
                                    { 
                                        name: 'Drone / Aerial', 
                                        desc: 'Pengambilan gambar dari udara. Sangat efektif untuk memperlihatkan konteks lokasi (Establishment Shot).', 
                                        example: '"Cinematic drone shot, sweeping over mountain peaks at sunrise"' 
                                    }
                                ].map((m, i) => (
                                    <div key={i} className="p-6 glass rounded-[2rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl -mr-12 -mt-12 group-hover:bg-cyan-500/10 transition-colors" />
                                        <h5 className="font-bold text-cyan-500 mb-3 text-lg">{m.name}</h5>
                                        <p className="text-[11px] text-slate-300 leading-relaxed mb-4 min-h-[60px]">{m.desc}</p>
                                        <div className="space-y-1">
                                            <p className="text-[8px] text-slate-500 uppercase font-black tracking-tighter">Prompt Keyword:</p>
                                            <code className="text-[10px] font-mono text-violet-300 block p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-violet-500/30 transition-colors">
                                                {m.example}
                                            </code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Shot Sizes */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-amber-500/20">🔍</div>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase tracking-tight text-white">2. Shot Sizes (Ukuran Gambar)</h4>
                                    <p className="text-[10px] text-amber-500/70 font-black uppercase tracking-widest">Focus & Composition</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { 
                                        name: 'Extreme Close Up', 
                                        desc: 'Fokus pada detail sangat kecil (mata, tetesan air, tombol). Menciptakan ketegangan atau keintiman.', 
                                        example: '"Extreme close up of a human eye, reflecting a digital screen, hyper-detailed"' 
                                    },
                                    { 
                                        name: 'Wide Shot', 
                                        desc: 'Memperlihatkan subjek dalam lingkungan sekitarnya secara penuh. Membangun suasana (Atmosphere).', 
                                        example: '"Wide shot of a lonely traveler in a vast desert, cinematic lighting"' 
                                    },
                                    { 
                                        name: 'Over the Shoulder', 
                                        desc: 'Kamera diletakkan di belakang bahu seseorang. Digunakan dalam adegan percakapan.', 
                                        example: '"Over the shoulder shot, dialogue scene between a human and an AI robot"' 
                                    },
                                    { 
                                        name: 'Bird\'s Eye View', 
                                        desc: 'Sudut pandang tegak lurus dari atas. Memberikan kesan keteraturan atau ketidakberdayaan.', 
                                        example: '"Bird\'s eye view of a crowded intersection, neon lights, rainy night"' 
                                    }
                                ].map((s, i) => (
                                    <div key={i} className="p-6 glass rounded-[2rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-3xl -mr-12 -mt-12 group-hover:bg-amber-500/10 transition-colors" />
                                        <h5 className="font-bold text-amber-400 mb-3 text-lg">{s.name}</h5>
                                        <p className="text-[11px] text-slate-300 leading-relaxed mb-4 min-h-[60px]">{s.desc}</p>
                                        <div className="space-y-1">
                                            <p className="text-[8px] text-slate-500 uppercase font-black tracking-tighter">Prompt Keyword:</p>
                                            <code className="text-[10px] font-mono text-violet-300 block p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-violet-500/30 transition-colors">
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
                            <h3 className="text-violet-500 font-bold text-xs uppercase tracking-widest">02. Studi Kasus (Scripting & Storyboard)</h3>
                            <p className="text-4xl font-bold tracking-tight">Dari Naskah ke Frame Visual</p>
                        </div>
                        <div className="flex gap-2">
                            {['P', 'T', 'C', 'F'].map(letter => (
                                <span key={letter} className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-[10px] font-black text-violet-500" title={
                                    letter === 'P' ? 'Persona' : letter === 'T' ? 'Task' : letter === 'C' ? 'Context' : 'Format/Fundamental'
                                }>{letter}</span>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                type: "Commercial Ad",
                                title: "Luxury Fragrance 'Aura'",
                                color: "violet",
                                prompt: "Sebagai Sutradara Iklan High-End [P], buat konsep storyboard video 15 detik untuk parfum 'Aura' [T]. Frame 1: Extreme close up cairan parfum yang berkilau. Frame 2: Model berjalan di lorong istana yang megah dengan pencahayaan Golden Hour. Frame 3: Dolly zoom in ke botol parfum dengan latar belakang bokeh yang artistik [C]. Gaya visual sinematik, gerakan lambat (slow motion), resolusi 4k [F]."
                            },
                            {
                                type: "Educational Video",
                                title: "Explaining Black Holes",
                                color: "indigo",
                                prompt: "Sebagai Animator Sains Edukatif [P], susun script visual untuk menjelaskan lubang hitam [T]. Tampilkan simulasi 3D bintang yang tertelan oleh gravitasi, dikelilingi oleh piringan akresi yang berpendar [C]. Gunakan sudut pandang Bird's Eye View untuk memperlihatkan skala kosmik. Sertakan transisi halus dari animasi ke penjelasan teks (motion graphics) [F]."
                            },
                            {
                                type: "Social Media Reel",
                                title: "Travel: Hidden Gems Bali",
                                color: "cyan",
                                prompt: "Sebagai Travel Content Creator [P], buat prompt untuk video transisi cepat 'Hidden Gems Bali' [T]. Gunakan teknik handheld camera untuk kesan autentik. Tampilkan potongan 1 detik: air terjun tersembunyi, pasar tradisional yang ramai, dan matahari terbenam di tebing [C]. Tempo cepat mengikuti beat musik, warna-warna vibran, aspect ratio 9:16 untuk Reels/TikTok [F]."
                            },
                            {
                                type: "Cinematic Short",
                                title: "The Last Robot",
                                color: "rose",
                                prompt: "Sebagai Sutradara Film Pendek Sci-Fi [P], rancang adegan pembuka 'The Last Robot' [T]. Wide shot robot tua duduk di ladang bunga matahari yang layu di planet Mars [C]. Pencahayaan remang-remang (low light), atmosfer berkabut, gerakan kamera slow pan ke arah matahari yang terbit berwarna biru [F]."
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
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-violet-500 to-transparent opacity-50 rounded-full" />
                                    <p className="text-xs text-slate-300 leading-relaxed italic pl-2">
                                        {item.prompt.split(/\[|\]/).map((part, index) => (
                                            index % 2 === 1 ? (
                                                <span key={index} className="text-violet-400 font-bold mx-1">[{part}]</span>
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
            id: "03-TOOLS",
            title: "AI Video Tools Review",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-violet-500 font-bold text-xs uppercase tracking-widest text-center">AI Video Tools Ecosystem 2024</h3>
                    <div className="grid gap-6">
                        {videoTools.map((tool, i) => (
                            <div key={i} className="p-6 glass border border-white/5 rounded-[2.5rem] bg-white/2 grid md:grid-cols-4 gap-6 items-center">
                                <div>
                                    <h5 className="text-xl font-bold text-white">{tool.name}</h5>
                                    <p className="text-[10px] text-violet-500 font-black uppercase tracking-widest">{tool.type}</p>
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
            id: "CHALLENGE",
            title: "The 30-Second Commercial Challenge",
            content: (
                <div className="p-12 glass border border-violet-500/20 rounded-[4rem] space-y-8 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                        <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-lg shadow-violet-500/30">C2</div>
                        <div>
                            <h4 className="font-bold text-2xl uppercase tracking-tighter italic text-white underline decoration-violet-500/30">Kampanye: &quot;Midnight Coffee&quot;</h4>
                            <p className="text-xs text-violet-400 font-black uppercase tracking-widest mt-1">Premium Coffee for Night Owls</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-200 text-lg leading-relaxed italic">
                            Tugas Anda adalah menyusun Storyboard 3-Frame menggunakan framework PTCF:
                        </p>
                        <ul className="text-slate-400 text-sm space-y-2 list-disc pl-6">
                            <li><strong>Frame 1:</strong> Opening shot yang menunjukkan suasana malam kota yang sibuk (Bird's Eye View).</li>
                            <li><strong>Frame 2:</strong> Detail penuangan kopi ke dalam cangkir (Extreme Close Up).</li>
                            <li><strong>Frame 3:</strong> Ekspresi seseorang yang kembali bersemangat setelah minum kopi (Cinematic Lighting).</li>
                        </ul>
                    </div>
                    <div className="flex justify-end pt-4">
                        <div className="px-10 py-5 bg-violet-600 text-white rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer shadow-xl shadow-violet-500/20">Draft Script Sekarang</div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "The Visionary Director",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-white italic underline underline-offset-12 decoration-violet-500/20 capitalize tracking-tight">The Future of Motion</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;Pixels are the new ink, and your imagination is the director.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-violet-500 mx-auto rounded-full" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">Directing digital motion requires the precision of a poet and the vision of a pioneer.</p>
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
                    <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-violet-500">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-violet-500/20"
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
                                <div className="flex items-center gap-4 text-violet-500 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-violet-500"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Selesai' :
                                            `Bagian ${section.id.split('-')[1] || section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-violet-500/20 hover:text-violet-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-violet-500/20 to-transparent mt-24" />
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
