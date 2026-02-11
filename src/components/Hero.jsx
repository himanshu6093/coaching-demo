import { memo } from 'react'

const Hero = memo(() => {
    return (
        <section
            className="bg-gradient-to-br from-primary-blue via-primary-dark to-indigo-900 text-white py-24 md:py-32 relative overflow-hidden"
            aria-label="Introduction"
        >
            {/* Decorative gradients */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" aria-hidden="true"></div>

            <div className="container mx-auto px-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
                    <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium"
                            role="status"
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
                            Admissions Open for 2026
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                            Secure Your Future in
                            <span className="block mt-2 bg-gradient-to-r from-accent-light to-accent-orange bg-clip-text text-transparent">
                                Engineering & Medicine
                            </span>
                        </h1>

                        <p className="text-xl text-indigo-100 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                            Join India's premier coaching institute with 1000+ selections. Expert faculty, personalized attention, and a proven roadmap to success.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                className="group bg-accent-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent-orange/30 hover:shadow-2xl hover:shadow-accent-orange/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                                aria-label="Book a free demo class"
                            >
                                Book a Free Demo Class
                                <ion-icon name="arrow-forward" class="group-hover:translate-x-1 transition-transform" aria-hidden="true"></ion-icon>
                            </button>
                            <button
                                className="bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/90 transition-all"
                                aria-label="View previous results"
                            >
                                View Results
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative z-10 animate-float" aria-hidden="true">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent-orange to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
                                alt="Group of focused students studying together in a library"
                                className="relative w-full rounded-3xl shadow-2xl border-4 border-white/10"
                                loading="eager"
                                width="800"
                                height="600"
                            />

                            {/* Floating stats card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-accent-light rounded-xl flex items-center justify-center">
                                        <ion-icon name="trophy" class="text-3xl text-white"></ion-icon>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-primary-blue">98.5%</p>
                                        <p className="text-sm text-neutral-600 font-medium">Success Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

Hero.displayName = 'Hero'

export default Hero
