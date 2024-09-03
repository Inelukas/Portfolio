import styled from "styled-components";
import star from "../../assets/star.png";
import blackstar from "../../assets/star-black.png";

const StyledLanguage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
  width: 100px;
  height: 100px;
  max-height: 200px;
  box-shadow: 5px 5px 5px 5px var(--shadow-color);
  border-radius: 40px;
  padding: 10px 20px;
  transition: transform 0.3s ease;
  font-size: 0.6rem;

  .flag {
    height: 30px;
    width: 60px;

    @media screen and (min-width: 600px) {
      height: 50px;
      width: 100px;
    }
  }

  img.star {
    width: 15%;
  }

  @media screen and (min-width: 600px) {
    height: 160px;
    width: 160px;
    font-size: 0.8rem;
  }
  @media screen and (min-width: 1200px) {
    height: 200px;
    width: 200px;
    font-size: 1rem;
    gap: 10px;
  }
`;

export function Language({ data, language }) {
  return (
    <StyledLanguage>
      <h2>
        {language === "en"
          ? data.language.en
          : language === "de"
          ? data.language.de
          : data.language.jp}
      </h2>
      <img
        className="flag"
        src={data.flag}
        alt={`${
          language === "en"
            ? data.language.en
            : language === "de"
            ? data.language.de
            : data.language.jp
        } Flag`}
      />
      <div>
        {data.fluency.map((starType, index) => (
          <img
            className="star"
            key={index}
            src={starType === "star" ? star : blackstar}
            alt={starType === "star" ? "Star" : "Black Star"}
          />
        ))}
      </div>
      <p>
        {language === "en"
          ? data.certificate.en
          : language === "de"
          ? data.certificate.de
          : data.certificate.jp}
      </p>
    </StyledLanguage>
  );
}
