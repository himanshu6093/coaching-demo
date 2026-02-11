import { memo } from 'react'

const testimonialData = [
    {
        id: 'aarav',
        stars: 5,
        text: "Sankalp Institute changed the way I approached problems. The faculty is incredibly supportive and the study material is top-notch.",
        name: "Aarav Sharma",
        achievement: "IIT Bombay (CSE)",
        image: "https://ui-avatars.com/api/?name=Aarav+Sharma&background=6366F1&color=fff&size=128"
    },
    {
        id: 'sneha',
        stars: 5,
        text: "The NEET test series was a game changer. It helped me improve my speed and accuracy significantly. Highly recommended!",
        name: "Sneha Gupta",
        achievement: "AIIMS Delhi",
        image: "https://ui-avatars.com/api/?name=Sneha+Gupta&background=6366F1&color=fff&size=128"
    },
    {
        id: 'rohan',
        stars: 4.5,
        text: "The foundation course gave me a head start. By class 11, I was already solving JEE Mains level problems.",
        name: "Rohan Mehta",
        achievement: "NIT Trichy",
        image: "https://ui-avatars.com/api/?name=Rohan+Mehta&background=6366F1&color=fff&size=128"
    }
]

const StarRating = memo(({ rating }) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    return (
        <div className="flex text-amber-400 mb-4 text-lg" aria-label={`Rating: ${rating} out of 5 stars`}>
            {[...Array(fullStars)].map((_, i) => (
                <ion-icon key={i} name="star" aria-hidden="true"></ion-icon>
            ))}
            {hasHalfStar && <ion-icon name="star-half" aria-hidden="true"></ion-icon>}
        </div>
    )
})

StarRating.displayName = 'StarRating'

const TestimonialCard = memo(({ testimonial }) => (
    <article
        className="min-w-[380px] bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl snap-center hover:bg-white/15 transition-all duration-300 group"
    >
        <StarRating rating={testimonial.stars} />

        <p className="text-indigo-100 mb-6 text-base leading-relaxed font-medium">
            "{testimonial.text}"
        </p>

        <div className="flex items-center gap-4 pt-4 border-t border-white/20">
            <img
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                className="w-14 h-14 rounded-full border-2 border-accent-orange"
                loading="lazy"
                width="56"
                height="56"
            />
            <div>
                <h4 className="text-white font-bold text-lg">
                    {testimonial.name}
                </h4>
                <span className="text-accent-light text-sm font-medium">
                    {testimonial.achievement}
                </span>
            </div>
        </div>
    </article>
))

TestimonialCard.displayName = 'TestimonialCard'

const Testimonials = memo(() => {
    return (
        <section
            className="py-24 bg-gradient-to-br from-primary-blue via-primary-dark to-indigo-900 text-white relative overflow-hidden"
            aria-labelledby="testimonials-heading"
        >
            <div className="absolute -top-20 left-1/2 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" aria-hidden="true"></div>

            <div className="container mx-auto px-5 relative z-10">
                <header className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/20">
                        Success Stories
                    </span>
                    <h2 id="testimonials-heading" className="text-5xl md:text-6xl font-bold mb-5 text-white">
                        Our Students
                        <span className="block bg-gradient-to-r from-accent-light to-accent-orange bg-clip-text text-transparent">
                            Make Us Proud
                        </span>
                    </h2>
                    <p className="text-indigo-200 text-lg max-w-2xl mx-auto font-medium">
                        Hear from our students who made it to their dream colleges
                    </p>
                </header>

                <div
                    className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    role="region"
                    aria-label="Student Testimonials Carousel"
                >
                    {testimonialData.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
})

Testimonials.displayName = 'Testimonials'

export default Testimonials
