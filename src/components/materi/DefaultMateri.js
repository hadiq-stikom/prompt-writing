import ScrollReveal from './ScrollReveal';

export default function DefaultMateri({ materi }) {
    return (
        <ScrollReveal>
            <section className="bg-slate-900/50 backdrop-blur-md p-12 rounded-4xl border border-white/5 flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 shadow-2xl">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-5xl mb-4 border border-primary/20">
                    📂
                </div>
                <div className="max-w-md">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Konten Sedang Disusun</h2>
                    <p className="text-slate-400 mt-4 leading-relaxed text-lg">
                        Materi <strong>"{materi.title}"</strong> sedang dalam tahap finalisasi.
                        Tetaplah di sini, sesuatu yang luar biasa akan segera hadir!
                    </p>
                </div>
                <div className="flex gap-3 pt-6">
                    <div className="w-3 h-3 rounded-full bg-primary/30 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/60 animate-pulse delay-75"></div>
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-150"></div>
                </div>
            </section>
        </ScrollReveal>
    );
}
