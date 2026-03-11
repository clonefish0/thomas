import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "cbta – Coaching by Thomas Arndt";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cbta-coaching.de";

    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    position: "relative",
                    backgroundColor: "#0e0a08",
                    overflow: "hidden",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Background photo – right side */}
                <img
                    src={`${siteUrl}/Foto6.jpg`}
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        height: "100%",
                        width: "50%",
                        objectFit: "cover",
                        objectPosition: "center top",
                    }}
                />

                {/* Dark gradient overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(90deg, #0e0a08 45%, rgba(14,10,8,0.7) 70%, rgba(14,10,8,0.2) 100%)",
                        display: "flex",
                    }}
                />

                {/* Red accent line */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "4px",
                        backgroundColor: "#cc2d18",
                        display: "flex",
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "60px 70px",
                        width: "620px",
                        gap: "0px",
                    }}
                >
                    {/* Label */}
                    <div
                        style={{
                            fontSize: "13px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#cc2d18",
                            marginBottom: "20px",
                            display: "flex",
                        }}
                    >
                        cbta · Coaching by Thomas Arndt
                    </div>

                    {/* Headline */}
                    <div
                        style={{
                            fontSize: "56px",
                            fontWeight: "800",
                            color: "#f0e8e0",
                            lineHeight: 1.1,
                            marginBottom: "24px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <span>Individuell.</span>
                        <span style={{ color: "#cc2d18" }}>Nur für dich.</span>
                    </div>

                    {/* Subline */}
                    <div
                        style={{
                            fontSize: "20px",
                            color: "#c0a898",
                            lineHeight: 1.5,
                            maxWidth: "440px",
                            display: "flex",
                        }}
                    >
                        Coaching für Ernährung & Training in Düsseldorf & Hilden.
                    </div>

                    {/* CTA pill */}
                    <div
                        style={{
                            marginTop: "36px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#cc2d18",
                                color: "#fff",
                                fontSize: "15px",
                                fontWeight: "700",
                                padding: "12px 24px",
                                borderRadius: "10px",
                                display: "flex",
                            }}
                        >
                            Kostenloses Erstgespräch →
                        </div>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
