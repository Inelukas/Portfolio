import styled from "styled-components";
import star from "../../assets/star.png";
import blackstar from "../../assets/star-black.png";

const StyledLanguage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 180px;
  height: 180px;
  box-shadow: 5px 5px 5px 5px var(--shadow-color);
  border-radius: 20px;
  padding: 20px;
  transition: transform 0.3s ease;

  .flag {
    height: 60px;
  }

  img.star {
    width: 15px;
  }
`;

export function Language({ data }) {
  return (
    <StyledLanguage>
      <h2>{data.language}</h2>
      <img className="flag" src={data.flag} alt={`${data.language} Flag`} />
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
      <p>{data.certificate}</p>
    </StyledLanguage>
  );
}
