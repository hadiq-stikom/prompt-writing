import Link from 'next/link';

export default function MobileNav() {
    return (
        <div className="fixed md:hidden bottom-0 left-0 right-0 bg-[#010816]/95 backdrop-blur-lg border-t border-white/5 z-60 px-4">
            <div className="max-w-md mx-auto flex items-center justify-around py-2">
                <Link href="/" className="flex flex-col items-center gap-1 text-primary relative">
                    <div className="absolute -top-1 w-12 h-12 bg-primary/20 rounded-full blur-md -z-10"></div>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                    <span className="text-[9px] font-bold uppercase tracking-tighter">Home</span>
                </Link>
                <Link href="/#roadmap" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">book_4</span>
                    <span className="text-[9px] font-bold uppercase tracking-tighter">Syllabus</span>
                </Link>
                <Link href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">folder_open</span>
                    <span className="text-[9px] font-bold uppercase tracking-tighter">Projects</span>
                </Link>
                <Link href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-[9px] font-bold uppercase tracking-tighter">Profile</span>
                </Link>
            </div>
        </div>
    );
}
