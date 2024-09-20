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
        <h1>Imprint</h1>

        <div>
          <h2>Lukas Klipp</h2>
          <p>Marktstraße 17</p>
          <p>27432 Bremervörde</p>
          <p>Germany</p>
        </div>
        <div>
          <p>Email: klipp.lukas@gmail.com</p>
        </div>
        <p>
          EU Commission's platform for online dispute resolution:&nbsp;
          <a href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a>
        </p>

        <p>
          We are neither obliged nor willing to participate in a dispute
          resolution procedure before a consumer arbitration board.
        </p>
        <p>
          Credits for the cat sprite sheet used in the cat animation go
          to:&nbsp;
          <a href="https://bowpixel.itch.io/cat-50-animations">
            https://bowpixel.itch.io/cat-50-animations
          </a>
        </p>
      </StyledLegalNotice>

      <Footer language={language} onCurrentPage={onCurrentPage} />
    </>
  );
}
