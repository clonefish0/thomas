import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz – cbta",
};

export default function DatenschutzPage() {
    return (
        <div
            className="min-h-screen px-6 py-20"
            style={{ backgroundColor: "#05060f" }}
        >
            <div className="max-w-2xl mx-auto">
                {/* Back */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-200"
                    style={{ color: "rgba(186,214,247,0.5)" }}
                >
                    ← Zurück
                </Link>

                <p
                    className="text-xs tracking-[0.18em] uppercase mb-4"
                    style={{ color: "rgba(186,214,247,0.4)" }}
                >
                    Rechtliches
                </p>
                <h1
                    className="text-4xl font-bold tracking-tight mb-12"
                    style={{ color: "#ffffff" }}
                >
                    Datenschutzerklärung
                </h1>

                <div
                    className="space-y-10 text-sm leading-relaxed"
                    style={{ color: "rgba(200,212,234,0.65)" }}
                >
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={{ color: "rgba(200,212,234,0.9)" }}>
                            1. Datenschutz auf einen Blick
                        </h2>
                        <p className="mb-3">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                    </section>

                    <div className="h-px" style={{ background: "rgba(186,214,247,0.07)" }} />

                    <section>
                        <h2 className="text-base font-semibold mb-3" style={{ color: "rgba(200,212,234,0.9)" }}>
                            2. Verantwortliche Stelle
                        </h2>
                        <p>
                            Thomas Arndt
                            <br />
                            Heiligenstraße 44c, 40721 Hilden
                            <br />
                            E-Mail:{" "}
                            <a href="mailto:thomas@cbta-coaching.de" style={{ color: "rgba(186,214,247,0.7)" }}>
                                thomas@cbta-coaching.de
                            </a>
                            <br />
                            Telefon:{" "}
                            <a href="tel:+4917632692381" style={{ color: "rgba(186,214,247,0.7)" }}>
                                +49 176 326 923 81
                            </a>
                        </p>
                    </section>

                    <div className="h-px" style={{ background: "rgba(186,214,247,0.07)" }} />

                    <section>
                        <h2 className="text-base font-semibold mb-3" style={{ color: "rgba(200,212,234,0.9)" }}>
                            3. Datenerfassung auf dieser Website
                        </h2>
                        <h3 className="font-medium mb-2" style={{ color: "rgba(200,212,234,0.8)" }}>
                            Server-Log-Dateien
                        </h3>
                        <p className="mb-4">
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                        </p>
                        <h3 className="font-medium mb-2" style={{ color: "rgba(200,212,234,0.8)" }}>
                            Kontaktformular
                        </h3>
                        <p>
                            Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
                        </p>
                    </section>

                    <div className="h-px" style={{ background: "rgba(186,214,247,0.07)" }} />

                    <section>
                        <h2 className="text-base font-semibold mb-3" style={{ color: "rgba(200,212,234,0.9)" }}>
                            4. Ihre Rechte
                        </h2>
                        <p className="mb-3">
                            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
                        </p>
                        <p>
                            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                        </p>
                    </section>

                    <div className="h-px" style={{ background: "rgba(186,214,247,0.07)" }} />

                    <section>
                        <h2 className="text-base font-semibold mb-3" style={{ color: "rgba(200,212,234,0.9)" }}>
                            5. Datensicherheit
                        </h2>
                        <p>
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
