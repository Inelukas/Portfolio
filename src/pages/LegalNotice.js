import styled from "styled-components";
import Footer from "../components/Footer/Footer";

const StyledLegalNotice = styled.main`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 100vh;
  margin: 10vh 20vw;
  gap: 20px;

  ul {
    padding-left: 40px;
  }

  a {
    color: #ffffff;
  }
`;

export default function LegalNotice({ language, onCurrentPage }) {
  return (
    <>
      <StyledLegalNotice>
        <h1>Impressum</h1>

        <div>
          <h2>Lukas Klipp</h2>
          <p>Marktstraße 17</p>
          <p>27432 Bremervörde</p>
          <p>Deutschland</p>
        </div>
        <div>
          <p>Tel.: 0421 16162021</p>

          <p>E-Mail: lukasklipp_al@yahoo.de</p>
        </div>
        <p>
          Plattform der EU-Kommission zur Online-Streitbeilegung:&nbsp;
          <a href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a>
        </p>

        <p>
          Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
        </p>
      </StyledLegalNotice>

      <Footer language={language} onCurrentPage={onCurrentPage} />
    </>
  );
}
