import { memo } from 'react'

const facultyMembers = [
    {
        name: "Dr. Rajesh Kumar",
        qualification: "IIT Delhi, Ph.D.",
        subject: "Physics",
        experience: "15+ Years",
        image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=6366F1&color=fff&size=256&bold=true",
        achievements: "200+ IIT Selections"
    },
    {
        name: "Prof. Anita Sharma",
        qualification: "IIT Bombay, M.Tech",
        subject: "Mathematics",
        experience: "12+ Years",
        image: "https://ui-avatars.com/api/?name=Anita+Sharma&background=F59E0B&color=fff&size=256&bold=true",
        achievements: "Expert in JEE Advanced"
    },
    {
        name: "Dr. Suresh Menon",
        qualification: "AIIMS Delhi, MD",
        subject: "Biology",
        experience: "18+ Years",
        image: "https://ui-avatars.com/api/?name=Suresh+Menon&background=6366F1&color=fff&size=256&bold=true",
        achievements: "NEET Topper Mentor"
    },
    {
        name: "Prof. Priya Singh",
        qualification: "IIT Kanpur, B.Tech",
        subject: "Chemistry",
        experience: "10+ Years",
        image: "https://ui-avatars.com/api/?name=Priya+Singh&background=F59E0B&color=fff&size=256&bold=true",
        achievements: "AIR 1 Maker 2024"
    },
    {
        name: "Dr. Amit Verma",
        qualification: "IIT Madras, Ph.D.",
        subject: "Mathematics",
        experience: "14+ Years",
        image: "https://ui-avatars.com/api/?name=Amit+Verma&background=6366F1&color=fff&size=256&bold=true",
        achievements: "Olympiad Trainer"
    },
    {
        name: "Prof. Kavita Reddy",
        qualification: "AIIMS, MBBS",
        subject: "Chemistry",
        experience: "11+ Years",
        image: "https://ui-avatars.com/api/?name=Kavita+Reddy&background=F59E0B&color=fff&size=256&bold=true",
        achievements: "150+ NEET Selections"
    }
]

const FacultyCard = memo(({ member }) => (
    <article
        className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-neutral-100 hover:border-primary-light/30"
    >
        <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-accent-orange rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" aria-hidden="true"></div>
            <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="relative w-32 h-32 rounded-2xl mx-auto border-4 border-white shadow-lg"
                loading="lazy"
                width="128"
                height="128"
            />
        </div>

        <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-neutral-900">{member.name}</h3>
            <p className="text-primary-blue font-semibold mb-1">{member.subject}</p>
            <p className="text-sm text-neutral-600 mb-4">{member.qualification}</p>

            <div className="flex flex-col gap-2 mb-4">
                <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg text-sm" title="Experience">
                    <ion-icon name="time" class="text-primary-blue" aria-hidden="true"></ion-icon>
                    <span className="font-medium text-neutral-700">{member.experience}</span>
                </div>
                <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-accent-orange/10 rounded-lg text-sm" title="Key Achievement">
                    <ion-icon name="trophy" class="text-accent-orange" aria-hidden="true"></ion-icon>
                    <span className="font-medium text-accent-orange">{member.achievements}</span>
                </div>
            </div>
        </div>
    </article>
))

FacultyCard.displayName = 'FacultyCard'

const Faculty = memo(() => {
    return (
        <section className="py-24 bg-neutral-50 relative overflow-hidden" id="faculty" aria-labelledby="faculty-heading">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" aria-hidden="true"></div>

            <div className="container mx-auto px-5 relative z-10">
                <header className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold mb-4">
                        Our Team
                    </span>
                    <h2 id="faculty-heading" className="text-5xl md:text-6xl font-bold mb-5 text-neutral-900">
                        Learn From The
                        <span className="block bg-gradient-to-r from-primary-blue to-primary-light bg-clip-text text-transparent">
                            Best Educators
                        </span>
                    </h2>
                    <p className="text-neutral-600 text-lg max-w-2xl mx-auto font-medium">
                        Our faculty comprises of IITians, Doctors, and experienced educators dedicated to your success
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facultyMembers.map((member) => (
                        <FacultyCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    )
})

Faculty.displayName = 'Faculty'

export default Faculty
