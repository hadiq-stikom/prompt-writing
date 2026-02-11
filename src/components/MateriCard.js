import Link from 'next/link';

export default function MateriCard({ materi }) {
    const formattedId = materi.id < 10 ? `0${materi.id}` : materi.id;

    return (
        <Link
            href={`/materi/${materi.id}`}
            className="group block relative p-8 bg-slate-300 border border-slate-200 rounded-3xl hover:bg-slate-900 hover:border-slate-800 transition-all duration-500 overflow-hidden"
        >
            {/* Background Number Decoration */}
            <div className="absolute -top-4 -right-2 text-8xl font-serif font-black text-slate-200/50 group-hover:text-slate-800/30 transition-colors pointer-events-none">
                {formattedId}
            </div>

            <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm border border-slate-100 group-hover:bg-slate-800 group-hover:border-slate-700 transition-all">
                    📚
                </div>

                <div className="space-y-2">
                    <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Modul {formattedId}</p>
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-white transition-colors">
                        {materi.title}
                    </h3>
                </div>

                <p className="text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed line-clamp-2 transition-colors">
                    {materi.desc}
                </p>

                <div className="pt-4 flex items-center text-xs font-bold text-slate-400 group-hover:text-indigo-400 transition-colors">
                    Pelajari Materi <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>
        </Link>
    );
}
