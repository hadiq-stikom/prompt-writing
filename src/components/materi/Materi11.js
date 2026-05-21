'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import PresentationMode from './PresentationMode';

export default function Materi11({ materi }) {
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

    const ethicalGuidelines = [
        {
            title: "Transparansi (Disclosure)",
            desc: "Selalu nyatakan secara jujur jika sebuah karya (teks, gambar, atau musik) dibuat atau dibantu oleh AI.",
            status: "Wajib di Akademik"
        },
        {
            title: "Mitigasi Bias",
            desc: "Sadar akan potensi bias (gender, ras, budaya) dalam AI dan gunakan prompt untuk menyeimbangkannya.",
            status: "Tanggung Jawab Sosial"
        },
        {
            title: "Hak Cipta (Copyright)",
            desc: "Pahami bahwa hasil murni AI seringkali tidak bisa dipatenkan/hak ciptakan secara hukum di banyak negara.",
            status: "Aspek Legal"
        },
        {
            title: "Integritas Data",
            desc: "Jangan memasukkan data sensitif atau pribadi ke dalam prompt model publik (seperti ChatGPT/Gemini).",
            status: "Keamanan Privasi"
        }
    ];

    const getSections = () => [
        {
            id: "INTRO",
            title: "The Responsible Creator",
            content: (
                <div className="max-w-4xl space-y-8 text-left">
                    <div className="flex items-center gap-4 text-rose-500 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-rose-500"></span> Pertemuan 11: Etika & Hak Cipta AI
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight underline decoration-rose-500/20 underline-offset-16 italic tracking-tight">The Responsible Creator</h2>
                    <p className="text-xl text-slate-200 leading-relaxed text-justify font-medium">
                        Kekuatan besar menuntut tanggung jawab yang besar pula. Menggunakan AI bukan berarti mengabaikan <strong>Etika dan Integritas</strong>. Di sini, kita belajar batasan antara inovasi dan pelanggaran hak orang lain.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-xs font-bold text-rose-300">Digital Ethics</span>
                        <span className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-xs font-bold text-rose-300">Copyright Law</span>
                        <span className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-xs font-bold text-rose-300">AI Safety</span>
                    </div>
                </div>
            )
        },
        {
            id: "01",
            title: "Hak Cipta & Kepemilikan",
            content: (
                <div className="space-y-12 text-left">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-rose-500 font-bold text-xs uppercase tracking-widest">01. Hak Cipta & Kepemilikan</h3>
                            <p className="text-4xl font-bold tracking-tight">Siapa Pemilik Karya AI?</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 glass rounded-[3rem] border border-white/5 space-y-4 bg-white/2">
                            <div className="text-3xl">👤</div>
                            <h5 className="text-lg font-bold text-white italic">Pengguna (User)</h5>
                            <p className="text-xs text-slate-400 leading-relaxed">Anda memegang hak atas prompt, tetapi belum tentu atas gambar/teks yang dihasilkan secara hukum otomatis.</p>
                        </div>
                        <div className="p-8 glass rounded-[3rem] border border-white/5 space-y-4 bg-white/2">
                            <div className="text-3xl">🤖</div>
                            <h5 className="text-lg font-bold text-white italic">Model AI</h5>
                            <p className="text-xs text-slate-400 leading-relaxed">AI hanyalah alat. Di mata hukum saat ini, AI tidak bisa dianggap sebagai &quot;pencipta&quot; atau subjek hukum.</p>
                        </div>
                        <div className="p-8 glass rounded-[3rem] border border-white/5 space-y-4 bg-white/2">
                            <div className="text-3xl">🎨</div>
                            <h5 className="text-lg font-bold text-white italic">Pemilik Data Training</h5>
                            <p className="text-xs text-slate-400 leading-relaxed">Isu &quot;Fair Use&quot; masih diperdebatkan: Apakah AI berhak belajar dari karya seniman tanpa izin?</p>
                        </div>
                    </div>

                    <div className="p-10 bg-slate-900 border border-rose-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute -bottom-10 -right-10 text-rose-500/5 text-9xl font-black italic select-none">LEGAL</div>
                        <div className="relative z-10 space-y-4">
                            <h4 className="text-2xl font-bold text-rose-400 flex items-center gap-3 italic">
                                ⚖️ Status Hukum (Update 2024):
                            </h4>
                            <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                Di banyak yurisdiksi (termasuk AS dan Uni Eropa), karya yang dihasilkan <strong>Murni oleh AI tanpa kontribusi manusia yang signifikan</strong> tidak bisa mendapatkan perlindungan hak cipta. Hak cipta hanya diberikan jika ada &quot;Creative Control&quot; yang kuat dari manusia (seperti editing berat atau prompt engineering yang sangat kompleks).
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Bias & Representasi",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-rose-500 font-bold text-xs uppercase tracking-widest text-center">02. Bias & Representasi</h3>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-slate-400 leading-relaxed italic">
                                AI dilatih menggunakan data dari internet, yang penuh dengan bias manusia. Jika kita tidak hati-hati, prompt kita bisa memperburuk stereotip tersebut.
                            </p>
                            <div className="space-y-4">
                                <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-3xl">
                                    <h6 className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-2">❌ Prompt Berpotensi Bias:</h6>
                                    <p className="text-xs italic text-slate-300">&quot;Buat gambar seorang CEO sukses yang sedang memimpin rapat.&quot;</p>
                                    <p className="text-[10px] text-red-500/50 mt-2 italic">*Hasil kemungkinan besar hanya menampilkan pria etnis tertentu.</p>
                                </div>
                                <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
                                    <h6 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">✅ Prompt Inklusif:</h6>
                                    <p className="text-xs italic text-slate-300">&quot;Buat gambar CEO sukses yang sedang memimpin rapat, tunjukkan keberagaman gender dan latar belakang etnis secara seimbang.&quot;</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 glass border border-white/5 rounded-[4rem] bg-white/2 shadow-2xl space-y-6">
                            <h5 className="text-xl font-bold text-white italic">Cara Mengurangi Bias:</h5>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li className="flex gap-4">
                                    <span className="text-rose-500 font-bold">1.</span>
                                    <span>Gunakan deskriptor spesifik (gender, umur, etnis) untuk memecah default bias model.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-rose-500 font-bold">2.</span>
                                    <span>Hindari kata sifat yang subjektif atau mengandung stereotip budaya.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-rose-500 font-bold">3.</span>
                                    <span>Gunakan teknik &quot;Counter-stereotyping&quot; dalam instruksi Anda.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Akademik & Integritas",
            content: (
                <div className="space-y-12 text-left">
                    <h3 className="text-rose-500 font-bold text-xs uppercase tracking-widest text-center">03. Integritas Akademik & Profesional</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {ethicalGuidelines.map((item, i) => (
                            <div key={i} className="p-8 glass border border-white/5 rounded-[3rem] bg-white/2 hover:bg-white/5 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 text-rose-500/20 font-black text-4xl italic">0{i+1}</div>
                                <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                                <p className="text-[10px] text-rose-500 font-black uppercase tracking-widest mb-4">{item.status}</p>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "CHALLENGE",
            title: "The Ethical Dilemma Challenge",
            content: (
                <div className="p-12 glass border border-rose-500/20 rounded-[4rem] space-y-8 relative overflow-hidden text-left bg-slate-900 shadow-2xl w-full">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                        <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-lg shadow-rose-500/30">ED</div>
                        <div>
                            <h4 className="font-bold text-2xl uppercase tracking-tighter italic text-white underline decoration-rose-500/30">Studi Kasus: &quot;The Style Clone&quot;</h4>
                            <p className="text-xs text-rose-400 font-black uppercase tracking-widest mt-1">Imitation vs. Plagiarism</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <p className="text-slate-200 text-lg leading-relaxed italic">
                            Seorang klien meminta Anda membuat ilustrasi menggunakan AI dengan instruksi: <strong>&quot;Buat gambar pemandangan kota dalam gaya lukisan spesifik seniman [Nama Seniman] yang masih aktif.&quot;</strong>
                        </p>
                        <div className="p-8 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                            <h6 className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Pertanyaan Refleksi:</h6>
                            <ol className="text-xs text-slate-400 list-decimal pl-4 space-y-2">
                                <li>Apakah ini etis dilakukan tanpa izin seniman tersebut?</li>
                                <li>Bagaimana Anda bisa memodifikasi prompt tersebut agar tetap terinspirasi namun tidak &quot;menjiplak&quot; secara identik?</li>
                                <li>Apakah Anda akan mencantumkan nama AI dalam hasil akhirnya?</li>
                            </ol>
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <div className="px-10 py-5 bg-rose-600 text-white rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer shadow-xl shadow-rose-500/20">Analisis Kasus</div>
                    </div>
                </div>
            )
        },
        {
            id: "FINAL",
            title: "The Human in the Loop",
            content: (
                <div className="text-center max-w-4xl mx-auto space-y-12 w-full">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-white italic underline underline-offset-12 decoration-rose-500/20 capitalize tracking-tight">The Human Anchor</h2>
                        <p className="text-slate-300 text-2xl font-light italic">&quot;AI has no morals. The ethics of AI are the ethics of the person using it.&quot;</p>
                    </div>
                    <div className="h-1 w-24 bg-rose-500 mx-auto rounded-full" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-12 italic">Technology is a mirror. Use it to reflect integrity, not just efficiency.</p>
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
                    <div className="w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-rose-500">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-rose-500/20"
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
                                <div className="flex items-center gap-4 text-rose-500 font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-rose-500"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('FINAL') ? 'Selesai' :
                                            `Bagian ${section.id.split('-')[1] || section.id}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-rose-500/20 hover:text-rose-500 text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-rose-500/20 to-transparent mt-24" />
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
