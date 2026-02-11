import ScrollReveal from './ScrollReveal';

export default function Materi4({ materi }) {
    return (
        <div className="space-y-32 pb-20 dark:text-slate-200 text-slate-900">
            {/* INTRO SECTION */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Pendahuluan
                    </div>
                    <div className="max-w-4xl space-y-6">
                        <h2 className="text-4xl font-serif font-bold dark:text-white leading-tight">Menulis dengan Presisi: Dokumen Teks</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            Dokumen teks formal bukan sekadar susunan kata, melainkan representasi dari niat, etika, dan profesionalisme. Dalam modul ini, kita akan mempelajari bagaimana AI dapat menjadi mitra penulisan (writing partner) yang handal untuk menghasilkan berbagai jenis dokumen formal dengan konteks yang tajam.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-indigo-200 dark:via-slate-800 to-transparent" />

            {/* PART 1: SURAT FORMAL */}
            <ScrollReveal>
                <section className="space-y-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-amber-600 dark:text-amber-400 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-amber-600 dark:bg-amber-400"></span> Bagian 01
                        </div>
                        <h2 className="text-3xl font-serif font-bold dark:text-white">Surat Resmi & Korespondensi</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* 1.1 Pengetahuan Dasar (Context) */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold dark:text-white flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 text-sm">1</span>
                                Konteks & Pengetahuan Dasar
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Untuk membuat surat yang tepat, Anda harus memberikan AI pengetahuan tentang:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    { t: 'Hierarki Organisasi', d: 'Siapa pengirim dan siapa penerima (jabatan/posisi).' },
                                    { t: 'Tujuan Surat', d: 'Apakah untuk permohonan, undangan, teguran, atau pemberitahuan?' },
                                    { t: 'Norma Budaya', d: 'Gaya bahasa (Sangat formal, Semi-formal, atau Bisnis Kasual).' },
                                    { t: 'Referensi Dokumen', d: 'Nomor surat sebelumnya atau lampiran yang terkait.' }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <div className="font-black text-amber-500 text-xs mt-1">✓</div>
                                        <div>
                                            <p className="font-bold text-sm dark:text-white">{item.t}</p>
                                            <p className="text-xs text-slate-500">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 1.2 Kerangka Prompt */}
                        <div className="p-8 bg-slate-950 rounded-[2.5rem] text-white space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-serif italic pointer-events-none">Draft</div>
                            <h4 className="text-indigo-400 font-bold text-xs uppercase tracking-widest">Kerangka Prompt Efektif</h4>
                            <div className="space-y-4 font-mono text-xs">
                                <p className="text-slate-500">{"// Rumus Prompt Surat"}</p>
                                <p><span className="text-amber-400">[Persona]</span>: Ahli administrasi perkantoran senior.</p>
                                <p><span className="text-amber-400">[Context]</span>: Perusahaan A ingin memohon izin penggunaan gedung ke Perusahaan B.</p>
                                <p><span className="text-amber-400">[Task]</span>: Draft surat resmi Bahasa Indonesia.</p>
                                <p><span className="text-amber-400">[Tone]</span>: Sangat hormat dan profesional.</p>
                            </div>
                            <div className="pt-6 border-t border-slate-800">
                                <p className="text-xs text-slate-400 italic">"Pastikan mencantumkan detail waktu, lokasi, dan alasan yang sangat logis."</p>
                            </div>
                        </div>
                    </div>

                    {/* 1.3 Examples */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4 shadow-sm">
                            <h5 className="font-bold dark:text-white uppercase text-xs tracking-widest text-slate-400">Contoh Prompt Dasar</h5>
                            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl font-sans text-sm italic text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                                "Tulis surat izin tidak masuk kerja karena sakit untuk atasan saya."
                            </div>
                            <p className="text-xs text-red-400 font-medium">Hasil: Terlalu umum, kurang detail medis/prosedur.</p>
                        </div>
                        <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4 shadow-xl border-l-4 border-l-emerald-500">
                            <h5 className="font-bold dark:text-white uppercase text-xs tracking-widest text-emerald-500">Contoh Prompt Kompleks (P-C-T-F)</h5>
                            <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl font-sans text-sm text-slate-700 dark:text-slate-300">
                                "Bertindaklah sebagai Sekretaris Eksekutif. Saya perlu mengirim surat resmi ke Dekan Fakultas Teknik UI. Konteksnya adalah permohonan kerjasama magang mahasiswa untuk 5 orang di divisi AI kami. Gunakan Bahasa Indonesia baku (EYD). Format harus mengikuti standar surat resmi dengan blok kiri. Jangan gunakan bahasa yang terlalu kaku tapi tetap tunjukkan rasa hormat yang tinggi."
                            </div>
                            <p className="text-xs text-emerald-600 font-medium">Hasil: Surat yang siap kirim dengan struktur institusi yang kuat.</p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

            {/* PART 2: LAMARAN KERJA */}
            <ScrollReveal>
                <section className="space-y-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-emerald-600 dark:bg-emerald-400"></span> Bagian 02
                        </div>
                        <h2 className="text-3xl font-serif font-bold dark:text-white">Lamaran Kerja & Cover Letter</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Knowledge', desc: 'Detail Skill, Pengalaman, dan Value Preposition diri sendiri.', icon: '🧠' },
                            { title: 'Job Description', desc: 'Kata kunci (Keywords) yang dicari oleh sistem ATS.', icon: '📑' },
                            { title: 'Company Culture', desc: 'Pemahaman tentang visi/misi perusahaan target.', icon: '🏢' }
                        ].map((card, i) => (
                            <div key={i} className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-4 hover:shadow-lg transition-all">
                                <div className="text-3xl">{card.icon}</div>
                                <h4 className="font-bold dark:text-white italic">{card.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-emerald-950 dark:bg-black rounded-[3rem] p-12 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-9xl font-serif font-black italic">ATS</div>
                        <div className="max-w-3xl space-y-8">
                            <h3 className="text-2xl font-serif font-bold">Rahasia Prompt Lamaran Kerja</h3>
                            <div className="space-y-6">
                                <p className="text-emerald-200 leading-relaxed italic border-l-2 border-emerald-500 pl-6">
                                    "Jangan menyuruh AI menebak siapa Anda. Berikan CV Anda sebagai referensi (Few-Shot) dan minta AI untuk 'menjahit' (stitching) profil Anda ke kebutuhan lowongan tersebut."
                                </p>
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-emerald-800 text-emerald-400 font-bold uppercase tracking-widest text-[10px]">
                                            <th className="py-4">Metode</th>
                                            <th className="py-4">Prompt Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300">
                                        <tr className="border-b border-emerald-900/50">
                                            <td className="py-4 font-bold">Highlighting</td>
                                            <td className="py-4 italic">"Fokuskan pada pengalaman saya menggunakan Python selama 3 tahun."</td>
                                        </tr>
                                        <tr className="border-b border-emerald-900/50">
                                            <td className="py-4 font-bold">ATS Optimization</td>
                                            <td className="py-4 italic">"Sertakan kata kunci dari deskripsi pekerjaan ini secara natural."</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-bold">Tone Matching</td>
                                            <td className="py-4 italic">"Buat terlihat antusias namun tetap rendah hati."</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Example Lamaran */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-center text-slate-400">Case Study: Cover Letter Mastery</h4>
                        <div className="p-8 bg-slate-50 dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/30 rounded-[2.5rem] relative">
                            <div className="absolute top-4 right-8 text-[10px] font-bold text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full uppercase">Top Rated Prompt</div>
                            <p className="font-mono text-sm dark:text-slate-300 leading-relaxed">
                                &quot;Saya akan melampirkan profil LinkedIn saya dan deskripsi pekerjaan untuk posisi Data Analyst di GoTo. Silakan bertindak sebagai pakar karir. Tuliskan surat lamaran (Cover Letter) yang menonjolkan bagaimana proyek tugas akhir saya tentang 'Analisis Sentimen' relevan dengan kebutuhan fitur review mereka. Berikan batasan maksimal 250 kata dan gunakan struktur: Hook, Body (The Why), dan CTA.&quot;
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

            {/* PART 3: PROPOSAL PENELITIAN (REFINED) */}
            <ScrollReveal>
                <section className="space-y-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-indigo-600 dark:bg-indigo-400"></span> Bagian 03
                        </div>
                        <h2 className="text-3xl font-serif font-bold dark:text-white">Deep Dive: Proposal Penelitian</h2>
                        <p className="text-slate-500 max-w-2xl">Penulisan akademik membutuhkan akurasi logika yang tinggi. Ikuti 7 tahapan berikut untuk membangun proposal yang solid bersama AI.</p>
                    </div>

                    <div className="space-y-12 relative before:absolute before:left-8 before:top-8 before:bottom-8 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                        {[
                            {
                                step: 'Tahap 1: Gap & Fenomena',
                                desc: 'Identifikasi masalah atau celah pengetahuan yang belum terjawab oleh penelitian sebelumnya.',
                                knowledge: 'Judul/Abstrak 5-10 jurnal terbaru di bidang terkait.',
                                prompt: 'Bertindaklah sebagai Research Consultant. Saya akan memberikan 5 abstrak jurnal mengenai "AI dalam Pendidikan". Analisis celah (gap) penelitian apa yang belum dibahas dari kelima abstrak tersebut, terutama yang berkaitan dengan motivasi belajar siswa di daerah terpencil.'
                            },
                            {
                                step: 'Tahap 2: Merumuskan Pertanyaan (RQ)',
                                desc: 'Mengubah fenomena menjadi pertanyaan penelitian yang operasional dan terukur.',
                                knowledge: 'Variabel yang ingin diteliti (Independen & Dependen).',
                                prompt: 'Berdasarkan gap tentang "kurangnya interaksi sosial dalam pembelajaran AI", rumuskan 3 pertanyaan penelitian (Research Questions) yang menggunakan pendekatan kualitatif naratif.'
                            },
                            {
                                step: 'Tahap 3: Sintesis Literatur',
                                desc: 'Menghubungkan berbagai teori untuk membangun argumen yang kokoh.',
                                knowledge: 'Nama-nama tokoh kunci atau teori utama (misal: Constructivism, TPACK).',
                                prompt: 'Sintesiskan hubungan antara Teori Penerimaan Teknologi (TAM) dengan Teori Motivasi Intrinsik dalam konteks penggunaan chatbot oleh guru. Hindari hanya merangkum, buatlah perbandingan antar kedua teori tersebut.'
                            },
                            {
                                step: 'Tahap 4: Kerangka Teoretis',
                                desc: 'Membangun landasan berpikir atau hipotesis penelitian.',
                                knowledge: 'Alur logika dari masalah ke solusi teoretis.',
                                prompt: 'Gambarkan kerangka teoretis dalam bentuk poin-poin logis untuk proposal mengenai "Dampak Generative AI terhadap Integritas Akademik". Mulai dari faktor pendorong hingga variabel moderasi.'
                            },
                            {
                                step: 'Tahap 5: Desain Metodologi',
                                desc: 'Langkah teknis bagaimana data akan diambil, divalidasi, dan dianalisis.',
                                knowledge: 'Target populasi, sampel, dan instrumen penelitian.',
                                prompt: 'Rancang metodologi penelitian Mix-Method. Jelaskan secara mendalam tahap kuantitatif (survei) dan tahap kualitatif (wawancara mendalam), termasuk kriteria pemilihan informan yang kredibel.'
                            },
                            {
                                step: 'Tahap 6: Urgensi & Kontribusi',
                                desc: 'Menonjolkan nilai penting penelitian bagi ilmu pengetahuan dan praktisi.',
                                knowledge: 'Stakeholder yang akan mendapat manfaat (Pemerintah, Sekolah, Industri).',
                                prompt: 'Tuliskan bagian "Manfaat Penelitian" yang menonjolkan kontribusi teoritis bagi literatur AI dan kontribusi praktis bagi pembuat kebijakan kurikulum di Indonesia.'
                            },
                            {
                                step: 'Tahap 7: Refinement & Sitasi',
                                desc: 'Finalisasi gaya bahasa akademik dan akurasi referensi.',
                                knowledge: 'Gaya selingkung yang diminta (APA, MLA, IEEE).',
                                prompt: 'Review draf latar belakang ini. Perbaiki agar terdengar lebih akademik, objektif, dan formal. Pastikan semua rujukan mengikuti standar APA 7th Edition. Jangan gunakan kata ganti orang pertama (Saya/Kami).'
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative pl-16 group">
                                <div className="absolute left-0 top-0 w-16 h-16 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center font-serif font-black text-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all shadow-sm">
                                    {i + 1}
                                </div>
                                <div className="grid md:grid-cols-2 gap-8 items-start">
                                    <div className="space-y-4 pt-2">
                                        <h4 className="text-xl font-bold dark:text-white">{item.step}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-500">
                                            <span className="w-4 h-px bg-indigo-500"></span> Input: {item.knowledge}
                                        </div>
                                    </div>
                                    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-3 relative group-hover:border-indigo-200 dark:group-hover:border-indigo-900/50 transition-all">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gold Standard Prompt</div>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">&quot;{item.prompt}&quot;</p>
                                        <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-600 px-2 py-1 rounded-md font-bold uppercase">Pro Choice</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 bg-indigo-600 rounded-[2.5rem] shadow-xl text-white text-center space-y-4 mt-8">
                        <p className="text-sm font-medium italic">&quot;Dalam penelitian, AI bukan pengganti otak peneliti, melainkan akselerator untuk mengorganisir kompleksitas data dan teori.&quot;</p>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">— Academic Excellence Guideline</p>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

            {/* PART 4: PROPOSAL PROJEK */}
            <ScrollReveal>
                <section className="space-y-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-purple-600 dark:text-purple-400 font-bold tracking-widest text-sm uppercase">
                            <span className="w-8 h-px bg-purple-600 dark:bg-purple-400"></span> Bagian 04
                        </div>
                        <h2 className="text-3xl font-serif font-bold dark:text-white">Proposal Projek (Bisnis/Praktis)</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { l: 'Business Goal', v: 'Apa cuannya?', c: 'text-indigo-500' },
                            { l: 'Budgeting', v: 'Berapa biayanya?', c: 'text-emerald-500' },
                            { l: 'Timeline', v: 'Kapan selesainya?', c: 'text-amber-500' },
                            { l: 'Risk Management', v: 'Apa bahayanya?', c: 'text-red-500' }
                        ].map((item, i) => (
                            <div key={i} className="p-6 text-center bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <p className={`text-[10px] font-black uppercase tracking-tighter mb-2 ${item.c}`}>{item.l}</p>
                                <p className="text-sm font-bold dark:text-white italic">{item.v}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-xl font-serif font-bold dark:text-white">Komponen Context yang Krusial</h4>
                            <p className="text-sm text-slate-500 italic">Agar AI dapat menyusun proposal projek yang meyakinkan klien:</p>
                            <div className="space-y-4">
                                <div className="p-4 bg-white dark:bg-slate-900 border-l-4 border-indigo-500 rounded-r-2xl shadow-sm">
                                    <p className="text-xs font-bold dark:text-white mb-1">Pain Points:</p>
                                    <p className="text-xs text-slate-500 leading-relaxed italic">"Jelaskan bahwa klien sedang mengalami penurunan efisiensi 30% pada sistem logistik mereka."</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-900 border-l-4 border-emerald-500 rounded-r-2xl shadow-sm">
                                    <p className="text-xs font-bold dark:text-white mb-1">Unique Selling Point (USP):</p>
                                    <p className="text-xs text-slate-500 leading-relaxed italic">"Sistem kita menggunakan AI untuk prediksi rute tercepat."</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-900 border-l-4 border-amber-500 rounded-r-2xl shadow-sm">
                                    <p className="text-xs font-bold dark:text-white mb-1">Success Metric:</p>
                                    <p className="text-xs text-slate-500 leading-relaxed italic">"Target penghematan biaya operasional sebesar 15% dalam 6 bulan."</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xl font-serif font-bold dark:text-white italic">The Ultimate Project Proposal Prompt</h4>
                            <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl space-y-4">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                                </div>
                                <p className="text-xs text-slate-400 font-mono leading-relaxed">
                                    &quot;Anda adalah Konsultan Bisnis Senior. Tuliskan proposal projek untuk klien potensial (Bank BCA) mengenai implementasi Chatbot Layanan Pelanggan. Fokus pada efisiensi waktu respon. Gunakan struktur: Background, Solution, ROI Analysis, dan Roadmap. Jangan gunakan bahasa yang terlalu teknis, fokus pada manfaat bisnis. Gunakan gaya bahasa persuasif dan visioner.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

            {/* FINAL SUMMARY / DISKUSI */}
            <ScrollReveal>
                <section className="text-center max-w-3xl mx-auto space-y-12 py-20">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-serif font-bold dark:text-white italic underline underline-offset-12 decoration-indigo-500/20">Refleksi Belajar</h2>
                        <p className="text-slate-500 leading-relaxed">Dari ke-4 tipe dokumen di atas, kesamaan kuncinya adalah: **Detail Konteks menentukan Kualitas Output.**</p>
                    </div>

                    <div className="grid gap-6">
                        <div className="p-10 bg-indigo-600 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-serif italic pointer-events-none group-hover:scale-110 transition-transform">Task</div>
                            <h4 className="font-bold text-xl mb-4 italic">Tugas Pekan Ini:</h4>
                            <p className="text-indigo-100 text-sm leading-relaxed mb-8 max-w-lg mx-auto italic">
                                "Pilih salah satu dari 4 dokumen tersebut. Buatlah prompt lengkap menggunakan framework P-C-T-F untuk kebutuhan Anda sendiri (misal: lamaran magang atau proposal penelitian skripsi). Lampirkan prompt tersebut di forum diskusi."
                            </p>
                            <div className="flex justify-center gap-4">
                                <div className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">Submit Prompt</div>
                                <div className="px-6 py-2 bg-white text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">Lihat Contoh</div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
