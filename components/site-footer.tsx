import Link from "next/link";
import { Youtube, Instagram, Music2 } from "lucide-react";

const socials = [
    { label: "Instagram", href: "https://www.instagram.com/thomasarndt_cbta/", icon: Instagram },
    { label: "YouTube", href: "https://www.youtube.com/@ThomasArndt_cbta", icon: Youtube },
    { label: "Spotify", href: "https://open.spotify.com/show/4ZmKyh5I2lLhb1nUhRfCK0", icon: Music2 },
];

export function SiteFooter() {
    return (
        <footer
            className="relative px-6 py-16"
            style={{ borderTop: "1px solid rgba(190,40,20,0.2)" }}
        >
            <style>{`
                .footer-social { color: #9a8070; transition: color 0.2s; }
                .footer-social:hover { color: #e03a20; }
                .footer-link { color: #9a8070; transition: color 0.2s; }
                .footer-link:hover { color: #e03a20; }
            `}</style>
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div>
                        <p
                            className="text-xs tracking-[0.18em] uppercase mb-1"
                            style={{ color: "#cc2d18" }}
                        >
                            cbta
                        </p>
                        <p className="text-sm footer-link">
                            Coaching by Thomas Arndt
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="footer-social"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>

                    {/* Legal nav */}
                    <nav className="flex items-center gap-6 text-sm">
                        {[
                            { label: "Impressum", href: "/impressum" },
                            { label: "Datenschutz", href: "/datenschutz" },
                        ].map(({ label, href }) => (
                            <Link key={label} href={href} className="footer-link">
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div
                    className="mt-10 pt-6 text-xs text-center footer-link"
                    style={{ borderTop: "1px solid rgba(190,40,20,0.18)" }}
                >
                    © 2025 Thomas Arndt · Heiligenstraße 44c, 40721 Hilden
                </div>
            </div>
        </footer>
    );
}
