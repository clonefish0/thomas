import Link from "next/link";
import { Youtube, Instagram, Music2 } from "lucide-react";

const socials = [
    { label: "YouTube", href: "https://www.youtube.com/@ThomasArndt_cbta", icon: Youtube },
    { label: "Instagram", href: "https://www.instagram.com/thomasarndt_cbta/", icon: Instagram },
    { label: "Spotify", href: "https://open.spotify.com/show/4ZmKyh5I2lLhb1nUhRfCK0", icon: Music2 },
];

export function SiteFooter() {
    return (
        <footer
            className="relative px-6 py-16"
            style={{ borderTop: "1px solid rgba(185,85,15,0.07)" }}
        >
            <style>{`
                .footer-social { color: rgba(74,46,8,0.35); transition: color 0.2s; }
                .footer-social:hover { color: rgba(185,85,15,0.8); }
                .footer-link { color: rgba(74,46,8,0.35); transition: color 0.2s; }
                .footer-link:hover { color: rgba(185,85,15,0.7); }
            `}</style>
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div>
                        <p
                            className="text-xs tracking-[0.18em] uppercase mb-1"
                            style={{ color: "rgba(185,85,15,0.5)" }}
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
                                <Icon className="w-5 h-5" />
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
                    style={{ borderTop: "1px solid rgba(185,85,15,0.06)" }}
                >
                    © 2025 Thomas Arndt · Heiligenstraße 44c, 40721 Hilden
                </div>
            </div>
        </footer>
    );
}
