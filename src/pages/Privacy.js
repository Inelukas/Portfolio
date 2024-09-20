import styled from "styled-components";
import Footer from "../components/Footer/Footer";

const StyledPrivacy = styled.main`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 10vh 10vw;
  gap: 20px;
  padding-bottom: 100px;

  @media screen and (min-width: 900px) {
    width: 60vw;
    margin: 10vh 20vw;
  }

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
        <h1>Privacy Policy</h1>
        <h2>
          1) Introduction and Contact Information of the Responsible Party
        </h2>
        <p>
          <b>1.1</b> We are pleased that you are visiting our website and thank
          you for your interest. In the following, we inform you about how your
          personal data is handled when using our website. Personal data refers
          to all data that can personally identify you.
        </p>
        <p>
          <b>1.2</b> The party responsible for data processing on this website
          in accordance with the General Data Protection Regulation (GDPR) is
          Lukas Klipp, Marktstraße 17, 27432 Bremervörde, Germany, Phone: 0421
          16162021, Email: lukasklipp_al@yahoo.de. The person responsible for
          processing personal data is the natural or legal person who alone or
          together with others determines the purposes and means of processing
          personal data.
        </p>
        <h2>2) Data Collection When Visiting Our Website</h2>
        <p>
          <b>2.1</b> When using our website solely for informational purposes,
          meaning when you do not register or otherwise provide information to
          us, we only collect the data that your browser transmits to the server
          of the website (so-called "server log files"). When you access our
          website, we collect the following data, which is technically necessary
          to display the website to you:
        </p>
        <ul>
          <li>Our visited website</li>
          <li>Date and time of access</li>
          <li>Amount of data sent in bytes</li>
          <li>Source/referrer from which you accessed the site</li>
          <li>Browser used</li>
          <li>Operating system used</li>
          <li>IP address used (if applicable: in anonymized form)</li>
        </ul>
        <p>
          Data processing is carried out in accordance with Art. 6(1) lit. f
          GDPR based on our legitimate interest in improving the stability and
          functionality of our website. The data is neither passed on nor used
          in any other way. However, we reserve the right to review the server
          log files retrospectively should concrete evidence of illegal use
          arise.
        </p>
        <p>
          <b>2.2</b> This website uses SSL or TLS encryption for security
          reasons and to protect the transmission of personal data and other
          confidential content (e.g., orders or inquiries to the responsible
          party). You can recognize an encrypted connection by the "https://" in
          the address bar and the lock symbol in your browser.
        </p>
        <h2>3) Hosting & Content Delivery Network</h2>
        <p>Vercel</p>
        <p>
          We use the system of the following provider for hosting our website
          and displaying the content: Vercel Inc., 340 S Lemon Ave #4133,
          Walnut, CA 91789, USA
        </p>
        <p>
          All data collected on our website is processed on the provider’s
          servers.
          <br />
          We have entered into a data processing agreement with the provider to
          ensure the protection of our visitors' data and to prevent
          unauthorized disclosure to third parties.
        </p>
        <p>
          For data transfers to the USA, the provider has joined the EU-US Data
          Privacy Framework, ensuring compliance with European data protection
          standards based on a decision by the European Commission.
        </p>
        <h2>4) Cookies</h2>
        <p>
          To make your visit to our website more attractive and to enable the
          use of certain functions, we use cookies, which are small text files
          stored on your device. Some of these cookies are automatically deleted
          after you close the browser (so-called "session cookies"), while
          others remain on your device for longer periods and allow the storage
          of settings (so-called "persistent cookies"). You can find the storage
          duration in the cookie settings overview of your browser.
        </p>
        <p>
          If any personal data is processed through the use of individual
          cookies, such processing is carried out in accordance with Art. 6(1)
          lit. b GDPR for contract execution, Art. 6(1) lit. a GDPR in the case
          of consent, or Art. 6(1) lit. f GDPR for our legitimate interest in
          ensuring the best functionality of the website and a user-friendly
          experience.
        </p>
        <p>
          You can set your browser to inform you about the setting of cookies
          and to decide individually about their acceptance or to exclude the
          acceptance of cookies for specific cases or in general.
        </p>
        <p>
          Please note that if cookies are not accepted, the functionality of our
          website may be limited.
        </p>
        <h2>5) Contacting Us</h2>
        <p>
          When contacting us (e.g., via contact form or email), personal data
          will be collected. The data collected from a contact form is evident
          from the respective form. This data is stored and used solely for the
          purpose of responding to your inquiry or for the associated technical
          administration.
        </p>
        <p>
          The legal basis for processing this data is our legitimate interest in
          responding to your inquiry in accordance with Art. 6(1) lit. f GDPR.
          If your contact is aimed at concluding a contract, the additional
          legal basis for processing is Art. 6(1) lit. b GDPR. Your data will be
          deleted once your inquiry has been fully processed, provided no legal
          retention obligations prevent this.
        </p>
        <h2>6) Online Marketing</h2>
        <p>Google AdSense</p>
        <p>
          This website uses Google AdSense, a web advertising service of Google
          Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland
          ("Google"). Google AdSense uses cookies, text files stored on your
          computer, to enable the analysis of your website usage. Additionally,
          Google AdSense uses "web beacons" (small invisible graphics) to
          collect information such as the visitor traffic on the website. The
          information generated by the cookie and/or web beacon (including your
          IP address) is typically transmitted to a Google server and stored
          there. This may also involve transmission to Google LLC servers in the
          USA.
        </p>
        <p>
          Google uses this information to evaluate your usage of the website
          regarding AdSense ads. The IP address transmitted by your browser in
          connection with Google AdSense will not be combined with other Google
          data. The information collected by Google may be transmitted to third
          parties, where required by law or where third parties process data on
          behalf of Google.
          <br />
          All processing described above, particularly reading information from
          the device using cookies and/or web beacons, will only take place if
          you have given your express consent under Art. 6(1) lit. a GDPR.
          Without your consent, Google AdSense will not be used during your
          website visit.
        </p>
        <p>
          You can revoke your consent at any time with future effect by
          disabling this service in the "Cookie-Consent-Tool" on our website.
        </p>
        <p>
          For data transfers to the USA, the provider has joined the EU-US Data
          Privacy Framework, ensuring compliance with European data protection
          standards based on a decision by the European Commission.
        </p>
        <p>
          You can view Google's privacy policy here:{" "}
          <a href="https://www.google.de/policies/privacy/">
            https://www.google.de/policies/privacy/
          </a>
        </p>
        <h2>7) Data Subject Rights</h2>
        <p>
          <b>7.1</b> Under applicable data protection law, you have the
          following rights regarding the processing of your personal data (right
          to information and intervention). The legal basis for the respective
          rights is cited below:
        </p>
        <ul>
          <li>Right of access under Art. 15 GDPR;</li>
          <li>Right to rectification under Art. 16 GDPR;</li>
          <li>Right to erasure under Art. 17 GDPR;</li>
          <li>Right to restriction of processing under Art. 18 GDPR;</li>
          <li>Right to notification under Art. 19 GDPR;</li>
          <li>Right to data portability under Art. 20 GDPR;</li>
          <li>Right to withdraw consent under Art. 7(3) GDPR;</li>
          <li>Right to lodge a complaint under Art. 77 GDPR.</li>
        </ul>
        <p>
          <b>7.2</b> RIGHT TO OBJECT
        </p>
        <p>
          IF WE PROCESS YOUR PERSONAL DATA ON THE BASIS OF OUR PREDOMINANT
          LEGITIMATE INTERESTS, YOU HAVE THE RIGHT TO OBJECT TO THIS PROCESSING
          AT ANY TIME FOR REASONS ARISING FROM YOUR SPECIFIC SITUATION, WITH
          EFFECT FOR THE FUTURE.
        </p>
        <p>
          IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP PROCESSING THE
          AFFECTED DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS
          FOR THE PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS,
          OR THE PROCESSING SERVES TO ESTABLISH, EXERCISE, OR DEFEND LEGAL
          CLAIMS.
        </p>
        <p>
          IF WE PROCESS YOUR PERSONAL DATA FOR DIRECT MARKETING PURPOSES, YOU
          HAVE THE RIGHT TO OBJECT AT ANY TIME TO SUCH PROCESSING. IF YOU
          EXERCISE THIS RIGHT, WE WILL CEASE PROCESSING YOUR PERSONAL DATA FOR
          SUCH PURPOSES.
        </p>
        <h2>8) Duration of Storage of Personal Data</h2>
        <p>
          The duration of the storage of personal data depends on the respective
          legal basis, the processing purpose, and any applicable statutory
          retention periods (e.g., commercial and tax retention periods).
        </p>
        <p>
          If personal data is processed based on your express consent under Art.
          6(1) lit. a GDPR, the data will be stored until you withdraw your
          consent.
        </p>
        <p>
          If statutory retention periods apply to data processed in connection
          with legal or similar obligations under Art. 6(1) lit. b GDPR, this
          data will be routinely deleted once the retention period expires.
        </p>
      </StyledPrivacy>
      <Footer language={language} onCurrentPage={onCurrentPage} />
    </>
  );
}
