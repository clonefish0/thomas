import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz & AGB – cbta",
    description: "Datenschutzerklärung und Allgemeine Geschäftsbedingungen von cbta – Coaching by Thomas Arndt.",
};

const h2Style = {
    color: "rgba(185,85,15,0.85)",
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.04em",
} as const;

const h3Style = {
    color: "rgba(74,46,8,0.9)",
} as const;

const divider = (
    <div className="h-px my-8" style={{ background: "rgba(185,85,15,0.07)" }} />
);

const metaLabel = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    color: "rgba(185,85,15,0.45)",
    textTransform: "uppercase" as const,
};

function DataBox({ items }: { items: { label: string; value: string }[] }) {
    return (
        <div
            className="rounded-lg p-4 mt-4 space-y-2 text-xs leading-relaxed"
            style={{ background: "rgba(185,85,15,0.04)", border: "1px solid rgba(185,85,15,0.08)" }}
        >
            {items.map(({ label, value }) => (
                <div key={label}>
                    <span style={metaLabel}>{label}:</span>{" "}
                    <span style={{ color: "rgba(74,46,8,0.6)" }}>{value}</span>
                </div>
            ))}
        </div>
    );
}

export default function DatenschutzPage() {
    return (
        <div className="relative min-h-screen px-6 py-20" style={{ backgroundColor: "transparent", zIndex: 1 }}>
            <div className="max-w-2xl mx-auto">

                {/* Back */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-200"
                    style={{ color: "rgba(185,85,15,0.5)" }}
                >
                    ← Zurück
                </Link>

                {/* Page label */}
                <p className="text-xs tracking-[0.18em] uppercase mb-4" style={metaLabel}>
                    Rechtliches
                </p>

                <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: "#1c0e02" }}>
                    Datenschutz & AGB
                </h1>
                <p className="text-sm mb-12" style={{ color: "rgba(185,85,15,0.4)", fontFamily: "var(--font-mono)" }}>
                    Stand: 25. November 2025
                </p>

                {/* ──────────────────────────────────────────────────────── */}
                {/*  DATENSCHUTZERKLÄRUNG                                    */}
                {/* ──────────────────────────────────────────────────────── */}

                <p
                    className="text-xs tracking-[0.18em] uppercase mb-6"
                    style={{ ...metaLabel, color: "rgba(185,85,15,0.6)", fontSize: "0.65rem" }}
                >
                    Teil I
                </p>
                <h2 className="text-2xl font-semibold mb-8" style={{ ...h2Style, color: "#1c0e02" }}>
                    Datenschutzerklärung
                </h2>

                <div className="space-y-10 text-sm leading-relaxed" style={{ color: "rgba(74,46,8,0.65)" }}>

                    {/* Präambel */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Präambel</h2>
                        <p>
                            Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer
                            personenbezogenen Daten (nachfolgend auch kurz als „Daten" bezeichnet) wir zu welchen Zwecken
                            und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten
                            Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als
                            auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer
                            Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet
                            als „Onlineangebot"). Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
                        </p>
                    </section>

                    {divider}

                    {/* Verantwortlicher */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Verantwortlicher</h2>
                        <p>
                            Thomas Arndt<br />
                            Heiligenstraße 44c<br />
                            40721 Hilden<br /><br />
                            E-Mail:{" "}
                            <a href="mailto:thomas@cbta-coaching.de" style={{ color: "rgba(185,85,15,0.7)" }}>
                                thomas@cbta-coaching.de
                            </a><br />
                            Telefon:{" "}
                            <a href="tel:+4917632692381" style={{ color: "rgba(185,85,15,0.7)" }}>
                                017632692381
                            </a><br />
                            Impressum:{" "}
                            <a href="/impressum" style={{ color: "rgba(185,85,15,0.7)" }}>
                                cbta-coaching.de/impressum
                            </a>
                        </p>
                    </section>

                    {divider}

                    {/* Übersicht der Verarbeitungen */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Übersicht der Verarbeitungen</h2>
                        <p className="mb-4">
                            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer
                            Verarbeitung zusammen und verweist auf die betroffenen Personen.
                        </p>

                        <h3 className="font-medium mb-2" style={h3Style}>Arten der verarbeiteten Daten</h3>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                            {["Bestandsdaten", "Beschäftigtendaten", "Zahlungsdaten", "Kontaktdaten",
                                "Inhaltsdaten", "Vertragsdaten", "Nutzungsdaten",
                                "Meta-, Kommunikations- und Verfahrensdaten", "Protokolldaten"].map(d => (
                                <li key={d}>{d}</li>
                            ))}
                        </ul>

                        <h3 className="font-medium mb-2" style={h3Style}>Kategorien betroffener Personen</h3>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                            {["Leistungsempfänger und Auftraggeber", "Beschäftigte", "Interessenten",
                                "Kommunikationspartner", "Nutzer", "Geschäfts- und Vertragspartner",
                                "Bildungs- und Kursteilnehmer", "Dritte Personen", "Hinweisgeber"].map(d => (
                                <li key={d}>{d}</li>
                            ))}
                        </ul>

                        <h3 className="font-medium mb-2" style={h3Style}>Zwecke der Verarbeitung</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {["Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten",
                                "Kommunikation", "Sicherheitsmaßnahmen", "Reichweitenmessung", "Tracking",
                                "Büro- und Organisationsverfahren", "Konversionsmessung", "Zielgruppenbildung",
                                "Organisations- und Verwaltungsverfahren", "Servermonitoring und Fehlererkennung",
                                "Feedback", "Marketing", "Profile mit nutzerbezogenen Informationen",
                                "Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit",
                                "Informationstechnische Infrastruktur", "Hinweisgeberschutz",
                                "Öffentlichkeitsarbeit", "Geschäftsprozesse und betriebswirtschaftliche Verfahren"].map(d => (
                                <li key={d}>{d}</li>
                            ))}
                        </ul>
                    </section>

                    {divider}

                    {/* Maßgebliche Rechtsgrundlagen */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Maßgebliche Rechtsgrundlagen</h2>
                        <p className="mb-4">
                            Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden erhalten Sie eine Übersicht der
                            Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen
                            Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem
                            bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere
                            Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
                        </p>
                        <ul className="list-disc list-inside space-y-3 mb-4">
                            <li>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> – Die betroffene Person hat ihre
                                Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen
                                spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                            </li>
                            <li>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> – Die
                                Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene
                                Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich.
                            </li>
                            <li>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> – Die Verarbeitung ist zur
                                Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.
                            </li>
                            <li>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – Die Verarbeitung ist zur
                                Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig,
                                vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person
                                nicht überwiegen.
                            </li>
                        </ul>
                        <p>
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen
                            der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland, insbesondere das
                            Bundesdatenschutzgesetz (BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf
                            Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
                            personenbezogener Daten sowie zur automatisierten Entscheidungsfindung einschließlich Profiling.
                        </p>
                    </section>

                    {divider}

                    {/* Sicherheitsmaßnahmen */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Sicherheitsmaßnahmen</h2>
                        <p className="mb-3">
                            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der
                            Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der
                            Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der
                            Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und
                            organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                        </p>
                        <p className="mb-3">
                            Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und
                            Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten
                            sowie des Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer
                            Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von
                            Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten
                            gewährleisten.
                        </p>
                        <p>
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>TLS-/SSL-Verschlüsselung (HTTPS):</strong> Um die Daten der Nutzer vor unerlaubten Zugriffen zu
                            schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Wenn eine Website durch ein
                            SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL
                            signalisiert.
                        </p>
                    </section>

                    {divider}

                    {/* Übermittlung */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Übermittlung von personenbezogenen Daten</h2>
                        <p>
                            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere
                            Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt
                            oder ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit
                            IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in
                            eine Website eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und
                            schließen insbesondere entsprechende Verträge bzw. Vereinbarungen ab, die dem Schutz Ihrer Daten
                            dienen.
                        </p>
                    </section>

                    {divider}

                    {/* Internationale Datentransfers */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Internationale Datentransfers</h2>
                        <p className="mb-3">
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in ein Drittland (d. h. außerhalb der
                            Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) übermitteln, erfolgt dies
                            stets im Einklang mit den gesetzlichen Vorgaben.
                        </p>
                        <p className="mb-3">
                            Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy Framework
                            (DPF), welches durch einen Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 als
                            sicherer Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen Anbietern
                            Standardvertragsklauseln abgeschlossen.
                        </p>
                        <p>
                            Diese zweifache Absicherung gewährleistet einen umfassenden Schutz Ihrer Daten: Das DPF bildet
                            die primäre Schutzebene, während die Standardvertragsklauseln als zusätzliche Sicherheit dienen.
                            Weitere Informationen zum DPF finden Sie auf der Website des US-Handelsministeriums unter{" "}
                            <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>
                                dataprivacyframework.gov
                            </a>.
                        </p>
                    </section>

                    {divider}

                    {/* Datenspeicherung und Löschung */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
                        <p className="mb-4">
                            Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen,
                            sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen
                            Grundlagen für die Verarbeitung bestehen.
                        </p>
                        <p className="mb-4">
                            Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden
                            müssen oder deren Speicherung zur Rechtsverfolgung oder zum Schutz der Rechte anderer Personen
                            notwendig ist, entsprechend archiviert werden.
                        </p>
                        <h3 className="font-medium mb-2" style={h3Style}>Aufbewahrungsfristen nach deutschem Recht</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong style={{ color: "rgba(74,46,8,0.8)" }}>10 Jahre</strong> – Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare, Lageberichte (§ 147 Abs. 1 Nr. 1 AO, § 257 Abs. 1 Nr. 1 HGB)</li>
                            <li><strong style={{ color: "rgba(74,46,8,0.8)" }}>8 Jahre</strong> – Buchungsbelege, z. B. Rechnungen und Kostenbelege (§ 147 Abs. 1 Nr. 4 AO, § 257 Abs. 1 Nr. 4 HGB)</li>
                            <li><strong style={{ color: "rgba(74,46,8,0.8)" }}>6 Jahre</strong> – Übrige Geschäftsunterlagen: empfangene Handels- und Geschäftsbriefe, sonstige Unterlagen (§ 147 Abs. 1 Nr. 2, 3, 5 AO, § 257 Abs. 1 Nr. 2 u. 3 HGB)</li>
                            <li><strong style={{ color: "rgba(74,46,8,0.8)" }}>3 Jahre</strong> – Daten für potenzielle Gewährleistungs- und Schadensersatzansprüche, basierend auf der regulären gesetzlichen Verjährungsfrist (§§ 195, 199 BGB)</li>
                        </ul>
                    </section>

                    {divider}

                    {/* Rechte der betroffenen Personen */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Rechte der betroffenen Personen</h2>
                        <p className="mb-4">
                            Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus
                            Art. 15 bis 21 DSGVO ergeben:
                        </p>
                        <ul className="space-y-3">
                            {[
                                ["Widerspruchsrecht", "Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling."],
                                ["Widerrufsrecht bei Einwilligungen", "Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen."],
                                ["Auskunftsrecht", "Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben."],
                                ["Recht auf Berichtigung", "Sie haben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen."],
                                ["Recht auf Löschung und Einschränkung der Verarbeitung", "Sie haben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ eine Einschränkung der Verarbeitung der Daten zu verlangen."],
                                ["Recht auf Datenübertragbarkeit", "Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern."],
                                ["Beschwerde bei Aufsichtsbehörde", "Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes."],
                            ].map(([title, desc]) => (
                                <li key={title} className="list-none">
                                    <strong style={{ color: "rgba(74,46,8,0.85)" }}>{title}:</strong>{" "}
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {divider}

                    {/* Geschäftliche Leistungen */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Geschäftliche Leistungen</h2>
                        <p className="mb-3">
                            Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z. B. Kunden und Interessenten
                            (zusammenfassend als „Vertragspartner" bezeichnet), im Rahmen von vertraglichen und
                            vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Hinblick auf die
                            Kommunikation mit den Vertragspartnern.
                        </p>
                        <p className="mb-3">
                            Wir verwenden diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören
                            insbesondere die Pflichten zur Erbringung der vereinbarten Leistungen, etwaige
                            Aktualisierungspflichten und Abhilfe bei Gewährleistungs- und sonstigen Leistungsstörungen.
                        </p>
                        <p className="mb-4">
                            Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten,
                            d. h. grundsätzlich nach vier Jahren, es sei denn, dass die Daten aus gesetzlichen Gründen der
                            Archivierung aufbewahrt werden müssen (etwa für Steuerzwecke im Regelfall zehn Jahre).
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Bestandsdaten, Zahlungsdaten, Kontaktdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten" },
                            { label: "Betroffene Personen", value: "Leistungsempfänger und Auftraggeber, Interessenten, Geschäfts- und Vertragspartner, Bildungs- und Kursteilnehmer" },
                            { label: "Zwecke", value: "Erbringung vertraglicher Leistungen, Sicherheitsmaßnahmen, Kommunikation, Büro- und Organisationsverfahren" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. b) DSGVO (Vertragserfüllung), lit. c) DSGVO (Rechtliche Verpflichtung), lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />

                        <div className="mt-4 space-y-3">
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Onlineshop und E-Commerce:</strong> Wir verarbeiten die Daten unserer Kunden, um ihnen die
                                Auswahl, den Erwerb, bzw. die Bestellung der gewählten Produkte, Waren sowie verbundener
                                Leistungen als auch deren Bezahlung und Bereitstellung zu ermöglichen. Rechtsgrundlage:
                                Art. 6 Abs. 1 S. 1 lit. b) DSGVO.
                            </p>
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Bildungs- und Schulungsleistungen:</strong> Wir verarbeiten die Daten der Teilnehmer unserer
                                Bildungs- und Schulungsangebote, um ihnen gegenüber unsere Schulungsleistungen erbringen zu
                                können. Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. b) DSGVO.
                            </p>
                        </div>
                    </section>

                    {divider}

                    {/* Bereitstellung Onlineangebot und Webhosting */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Bereitstellung des Onlineangebots und Webhosting</h2>
                        <p className="mb-4">
                            Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu
                            können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die
                            Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu
                            übermitteln.
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Nutzungsdaten, Meta- und Kommunikationsdaten, Protokolldaten" },
                            { label: "Betroffene Personen", value: "Nutzer (Webseitenbesucher, Nutzer von Onlinediensten)" },
                            { label: "Zwecke", value: "Bereitstellung des Onlineangebotes, Informationstechnische Infrastruktur, Sicherheitsmaßnahmen, Servermonitoring" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />

                        <div className="mt-4 space-y-3">
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Webhosting (gemieteter Speicherplatz):</strong> Für die Bereitstellung unseres Onlineangebotes
                                nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden
                                Serveranbieter (auch „Webhoster" genannt) mieten oder anderweitig beziehen. Rechtsgrundlage:
                                Art. 6 Abs. 1 S. 1 lit. f) DSGVO.
                            </p>
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Zugriffsdaten und Logfiles:</strong> Der Zugriff auf unser Onlineangebot wird in Form von
                                sogenannten „Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und der
                                Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene
                                Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem
                                des Nutzers, Referrer URL und im Regelfall IP-Adressen gehören. Logfile-Informationen werden
                                für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert.
                                Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. f) DSGVO.
                            </p>
                            {/* ⚠️ Fehlerkorrektur: Squarespace → Vercel (Seite wird auf Vercel gehostet, nicht auf Squarespace) */}
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Vercel (Hosting):</strong> Wir nutzen Vercel für das Hosting unseres Onlineangebotes. Vercel ist
                                eine Cloud-Plattform für die Bereitstellung von Webanwendungen und stellt die Infrastruktur
                                für unsere Website bereit; Dienstanbieter: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
                                91789, USA; Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. f) DSGVO; Website:{" "}
                                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>
                                    vercel.com
                                </a>; Datenschutzerklärung:{" "}
                                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>
                                    vercel.com/legal/privacy-policy
                                </a>; Grundlage Drittlandtransfers: Standardvertragsklauseln.
                            </p>
                        </div>
                    </section>

                    {divider}

                    {/* Einsatz von Cookies */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Einsatz von Cookies</h2>
                        <p className="mb-3">
                            Unter dem Begriff „Cookies" werden Funktionen, die Informationen auf Endgeräten der Nutzer
                            speichern und aus ihnen auslesen, verstanden. Wir verwenden Cookies gemäß den gesetzlichen
                            Vorschriften. Dazu holen wir, wenn erforderlich, vorab die Zustimmung der Nutzer ein. Ist eine
                            Zustimmung nicht notwendig, setzen wir auf unsere berechtigten Interessen.
                        </p>
                        <p className="mb-3">
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>Speicherdauer:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                            <li><strong style={{ color: "rgba(74,46,8,0.8)" }}>Temporäre Cookies (Session-Cookies):</strong> Werden spätestens gelöscht, nachdem ein Nutzer das Onlineangebot verlassen und sein Endgerät geschlossen hat.</li>
                            <li><strong style={{ color: "rgba(74,46,8,0.8)" }}>Permanente Cookies:</strong> Bleiben auch nach dem Schließen des Endgeräts gespeichert. Die Speicherdauer kann bis zu zwei Jahre betragen.</li>
                        </ul>
                        <p className="mb-4">
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>Widerruf und Widerspruch (Opt-out):</strong> Nutzer können die von ihnen abgegebenen
                            Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung
                            entsprechend den gesetzlichen Vorgaben, auch mittels der Privatsphäre-Einstellungen ihres
                            Browsers, erklären.
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Meta-, Kommunikations- und Verfahrensdaten" },
                            { label: "Betroffene Personen", value: "Nutzer" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. f) DSGVO (Berechtigte Interessen), lit. a) DSGVO (Einwilligung)" },
                        ]} />
                    </section>

                    {divider}

                    {/* Registrierung, Anmeldung und Nutzerkonto */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Registrierung, Anmeldung und Nutzerkonto</h2>
                        <p className="mb-3">
                            Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden den Nutzern die
                            erforderlichen Pflichtangaben mitgeteilt und zu Zwecken der Bereitstellung des Nutzerkontos auf
                            Grundlage vertraglicher Pflichterfüllung verarbeitet. Zu den verarbeiteten Daten gehören
                            insbesondere die Login-Informationen (Nutzername, Passwort sowie eine E-Mail-Adresse).
                        </p>
                        <p className="mb-4">
                            Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung
                            des Nutzerkontos speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung.
                            Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, sie ist zur
                            Verfolgung unserer Ansprüche erforderlich oder es besteht eine gesetzliche Verpflichtung hierzu.
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Bestandsdaten, Kontaktdaten, Inhaltsdaten, Nutzungsdaten, Protokolldaten" },
                            { label: "Zwecke", value: "Erbringung vertraglicher Leistungen, Sicherheitsmaßnahmen, Nutzerkontobereitstellung" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. b) DSGVO (Vertragserfüllung), lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />
                        <div className="mt-4 space-y-3">
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Löschung nach Kündigung:</strong> Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten
                                im Hinblick auf das Nutzerkonto gelöscht, vorbehaltlich einer gesetzlichen Erlaubnis, Pflicht
                                oder Einwilligung. Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. b) DSGVO.
                            </p>
                        </div>
                    </section>

                    {divider}

                    {/* Blogs und Publikationsmedien */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Blogs und Publikationsmedien</h2>
                        <p className="mb-4">
                            Wir nutzen Blogs oder vergleichbare Mittel der Onlinekommunikation und Publikation. Die Daten
                            der Leser werden für die Zwecke des Publikationsmediums nur insoweit verarbeitet, als es für
                            dessen Darstellung und die Kommunikation zwischen Autoren und Lesern oder aus Gründen der
                            Sicherheit erforderlich ist.
                        </p>
                        <p>
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>Kommentare und Beiträge:</strong> Wenn Nutzer Kommentare oder sonstige Beiträge hinterlassen,
                            können ihre IP-Adressen auf Grundlage unserer berechtigten Interessen gespeichert werden. Die im
                            Rahmen der Kommentare mitgeteilten Informationen zur Person werden von uns bis zum Widerspruch
                            der Nutzer dauerhaft gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. f) DSGVO.
                        </p>
                    </section>

                    {divider}

                    {/* Kontakt- und Anfrageverwaltung */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Kontakt- und Anfrageverwaltung</h2>
                        <p className="mb-4">
                            Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via
                            soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben
                            der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und
                            etwaiger angefragter Maßnahmen erforderlich ist.
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Bestandsdaten, Kontaktdaten, Inhaltsdaten, Meta- und Kommunikationsdaten" },
                            { label: "Betroffene Personen", value: "Kommunikationspartner" },
                            { label: "Zwecke", value: "Kommunikation, Organisations- und Verwaltungsverfahren, Feedback" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. f) DSGVO (Berechtigte Interessen), lit. b) DSGVO (Vertragserfüllung)" },
                        ]} />
                        <p className="mt-4">
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>Kontaktformular:</strong> Bei Kontaktaufnahme über unser Kontaktformular, per E-Mail oder anderen
                            Kommunikationswegen, verarbeiten wir die uns übermittelten personenbezogenen Daten zur
                            Beantwortung und Bearbeitung des jeweiligen Anliegens. Wir nutzen diese Daten ausschließlich für
                            den angegebenen Zweck der Kontaktaufnahme und Kommunikation.
                        </p>
                    </section>

                    {divider}

                    {/* Kommunikation via Messenger */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Kommunikation via Messenger</h2>
                        <p className="mb-3">
                            Wir setzen zu Zwecken der Kommunikation Messenger ein und bitten daher darum, die nachfolgenden
                            Hinweise zur Funktionsfähigkeit der Messenger, zur Verschlüsselung, zur Nutzung der Metadaten
                            der Kommunikation und zu Ihren Widerspruchsmöglichkeiten zu beachten.
                        </p>
                        <p className="mb-3">
                            Im Fall einer Ende-zu-Ende-Verschlüsselung von Inhalten weisen wir darauf hin, dass die
                            Kommunikationsinhalte (d. h. der Inhalt der Nachricht und angehängte Bilder) von Ende zu Ende
                            verschlüsselt werden. Das bedeutet, dass der Inhalt der Nachrichten nicht einsehbar ist, nicht
                            einmal durch die Messenger-Anbieter selbst.
                        </p>
                        <p>
                            Wir weisen unsere Kommunikationspartner darauf hin, dass die Anbieter der Messenger zwar nicht
                            den Inhalt einsehen, aber in Erfahrung bringen können, dass und wann Kommunikationspartner mit
                            uns kommunizieren sowie technische Informationen zum verwendeten Gerät der Kommunikationspartner.
                        </p>
                        <DataBox items={[
                            { label: "Betroffene Personen", value: "Kommunikationspartner" },
                            { label: "Zwecke", value: "Kommunikation" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. a) DSGVO (Einwilligung), lit. b) DSGVO (Vertragserfüllung), lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />
                    </section>

                    {divider}

                    {/* Webanalyse */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Webanalyse, Monitoring und Optimierung</h2>
                        <p className="mb-3">
                            Die Webanalyse (auch als „Reichweitenmessung" bezeichnet) dient der Auswertung der
                            Besucherströme unseres Onlineangebots und kann Verhalten, Interessen oder demografische
                            Informationen zu den Besuchern als pseudonyme Werte umfassen. Darüber hinaus werden die
                            IP-Adressen der Nutzer gespeichert, wobei wir ein IP-Masking-Verfahren (Pseudonymisierung durch
                            Kürzung der IP-Adresse) einsetzen.
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Nutzungsdaten, Meta- und Kommunikationsdaten" },
                            { label: "Betroffene Personen", value: "Nutzer" },
                            { label: "Speicherdauer", value: "Cookies bis zu 2 Jahren" },
                            { label: "Sicherheitsmaßnahmen", value: "IP-Masking (Pseudonymisierung der IP-Adresse)" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. a) DSGVO (Einwilligung), lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />
                        <div className="mt-4">
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Google Analytics:</strong> Wir verwenden Google Analytics zur Messung und Analyse der Nutzung
                                unseres Onlineangebotes auf der Grundlage einer pseudonymen Nutzeridentifikationsnummer.
                                Google Analytics protokolliert und speichert keine individuellen IP-Adressen für EU-Nutzer.
                                Beim EU-Datenverkehr werden die IP-Adressdaten ausschließlich für die Ableitung von
                                Geolokalisierungsdaten verwendet, bevor sie sofort gelöscht werden; Dienstanbieter: Google
                                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Rechtsgrundlage: Art. 6 Abs.
                                1 S. 1 lit. a) DSGVO (Einwilligung); Datenschutzerklärung:{" "}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>
                                    policies.google.com/privacy
                                </a>; Grundlage Drittlandtransfers: Data Privacy Framework (DPF); Opt-Out:{" "}
                                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>
                                    tools.google.com/dlpage/gaoptout
                                </a>.
                            </p>
                        </div>
                    </section>

                    {divider}

                    {/* Kundenrezensionen */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Kundenrezensionen und Bewertungsverfahren</h2>
                        <p className="mb-3">
                            Wir nehmen an Rezensions- und Bewertungsverfahren teil, um unsere Leistungen zu evaluieren, zu
                            optimieren und zu bewerben. Wenn Nutzer uns über die beteiligten Bewertungsplattformen oder
                            -verfahren bewerten oder anderweitig Feedback geben, gelten zusätzlich die Allgemeinen Geschäfts-
                            oder Nutzungsbedingungen und die Datenschutzhinweise der Anbieter.
                        </p>
                        <p>
                            Um sicherzustellen, dass die bewertenden Personen tatsächlich unsere Leistungen in Anspruch
                            genommen haben, übermitteln wir mit Einwilligung der Kunden die hierzu erforderlichen Daten im
                            Hinblick auf den Kunden und die in Anspruch genommene Leistung an die jeweilige
                            Bewertungsplattform (einschließlich Name, E-Mail-Adresse und Bestellnummer). Diese Daten werden
                            alleine zur Verifizierung der Authentizität des Nutzers verwendet.
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten" },
                            { label: "Zwecke", value: "Feedback, Marketing" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />
                    </section>

                    {divider}

                    {/* Präsenzen in sozialen Netzwerken */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Präsenzen in sozialen Netzwerken (Social Media)</h2>
                        <p className="mb-3">
                            Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen
                            Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns
                            anzubieten.
                        </p>
                        <p className="mb-4">
                            Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen Union
                            verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so
                            zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden könnte.
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Kontaktdaten, Inhaltsdaten, Nutzungsdaten" },
                            { label: "Zwecke", value: "Kommunikation, Feedback, Öffentlichkeitsarbeit" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />
                        <div className="mt-4 space-y-3">
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Instagram:</strong> Soziales Netzwerk, ermöglicht das Teilen von Fotos und Videos;
                                Dienstanbieter: Meta Platforms Ireland Limited, Merrion Road, Dublin 4, Irland; Website:{" "}
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>instagram.com</a>;
                                Datenschutzerklärung:{" "}
                                <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>privacycenter.instagram.com/policy/</a>;
                                Grundlage Drittlandtransfers: Data Privacy Framework (DPF).
                            </p>
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>YouTube:</strong> Soziales Netzwerk und Videoplattform;
                                Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;
                                Datenschutzerklärung:{" "}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>policies.google.com/privacy</a>;
                                Grundlage Drittlandtransfers: Data Privacy Framework (DPF);
                                Opt-Out:{" "}
                                <a href="https://myadcenter.google.com/personalizationoff" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>myadcenter.google.com/personalizationoff</a>.
                            </p>
                        </div>
                    </section>

                    {divider}

                    {/* Plug-ins und eingebettete Inhalte */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Plug-ins und eingebettete Funktionen sowie Inhalte</h2>
                        <p className="mb-3">
                            Wir binden Funktions- und Inhaltselemente in unser Onlineangebot ein, die von den Servern ihrer
                            jeweiligen Anbieter (nachfolgend als „Drittanbieter" bezeichnet) bezogen werden. Die Einbindung
                            setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten,
                            da sie ohne IP-Adresse die Inhalte nicht an deren Browser senden könnten.
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Nutzungsdaten, Meta- und Kommunikationsdaten" },
                            { label: "Speicherdauer", value: "Cookies bis zu 2 Jahren" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. a) DSGVO (Einwilligung), lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />
                        <div className="mt-4 space-y-3">
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Instagram-Plugins und -Inhalte:</strong> Instagram Plugins und -Inhalte – hierzu können z. B.
                                Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte innerhalb von
                                Instagram teilen können; Dienstanbieter: Meta Platforms Ireland Limited, Merrion Road, Dublin
                                4, Irland; Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. f) DSGVO; Datenschutzerklärung:{" "}
                                <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>privacycenter.instagram.com/policy/</a>.
                            </p>
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>YouTube-Videos:</strong> Videoinhalte; Dienstanbieter: Google Ireland Limited, Gordon House,
                                Barrow Street, Dublin 4, Irland; Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. a) DSGVO
                                (Einwilligung); Website:{" "}
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>youtube.com</a>;
                                Datenschutzerklärung:{" "}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>policies.google.com/privacy</a>;
                                Grundlage Drittlandtransfers: Data Privacy Framework (DPF). Opt-Out:{" "}
                                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(185,85,15,0.7)" }}>
                                    tools.google.com/dlpage/gaoptout
                                </a>.
                            </p>
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>YouTube-Videos (erweiterter Datenschutzmodus):</strong> Die Integration von YouTube-Videos
                                erfolgt über eine spezielle Domain mithilfe der Komponente „youtube-nocookie" im sogenannten
                                „erweiterten Datenschutzmodus". Im „erweiterten Datenschutzmodus" können bis zum Start des
                                Videos lediglich Informationen, zu denen Ihre IP-Adresse sowie Angaben zum Browser und Ihrem
                                Endgerät gehören, auf Ihrem Endgerät gespeichert werden. Die Speicherdauer für die Cookies
                                kann bis zu zwei Jahre betragen. Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. a) DSGVO.
                            </p>
                        </div>
                    </section>

                    {divider}

                    {/* Management, Organisation und Hilfswerkzeuge */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Management, Organisation und Hilfswerkzeuge</h2>
                        <p className="mb-4">
                            Wir setzen Dienstleistungen, Plattformen und Software anderer Anbieter (nachfolgend bezeichnet
                            als „Drittanbieter") zu Zwecken der Organisation, Verwaltung, Planung sowie Erbringung unserer
                            Leistungen ein. Bei der Auswahl der Drittanbieter und ihrer Leistungen beachten wir die
                            gesetzlichen Vorgaben.
                        </p>
                        <DataBox items={[
                            { label: "Verarbeitete Daten", value: "Inhaltsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten" },
                            { label: "Betroffene Personen", value: "Kommunikationspartner, Nutzer" },
                            { label: "Zwecke", value: "Erbringung vertraglicher Leistungen, Büro- und Organisationsverfahren" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />
                    </section>

                    {divider}

                    {/* Datenschutzinformationen für Hinweisgeber */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Datenschutzinformationen für Hinweisgeber</h2>
                        <p className="mb-3">
                            In diesem Abschnitt finden Sie Informationen darüber, wie wir Daten von Personen, die Hinweise
                            geben (Hinweisgeber), sowie von betroffenen und beteiligten Parteien im Rahmen unseres
                            Hinweisgeberverfahrens handhaben. Unser Ziel ist es, eine unkomplizierte und sichere Möglichkeit
                            zur Meldung von möglichem Fehlverhalten anzubieten.
                        </p>
                        <p className="mb-3">
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>Rechtsgrundlagen (Deutschland):</strong> Soweit wir Daten zur Erfüllung unserer gesetzlichen
                            Pflichten entsprechend dem Hinweisgeberschutzgesetz (HinSchG) verarbeiten, ist die rechtliche
                            Basis der Verarbeitung Art. 6 Abs. 1 S. 1 lit. c) DSGVO und im Fall besonderer Kategorien
                            personenbezogener Daten Art. 9 Abs. 2 lit. g) DSGVO, § 22 BDSG, jeweils in Verbindung mit
                            § 10 HinSchG.
                        </p>
                        <p className="mb-3">
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>Angabe von Namen:</strong> Sie haben die Möglichkeit, Hinweise anonym abzugeben. Sofern es nicht
                            durch nationale Gesetzgebungen untersagt ist, empfehlen wir jedoch die Angabe Ihres Namens und
                            Ihrer Kontaktdaten. Dies ermöglicht uns, die Meldung effektiver nachzugehen und gegebenenfalls
                            direkt mit Ihnen in Kontakt zu treten. Ihre Identität wird streng vertraulich behandelt.
                        </p>
                        <p className="mb-4">
                            <strong style={{ color: "rgba(74,46,8,0.85)" }}>Bereitstellung von Daten an Dritte:</strong> Daten, die im Zusammenhang mit den abgegebenen
                            Hinweisen stehen, werden von uns nur dann an Dritte weitergegeben, wenn Sie uns Ihre
                            ausdrückliche Einwilligung dazu erteilt haben oder wenn eine gesetzliche Verpflichtung zur
                            Weitergabe besteht.
                        </p>
                        <DataBox items={[
                            { label: "Zwecke", value: "Hinweisgeberschutz" },
                            { label: "Rechtsgrundlagen", value: "Art. 6 Abs. 1 S. 1 lit. a) DSGVO (Einwilligung), lit. c) DSGVO (Rechtliche Verpflichtung), lit. f) DSGVO (Berechtigte Interessen)" },
                        ]} />
                    </section>

                    {divider}

                    {/* Änderung und Aktualisierung */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Änderung und Aktualisierung</h2>
                        <p className="mb-3">
                            Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir
                            passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten
                            Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen
                            eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle
                            Benachrichtigung erforderlich wird.
                        </p>
                        <p>
                            Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und
                            Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern
                            können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
                        </p>
                    </section>

                    {divider}

                    {/* Begriffsdefinitionen */}
                    <section>
                        <h2 className="text-base font-semibold mb-3" style={h2Style}>Begriffsdefinitionen</h2>
                        <p className="mb-4">
                            In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung
                            verwendeten Begrifflichkeiten. Soweit die Begrifflichkeiten gesetzlich definiert sind, gelten
                            deren gesetzliche Definitionen.
                        </p>
                        <div className="space-y-4">
                            {[
                                ["Bestandsdaten", "Wesentliche Informationen, die für die Identifikation und Verwaltung von Vertragspartnern, Benutzerkonten, Profilen und ähnlichen Zuordnungen notwendig sind, einschließlich Namen, Kontaktinformationen, Geburtsdaten und spezifische Identifikatoren."],
                                ["Beschäftigte", "Personen, die in einem Beschäftigungsverhältnis stehen, sei es als Mitarbeiter, Angestellte oder in ähnlichen Positionen. Beschäftigtendaten sind alle Informationen, die sich auf diese Personen beziehen."],
                                ["Inhaltsdaten", "Informationen, die im Zuge der Erstellung, Bearbeitung und Veröffentlichung von Inhalten aller Art generiert werden, einschließlich Texte, Bilder, Videos, Audiodateien und Metadaten."],
                                ["Kontaktdaten", "Essentielle Informationen, die die Kommunikation mit Personen oder Organisationen ermöglichen, einschließlich Telefonnummern, postalische Adressen und E-Mail-Adressen."],
                                ["Konversionsmessung", "Verfahren, mit dem die Wirksamkeit von Marketingmaßnahmen festgestellt werden kann, bei dem im Regelfall ein Cookie auf den Geräten der Nutzer gespeichert wird."],
                                ["Meta-, Kommunikations- und Verfahrensdaten", "Kategorien, die Informationen über die Art und Weise enthalten, wie Daten verarbeitet, übermittelt und verwaltet werden, einschließlich IP-Adressen, Zeitstempel und Übertragungswege."],
                                ["Nutzungsdaten", "Informationen, die erfassen, wie Nutzer mit digitalen Produkten, Dienstleistungen oder Plattformen interagieren, einschließlich Seitenaufrufe, Verweildauer, Klickpfade und Geräteinformationen."],
                                ["Personenbezogene Daten", "Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt identifiziert werden kann."],
                                ["Profile mit nutzerbezogenen Informationen", "Jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese Daten verwendet werden, um bestimmte persönliche Aspekte, wie Interessen oder Verhalten, zu analysieren, zu bewerten oder vorherzusagen."],
                                ["Protokolldaten", "Informationen über Ereignisse oder Aktivitäten, die in einem System oder Netzwerk protokolliert wurden, typischerweise einschließlich Zeitstempel, IP-Adressen, Benutzeraktionen und Fehlermeldungen."],
                                ["Reichweitenmessung", "Auswertung der Besucherströme eines Onlineangebotes, die das Verhalten oder Interessen der Besucher an bestimmten Informationen umfassen kann."],
                                ["Tracking", "Das Nachvollziehen des Verhaltens von Nutzern über mehrere Onlineangebote hinweg; Verhaltens- und Interessensinformationen werden in Cookies oder auf Servern der Anbieter der Trackingtechnologien gespeichert."],
                                ["Verantwortlicher", "Die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet."],
                                ["Verarbeitung", "Jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit personenbezogenen Daten, von der Erhebung über das Speichern und Übermitteln bis zum Löschen."],
                                ["Vertragsdaten", "Spezifische Informationen, die sich auf die Formalisierung einer Vereinbarung zwischen zwei oder mehr Parteien beziehen, einschließlich Start- und Enddaten, Leistungsbeschreibungen, Preisvereinbarungen und Zahlungsbedingungen."],
                                ["Zahlungsdaten", "Alle Informationen, die zur Abwicklung von Zahlungstransaktionen benötigt werden, einschließlich Bankverbindungen, Zahlungsbeträge, Transaktionsdaten und Verifizierungsnummern."],
                                ["Zielgruppenbildung", "Bestimmung von Zielgruppen für Werbezwecke anhand von Nutzerinteressen und -verhalten. Zur Bildung von Custom Audiences und Lookalike Audiences werden im Regelfall Cookies und Web-Beacons eingesetzt."],
                            ].map(([term, def]) => (
                                <div key={term}>
                                    <dt className="font-medium mb-1" style={{ color: "rgba(74,46,8,0.85)", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                                        {term}
                                    </dt>
                                    <dd className="pl-0">{def}</dd>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ──────────────────────────────────────────────────────── */}
                    {/*  AGB                                                     */}
                    {/* ──────────────────────────────────────────────────────── */}

                    <div className="h-px my-12" style={{ background: "rgba(185,85,15,0.15)" }} />

                    <div className="pt-4">
                        <p
                            className="text-xs tracking-[0.18em] uppercase mb-6"
                            style={{ ...metaLabel, color: "rgba(185,85,15,0.6)", fontSize: "0.65rem" }}
                        >
                            Teil II
                        </p>
                        <h2 className="text-2xl font-semibold mb-2" style={{ ...h2Style, color: "#1c0e02" }}>
                            Allgemeine Geschäftsbedingungen
                        </h2>
                        <p className="text-sm mb-10" style={{ color: "rgba(185,85,15,0.4)", fontFamily: "var(--font-mono)" }}>
                            CoachingbyThomasArndt · Stand: 2025
                        </p>
                    </div>

                    <div className="space-y-8">

                        {/* § 1 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                1. Geltungsbereich und Vertragsgegenstand
                            </h2>
                            <p className="mb-3">
                                Diese Allgemeinen Geschäftsbedingungen (im Folgenden „AGB") regeln die vertragliche Beziehung
                                zwischen Thomas Arndt (im Folgenden „CoachingbyThomasArndt") und den Kunden, die die
                                angebotenen Dienstleistungen in Anspruch nehmen. Die Dienstleistungen umfassen Online-Personal-
                                Training, Online-Ernährungscoaching und Online-Lifestyle-Coaching.
                            </p>
                            <p>
                                Durch die Buchung meiner Dienstleistungen stimmen Sie diesen AGB zu und erkennen diese als
                                verbindlich an. Es handelt sich bei den Verträgen um Dienstverträge im Sinne des § 611 BGB; ein
                                bestimmter Erfolg (z. B. eine spezifische Gewichtsabnahme) wird nicht geschuldet.
                            </p>
                        </section>

                        {divider}

                        {/* § 2 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                2. Zustandekommen des Vertrags
                            </h2>
                            <p>
                                Der Vertrag kommt zustande, wenn Sie ein von mir unterbreitetes Angebot annehmen (z. B. durch
                                Bestätigung per E-Mail, Instagram-DM oder Buchung über die Website) und/oder die Zahlung der
                                vereinbarten Gebühren erfolgt ist. Der Vertragsschluss erfolgt in Textform.
                            </p>
                        </section>

                        {divider}

                        {/* § 3 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                3. Leistungsumfang
                            </h2>
                            <p className="mb-3">Ich biete folgende Dienstleistungen an:</p>
                            <ul className="list-disc list-inside space-y-2 mb-3">
                                <li>
                                    <strong style={{ color: "rgba(74,46,8,0.85)" }}>Online-Personal-Training:</strong> Erstellung individueller Trainingspläne, angepasst an Ihre
                                    persönlichen Fitnessziele und körperlichen Voraussetzungen.
                                </li>
                                <li>
                                    <strong style={{ color: "rgba(74,46,8,0.85)" }}>Online-Ernährungscoaching:</strong> Erstellung von personalisierten Ernährungsplänen und Beratung
                                    basierend auf Ihren Ernährungsbedürfnissen.
                                </li>
                                <li>
                                    <strong style={{ color: "rgba(74,46,8,0.85)" }}>Online-Lifestyle-Coaching:</strong> Beratung zur Anpassung des Lebensstils zur Steigerung des
                                    allgemeinen Wohlbefindens.
                                </li>
                            </ul>
                            <p>
                                Der konkrete Leistungsumfang sowie die Dauer der Dienstleistungen werden im jeweiligen Angebot
                                individuell festgelegt.
                            </p>
                        </section>

                        {divider}

                        {/* § 4 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                4. Pflichten des Kunden
                            </h2>
                            <p className="mb-3">
                                Sie sind verpflichtet, folgende Informationen wahrheitsgemäß zur Verfügung zu stellen und aktiv
                                mitzuwirken:
                            </p>
                            <ul className="list-disc list-inside space-y-3">
                                <li>
                                    <strong style={{ color: "rgba(74,46,8,0.85)" }}>Gesundheitsangaben:</strong> Sie müssen mich vor Beginn umfassend über Ihren aktuellen
                                    Gesundheitszustand, Verletzungen und Vorerkrankungen informieren.
                                </li>
                                <li>
                                    <strong style={{ color: "rgba(74,46,8,0.85)" }}>Eigenverantwortung & Stopp-Signal:</strong> Sie setzen die Pläne eigenverantwortlich um. Bei
                                    Schmerzen, Unwohlsein oder gesundheitlichen Problemen müssen Sie das Training sofort
                                    unterbrechen, einen Arzt aufsuchen und mich informieren.
                                </li>
                                <li>
                                    <strong style={{ color: "rgba(74,46,8,0.85)" }}>Kommunikation:</strong> Eine regelmäßige Kommunikation (Check-ins) ist für den Erfolg
                                    unerlässlich. Bleiben Check-ins durch den Kunden aus, entbindet dies nicht von der
                                    Zahlungspflicht.
                                </li>
                            </ul>
                        </section>

                        {divider}

                        {/* § 5 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                5. Zahlungsbedingungen und Laufzeit
                            </h2>
                            <p>
                                Die Vergütung ist, sofern nicht anders vereinbart, im Voraus zu entrichten. Wurde eine feste
                                Laufzeit vereinbart (z. B. 6 Monate), ist der Gesamtbetrag auch dann geschuldet, wenn der Kunde
                                die Leistung vorzeitig nicht mehr in Anspruch nimmt, sofern kein gesetzlicher Kündigungsgrund
                                vorliegt.
                            </p>
                        </section>

                        {divider}

                        {/* § 6 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                6. Haftung
                            </h2>
                            <p className="mb-3">
                                Ich hafte unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der
                                Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung meinerseits beruhen.
                                Für sonstige Schäden hafte ich nur, sofern diese auf einer vorsätzlichen oder grob fahrlässigen
                                Pflichtverletzung beruhen. Eine weitergehende Haftung ist ausgeschlossen.
                            </p>
                            <p>
                                Das Coaching ersetzt keine ärztliche Untersuchung oder Behandlung. Die Umsetzung aller
                                Empfehlungen erfolgt auf eigenes Risiko des Kunden.
                            </p>
                        </section>

                        {divider}

                        {/* § 7 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                7. Widerrufsrecht
                            </h2>
                            <p className="mb-3">
                                Verbrauchern steht grundsätzlich ein gesetzliches Widerrufsrecht zu. Die Details entnehmen Sie
                                bitte der separaten Widerrufsbelehrung.
                            </p>
                            <p>
                                <strong style={{ color: "rgba(74,46,8,0.85)" }}>Hinweis:</strong> Bei digitalen Dienstleistungen kann das Widerrufsrecht vorzeitig erlöschen,
                                wenn Sie ausdrücklich zustimmen, dass ich mit der Ausführung des Vertrags vor Ablauf der
                                Widerrufsfrist beginne.
                            </p>
                        </section>

                        {divider}

                        {/* § 8 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                8. Vertraulichkeit und Datenschutz
                            </h2>
                            <p>
                                Ihre persönlichen Daten und Bilder werden streng vertraulich behandelt und ausschließlich zum
                                Zweck der Erbringung der Dienstleistungen genutzt. Es gilt die Datenschutzerklärung, die auf
                                der Website einsehbar ist.
                            </p>
                        </section>

                        {divider}

                        {/* § 9 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                9. Geistiges Eigentum
                            </h2>
                            <p>
                                Alle Inhalte (Trainingspläne, PDFs, Videos), die ich Ihnen zur Verfügung stelle, sind mein
                                geistiges Eigentum. Sie dürfen diese ausschließlich für private Zwecke nutzen. Eine Weitergabe
                                an Dritte oder Veröffentlichung ist untersagt.
                            </p>
                        </section>

                        {divider}

                        {/* § 10 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                10. Kündigung
                            </h2>
                            <ul className="list-disc list-inside space-y-3">
                                <li>
                                    <strong style={{ color: "rgba(74,46,8,0.85)" }}>Feste Laufzeit:</strong> Verträge mit einer vereinbarten Mindestlaufzeit (z. B. 6 Monate) können
                                    nicht ordentlich vor Ablauf dieser Frist gekündigt werden. Das Recht zur außerordentlichen
                                    Kündigung aus wichtigem Grund (z. B. dauerhafte schwere Krankheit mit ärztlichem Attest)
                                    bleibt unberührt.
                                </li>
                                <li>
                                    <strong style={{ color: "rgba(74,46,8,0.85)" }}>Abo-Modelle:</strong> Sofern ein monatlich kündbares Abo vereinbart wurde, bedarf die Kündigung
                                    der Textform (E-Mail ausreichend).
                                </li>
                            </ul>
                        </section>

                        {divider}

                        {/* § 11 */}
                        <section>
                            <h2 className="text-base font-semibold mb-3" style={h2Style}>
                                11. Schlussbestimmungen
                            </h2>
                            <p>
                                Es gilt das Recht der Bundesrepublik Deutschland. Sollte eine Bestimmung dieser AGB unwirksam
                                sein, bleibt der Vertrag im Übrigen wirksam. Anstelle der unwirksamen Bestimmung gelten die
                                gesetzlichen Vorschriften.
                            </p>
                        </section>

                    </div>

                    {/* Footer nav */}
                    <div className="h-px mt-16 mb-8" style={{ background: "rgba(185,85,15,0.07)" }} />
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs" style={{ color: "rgba(74,46,8,0.35)" }}>
                        <span style={{ fontFamily: "var(--font-mono)" }}>cbta – Coaching by Thomas Arndt</span>
                        <Link href="/impressum" style={{ color: "rgba(185,85,15,0.5)" }}>→ Impressum</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
