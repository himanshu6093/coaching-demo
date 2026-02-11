import { memo } from 'react'

const Footer = memo(() => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10" role="contentinfo">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white mb-6 group" aria-label="Sankalp Home">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-accent-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <ion-icon name="school" class="text-white text-xl" aria-hidden="true"></ion-icon>
                            </div>
                            <span>Sankalp</span>
                            <span className="text-accent-orange">.</span>
                        </a>
                        <p className="text-neutral-400 leading-relaxed mb-6 font-medium">
                            Empowering students to achieve their dreams in Engineering and Medical fields through excellence in education.
                        </p>
                        <div className="flex gap-4">
                            {['logo-facebook', 'logo-twitter', 'logo-instagram', 'logo-linkedin'].map((icon) => (
                                <a
                                    key={icon}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-colors focus:ring-2 focus:ring-primary-blue focus:outline-none"
                                    aria-label={`Visit our ${icon.split('-')[1]} page`}
                                >
                                    <ion-icon name={icon} aria-hidden="true"></ion-icon>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Courses', 'Success Stories', 'Faculty', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-neutral-400 hover:text-accent-orange transition-colors flex items-center gap-2 group font-medium"
                                    >
                                        <ion-icon name="chevron-forward" class="text-xs group-hover:translate-x-1 transition-transform" aria-hidden="true"></ion-icon>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Our Courses</h4>
                        <ul className="space-y-4">
                            {['IIT JEE (Mains + Advanced)', 'NEET Medical', 'Foundation (Class 9-10)', 'Crash Courses', 'Test Series'].map((course) => (
                                <li key={course}>
                                    <a
                                        href="#"
                                        className="text-neutral-400 hover:text-accent-orange transition-colors flex items-center gap-2 group font-medium"
                                    >
                                        <ion-icon name="chevron-forward" class="text-xs group-hover:translate-x-1 transition-transform" aria-hidden="true"></ion-icon>
                                        {course}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <ion-icon name="location" class="text-accent-orange" aria-hidden="true"></ion-icon>
                                    </div>
                                    <p className="text-neutral-400 font-medium">
                                        123, Education Hub, Kota, Rajasthan - 324005
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue transition-colors">
                                        <ion-icon name="call" class="text-accent-orange group-hover:text-white" aria-hidden="true"></ion-icon>
                                    </div>
                                    <span className="text-neutral-400 group-hover:text-white transition-colors font-medium">+91 98765 43210</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@sankalp.com" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue transition-colors">
                                        <ion-icon name="mail" class="text-accent-orange group-hover:text-white" aria-hidden="true"></ion-icon>
                                    </div>
                                    <span className="text-neutral-400 group-hover:text-white transition-colors font-medium">info@sankalp.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-sm font-medium">
                        &copy; {currentYear} Sankalp Institute. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-neutral-500 font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
})

Footer.displayName = 'Footer'

export default Footer
