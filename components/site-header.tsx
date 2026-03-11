"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Über mich", href: "#ueber-mich" },
    { label: "Coaching", href: "#coaching" },
    { label: "Prozess", href: "#prozess" },
    { label: "FAQ", href: "#faq" },
];

function scrollTo(id: string) {
    document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
}

export function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between"
            style={{
                backgroundColor: "rgba(12,10,8,0.88)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderBottom: "1px solid rgba(190,40,20,0.18)",
            }}
        >
            <Link href="/" className="flex items-center gap-3 group shrink-0">
                <Image
                    src="/Logo.png"
                    alt="cbta – Coaching by Thomas Arndt"
                    width={44}
                    height={44}
                    className="rounded-none"
                    priority
                />
                <span
                    className="text-sm tracking-[0.12em] uppercase font-bold text-[#f0e8e0] transition-opacity duration-200 group-hover:opacity-70"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                    Coaching by Thomas Arndt
                </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
                {navLinks.map(({ label, href }) => (
                    <button
                        key={href}
                        onClick={() => scrollTo(href)}
                        className="px-4 py-1.5 text-xs tracking-[0.12em] uppercase font-semibold rounded-lg transition-all duration-200"
                        style={{
                            color: "#c0a898",
                            fontFamily: "var(--font-mono)",
                            border: "1px solid transparent",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.color = "#f0e8e0";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(190,40,20,0.35)";
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(190,40,20,0.08)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.color = "#c0a898";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                        }}
                    >
                        {label}
                    </button>
                ))}
                <a
                    href="https://kahunas.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-4 py-1.5 text-xs tracking-[0.12em] uppercase font-semibold rounded-lg transition-all duration-200"
                    style={{
                        color: "#f0e8e0",
                        fontFamily: "var(--font-mono)",
                        border: "1px solid rgba(190,40,20,0.45)",
                        backgroundColor: "rgba(190,40,20,0.08)",
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(190,40,20,0.18)";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(190,40,20,0.8)";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(190,40,20,0.08)";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(190,40,20,0.45)";
                    }}
                >
                    Kunden ↗
                </a>
            </nav>

            {/* Mobile burger */}
            <button
                className="md:hidden p-2"
                style={{ color: "#c0a898" }}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Menü"
            >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div
                    className="absolute top-full left-0 right-0 flex flex-col py-3 md:hidden"
                    style={{
                        backgroundColor: "rgba(12,10,8,0.97)",
                        borderBottom: "1px solid rgba(190,40,20,0.18)",
                    }}
                >
                    {navLinks.map(({ label, href }) => (
                        <button
                            key={href}
                            onClick={() => { scrollTo(href); setMenuOpen(false); }}
                            className="px-6 py-3 text-left text-xs tracking-[0.15em] uppercase font-semibold"
                            style={{ color: "#c0a898", fontFamily: "var(--font-mono)" }}
                        >
                            {label}
                        </button>
                    ))}
                    <a
                        href="https://kahunas.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-left text-xs tracking-[0.15em] uppercase font-semibold"
                        style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}
                        onClick={() => setMenuOpen(false)}
                    >
                        Kunden ↗
                    </a>
                </div>
            )}
        </header>
    );
}
