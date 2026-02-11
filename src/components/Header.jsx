import { useState, useEffect, memo } from 'react'

const Header = memo(() => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'
                }`}
            role="banner"
        >
            <div className={`container mx-auto px-5 transition-all duration-300 ${scrolled ? 'max-w-7xl' : 'max-w-full'
                }`}>
                <nav
                    className={`flex justify-between items-center px-6 py-4 rounded-2xl transition-all duration-300 ${scrolled
                            ? 'bg-white/70 backdrop-blur-xl shadow-lg border border-neutral-200/50'
                            : 'bg-white/90 backdrop-blur-md shadow-sm border border-neutral-200'
                        }`}
                    aria-label="Main navigation"
                >
                    <a href="#" className="flex items-center gap-2 text-2xl font-bold text-neutral-900 group" aria-label="Sankalp Home">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-blue/20" aria-hidden="true">
                            <ion-icon name="school" class="text-white text-xl"></ion-icon>
                        </div>
                        <span>Sankalp</span>
                        <span className="text-accent-orange">.</span>
                    </a>

                    <div className="hidden md:flex gap-8">
                        {['Courses', 'Results', 'Faculty', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="font-medium text-neutral-700 hover:text-primary-blue transition-colors focus:text-primary-blue focus:outline-none"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <button
                        className="bg-accent-orange text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-accent-orange/20 hover:shadow-xl hover:shadow-accent-orange/30 hover:-translate-y-0.5 transition-all focus:ring-4 focus:ring-accent-orange/30 focus:outline-none"
                    >
                        Book Demo
                    </button>
                </nav>
            </div>
        </header>
    )
})

Header.displayName = 'Header'

export default Header
