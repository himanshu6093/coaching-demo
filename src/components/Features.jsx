import { memo } from 'react'

const featuresData = [
    {
        icon: 'people',
        title: 'Expert Faculty',
        description: 'Learn from IITians and Doctors with decades of teaching experience.',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: 'git-network',
        title: 'Personalized Attention',
        description: 'Small batch sizes ensuring every student gets their doubts resolved.',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: 'stats-chart',
        title: 'Mock Test Series',
        description: 'Rigorous testing patterns similar to the actual NTA exams.',
        gradient: 'from-orange-500 to-red-500'
    }
]

const FeatureCard = memo(({ feature }) => (
    <article className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-neutral-100 hover:border-primary-light/30">
        <div
            className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
            aria-hidden="true"
        >
            <ion-icon name={feature.icon} class="text-4xl text-white"></ion-icon>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-neutral-900">{feature.title}</h3>
        <p className="text-neutral-600 leading-relaxed font-medium">{feature.description}</p>
    </article>
))

FeatureCard.displayName = 'FeatureCard'

const Features = memo(() => {
    return (
        <section className="py-24 bg-neutral-50" aria-labelledby="features-heading">
            <div className="container mx-auto px-5">
                <header className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold mb-4">
                        Why Choose Us
                    </span>
                    <h2 id="features-heading" className="text-5xl md:text-6xl font-bold mb-5 text-neutral-900">
                        What Makes Us
                        <span className="block bg-gradient-to-r from-primary-blue to-primary-light bg-clip-text text-transparent">
                            Different
                        </span>
                    </h2>
                    <p className="text-neutral-600 text-lg max-w-2xl mx-auto font-medium">
                        An ecosystem that nurtures talent and drives exceptional results
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuresData.map((feature) => (
                        <FeatureCard key={feature.title} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    )
})

Features.displayName = 'Features'

export default Features
