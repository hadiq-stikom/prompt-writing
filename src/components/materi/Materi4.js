'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import PresentationMode from './PresentationMode';

export default function Materi4({ materi }) {
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
            title: "Pendahuluan",
            content: (
                <div className="max-w-4xl space-y-6 text-left">
                    <h2 className="text-5xl font-bold text-white leading-tight tracking-tighter italic decoration-primary/20 underline underline-offset-16">Menulis dengan Presisi: Dokumen Teks</h2>
                    <p className="text-slate-200 leading-relaxed text-xl text-justify font-medium">
                        Dokumen teks formal bukan sekadar susunan kata, melainkan representasi dari niat, etika, dan profesionalisme. Dalam modul ini, kita akan mempelajari bagaimana AI dapat menjadi mitra penulisan (writing partner) yang handal untuk menghasilkan berbagai jenis dokumen formal dengan konteks yang tajam.
                    </p>
                </div>
            )
        },
        {
            id: "01",
            title: "Surat Resmi & Korespondensi",
            content: (
                <div className="space-y-12 text-left">
                    <h2 className="text-3xl font-bold text-white underline decoration-primary/10 underline-offset-12">Surat Resmi & Korespondensi</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-white flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 text-sm border border-amber-500/20">1</span>
                                Konteks & Pengetahuan Dasar
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { t: 'Hierarki Organisasi', d: 'Siapa pengirim dan siapa penerima (jabatan/posisi).' },
                                    { t: 'Tujuan Surat', d: 'Apakah untuk permohonan, undangan, teguran, atau pemberitahuan?' },
                                    { t: 'Norma Budaya', d: 'Gaya bahasa (Sangat formal, Semi-formal, atau Bisnis Kasual).' },
                                    { t: 'Referensi Dokumen', d: 'Nomor surat sebelumnya atau lampiran yang terkait.' }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start p-4 bg-slate-800/40 border border-white/5 rounded-2xl">
                                        <div className="font-black text-amber-500 text-xs mt-1">✓</div>
                                        <div>
                                            <p className="font-bold text-sm text-white">{item.t}</p>
                                            <p className="text-xs text-slate-300/80">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-[2.5rem] text-white space-y-8 relative overflow-hidden shadow-2xl">
                            <h4 className="text-primary/80 font-bold text-xs uppercase tracking-widest">Kerangka Prompt Efektif</h4>
                            <div className="space-y-4 font-mono text-xs">
                                <p className="text-slate-300">{"// Rumus Prompt Surat"}</p>
                                <p><span className="text-amber-400">[Persona]</span>: Ahli administrasi perkantoran senior.</p>
                                <p><span className="text-amber-400">[Context]</span>: Perusahaan A ingin memohon izin penggunaan gedung ke Perusahaan B.</p>
                                <p><span className="text-amber-400">[Task]</span>: Draft surat resmi Bahasa Indonesia.</p>
                                <p><span className="text-amber-400">[Tone]</span>: Sangat hormat dan profesional.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "01-EXAMPLES",
            title: "Contoh Prompt Surat Resmi",
            content: (
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="p-8 glass border border-white/5 rounded-3xl space-y-4 shadow-sm">
                        <h5 className="font-bold text-white uppercase text-xs tracking-widest text-slate-300">Contoh Prompt Dasar</h5>
                        <div className="p-4 bg-slate-950 rounded-xl font-sans text-sm italic text-slate-200 border border-white/5">
                            &quot;Tulis surat izin tidak masuk kerja karena sakit untuk atasan saya.&quot;
                        </div>
                        <p className="text-xs text-red-400 font-medium">Hasil: Terlalu umum, kurang detail medis/prosedur.</p>
                    </div>
                    <div className="p-8 glass border border-emerald-500/20 rounded-3xl space-y-4 shadow-xl border-l-4 border-l-emerald-500">
                        <h5 className="font-bold text-white uppercase text-xs tracking-widest text-emerald-500">Contoh Prompt Kompleks (P-C-T-F)</h5>
                        <div className="p-4 bg-emerald-500/10 rounded-xl font-sans text-sm text-slate-300">
                            &quot;Bertindaklah sebagai Sekretaris Eksekutif. Saya perlu mengirim surat resmi ke Dekan Fakultas Teknik UI. Konteksnya adalah permohonan kerjasama magang mahasiswa untuk 5 orang di divisi AI kami. Gunakan Bahasa Indonesia baku (EYD). Format harus mengikuti standar surat resmi dengan blok kiri. Jangan gunakan bahasa yang terlalu kaku tapi tetap tunjukkan rasa hormat yang tinggi.&quot;
                        </div>
                        <p className="text-xs text-emerald-500 font-medium">Hasil: Surat yang siap kirim dengan struktur institusi yang kuat.</p>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Lamaran Kerja & Cover Letter",
            content: (
                <div className="space-y-12 text-left">
                    <h2 className="text-3xl font-serif font-bold text-white">Lamaran Kerja & Cover Letter</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Knowledge', desc: 'Detail Skill, Pengalaman, dan Value Preposition diri sendiri.', icon: '🧠' },
                            { title: 'Job Description', desc: 'Kata kunci (Keywords) yang dicari oleh sistem ATS.', icon: '📑' },
                            { title: 'Company Culture', desc: 'Pemahaman tentang visi/misi perusahaan target.', icon: '🏢' }
                        ].map((card, i) => (
                            <div key={i} className="p-8 glass border border-white/5 rounded-3xl space-y-4 transition-all duration-300">
                                <div className="text-4xl">{card.icon}</div>
                                <h4 className="font-bold text-white italic text-lg">{card.title}</h4>
                                <p className="text-sm text-slate-200 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "02-ATS",
            title: "Rahasia Prompt Lamaran Kerja",
            content: (
                <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-12 text-white overflow-hidden relative shadow-2xl text-left w-full">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-9xl font-black italic">ATS</div>
                    <div className="max-w-3xl space-y-8 relative z-10">
                        <h3 className="text-2xl font-bold">Rahasia Prompt Lamaran Kerja</h3>
                        <div className="space-y-6">
                            <p className="text-emerald-400 leading-relaxed italic border-l-4 border-emerald-500 pl-6 text-lg">
                                &quot;Jangan menyuruh AI menebak siapa Anda. Berikan CV Anda sebagai referensi (Few-Shot) dan minta AI untuk &apos;menjahit&apos; (stitching) profil Anda ke kebutuhan lowongan tersebut.&quot;
                            </p>
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-white/10 text-emerald-400 font-bold uppercase tracking-widest text-[10px]">
                                        <th className="py-4">Metode</th>
                                        <th className="py-4">Prompt Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-200">
                                    <tr className="border-b border-white/5">
                                        <td className="py-4 font-bold">Highlighting</td>
                                        <td className="py-4 italic">&quot;Fokuskan pada pengalaman saya menggunakan Python selama 3 tahun.&quot;</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-4 font-bold">ATS Optimization</td>
                                        <td className="py-4 italic">&quot;Sertakan kata kunci dari deskripsi pekerjaan ini secara natural.&quot;</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 font-bold">Tone Matching</td>
                                        <td className="py-4 italic">&quot;Buat terlihat antusias namun tetap rendah hati.&quot;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Proposal Penelitian",
            content: (
                <div className="space-y-6 text-left">
                    <h2 className="text-3xl font-bold text-white">Proposal Penelitian</h2>
                    <p className="text-slate-200 max-w-2xl">Penulisan akademik membutuhkan akurasi logika yang tinggi. Ikuti 7 tahapan berikut untuk membangun proposal yang solid bersama AI.</p>
                </div>
            )
        },
        // We split the stages into multiple slides for presentation but grouped here for main view structure logic
        {
            id: "03-STAGES-1-3",
            title: "Proposal: Tahap 1-3",
            content: (
                <div className="grid md:grid-cols-3 gap-6 text-left">
                    {[
                        {
                            step: 'Tahap 1: Gap & Fenomena',
                            desc: 'Identifikasi masalah atau celah pengetahuan.',
                            prompt: 'Analisis celah (gap) penelitian apa yang belum dibahas...'
                        },
                        {
                            step: 'Tahap 2: Rumusan Pertanyaan',
                            desc: 'Mengubah fenomena menjadi pertanyaan operasional.',
                            prompt: 'Rumuskan 3 pertanyaan penelitian (Research Questions)...'
                        },
                        {
                            step: 'Tahap 3: Sintesis Literatur',
                            desc: 'Menghubungkan berbagai teori untuk membangun argumen.',
                            prompt: 'Sintesiskan hubungan antara Teori TAM dengan Teori Motivasi...'
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-slate-800/40 border border-white/5 rounded-3xl space-y-4">
                            <h4 className="font-bold text-primary">{item.step}</h4>
                            <p className="text-xs text-slate-300">{item.desc}</p>
                            <div className="p-4 bg-slate-950/50 rounded-xl">
                                <p className="text-[10px] italic text-slate-400">&quot;{item.prompt}&quot;</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: "03-STAGES-4-7",
            title: "Proposal: Tahap 4-7",
            content: (
                <div className="grid md:grid-cols-4 gap-4 text-left">
                    {[
                        { step: '4: Kerangka Teoretis', prompt: 'Gambarkan alur logika...' },
                        { step: '5: Desain Metodologi', prompt: 'Rancang metodologi Mix-Method...' },
                        { step: '6: Urgensi & Kontribusi', prompt: 'Tuliskan bagian Manfaat Penelitian...' },
                        { step: '7: Refinement & Sitasi', prompt: 'Review draf latar belakang ini...' }
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-slate-800/40 border border-white/5 rounded-2xl space-y-3">
                            <h4 className="font-bold text-primary text-sm">{item.step}</h4>
                            <div className="p-3 bg-slate-950/50 rounded-lg">
                                <p className="text-[9px] italic text-slate-400">&quot;{item.prompt}&quot;</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: "04",
            title: "Proposal Projek (Bisnis/Praktis)",
            content: (
                <div className="space-y-12 text-left">
                    <h2 className="text-3xl font-bold text-white">Proposal Projek (Bisnis/Praktis)</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { l: 'Business Goal', v: 'Apa cuannya?', c: 'text-indigo-400' },
                            { l: 'Budgeting', v: 'Berapa biayanya?', c: 'text-emerald-400' },
                            { l: 'Timeline', v: 'Kapan selesainya?', c: 'text-amber-400' },
                            { l: 'Risk Management', v: 'Apa bahayanya?', c: 'text-red-400' }
                        ].map((item, i) => (
                            <div key={i} className="p-6 text-center glass border border-white/5 rounded-3xl">
                                <p className={`text-[10px] font-black uppercase tracking-tighter mb-2 ${item.c}`}>{item.l}</p>
                                <p className="text-sm font-bold text-white italic">{item.v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: "04-ULTIMATE",
            title: "The Ultimate Project Prompt",
            content: (
                <div className="grid md:grid-cols-2 gap-12 text-left items-center">
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-white">Komponen Context yang Krusial</h4>
                        <div className="space-y-4">
                            <div className="p-4 glass border-l-4 border-indigo-500 rounded-r-2xl">
                                <p className="text-xs font-bold text-white mb-1">Pain Points:</p>
                                <p className="text-xs text-slate-300 leading-relaxed italic">&quot;Penurunan efisiensi 30% pada sistem logistik.&quot;</p>
                            </div>
                            <div className="p-4 glass border-l-4 border-emerald-500 rounded-r-2xl">
                                <p className="text-xs font-bold text-white mb-1">Success Metric:</p>
                                <p className="text-xs text-slate-300 leading-relaxed italic">&quot;Target penghematan biaya operasional 15% dalam 6 bulan.&quot;</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] shadow-2xl space-y-4">
                        <p className="text-xs text-slate-200 font-mono leading-relaxed">
                            &quot;Anda adalah Konsultan Bisnis Senior. Tuliskan proposal projek untuk klien potensial (Bank BCA) mengenai implementasi Chatbot Layanan Pelanggan. Fokus pada efisiensi waktu respon...&quot;
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "REFLEKSI",
            title: "Refleksi Belajar",
            content: (
                <div className="text-center max-w-3xl mx-auto space-y-12 w-full">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-white italic underline underline-offset-12 decoration-primary/20">Refleksi Belajar</h2>
                        <p className="text-slate-200 leading-relaxed text-lg">Dari ke-4 tipe dokumen di atas, kesamaan kuncinya adalah: <br /><span className="text-primary font-black uppercase text-2xl tracking-tight">Detail Konteks menentukan Kualitas Output.</span></p>
                    </div>
                    <div className="p-10 bg-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <h4 className="font-bold text-2xl mb-4 italic">Tugas Pekan Ini:</h4>
                        <p className="text-indigo-100 text-sm leading-relaxed italic max-w-lg mx-auto">
                            &quot;Pilih salah satu dari 4 dokumen tersebut. Buatlah prompt lengkap menggunakan framework P-C-T-F untuk kebutuhan Anda sendiri.&quot;
                        </p>
                    </div>
                </div>
            )
        }
    ];

    const sectionsData = getSections();

    return (
        <div className="space-y-24 pb-20 dark:text-slate-200">
            {/* Presentation Controls */}
            <div className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/10 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">present_to_all</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold leading-none">Mode Presentasi</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Gunakan slide untuk presentasi di depan kelas</p>
                    </div>
                </div>
                <button
                    onClick={() => openPresentation(0)}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-primary/20"
                >
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                    Mulai Presentasi
                </button>
            </div>

            {sectionsData.map((section, index) => (
                <div key={section.id}>
                    <ScrollReveal>
                        <section className={`space-y-8 group/section relative`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase">
                                    <span className="w-8 h-px bg-primary"></span>
                                    {section.id.includes('INTRO') ? 'Pendahuluan' :
                                        section.id.includes('REFLEKSI') ? 'Refleksi' :
                                            `Bagian ${section.id.split('-')[0]}`}
                                </div>
                                <button
                                    onClick={() => openPresentation(index)}
                                    className="opacity-0 group-hover/section:opacity-100 transition-opacity bg-white/5 hover:bg-primary/20 hover:text-primary text-slate-400 p-2 rounded-lg border border-white/10 flex items-center gap-2 px-3"
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
                        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-primary/20 to-transparent mt-24" />
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
