import styled from "styled-components";
import star from "../../assets/star.png";
import blackstar from "../../assets/star-black.png";

const StyledLanguage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  width: 180px;
  height: 180px;
  box-shadow: 5px 5px 5px 5px var(--shadow-color);
  border-radius: 20px;
  padding: 10px 20px;
  transition: transform 0.3s ease;

  .flag {
    height: 40px;
    width: 80px;
  }

  img.star {
    width: 15px;
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
