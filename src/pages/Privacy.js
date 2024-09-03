import styled from "styled-components";
import Footer from "../components/Footer/Footer";

const StyledPrivacy = styled.main`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: 10vh 20vw;
  gap: 20px;

  ul {
    padding-left: 40px;
  }

  a {
    color: #ffffff;
  }
`;

export default function Privacy({ language, onCurrentPage }) {
  return (
    <>
      <StyledPrivacy>
        <h1>Datenschutzerklärung</h1>
        <h2>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>
        <p>
          <b>1.1</b> Wir freuen uns, dass Sie unsere Website besuchen und
          bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über
          den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer
          Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>
        <p>
          <b>1.2</b> Verantwortlicher für die Datenverarbeitung auf dieser
          Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Lukas
          Klipp, Marktstraße 17, 27432 Bremervörde, Deutschland, Tel.: 0421
          16162021, E-Mail: lukasklipp_al@yahoo.de. Der für die Verarbeitung von
          personenbezogenen Daten Verantwortliche ist diejenige natürliche oder
          juristische Person, die allein oder gemeinsam mit anderen über die
          Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
          entscheidet.
        </p>
        <h2>2) Datenerfassung beim Besuch unserer Website</h2>
        <p>
          <b>2.1</b> Bei der bloß informatorischen Nutzung unserer Website, also
          wenn Sie sich nicht registrieren oder uns anderweitig Informationen
          übermitteln, erheben wir nur solche Daten, die Ihr Browser an den
          Seitenserver übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere
          Website aufrufen, erheben wir die folgenden Daten, die für uns
          technisch erforderlich sind, um Ihnen die Website anzuzeigen:
        </p>
        <ul>
          <li>Unsere besuchte Website</li>
          <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
          <li>Menge der gesendeten Daten in Byte</li>
          <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
          <li>Verwendeter Browser</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
          unseres berechtigten Interesses an der Verbesserung der Stabilität und
          Funktionalität unserer Website. Eine Weitergabe oder anderweitige
          Verwendung der Daten findet nicht statt. Wir behalten uns allerdings
          vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete
          Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
        </p>
        <p>
          <b>2.2</b> Diese Website nutzt aus Sicherheitsgründen und zum Schutz
          der Übertragung personenbezogener Daten und anderer vertraulicher
          Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine
          SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte
          Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in
          Ihrer Browserzeile erkennen.
        </p>
        <h2>3) Hosting &amp; Content-Delivery-Network</h2>
        <p>Vercel</p>
        <p>
          Für das Hosting unserer Website und die Darstellung der Seiteninhalte
          nutzen wir das System des folgenden Anbieters: Vercel Inc., 340 S
          Lemon Ave #4133, Walnut, CA 91789, USA
        </p>
        <p>
          Sämtliche auf unserer Website erhobenen Daten werden auf den Servern
          des Anbieters verarbeitet.
          <br />
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der den Schutz der Daten unserer Seitenbesucher
          sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>
        <h2>4) Cookies</h2>
        <p>
          Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung
          bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also
          kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise
          werden diese Cookies nach Schließen des Browsers automatisch wieder
          gelöscht (sog. „Session-Cookies“), teilweise verbleiben diese Cookies
          länger auf Ihrem Endgerät und ermöglichen das Speichern von
          Seiteneinstellungen (sog. „persistente Cookies“). Im letzteren Fall
          können Sie die Speicherdauer der Übersicht zu den Cookie-Einstellungen
          Ihres Webbrowsers entnehmen.
        </p>
        <p>
          Sofern durch einzelne von uns eingesetzte Cookies auch
          personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung
          gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des
          Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten
          Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer
          berechtigten Interessen an der bestmöglichen Funktionalität der
          Website sowie einer kundenfreundlichen und effektiven Ausgestaltung
          des Seitenbesuchs.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und einzeln über deren Annahme entscheiden
          oder die Annahme von Cookies für bestimmte Fälle oder generell
          ausschließen können.
        </p>
        <p>
          Bitte beachten Sie, dass bei Nichtannahme von Cookies die
          Funktionalität unserer Website eingeschränkt sein kann.
        </p>
        <h2>5) Kontaktaufnahme</h2>
        <p>
          Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder
          E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle
          der Nutzung eines Kontaktformulars erhoben werden, ist aus dem
          jeweiligen Kontaktformular ersichtlich. Diese Daten werden
          ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw. für die
          Kontaktaufnahme und die damit verbundene technische Administration
          gespeichert und verwendet.
        </p>
        <p>
          Rechtsgrundlage für die Verarbeitung dieser Daten ist unser
          berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art.
          6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss
          eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die
          Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach
          abschließender Bearbeitung Ihrer Anfrage gelöscht. Dies ist der Fall,
          wenn sich aus den Umständen entnehmen lässt, dass der betroffene
          Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
        <h2>6) Online-Marketing</h2>
        <p>Google AdSense</p>
        <p>
          Diese Website benutzt Google AdSense, einen Webanzeigendienst Google
          Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
          (&quot;Google&quot;). Google AdSense verwendet sog. Cookies, also
          Textdateien, die auf Ihrem Computer gespeichert werden und die eine
          Analyse der Benutzung der Website durch Sie ermöglichen. Darüber
          hinaus verwendet Google AdSense zur Sammlung von Informationen auch
          sog. &quot;Web-Beacons&quot; (kleine unsichtbare Grafiken), durch
          deren Verwendung einfache Aktionen wie der Besucherverkehr auf der
          Website aufgezeichnet, gesammelt und ausgewertet werden können. Die
          durch das Cookie und/ oder Web-Beacon erzeugten Informationen
          (einschließlich Ihrer IP-Adresse) über Ihre Benutzung dieser Website
          werden in der Regel an einen Server von Google übertragen und dort
          gespeichert. Hierbei kann es auch zu einer Übermittlung an die Server
          der Google LLC. in den USA kommen.
        </p>
        <p>
          Google benutzt die so erhaltenen Informationen, um eine Auswertung
          Ihres Nutzungsverhaltens im Hinblick auf die AdSense-Anzeigen
          durchzuführen. Die im Rahmen von Google AdSense von Ihrem Browser
          übermittelte IP-Adresse wird nicht mit anderen Daten von Google
          zusammengeführt. Die von Google erhobenen Informationen werden unter
          Umständen an Dritte übertragen, sofern dies gesetzlich vorgeschrieben
          ist und/ oder soweit Dritte diese Daten im Auftrag von Google
          verarbeiten.
          <br />
          Alle oben beschriebenen Verarbeitungen, insbesondere Auslesen von
          Informationen auf dem verwendeten Endgerät über Cookies und/oder
          Web-Beacons, werden nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs.
          1 lit. a DSGVO dazu Ihre ausdrückliche Einwilligung erteilt haben.
          Ohne diese Einwilligungserteilung unterbleibt der Einsatz von Google
          AdSense während Ihres Seitenbesuchs.
        </p>
        <p>
          Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die
          Zukunft widerrufen, indem Sie diesen Dienst in dem auf der Webseite
          bereitgestellten „Cookie-Consent-Tool“ deaktivieren.
        </p>
        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>
        <p>
          Googles Datenschutzbestimmungen sind hier einsehbar:{" "}
          <a href="https://www.google.de/policies/privacy/">
            https://www.google.de/policies/privacy/
          </a>
        </p>
        <h2>7) Rechte des Betroffenen</h2>
        <p>
          <b>7.1</b> Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem
          Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen
          Daten die nachstehenden Betroffenenrechte (Auskunfts- und
          Interventionsrechte), wobei für die jeweiligen
          Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen
          wird:
        </p>
        <ul>
          <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
          <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
          <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
          <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
          <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
          <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
          <li>
            Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3
            DSGVO;
          </li>
          <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
        </ul>
        <p>
          <b>7.2</b> WIDERSPRUCHSRECHT
        </p>
        <p>
          WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN
          DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES
          VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH
          AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG
          WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
        </p>
        <p>
          MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
          VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT
          ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
          VERARBEITUNG NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND
          GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE VERARBEITUNG DER
          GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.
        </p>
        <p>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM
          DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH
          GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
          ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE
          OBEN BESCHRIEBEN AUSÜBEN.
        </p>
        <p>
          MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
          VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
        </p>
        <h2>8) Dauer der Speicherung personenbezogener Daten</h2>
        <p>
          Die Dauer der Speicherung von personenbezogenen Daten bemisst sich
          anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und –
          sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen
          Aufbewahrungsfrist (z.B. handels- und steuerrechtliche
          Aufbewahrungsfristen).
        </p>
        <p>
          Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer
          ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden
          die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung
          widerrufen.
        </p>
        <p>
          Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen
          rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf
          der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden,
          werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig
          gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder
          Vertragsanbahnung erforderlich sind und/oder unsererseits kein
          berechtigtes Interesse an der Weiterspeicherung fortbesteht.
        </p>
        <p>
          Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert,
          bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es
          sei denn, wir können zwingende schutzwürdige Gründe für die
          Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen.
        </p>
        <p>
          Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der
          Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden
          diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach
          Art. 21 Abs. 2 DSGVO ausüben.
        </p>
        <p>
          Sofern sich aus den sonstigen Informationen dieser Erklärung über
          spezifische Verarbeitungssituationen nichts anderes ergibt, werden
          gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie
          für die Zwecke, für die sie erhoben oder auf sonstige Weise
          verarbeitet wurden, nicht mehr notwendig sind.
        </p>
      </StyledPrivacy>
      <Footer language={language} onCurrentPage={onCurrentPage} />
    </>
  );
}
