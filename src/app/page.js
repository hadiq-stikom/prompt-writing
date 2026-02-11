import Link from 'next/link';
import { materiList } from '@/data/materi';
import MateriCard from '@/components/MateriCard';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <header className="space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="space-y-2">
          <p className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm">Prodi Manajemen Informatika    ||   STIKOM PGRI Banyuwangi</p>

          <h1 className="text-6xl font-serif font-black text-slate-950 leading-[1.1]">
            Prompt Writing <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-slate-400">Mastery Course</span>
          </h1>
        </div>

        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
          Kurikulum komprehensif untuk menguasai interaksi dengan AI Generatif, dirancang khusus untuk meningkatkan kapabilitas profesional di berbagai disiplin ilmu.
        </p>

        <div className="flex gap-4">
          <Link href="/materi/1" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 hover:shadow-indigo-200">
            Mulai Belajar
          </Link>
          <div className="px-8 py-4 border border-slate-200 text-slate-600 rounded-2xl font-bold">
            14 Modul Utama
          </div>
        </div>
      </header>

      {/* Stats/Highlight Section */}
      <section className="grid md:grid-cols-3 gap-8 p-12 bg-slate-950 rounded-[3rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-9xl font-serif font-black italic">CPMK</div>
        {[
          { label: 'Teoritis', desc: 'Memahami filosofi dan mekanisme kerja LLM secara mendalam.' },
          { label: 'Praktis', desc: 'Keterampilan menyusun prompt multi-step untuk hasil presisi.' },
          { label: 'Etis', desc: 'Kesadaran akan batasan hukum, hak cipta, dan integritas akademik.' },
        ].map((item, i) => (
          <div key={i} className="space-y-4">
            <h4 className="text-indigo-400 font-bold text-sm uppercase tracking-widest">{item.label}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Materials Grid */}
      <section className="space-y-12">
        <div className="flex items-end justify-between border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-serif font-bold text-slate-900">Kurikulum 2026</h2>
            <p className="text-slate-400">Silakan pilih modul pembelajaran di bawah ini</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {materiList.map((materi) => (
            <MateriCard key={materi.id} materi={materi} />
          ))}
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="py-20 text-center border-t border-slate-100">
        <p className="text-slate-400 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
          "The limit of your language is the limit of your world — Ludwig Wittgenstein"
        </p>
        <p className="mt-4 text-[10px] text-slate-300 uppercase tracking-[0.3em] font-bold">PROMPT WRITING COURSE © 2026</p>
      </footer>
    </div>
  );
}
