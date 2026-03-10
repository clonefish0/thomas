import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center"
            style={{
                backgroundColor: "rgba(12,10,8,0.88)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderBottom: "1px solid rgba(190,40,20,0.18)",
            }}
        >
            <Link href="/" className="flex items-center gap-3 group">
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
        </header>
    );
}
