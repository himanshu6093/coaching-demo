import { memo } from 'react'

const courseData = [
    {
        id: 'foundation',
        icon: 'rocket',
        title: 'Foundation Batches',
        badge: 'Classes 9-10',
        description: 'Build a strong base for future competitive exams with early preparation.',
        features: ['Concept Clarity', 'Olympiad Prep', 'Regular Testing'],
        color: 'from-purple-500 to-pink-500'
    },
    {
        id: 'jee',
        icon: 'code-working',
        title: 'IIT JEE Prep',
        badge: 'Most Popular',
        description: 'Comprehensive coaching for JEE Mains & Advanced with expert guidance.',
        features: ['Daily Practice Problems', 'All India Test Series', 'Doubt Solving'],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 'neet',
        icon: 'fitness',
        title: 'NEET Medical',
        badge: 'NEET 2026',
        description: 'Dedicated expert guidance for medical aspirants to crack NEET.',
        features: ['NCERT Focused', 'Regular Mock Tests', 'Personal Mentorship'],
        color: 'from-orange-500 to-red-500'
    }
]

const CourseCard = memo(({ course }) => {
    return (
        <article
            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-neutral-100 hover:border-primary-light/30 relative overflow-hidden"
        >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} aria-hidden="true"></div>

            <div className="relative z-10">
                {/* Badge */}
                <span className="inline-block px-3 py-1 bg-accent-orange/10 text-accent-orange rounded-lg text-xs font-bold mb-4">
                    {course.badge}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center text-3xl text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <ion-icon name={course.icon} aria-hidden="true"></ion-icon>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-neutral-900">{course.title}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed font-medium">{course.description}</p>

                <div className="bg-neutral-50 rounded-xl p-4 mb-6">
                    <ul className="space-y-3" role="list">
                        {course.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                                <div className="w-5 h-5 bg-accent-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <ion-icon name="checkmark" class="text-accent-orange text-sm" aria-hidden="true"></ion-icon>
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className="w-full bg-primary-blue text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-all group-hover:shadow-lg flex items-center justify-center gap-2"
                    aria-label={`Explore ${course.title} course`}
                >
                    Explore Course
                    <ion-icon name="arrow-forward" class="group-hover:translate-x-1 transition-transform" aria-hidden="true"></ion-icon>
                </button>
            </div>
        </article>
    )
})

CourseCard.displayName = 'CourseCard'

const Courses = () => {
    return (
        <section id="courses" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl" aria-hidden="true"></div>

            <div className="container mx-auto px-5 relative z-10">
                <header className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold mb-4">
                        Our Programs
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-5 text-neutral-900">
                        Choose Your Path to
                        <span className="block bg-gradient-to-r from-accent-orange to-accent-light bg-clip-text text-transparent">
                            Success
                        </span>
                    </h2>
                    <p className="text-neutral-600 text-lg max-w-2xl mx-auto font-medium">
                        Meticulously designed programs covering every aspect of competitive exams
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courseData.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Courses
