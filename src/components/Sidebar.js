import Link from 'next/link';
import { materiList } from '@/data/materi';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-[#010816] text-slate-100 h-screen fixed left-0 top-0 z-40 border-r border-white/5 hidden md:flex md:flex-col shadow-2xl">
            <div className="p-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/20 p-1.5 rounded-lg flex items-center justify-center border border-primary/40">
                        <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-white">LOBBY</h2>
                </div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">PROMPT WRITING COURSE</p>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-8">
                <div>
                    <h3 className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Main Menu</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-all group">
                                <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">home</span>
                                Beranda
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Syllabus Modules</h3>
                    <ul className="space-y-1">
                        {materiList.map((materi) => (
                            <li key={materi.id}>
                                <Link
                                    href={`/materi/${materi.id}`}
                                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-all group"
                                >
                                    <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-slate-800 text-[10px] font-bold text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors border border-white/5">
                                        {materi.id.toString().padStart(2, '0')}
                                    </div>
                                    <span className="truncate">{materi.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <div className="p-6 border-t border-white/5">
                <div className="glass p-4 rounded-xl text-center">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-tighter mb-1">STIKOM PGRI</p>
                    <p className="text-[9px] text-slate-500">Banyuwangi © 2026</p>
                </div>
            </div>
        </aside>
    );
}
