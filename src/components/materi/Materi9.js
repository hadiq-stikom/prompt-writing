'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi9({ materi }) {
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

    const musicTools = [
        {
            name: "Suno AI",
            type: "Complete Song Generation",
            pros: "Mampu membuat lagu lengkap dengan vokal dan lirik, sangat kreatif dalam berbagai genre.",
            cons: "Kontrol terhadap detail instrumen individu masih terbatas.",
            suitability: "Sangat Cocok untuk Membuat Lagu Demo & Konten Viral."
        },
        {
            name: "Udio",
            type: "High Fidelity Music",
            pros: "Kualitas audio sangat jernih, tekstur vokal sangat manusiawi, durasi bisa diperpanjang.",
            cons: "Terkadang terlalu random dalam interpretasi genre yang sangat spesifik.",
            suitability: "Sangat Cocok untuk Produksi Musik Berkualitas Studio."
        },
        {
            name: "AIVA",
            type: "Cinematic Orchestral",
            pros: "Fokus pada komposisi MIDI, sangat kuat untuk musik orkestra dan soundtrack film.",
            cons: "Kurang cocok untuk genre musik modern dengan vokal (pop/rap).",
            suitability: "Sangat Cocok untuk Komposer Film & Game Developer."
        },
        {
            name: "Soundraw",
            type: "Royalty Free Customizer",
            pros: "Bebas hak cipta, pengguna bisa menyesuaikan struktur lagu (mood, tempo, instrumen) secara modular.",
            cons: "Variasi melodi tidak seunik Suno atau Udio.",
            suitability: "Sangat Cocok untuk Background Music YouTube & Podcast."
        }
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "The Virtual Composer",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-4 text-amber-500 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-amber-500"></span> Pertemuan 9: Prompt Komposisi Musik
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-amber-500/20 underline-offset-16 italic tracking-tight">The Virtual Composer</h2>
                    <p className="text-xl text-slate-200 leading-relaxed text-justify font-medium">
                        Musik bukan lagi sekadar susunan notasi fisik, melainkan <strong>Harmonisasi Algoritma melalui Deskripsi</strong>. Di sini, Anda belajar menjadi konduktor bagi AI untuk menciptakan melodi yang mampu menyentuh emosi.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-bold text-amber-300">Generative Audio</span>
                        <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-bold text-amber-300">Melodic Prompting</span>
                        <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-bold text-amber-300">Sound Engineering</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Vokabular Musikal",
            content: (
                <div className="space-y-16 text-left">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-amber-500 font-bold text-xs uppercase tracking-widest">01. Vokabular Musikal (Fundamental)</h3>
                            <p className="text-4xl font-bold tracking-tight">Menyusun Harmoni dengan Kata</p>
                            <p className="text-slate-400 max-w-2xl text-sm">Berkomunikasi dengan AI musik membutuhkan pemahaman tentang genre, suasana, dan struktur. Berikut adalah pilar utama prompt musik Anda.</p>
                        </div>
                    </div>

                    <div className="grid gap-16">
                        {/* Genre & Mood */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-orange-500/20">🎸</div>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase tracking-tight text-white">1. Genre & Mood (Suasana)</h4>
                                    <p className="text-[10px] text-orange-500/70 font-black uppercase tracking-widest">Vibe & Style</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { 
                                        name: 'Synthwave', 
                                        desc: 'Musik elektronik retro bergaya 80-an dengan suara synthesizer yang tebal. Memberikan kesan futuristik namun nostalgia.', 
                                        example: '"Retro synthwave, 80s aesthetic, neon nights, driving tempo, heavy bass"' 
                                    },
                                    { 
                                        name: 'Lo-fi Hip Hop', 
                                        desc: 'Musik santai dengan ritme hip hop yang pelan, seringkali menggunakan suara vinyl crackle dan piano yang lembut.', 
                                        example: '"Lofi hip hop, chill beats, jazzy piano, study music, relaxed atmosphere"' 
                                    },
                                    { 
                                        name: 'Cinematic Epic', 
                                        desc: 'Musik orkestra besar dengan perkusi yang kuat. Digunakan untuk membangun ketegangan atau kemegahan.', 
                                        example: '"Cinematic orchestral, epic build-up, dramatic strings, powerful percussion, heroic mood"' 
                                    },
                                    { 
                                        name: 'Deep House', 
                                        desc: 'Subgenre musik house yang lebih melankolis dan soulful dengan ritme 4/4 yang konsisten.', 
                                        example: '"Deep house, hypnotic bassline, soulful vocals, 124 BPM, club atmosphere"' 
                                    }
                                ].map((m, i) => (
                                    <div key={i} className="p-6 glass rounded-[2rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-3xl -mr-12 -mt-12 group-hover:bg-orange-500/10 transition-colors" />
                                        <h5 className="font-bold text-orange-500 mb-3 text-lg">{m.name}</h5>
                                        <p className="text-[11px] text-slate-300 leading-relaxed mb-4 min-h-[60px]">{m.desc}</p>
                                        <div className="space-y-1">
                                            <p className="text-[8px] text-slate-500 uppercase font-black tracking-tighter">Prompt Keyword:</p>
                                            <code className="text-[10px] font-mono text-amber-300 block p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-amber-500/30 transition-colors">
                                                {m.example}
                                            </code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Instrumentation */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-yellow-500/20">🎹</div>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase tracking-tight text-white">2. Instrumentasi (Alat Musik)</h4>
                                    <p className="text-[10px] text-yellow-500/70 font-black uppercase tracking-widest">Texture & Layers</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { 
                                        name: 'Acoustic Guitar', 
                                        desc: 'Memberikan kesan organik, intim, dan personal. Sangat cocok untuk genre folk atau indie.', 
                                        example: '"Warm acoustic guitar, fingerstyle, intimate recording, folk vibe"' 
                                    },
                                    { 
                                        name: 'Grand Piano', 
                                        desc: 'Alat musik serbaguna yang bisa terdengar elegan, sedih, atau megah tergantung cara memainkannya.', 
                                        example: '"Classical grand piano, melancholic melody, reverb, emotional performance"' 
                                    },
                                    { 
                                        name: 'Analog Lead', 
                                        desc: 'Suara synthesizer yang tajam dan berkarakter, sering digunakan untuk melodi utama dalam musik elektronik.', 
                                        example: '"Sharp analog synth lead, distorted, futuristic, high energy"' 
                                    },
                                    { 
                                        name: 'Taiko Drums', 
                                        desc: 'Drum tradisional Jepang dengan suara yang sangat dalam dan bergemuruh. Sering digunakan untuk adegan aksi.', 
                                        example: '"Thunderous taiko drums, ritualistic rhythm, deep bass, cinematic impact"' 
                                    }
                                ].map((s, i) => (
                                    <div key={i} className="p-6 glass rounded-[2rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-3xl -mr-12 -mt-12 group-hover:bg-yellow-500/10 transition-colors" />
                                        <h5 className="font-bold text-yellow-400 mb-3 text-lg">{s.name}</h5>
                                        <p className="text-[11px] text-slate-300 leading-relaxed mb-4 min-h-[60px]">{s.desc}</p>
                                        <div className="space-y-1">
                                            <p className="text-[8px] text-slate-500 uppercase font-black tracking-tighter">Prompt Keyword:</p>
                                            <code className="text-[10px] font-mono text-amber-300 block p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-amber-500/30 transition-colors">
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
                            <h3 className="text-amber-500 font-bold text-xs uppercase tracking-widest">02. Studi Kasus (Komposisi Melodi)</h3>
                            <p className="text-4xl font-bold tracking-tight">Dari Imajinasi ke Gelombang Suara</p>
                        </div>
                        <div className="flex gap-2">
                            {['P', 'T', 'C', 'F'].map(letter => (
                                <span key={letter} className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[10px] font-black text-amber-500" title={
                                    letter === 'P' ? 'Persona' : letter === 'T' ? 'Task' : letter === 'C' ? 'Context' : 'Format/Fundamental'
                                }>{letter}</span>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                type: "Content BGM",
                                title: "Tech Review Vlog",
                                color: "amber",
                                prompt: "Sebagai Musik Produser Modern [P], ciptakan musik latar untuk vlog review gadget [T]. Gunakan genre Upbeat Lo-fi dengan perpaduan drum digital yang bersih dan melodi piano elektrik yang ceria [C]. Tempo medium 110 BPM, tanpa vokal, durasi 2 menit, format audio high-quality [F]."
                            },
                            {
                                type: "Meditation / Sleep",
                                title: "Zen Garden Ambience",
                                color: "emerald",
                                prompt: "Sebagai Desainer Audio Relaksasi [P], buat musik meditasi konsep 'Zen Garden' [T]. Integrasikan suara alam (air mengalir, kicauan burung) dengan pad synthesizer yang sangat lembut dan mangkuk bernyanyi (singing bowls) [C]. Atmosfer tenang, tempo sangat lambat, minimalis, format loopable [F]."
                            },
                            {
                                type: "Game Soundtrack",
                                title: "Cyberpunk Boss Fight",
                                color: "purple",
                                prompt: "Sebagai Komposer Musik Game [P], rancang tema musik untuk pertarungan bos di dunia siberpunk [T]. Gunakan genre Industrial Techno dengan bassline yang agresif, suara distorsi metalik, dan tempo cepat 145 BPM [C]. Intensitas tinggi, penuh energi, suara futuristik, kualitas produksi sinematik [F]."
                            },
                            {
                                type: "Brand Jingle",
                                title: "Eco-Friendly Tech",
                                color: "blue",
                                prompt: "Sebagai Spesialis Audio Branding [P], buat jingle 15 detik untuk brand teknologi ramah lingkungan [T]. Mulai dengan dentuman ringan kayu (wood percussion) diikuti dengan harmoni gitar akustik yang segar [C]. Diakhiri dengan melodi 4-not yang mudah diingat (memorable), cerah, dan inspiratif [F]."
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
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-amber-500 to-transparent opacity-50 rounded-full" />
                                    <p className="text-xs text-slate-300 leading-relaxed italic pl-2">
                                        {item.prompt.split(/\[|\]/).map((part, index) => (
                                            index % 2 === 1 ? (
                                                <span key={index} className="text-amber-400 font-bold mx-1">[{part}]</span>
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
            title: "AI Music Tools Review",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-amber-500 font-bold text-xs uppercase tracking-widest text-center">AI Music Tools Ecosystem 2024</h3>
                    <div className="grid gap-6">
                        {musicTools.map((tool, i) => (
                            <div key={i} className="p-6 glass border border-white/5 rounded-[2.5rem] bg-white/2 grid md:grid-cols-4 gap-6 items-center">
                                <div>
                                    <h5 className="text-xl font-bold text-white">{tool.name}</h5>
                                    <p className="text-[10px] text-amber-500 font-black uppercase tracking-widest">{tool.type}</p>
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
            title: "The Brand Anthem Challenge",
            content: (
                <div className="p-12 glass border border-amber-500/20 rounded-[4rem] space-y-8 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                        <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-lg shadow-amber-500/30">C3</div>
                        <div>
                            <h4 className="font-bold text-2xl uppercase tracking-tighter italic text-white underline decoration-amber-500/30">Projek: &quot;Skyline Tech Jingle&quot;</h4>
                            <p className="text-xs text-amber-400 font-black uppercase tracking-widest mt-1">Short Audio Identity for a Future Drone Company</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-slate-200 text-lg leading-relaxed italic">
                            Susunlah prompt musik untuk Jingle 10 detik dengan kriteria:
                        </p>
                        <ul className="text-slate-400 text-sm space-y-2 list-disc pl-6">
                            <li><strong>Mood:</strong> Optimis, canggih, dan bersih.</li>
                            <li><strong>Instrumen:</strong> Pad sintesis yang mengambang (airy pads) dan suara &quot;ping&quot; digital yang jernih.</li>
                            <li><strong>Ending:</strong> Klimaks singkat yang memberikan kesan teknologi terpercaya.</li>
                        </ul>
                    </div>
                    <div className="flex justify-end pt-4">
                        <div className="px-10 py-5 bg-amber-600 text-white rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer shadow-xl shadow-amber-500/20">Komposisi Sekarang</div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "The Symphony of Algorithms",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-white italic underline underline-offset-12 decoration-amber-500/20 capitalize tracking-tight">The Future of Sound</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;Music is the shorthand of emotion, now written in the language of data.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">Harmonizing human creativity with machine intelligence is the ultimate composition.</p>
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
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-500">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-amber-500/20"
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
                                <div className="flex items-center gap-4 text-amber-500 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-amber-500"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Selesai' :
                                            `Bagian ${section.id.split('-')[1] || section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-amber-500/20 hover:text-amber-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-amber-500/20 to-transparent mt-24" />
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
