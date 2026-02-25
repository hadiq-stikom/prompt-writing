import Link from 'next/link';
import { materiList } from '@/data/materi';
import Materi1 from '@/components/materi/Materi1';
import Materi2 from '@/components/materi/Materi2';
import Materi3 from '@/components/materi/Materi3';
import Materi4 from '@/components/materi/Materi4';
import Materi5 from '@/components/materi/Materi5';
import DefaultMateri from '@/components/materi/DefaultMateri';

export async function generateStaticParams() {
    return materiList.map((materi) => ({
        id: materi.id.toString(),
    }));
}

const materiComponents = {
    1: Materi1,
    2: Materi2,
    3: Materi3,
    4: Materi4,
    5: Materi5,
};

export default async function MateriPage({ params }) {
    const { id } = await params;
    const materiId = parseInt(id);
    const materi = materiList.find((m) => m.id === materiId);

    if (!materi) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-4xl font-serif font-bold text-slate-900">Materi Tidak Ditemukan</h1>
                <p className="text-slate-500 mt-4">Mohon pilih materi yang tersedia dari sidebar atau beranda.</p>
                <Link href="/" className="mt-8 inline-block text-indigo-600 font-bold hover:underline">← Kembali ke Beranda</Link>
            </div>
        );
    }

    const MaterialContent = materiComponents[materiId] || DefaultMateri;

    return (
        <div className="py-12 px-4 md:px-0 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link href="/" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors flex items-center group">
                <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Kembali ke Beranda
            </Link>

            <header className="space-y-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-2xl text-white shadow-xl shadow-primary/20">
                    {materi.id}
                </div>
                <div className="space-y-2">
                    <p className="text-primary font-bold uppercase tracking-widest text-xs">Materi Perkuliahan</p>
                    <h1 className="text-5xl font-black text-white leading-tight">
                        {materi.title}
                    </h1>
                </div>
            </header>

            <div className="glass p-1 rounded-3xl overflow-hidden">
                <div className="bg-slate-900/40 backdrop-blur-md p-6 md:p-10 rounded-[1.4rem]">
                    <MaterialContent materi={materi} />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-white/5">
                {materi.id > 1 && (
                    <Link href={`/materi/${materi.id - 1}`} className="group p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all">
                        <p className="text-xs text-slate-500 font-bold uppercase mb-2">Materi Sebelumnya</p>
                        <h4 className="text-white font-bold group-hover:text-primary transition-colors">
                            {materiList.find(m => m.id === materi.id - 1).title}
                        </h4>
                    </Link>
                )}
                {materi.id < 14 && (
                    <Link href={`/materi/${materi.id + 1}`} className="group p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all text-right ml-auto w-full">
                        <p className="text-xs text-slate-500 font-bold uppercase mb-2">Materi Selanjutnya</p>
                        <h4 className="text-white font-bold group-hover:text-primary transition-colors">
                            {materiList.find(m => m.id === materi.id + 1).title}
                        </h4>
                    </Link>
                )}
            </div>
        </div>
    );
}
