import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum – cbta",
};

export default function ImpressumPage() {
    return (
        <div
            className="relative min-h-screen px-6 py-20"
            style={{ backgroundColor: "transparent", zIndex: 1 }}
        >
            <div className="max-w-2xl mx-auto">
                {/* Back */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-200"
                    style={{ color: "rgba(255,190,100,0.5)" }}
                >
                    ← Zurück
                </Link>

                <p
                    className="text-xs tracking-[0.18em] uppercase mb-4"
                    style={{ color: "rgba(255,190,100,0.4)" }}
                >
                    Rechtliches
                </p>
                <h1
                    className="text-4xl font-bold tracking-tight mb-12"
                    style={{ color: "#ffffff" }}
                >
                    Impressum
                </h1>

                <div
                    className="space-y-10 text-sm leading-relaxed"
                    style={{ color: "rgba(242,210,160,0.65)" }}
                >
                    <section>
                        <h2
                            className="text-base font-semibold mb-3"
                            style={{ color: "rgba(242,210,160,0.9)" }}
                        >
                            Angaben gemäß § 5 TMG
                        </h2>
                        <p>
                            Thomas Arndt
                            <br />
                            Heiligenstraße 44c
                            <br />
                            40721 Hilden
                        </p>
                    </section>

                    <div
                        className="h-px"
                        style={{ background: "rgba(255,190,100,0.07)" }}
                    />

                    <section>
                        <h2
                            className="text-base font-semibold mb-3"
                            style={{ color: "rgba(242,210,160,0.9)" }}
                        >
                            Kontakt
                        </h2>
                        <p>
                            Telefon:{" "}
                            <a
                                href="tel:+4917632692381"
                                style={{ color: "rgba(255,190,100,0.7)" }}
                            >
                                +49 176 326 923 81
                            </a>
                            <br />
                            E-Mail:{" "}
                            <a
                                href="mailto:thomas@cbta-coaching.de"
                                style={{ color: "rgba(255,190,100,0.7)" }}
                            >
                                thomas@cbta-coaching.de
                            </a>
                        </p>
                    </section>

                    <div
                        className="h-px"
                        style={{ background: "rgba(255,190,100,0.07)" }}
                    />

                    <section>
                        <h2
                            className="text-base font-semibold mb-3"
                            style={{ color: "rgba(242,210,160,0.9)" }}
                        >
                            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                        </h2>
                        <p>
                            Thomas Arndt
                            <br />
                            Heiligenstraße 44c
                            <br />
                            40721 Hilden
                        </p>
                    </section>

                    <div
                        className="h-px"
                        style={{ background: "rgba(255,190,100,0.07)" }}
                    />

                    <section>
                        <h2
                            className="text-base font-semibold mb-3"
                            style={{ color: "rgba(242,210,160,0.9)" }}
                        >
                            Streitschlichtung
                        </h2>
                        <p className="mb-3">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                            <a
                                href="https://ec.europa.eu/consumers/odr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "rgba(255,190,100,0.7)" }}
                            >
                                https://ec.europa.eu/consumers/odr/
                            </a>
                            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    <div
                        className="h-px"
                        style={{ background: "rgba(255,190,100,0.07)" }}
                    />

                    <section>
                        <h2
                            className="text-base font-semibold mb-3"
                            style={{ color: "rgba(242,210,160,0.9)" }}
                        >
                            Haftung für Inhalte
                        </h2>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                    </section>

                    <section>
                        <h2
                            className="text-base font-semibold mb-3"
                            style={{ color: "rgba(242,210,160,0.9)" }}
                        >
                            Haftung für Links
                        </h2>
                        <p>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                        </p>
                    </section>

                    <section>
                        <h2
                            className="text-base font-semibold mb-3"
                            style={{ color: "rgba(242,210,160,0.9)" }}
                        >
                            Urheberrecht
                        </h2>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
