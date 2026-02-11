import { memo } from 'react'

const toppers = [
    {
        name: "Arjun Patel",
        exam: "JEE Advanced 2025",
        rank: "AIR 12",
        college: "IIT Bombay - Computer Science",
        image: "https://ui-avatars.com/api/?name=Arjun+Patel&background=6366F1&color=fff&size=256&bold=true",
        marks: "324/360"
    },
    {
        name: "Priya Desai",
        exam: "NEET 2025",
        rank: "AIR 45",
        college: "AIIMS Delhi",
        image: "https://ui-avatars.com/api/?name=Priya+Desai&background=F59E0B&color=fff&size=256&bold=true",
        marks: "715/720"
    },
    {
        name: "Rahul Sharma",
        exam: "JEE Mains 2025",
        rank: "99.9 Percentile",
        college: "IIT Delhi - Electrical",
        image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=6366F1&color=fff&size=256&bold=true",
        marks: "298/300"
    },
    {
        name: "Sneha Iyer",
        exam: "NEET 2025",
        rank: "AIR 89",
        college: "AIIMS Jodhpur",
        image: "https://ui-avatars.com/api/?name=Sneha+Iyer&background=F59E0B&color=fff&size=256&bold=true",
        marks: "705/720"
    },
    {
        name: "Karthik Menon",
        exam: "JEE Advanced 2025",
        rank: "AIR 67",
        college: "IIT Madras - Aerospace",
        image: "https://ui-avatars.com/api/?name=Karthik+Menon&background=6366F1&color=fff&size=256&bold=true",
        marks: "310/360"
    },
    {
        name: "Ananya Roy",
        exam: "NEET 2025",
        rank: "AIR 156",
        college: "JIPMER Puducherry",
        image: "https://ui-avatars.com/api/?name=Ananya+Roy&background=F59E0B&color=fff&size=256&bold=true",
        marks: "695/720"
    }
]

const stats = [
    { number: '234', label: 'Top 1000 Ranks', icon: 'trophy' },
    { number: '567', label: 'IIT Selections', icon: 'school' },
    { number: '433', label: 'AIIMS/NEET', icon: 'fitness' },
    { number: '98.5%', label: 'Success Rate', icon: 'stats-chart' }
]

const StatCard = memo(({ stat }) => (
    <div className="bg-gradient-to-br from-primary-blue to-primary-dark text-white p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300 shadow-lg">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3" aria-hidden="true">
            <ion-icon name={stat.icon} class="text-2xl text-white"></ion-icon>
        </div>
        <p className="text-4xl font-bold mb-1">{stat.number}</p>
        <p className="text-sm font-medium text-indigo-200">{stat.label}</p>
    </div>
))

StatCard.displayName = 'StatCard'

const TopperCard = memo(({ topper }) => (
    <article
        className="bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-neutral-100 hover:border-primary-light/30 group"
    >
        <div className="flex items-center gap-4 mb-4">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-accent-orange rounded-xl blur-md opacity-30" aria-hidden="true"></div>
                <img
                    src={topper.image}
                    alt={`Photo of ${topper.name}`}
                    className="relative w-16 h-16 rounded-xl border-2 border-white shadow-lg"
                    loading="lazy"
                    width="64"
                    height="64"
                />
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-lg text-neutral-900">{topper.name}</h4>
                <p className="text-sm text-neutral-600">{topper.exam}</p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-bold text-primary-blue" aria-label={`Rank: ${topper.rank}`}>{topper.rank}</p>
            </div>
        </div>

        <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
                <ion-icon name="school" class="text-accent-orange" aria-hidden="true"></ion-icon>
                <span className="text-neutral-700 font-medium">{topper.college}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <ion-icon name="checkmark-circle" class="text-green-600" aria-hidden="true"></ion-icon>
                <span className="text-neutral-700 font-medium">Score: {topper.marks}</span>
            </div>
        </div>
    </article>
))

TopperCard.displayName = 'TopperCard'

const Results = memo(() => {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="results" aria-labelledby="results-heading">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" aria-hidden="true"></div>

            <div className="container mx-auto px-5 relative z-10">
                {/* Header */}
                <header className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-4">
                        Our Pride
                    </span>
                    <h2 id="results-heading" className="text-5xl md:text-6xl font-bold mb-5 text-neutral-900">
                        2025 Results
                        <span className="block bg-gradient-to-r from-accent-orange to-accent-light bg-clip-text text-transparent">
                            Speak For Themselves
                        </span>
                    </h2>
                    <p className="text-neutral-600 text-lg max-w-2xl mx-auto font-medium">
                        Celebrating the outstanding achievements of our students who cleared India's toughest exams
                    </p>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" role="list">
                    {stats.map((stat) => (
                        <div role="listitem" key={stat.label}>
                            <StatCard stat={stat} />
                        </div>
                    ))}
                </div>

                {/* Top Performers Grid */}
                <div>
                    <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Top Performers 2025</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {toppers.map((topper) => (
                            <TopperCard key={topper.name} topper={topper} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
})

Results.displayName = 'Results'

export default Results
