'use client';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

export default function Materi7({ materi }) {
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

    return (
        <div className="space-y-32 pb-20 text-white">
            {/* 0. INTRO */}
            <ScrollReveal>
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-pink-500 font-bold tracking-widest text-sm uppercase">
                        <span className="w-8 h-px bg-pink-500"></span> Pertemuan 7: Prompt Desain Grafis
                    </div>
                    <div className="max-w-4xl space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight underline decoration-pink-500/20 underline-offset-16 italic tracking-tight">The Visual Storyteller</h2>
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed text-justify font-medium">
                            Desain grafis bukan lagi sekadar keterampilan teknis perangkat lunak, melainkan kemampuan untuk <strong>Memvisualisasikan Imajinasi melalui Kata</strong>. Di sini, penguasaan bahasa visual menentukan kualitas karya Anda.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs font-bold text-pink-300">Generative Art</span>
                            <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs font-bold text-pink-300">Komposisi Visual</span>
                            <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs font-bold text-pink-300">Iterasi Kreatif</span>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 1. DEEP DIVE: VISUAL VOCABULARY */}
            <ScrollReveal>
                <section className="space-y-12">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <div className="space-y-2">
                            <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest">01. Vokabular Visual (Fundamental)</h3>
                            <p className="text-2xl font-bold">Mendikte Seni dengan Presisi Teoretis</p>
                        </div>
                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Theory meets Prompting</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Lighting */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="p-6 md:p-8 glass rounded-4xl md:rounded-[3rem] border border-white/5 space-y-6 group hover:border-pink-500/30 transition-all cursor-default shadow-2xl shadow-transparent hover:shadow-pink-500/5"
                        >
                            <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 text-xl font-bold">💡</div>
                            <h4 className="font-bold text-xl uppercase tracking-tighter">Pencahayaan (Lighting)</h4>
                            <p className="text-sm text-slate-300 leading-relaxed text-justify">
                                Pencahayaan menentukan emosi sebuah gambar. Gunakan <strong>Cinematic lighting</strong> untuk drama, <strong>Soft studio lighting</strong> untuk produk elegan, atau <strong>Golden hour</strong> untuk suasana hangat alami.
                            </p>
                            <p className="text-xs font-mono text-pink-300 italic">"Pencahayaan volumetrik, cahaya neon siber, pantulan cahaya pada permukaan basah."</p>
                        </motion.div>
                        {/* Composition */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="p-6 md:p-8 glass rounded-4xl md:rounded-[3rem] border border-white/5 space-y-6 group hover:border-purple-500/30 transition-all cursor-default shadow-2xl shadow-transparent hover:shadow-purple-500/5"
                        >
                            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 text-xl font-bold">📐</div>
                            <h4 className="font-bold text-xl uppercase tracking-tighter">Komposisi & Sudut</h4>
                            <p className="text-sm text-slate-300 leading-relaxed text-justify">
                                Sudut pandang kamera mengubah persepsi objek. <strong>Bird's eye view</strong> untuk skala luas, <strong>Macro shot</strong> untuk detail intim, atau <strong>Low angle</strong> untuk memberikan kesan megah dan dominan.
                            </p>
                            <p className="text-xs font-mono text-purple-300 italic">"Sudut pandang mata burung, bidikan makro sedalam f/1.8, simetri ultra-lebar."</p>
                        </motion.div>
                        {/* Artistic Style */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="p-6 md:p-8 glass rounded-4xl md:rounded-[3rem] border border-white/5 space-y-6 group hover:border-indigo-500/30 transition-all cursor-default shadow-2xl shadow-transparent hover:shadow-indigo-500/5"
                        >
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 text-xl font-bold">🎨</div>
                            <h4 className="font-bold text-xl uppercase tracking-tighter">Gaya & Pergerakan Seni</h4>
                            <p className="text-sm text-slate-300 leading-relaxed text-justify">
                                Referensi gaya seni adalah kunci pintas estetika. Dari <strong>Minimalisme Bauhaus</strong> yang bersih, <strong>Brutalisme</strong> yang kasar, hingga <strong>Glassmorphism</strong> modern yang transparan.
                            </p>
                            <p className="text-xs font-mono text-indigo-300 italic">"Gaya desain Bauhaus, seni siberpunk futuristik, ilustrasi isometrik 3D."</p>
                        </motion.div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 2. CASE STUDIES: DIVERSE DESIGN PRODUCTS */}
            <ScrollReveal>
                <section className="space-y-16">
                    <div className="px-8 py-4 glass rounded-full border border-white/10 inline-block">
                        <h3 className="text-pink-500 font-bold text-xs uppercase tracking-widest">02. Studi Kasus Produk Desain (Trending)</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Case 1: Logo & Branding */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="p-6 md:p-10 bg-slate-900 border border-white/10 rounded-[2.5rem] md:rounded-[4rem] space-y-8 relative overflow-hidden group cursor-default shadow-2xl shadow-transparent hover:shadow-pink-500/5"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <div className="w-16 h-16 border-2 border-pink-500 rounded-full animate-pulse" />
                            </div>
                            <div className="space-y-4">
                                <h5 className="text-xs font-black text-pink-400 uppercase tracking-[0.3em]">Corporate Identity</h5>
                                <h4 className="text-2xl font-bold italic tracking-tight text-white">Logo Startup Teknologi</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">Fokus pada kesederhanaan, skalabilitas, dan simbolisme yang kuat.</p>
                                <div className="p-6 bg-slate-950/50 rounded-3xl border border-white/5 space-y-3 font-mono text-xs">
                                    <p className="text-pink-400">{"// Prompt Utama (PCTF)"}</p>
                                    <p className="text-slate-200">"Sbg Desainer Logo Profesional, buat logo minimalis untuk 'Stellar' (startup eksplorasi ruang angkasa). Gabungkan simbol kompas dan bintang, gaya vektor datar (*flat design*), monokromatik, latar belakang putih bersih, resolusi tinggi (Format)."</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Case 2: Poster Event (Trending Style) */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="p-6 md:p-10 glass border border-white/10 rounded-[2.5rem] md:rounded-[4rem] space-y-8 relative overflow-hidden group bg-white/2 cursor-default shadow-2xl shadow-transparent hover:shadow-purple-500/5"
                        >
                            <div className="space-y-4">
                                <h5 className="text-xs font-black text-purple-400 uppercase tracking-[0.3em]">Event Marketing</h5>
                                <h4 className="text-2xl font-bold italic tracking-tight text-white">Poster Festival Musik Retro</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">Menggunakan gaya *New Retro Wave* dengan tipografi tebal dan warna kontras.</p>
                                <div className="p-6 bg-slate-950/50 rounded-3xl border border-white/5 space-y-3 font-mono text-xs">
                                    <p className="text-purple-400">{"// Prompt Utama (PCTF)"}</p>
                                    <p className="text-slate-200">"Poster konser festival musik 80-an, gaya *Vaporwave*, warna neon pink dan ungu, tekstur kaset lama, tipografi tebal bergaya chrome, latar belakang gedung pencakar langit siberpunk, resolusi 8k, rasio aspek 9:16 (Format)."</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Case 3: Marketing Social Media */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="p-6 md:p-10 glass border border-white/10 rounded-[2.5rem] md:rounded-[4rem] space-y-8 relative overflow-hidden group bg-white/2 cursor-default shadow-2xl shadow-transparent hover:shadow-indigo-500/5"
                        >
                            <div className="space-y-4">
                                <h5 className="text-xs font-black text-indigo-400 uppercase tracking-[0.3em]">Social Media Ads</h5>
                                <h4 className="text-2xl font-bold italic tracking-tight text-white">Iklan Instagram Produk Mewah</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">Menonjolkan estetika premium dengan pencahayaan studio yang lembut.</p>
                                <div className="p-6 bg-slate-950/50 rounded-3xl border border-white/5 space-y-3 font-mono text-xs">
                                    <p className="text-indigo-400">{"// Prompt Utama (PCTF)"}</p>
                                    <p className="text-slate-200">"Foto sinematik botol parfum kaca mewah di atas permukaan marmer, dikelilingi bunga liar estetik, pencahayaan studio lembut, fokus tajam pada detail botol, latar belakang bokeh buram, gaya minimalis Zen, rasio 4:5 untuk feed Instagram (Format)."</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Case 4: 3D Assets/Characters */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="p-6 md:p-10 bg-slate-900 border border-white/10 rounded-[2.5rem] md:rounded-[4rem] space-y-8 relative overflow-hidden group cursor-default shadow-2xl shadow-transparent hover:shadow-emerald-500/5"
                        >
                            <div className="space-y-4">
                                <h5 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Character & Game Assets</h5>
                                <h4 className="text-2xl font-bold italic tracking-tight text-white">Karakter 3D Lucu (Claymorphism)</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">Tren desain saat ini yang menggabungkan bentuk bulat dan material seperti tanah liat.</p>
                                <div className="p-6 bg-slate-950/50 rounded-3xl border border-white/5 space-y-3 font-mono text-xs">
                                    <p className="text-emerald-400">{"// Prompt Utama (PCTF)"}</p>
                                    <p className="text-slate-200">"Karakter astronot kecil yang imut, gaya klaymorfisme (*claymorphism*), render 3D menggunakan Octane, warna-warna pastel, pencahayaan global yang lembut, resolusi tinggi, tanpa latar belakang (Format)."</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 3. TOOLS REVIEW & RECOMMENDATIONS */}
            <ScrollReveal>
                <section className="space-y-16">
                    <div className="text-center space-y-4 px-4">
                        <h3 className="text-3xl md:text-4xl font-bold italic tracking-tight">AI Graphic Tools Review 2024</h3>
                        <p className="text-pink-400/80 uppercase tracking-widest text-xs font-black">Memilih Senjata yang Tepat untuk Setiap Tugas Desain</p>
                    </div>

                    <div className="grid gap-6 px-4 md:px-0">
                        {tools.map((tool, i) => (
                            <div key={i} className="p-6 md:p-8 glass border border-white/5 rounded-[2.5rem] md:rounded-[3rem] hover:bg-white/2 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="grid md:grid-cols-4 gap-6 md:gap-8 items-center">
                                    <div>
                                        <h5 className="text-xl font-bold dark:text-white">{tool.name}</h5>
                                        <p className="text-xs text-pink-500 font-black uppercase tracking-widest mt-1">{tool.type}</p>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <p className="text-sm italic leading-relaxed"><strong className="text-emerald-400 text-xs">Kelebihan:</strong> {tool.pros}</p>
                                        <p className="text-sm italic leading-relaxed"><strong className="text-red-400 text-xs">Kekurangan:</strong> {tool.cons}</p>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                                        <p className="text-[10px] text-slate-400 uppercase font-black mb-2 tracking-widest">Cocok Untuk:</p>
                                        <p className="text-xs text-slate-200 font-medium leading-relaxed">{tool.suitability}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            {/* RECOMMENDATION BOX */}
            <ScrollReveal>
                <section className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-linear-to-br from-pink-500 to-indigo-600 shadow-2xl relative overflow-hidden group mx-4 md:mx-0">
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-3xl m-1 rounded-[2.3rem] md:rounded-[3.8rem]" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="text-6xl md:text-8xl">💡</div>
                        <div className="space-y-6">
                            <h4 className="text-2xl md:text-3xl font-bold italic">Rekomendasi untuk Kuliah Ini</h4>
                            <p className="text-slate-200 leading-relaxed text-justify text-sm md:text-base">
                                Untuk kebutuhan praktikum kita, saya merekomendasikan <strong>DALL-E 3 (via Bing Image Creator)</strong> untuk eksplorasi konsep cepat karena kemampuannya memahami instruksi bahasa Indonesia yang luar biasa dan gratis. Namun, bagi mahasiswa yang ingin hasil <strong>Setingkat Portfolio Profesional</strong> dengan estetika tanpa cacat, <strong>Midjourney</strong> tetap menjadi standar emas industri saat ini.
                            </p>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* 4. ADVANCED CONTROL: NEGATIVE PROMPTING */}
            <ScrollReveal>
                <section className="space-y-20 px-4 md:px-0">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div className="p-8 md:p-10 glass border border-white/10 rounded-[2.5rem] md:rounded-[3rem] space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-red-400/10 text-red-400 rounded-xl flex items-center justify-center">🚫</div>
                                <h4 className="text-xl font-bold italic">Negative Prompting</h4>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed text-justify">Teknik untuk "membersihkan" gambar dari elemen yang mengganggu seperti teks berantakan, tangan yang terdistorsi, atau kualitas rendah.</p>
                            <div className="p-6 bg-red-400/5 border border-red-400/10 rounded-2xl">
                                <p className="text-xs font-black uppercase tracking-widest text-red-400 mb-2">Contoh "Anti-Elemen":</p>
                                <p className="text-xs font-mono text-red-300 italic">"--tidak ada teks, tanpa watermark, gambar buram, cacat geometri, kualitas rendah, warna kusam."</p>
                            </div>
                        </div>

                        <div className="p-8 md:p-10 glass border border-white/10 rounded-[2.5rem] md:rounded-[3rem] space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-400/10 text-blue-400 rounded-xl flex items-center justify-center">📐</div>
                                <h4 className="text-xl font-bold italic">Rasio Aspek (Dimensi)</h4>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed text-justify">Menyesuaikan bentuk keluaran gambar agar sesuai dengan media publikasi target tanpa harus memotong (*crop*) secara manual.</p>
                            <div className="p-6 bg-blue-400/5 border border-blue-400/10 rounded-2xl">
                                <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">Perintah Dimensi:</p>
                                <p className="text-xs font-mono text-blue-300 italic">"--ar 16:9 (Lansekap) | --ar 4:5 (Feed IG) | --ar 9:16 (Tik-Tok/Story)."</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* CREATIVE CHALLENGE */}
            <ScrollReveal>
                <section className="text-center max-w-4xl mx-auto py-24 space-y-12 px-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold dark:text-white italic underline underline-offset-12 decoration-pink-500/20 capitalize tracking-tight">The Visionary Challenge</h2>
                        <p className="text-slate-300 text-lg">Wujudkan sebuah identitas visual masa depan melalui kekuatan kata.</p>
                    </div>

                    <div className="p-8 md:p-12 glass border border-pink-500/20 rounded-[2.5rem] md:rounded-[4rem] space-y-8 relative overflow-hidden text-left bg-slate-900 shadow-2xl">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                            <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white font-bold italic">C1</div>
                            <div>
                                <h4 className="font-bold text-xl uppercase tracking-tighter italic text-white text-wrap">Kampanye Iklan: "Nebula Watch"</h4>
                                <p className="text-[10px] text-pink-400 font-black uppercase tracking-widest mt-1">High-End Luxury Smartwatch</p>
                            </div>
                        </div>
                        <p className="text-slate-200 text-sm md:text-base leading-relaxed italic text-justify">
                            "Buatlah rangkaian konsep visual untuk jam tangan pintar mewah yang menggunakan material dari serpihan meteorit. Tugas Anda: Tuliskan 3 prompt menggunakan struktur PCTF yang mencakup: 1. Foto Makro detail material meteorit pada bazel, 2. Iklan display gaya minimalis untuk majalah fashion, 3. Pose gaya hidup sinematik seorang astronot menggunakan jam tersebut."
                        </p>
                        <div className="flex justify-end pt-4">
                            <div className="px-8 md:px-10 py-4 bg-pink-500 text-white rounded-2xl font-bold hover:shadow-pink-500/20 hover:shadow-lg transition-all cursor-pointer text-sm md:text-base">Mulai Desain Sekarang</div>
                        </div>
                    </div>

                    <p className="text-xs text-slate-400 uppercase tracking-widest font-black pt-12 italic">"Your creativity is limited only by your vocabulary."</p>
                </section>
            </ScrollReveal>
        </div>
    );
}
