import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: end;
  height: auto;
  width: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px;
  background-color: var(--background-color);
  background-image: var(--custom-image);
  box-shadow: 0px 0px 3px 3px var(--primary-color);
  gap: 20px;

  .link {
    margin: 10px 0;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.3s ease;
    color: var(--text-color);

    &:active {
      transform: scale(0.95);
    }

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 600px) {
    .link {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 900px) {
    height: 100%;
    width: auto;
    top: 0;
    bottom: auto;
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
`;

const StyledLanguageToggle = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: var(--primary-color);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  z-index: 2;
  opacity: 0.8;

  &:hover {
    background-color: var(--text-color);
    color: black;
    opacity: 1;
  }
`;

const StyledJapNav = styled.span`
  @media screen and (min-width: 900px) {
    font-size: 0.9rem;
  }
`;

export default function Navigation({
  onCurrentPage,
  currentPage,
  onToggleLanguage,
  language,
}) {
  return (
    <>
      <StyledLanguageToggle onClick={onToggleLanguage}>
        {language === "en" ? "EN" : language === "de" ? "DE" : "JP"}
      </StyledLanguageToggle>
      {currentPage !== "home" && (
        <StyledNavigation>
          <Link
            to="/"
            className="link"
            onClick={() => {
              onCurrentPage("home");
            }}
          >
            {language === "en" ? (
              "Home"
            ) : language === "de" ? (
              "Home"
            ) : (
              <StyledJapNav>ホーム</StyledJapNav>
            )}
          </Link>
          <Link
            to="/about"
            className="link"
            style={{
              color: `${currentPage === "about" ? "var(--primary-color)" : ""}`,
            }}
            onClick={() => {
              onCurrentPage("about");
            }}
          >
            {language === "en" ? (
              "About"
            ) : language === "de" ? (
              "Über mich"
            ) : (
              <StyledJapNav>プロフィール</StyledJapNav>
            )}
          </Link>
          <Link
            to="/projects"
            className="link"
            style={{
              color: `${
                currentPage === "projects" ? "var(--primary-color)" : ""
              }`,
            }}
            onClick={() => {
              onCurrentPage("projects");
            }}
          >
            {language === "en" ? (
              "Projects"
            ) : language === "de" ? (
              "Projekte"
            ) : (
              <StyledJapNav>制作物一覧</StyledJapNav>
            )}
          </Link>
          <Link
            to="/skills"
            className="link"
            style={{
              color: `${
                currentPage === "skills" ? "var(--primary-color)" : ""
              }`,
            }}
            onClick={() => {
              onCurrentPage("skills");
            }}
          >
            {language === "en" ? (
              "Skills"
            ) : language === "de" ? (
              "Skills"
            ) : (
              <StyledJapNav>スキル</StyledJapNav>
            )}
          </Link>
        </StyledNavigation>
      )}
    </>
  );
}
