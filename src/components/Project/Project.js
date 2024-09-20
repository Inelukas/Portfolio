import styled from "styled-components";

const StyledProject = styled.div`
  width: 350px;
  min-height: 550px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 3px 3px;
  border-radius: 40px;
  padding: 20px;
  text-align: center;

  .github-link {
    align-self: flex-start;
    font-size: 12px;
  }

  &:hover {
    box-shadow: 5px 5px 5px 5px var(--shadow-color);
  }

  img {
    width: 250px;
    height: 200px;
    border-radius: 20px;
  }

  h2 {
    font-size: 1.8rem;
    text-decoration: underline;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:active {
      transform: scale(0.95);
    }

    &:hover {
      color: var(--primary-color);
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    padding-bottom: 10px;
  }

  a {
    color: var(--text-color);
    line-height: 2;
    &:hover {
      color: var(--primary-color);
    }
  }

  @media screen and (min-width: 600px) {
    max-width: 100%;
  }
`;

export default function Project({ data, language }) {
  return (
    <StyledProject>
      <a href={data.link}>
        <h3>{language === "jp" ? data.name.jp : data.name.en}</h3>
        <img src={data.pic} alt={data.name} />
      </a>
      <p>{data.description}</p>
      <a className="github-link" href={data.github}>
        GitHub Repo (Made with: {data.madeWith})
      </a>
    </StyledProject>
  );
}
