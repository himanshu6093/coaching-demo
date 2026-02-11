import { memo } from 'react'

const CTA = memo(() => {
    return (
        <section
            className="py-24 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden"
            aria-labelledby="cta-heading"
        >
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" aria-hidden="true"></div>

            <div className="container mx-auto px-5 relative z-10">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-blue to-indigo-900 rounded-3xl p-12 md:p-16 text-center shadow-2xl border border-white/10">
                    <span
                        className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20"
                        role="status"
                    >
                        Limited Seats Available
                    </span>

                    <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Ready to Start Your
                        <span className="block mt-2 bg-gradient-to-r from-accent-light to-accent-orange bg-clip-text text-transparent">
                            Success Journey?
                        </span>
                    </h2>

                    <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        Admissions open for the upcoming academic session. Join thousands of successful students who transformed their dreams into reality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="group bg-accent-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent-orange/30 hover:shadow-2xl hover:shadow-accent-orange/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 focus:ring-4 focus:ring-accent-orange/30 focus:outline-none"
                            aria-label="Apply for admission"
                        >
                            Apply Now
                            <ion-icon name="arrow-forward" class="group-hover:translate-x-1 transition-transform" aria-hidden="true"></ion-icon>
                        </button>
                        <button
                            className="bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all focus:ring-4 focus:ring-white/30 focus:outline-none"
                            aria-label="Download information brochure"
                        >
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
})

CTA.displayName = 'CTA'

export default CTA
