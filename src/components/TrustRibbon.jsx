import { memo } from 'react'

const TrustRibbon = memo(() => {
    const stats = [
        { number: '1000+', label: 'Total Selections', icon: 'school' },
        { number: 'Top 100', label: 'AIR Production', icon: 'trophy' },
        { number: '15+ Years', label: 'Of Excellence', icon: 'ribbon' },
        { number: '50+', label: 'Expert Faculty', icon: 'people-circle' },
    ]

    return (
        <section className="container mx-auto px-5 -mt-20 relative z-20" aria-label="Trust indicators">
            <div className="bg-gradient-to-r from-accent-orange via-amber-500 to-accent-light text-white rounded-3xl shadow-2xl py-10 px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center group">
                            <div className="flex justify-center mb-3">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                    <ion-icon name={stat.icon} class="text-2xl text-white" aria-hidden="true"></ion-icon>
                                </div>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-sm md:text-base font-medium text-white/90">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

TrustRibbon.displayName = 'TrustRibbon'

export default TrustRibbon
