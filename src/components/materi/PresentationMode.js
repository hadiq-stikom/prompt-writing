'use client';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function PresentationMode({ slides, initialSlide = 0, onClose }) {
    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    const [direction, setDirection] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const nextSlide = useCallback(() => {
        if (currentSlide < slides.length - 1) {
            setDirection(1);
            setCurrentSlide(prev => prev + 1);
        }
    }, [currentSlide, slides.length]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setDirection(-1);
            setCurrentSlide(prev => prev - 1);
        }
    }, [currentSlide]);

    // Lifecycle Effect: Handles Fullscreen sync and Scroll Lock
    useEffect(() => {
        const exitFullscreen = async () => {
            try {
                if (typeof document !== 'undefined' && document.fullscreenElement) {
                    await document.exitFullscreen();
                }
            } catch (err) {
                console.error(`Error attempting to exit full-screen mode: ${err.message}`);
            }
        };

        const handleFullscreenChange = () => {
            if (typeof document !== 'undefined' && !document.fullscreenElement) {
                onClose(); // Close if user exits via ESC or browser UI
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.body.style.overflow = 'auto';
            exitFullscreen();
        };
    }, [onClose]);

    // Navigation Effect: Handles Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, onClose]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        })
    };

    if (!mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-99999 bg-slate-950 text-slate-100 overflow-hidden select-none">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Floating Top Controls */}
            <div className="absolute top-4 left-4 right-4 z-50 flex justify-between items-center pointer-events-none">
                <div className="bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 pointer-events-auto">
                    <div className="bg-primary/20 px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20">
                        Slide {currentSlide + 1} / {slides.length}
                    </div>
                    {slides[currentSlide].sectionTitle && (
                        <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block"></div>
                    )}
                    <h3 className="hidden sm:block text-xs font-bold text-white/70 uppercase tracking-tighter">
                        {slides[currentSlide].sectionTitle}
                    </h3>
                </div>

                <button
                    onClick={onClose}
                    className="bg-white/5 hover:bg-white/10 w-10 h-10 rounded-2xl border border-white/10 transition-all flex items-center justify-center pointer-events-auto"
                    title="Exit (ESC)"
                >
                    <span className="material-symbols-outlined text-slate-400">close</span>
                </button>
            </div>

            {/* Slide Content Area - Full Bleed */}
            <div className="absolute inset-0 z-10 p-4 md:p-8 flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode='wait'>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 25,
                            opacity: { duration: 0.3 }
                        }}
                        className="w-full h-full max-w-7xl relative"
                    >
                        {/* The actual slide box */}
                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                            <div className="w-full max-h-full overflow-hidden px-2 md:px-12 py-4 flex flex-col items-center justify-center">
                                {slides[currentSlide].content}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Compact Navigation Controls - Overlaid on sides/bottom */}
            <div className="absolute inset-0 z-50 pointer-events-none flex flex-col justify-end p-6 md:p-8">
                {/* Horizontal Nav Overlay */}
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2 pointer-events-auto bg-slate-900/60 backdrop-blur-md p-2 rounded-[1.5rem] border border-white/5 shadow-2xl ml-auto">
                        <button
                            disabled={currentSlide === 0}
                            onClick={prevSlide}
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${currentSlide === 0
                                    ? 'opacity-10 cursor-not-allowed'
                                    : 'bg-white/5 hover:bg-white/10 text-white'
                                }`}
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>

                        <div className="flex items-center gap-1.5 px-2">
                            {slides.length > 10 ? (
                                <span className="text-[10px] font-black w-8 text-center text-white/40">
                                    {currentSlide + 1}
                                </span>
                            ) : (
                                slides.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide
                                                ? 'bg-primary scale-125'
                                                : 'bg-white/10'
                                            }`}
                                    />
                                ))
                            )}
                        </div>

                        <button
                            disabled={currentSlide === slides.length - 1}
                            onClick={nextSlide}
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${currentSlide === slides.length - 1
                                    ? 'opacity-10 cursor-not-allowed'
                                    : 'bg-primary/20 hover:bg-primary/30 text-primary shadow-lg shadow-primary/20'
                                }`}
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar-minimal::-webkit-scrollbar {
                    width: 0px;
                }
                
                .custom-scrollbar-minimal img {
                    max-height: 40vh !important;
                    width: auto !important;
                    object-fit: contain;
                }
                
                .custom-scrollbar-minimal h2 {
                    font-size: 2rem !important;
                    line-height: 1.2 !important;
                    margin-bottom: 1rem !important;
                }

                .custom-scrollbar-minimal p {
                    font-size: 0.9rem !important;
                    line-height: 1.5 !important;
                }

                .custom-scrollbar-minimal .grid {
                    gap: 1rem !important;
                }

                .custom-scrollbar-minimal .p-16, 
                .custom-scrollbar-minimal .p-12,
                .custom-scrollbar-minimal .p-10 {
                    padding: 2rem !important;
                }

                .custom-scrollbar-minimal .rounded-[3rem],
                .custom-scrollbar-minimal .rounded-[3.5rem] {
                    border-radius: 1.5rem !important;
                }

                .custom-scrollbar-minimal section {
                    margin: 0 !important;
                    padding: 0 !important;
                }
            `}} />
        </div>,
        document.body
    );
}
