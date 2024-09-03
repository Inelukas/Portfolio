import styled from "styled-components";
import myself from "../assets/color-final.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Contacts from "../components/Contacts/Contacts";

const StyledStartPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5%;
  padding: 20px;

  .home {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 3.5rem;
    }

    h2,
    h3 {
      font-size: 1.5rem;
    }

    @media screen and (min-width: 900px) {
      flex-direction: row;
      gap: 40px;
    }
  }

  .line {
    position: absolute;
    right: 30px;
    top: 0;
    background-color: var(--text-color);
    width: 2px;
    height: 150px;
  }

  .myself {
    max-width: 200px;
    border-radius: 20px;

    @media screen and (min-width: 900px) {
      max-width: 300px;
    }
  }

  .myself-box {
    position: relative;
  }

  .myself-shadow {
    position: absolute;
    border-radius: 20px;
    bottom: 5px;
    right: 0px;
    width: 210px;
    height: 100px;
    box-shadow: 15px 15px 10px var(--text-color);

    @media screen and (min-width: 900px) {
      width: 310px;
      height: 148px;
      box-shadow: 20px 20px 10px;
    }
  }
`;

const StyledLinksContainer = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    margin: 5px 0;
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
    color: var(--text-color);
    font-size: 1.5rem;
    text-decoration: none;

    &:active {
      transform: scale(0.95);
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function StartPage({ language, onCurrentPage }) {
  return (
    <StyledStartPage>
      <div className="home">
        <div className="introduction">
          <div>
            {language === "en" ? (
              <>
                <h1>Welcome.</h1>
                <h2>I'm Lukas.</h2>
                <h3>
                  Dedicated React Developer &nbsp;|&nbsp; Multilingual World
                  Traveller
                </h3>
              </>
            ) : language === "de" ? (
              <>
                <h1>Willkommen.</h1>
                <h2>Ich bin Lukas.</h2>
                <h3>
                  Engagierter React-Entwickler &nbsp;|&nbsp; Multilingualer
                  Weltenbummler
                </h3>
              </>
            ) : (
              <>
                <h1>ようこそ.</h1>
                <h2>ルーカスです。</h2>
                <h3>React開発者 &nbsp;|&nbsp; ポリグロット</h3>
              </>
            )}
          </div>
          <h3>______________________________________</h3>
          <StyledLinksContainer>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", delay: 0.5, duration: 1 }}
            >
              <Link
                to="/about"
                onClick={() => {
                  onCurrentPage("about");
                }}
              >
                {language === "en"
                  ? "→ About myself"
                  : language === "de"
                  ? "→ Über mich"
                  : "私について"}
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", delay: 1, duration: 1 }}
            >
              <Link
                to="/projects"
                onClick={() => {
                  onCurrentPage("projects");
                }}
              >
                {language === "en"
                  ? "→ My projects"
                  : language === "de"
                  ? "→ Meine Projekte"
                  : "プロジェクト"}
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", delay: 1.5, duration: 1 }}
            >
              <Link
                to="/skills"
                onClick={() => {
                  onCurrentPage("skills");
                }}
              >
                {language === "en"
                  ? "→ My skills"
                  : language === "de"
                  ? "→ Meine Fähigkeiten"
                  : "スキル"}
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", delay: 2, duration: 1 }}
            ></motion.div>
            <div className="line" />
          </StyledLinksContainer>
          <Contacts />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="myself-box"
        >
          <img className="myself" src={myself} alt="Myself" />
          <div className="myself-shadow" />
        </motion.div>
      </div>
    </StyledStartPage>
  );
}
