import Link from 'next/link';

const materiList = [
    { id: 1, title: 'Pengenalan Prompt Writing' },
    { id: 2, title: 'Dasar-dasar Generative AI' },
    { id: 3, title: 'Struktur Prompt yang Efektif' },
    { id: 4, title: 'Prompt untuk Dokumen Teks' },
    { id: 5, title: 'Prompt untuk Coding' },
    { id: 6, title: 'Prompt untuk Desain Grafis' },
    { id: 7, title: 'Prompt untuk Fotografi' },
    { id: 8, title: 'Prompt untuk Produksi Video' },
    { id: 9, title: 'Prompt untuk Komposisi Musik' },
    { id: 10, title: 'Advanced Prompting Techniques' },
    { id: 11, title: 'Etika dan Hak Cipta AI' },
    { id: 12, title: 'Workflow Integrasi AI' },
    { id: 13, title: 'Optimasi Hasil Output' },
    { id: 14, title: 'Projek Akhir Prompt Writing' },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-slate-100 h-screen fixed left-0 top-0 z-40 border-r border-slate-800 hidden md:flex md:flex-col">
            <div className="p-6">
                <h2 className="text-xl font-serif font-bold tracking-tight text-white mb-1">Prompt Writing</h2>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Materi Perkuliahan</p>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="space-y-2">
                    <li>
                        <Link href="/" className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors group">
                            <span className="text-slate-400 group-hover:text-white mr-3">🏠</span>
                            Beranda
                        </Link>
                    </li>
                    <div className="pt-4 pb-2">
                        <span className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Silabus Materi</span>
                    </div>
                    {materiList.map((materi) => (
                        <li key={materi.id}>
                            <Link
                                href={`/materi/${materi.id}`}
                                className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors group"
                            >
                                <div className="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-xs text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors mr-3">
                                    {materi.id}
                                </div>
                                <span className="truncate">{materi.title}</span>
                            </Link>
                            <div className="h-px w-full bg-linear-to-r from-transparent via-orange-400 dark:via-slate-800 to-transparent" />
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-slate-800">
                <p className="text-[10px] text-slate-500 text-center">© 2026 Prompt Writing Course</p>
            </div>
        </aside>
    );
}
