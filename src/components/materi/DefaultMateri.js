import ScrollReveal from './ScrollReveal';

export default function DefaultMateri({ materi }) {
    return (
        <ScrollReveal>
            <section className="bg-white p-12 rounded-4xl border border-dashed border-slate-300 flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-4xl grayscale opacity-50">
                    📄
                </div>
                <div className="max-w-md">
                    <h2 className="text-2xl font-serif font-bold text-slate-800">Konten Belum Tersedia</h2>
                    <p className="text-slate-500 mt-4 leading-relaxed">
                        Halaman ini merupakan placeholder untuk materi <strong>{materi.title}</strong>.
                        Isi materi akan segera ditambahkan oleh pengampu matakuliah.
                    </p>
                </div>
                <div className="flex gap-4 pt-4">
                    <div className="w-2 h-2 rounded-full bg-orange-400/50"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-400/50"></div>
                </div>
            </section>
        </ScrollReveal>
    );
}
