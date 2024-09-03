import styled from "styled-components";
import { languages, skills } from "../lib/data";
import { Skill } from "../components/Skill/Skill";
import { Language } from "../components/Language/Language";

const StyledSkillsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10%;
  margin-top: 10%;
  font-size: 0.8rem;
  text-align: center;

  @media screen and (min-width: 600px) {
    margin: 10% 10%;
    font-size: 1rem;
  }

  @media screen and (min-width: 900px) {
    margin: 5% 10%;
    font-size: 1rem;
  }

  .skills {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 20% 0;
    flex-wrap: wrap;

    @media screen and (min-width: 600px) {
      margin: 5% 0;
      gap: 50px;
    }
  }

  .lang-skills {
    margin-bottom: 30%;

    @media screen and (min-width: 1200px) {
      margin-bottom: 5%;
    }
  }
`;

export default function SkillsPage({ language }) {
  return (
    <StyledSkillsPage>
      <h2>
        {language === "en"
          ? "I have experience with these technologies:"
          : language === "de"
          ? "Ich habe Erfahrung mit folgenden Technologien:"
          : "以下の技術が使えます："}
      </h2>
      <div className="skills">
        {skills.map((skill) => (
          <Skill data={skill} />
        ))}
      </div>
      <h2>
        {language === "en"
          ? "I can speak the following languages:"
          : language === "de"
          ? "Ich spreche folgende Sprachen:"
          : "以下の言語が話せます："}
      </h2>
      <div className="skills lang-skills">
        {languages.map((lang) => (
          <Language data={lang} language={language} />
        ))}
      </div>
    </StyledSkillsPage>
  );
}
