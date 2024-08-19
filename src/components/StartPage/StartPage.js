import styled from "styled-components";
import myself from "../../assets/pic2.png";
import { projects, skills, languages } from "../../lib/data";
import { useState } from "react";
import { Project } from "../Project/Project";
import { Skill } from "../Skill/Skill";
import { Language } from "../Language/Language";

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
    justify-content: center;
    align-items: center;
    gap: 40px;
    text-align: center;

    h1 {
      font-size: 3.5rem;
    }

    h2,
    h3 {
      font-size: 1.5rem;
    }
  }

  .links {
    margin-top: 20px;
    position: relative;
  }

  .link {
    margin: 10px 0;
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.3s ease;

    &:active {
      transform: scale(0.95);
    }

    &:hover {
      text-decoration: underline;
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
    max-width: 300px;
    border-radius: 20px;
  }

  .myself-box {
    position: relative;
  }

  .myself-shadow {
    position: absolute;
    border-radius: 20px;
    bottom: 5px;
    right: 0px;
    width: 310px;
    height: 148px;
    box-shadow: 20px 20px 10px var(--text-color);
  }

  .about {
    height: auto;
    width: 100%;
    max-width: 600px;
    margin: 10% 10%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    gap: 10px;
    line-height: 1.5;
    box-shadow: 5px 5px var(--primary-color);
    border-radius: 10px;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
      margin: 15% 10%;
      padding: 15px;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
      padding: 10px;
    }
  }

  .links-fixed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: end;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    padding: 10px;
    background-color: var(--background-color);
    background-image: var(--custom-image);
    box-shadow: 0px 0px 3px 3px var(--primary-color);
  }

  .project-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin: 10% 0;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skills {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 5% 0;
    flex-wrap: wrap;
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    margin: 5% 0;
    gap: 20px;

    a {
      color: var(--text-color);
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input,
    textarea {
      width: 400px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .language-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    z-index: 2;

    &:hover {
      background-color: var(--text-color);
      color: black;
    }
  }

  @media screen and (max-width: 1000px) {
    .home {
      flex-direction: column;
    }

    .links-fixed {
      height: auto;
      width: 100%;
      top: auto;
      bottom: 0px;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
    }

    .myself {
      max-width: 200px;
    }

    .skill,
    .project {
      max-width: 90%;
    }

    .myself-shadow {
      width: 210px;
      height: 100px;
      box-shadow: 15px 15px 10px;
    }
  }
`;

export function StartPage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [language, setLanguage] = useState("en");

  function toggleLanguage() {
    setLanguage(language === "en" ? "de" : language === "de" ? "jp" : "en");
  }

  return (
    <StyledStartPage>
      <div className="language-toggle" onClick={toggleLanguage}>
        {language === "en" ? "EN" : language === "de" ? "DE" : "JP"}
      </div>
      {currentPage === "home" && (
        <div className="home">
          <div className="introduction">
            <h1>
              {language === "en" ? (
                <>
                  <h1>Welcome.</h1>
                  <h2>I'm Lukas.</h2>
                  <h3>
                    Passionate React Developer &nbsp;|&nbsp; Multilingual
                    Problem Solver
                  </h3>
                </>
              ) : language === "de" ? (
                <>
                  <h1>Willkommen.</h1>
                  <h2>Ich bin Lukas.</h2>
                  <h3>
                    React Developer aus Leidenschaft &nbsp;|&nbsp;
                    Multilingualer Problemlöser
                  </h3>
                </>
              ) : (
                <>
                  <h1>ようこそ.</h1>
                  <h2>ルーカスです。</h2>
                  <h3>情熱的なReact開発者 &nbsp;|&nbsp; 多言語専門家</h3>
                </>
              )}
            </h1>
            <h3>______________________________________</h3>
            <div className="links">
              <h3
                className="link"
                onClick={() => {
                  setCurrentPage("about");
                }}
              >
                {language === "en"
                  ? "→ About myself"
                  : language === "de"
                  ? "→ Über mich"
                  : "私について"}
              </h3>
              <h3
                className="link"
                onClick={() => {
                  setCurrentPage("projects");
                }}
              >
                {language === "en"
                  ? "→ My projects"
                  : language === "de"
                  ? "→ Meine Projekte"
                  : "プロジェクト"}
              </h3>
              <h3
                className="link"
                onClick={() => {
                  setCurrentPage("skills");
                }}
              >
                {language === "en"
                  ? "→ My skills"
                  : language === "de"
                  ? "→ Meine Fähigkeiten"
                  : "スキル"}
              </h3>
              <h3
                className="link"
                onClick={() => {
                  setCurrentPage("contact");
                }}
              >
                {language === "en"
                  ? "→ Contact"
                  : language === "de"
                  ? "→ Kontakt"
                  : "連絡"}
              </h3>
              <div className="line" />
            </div>
          </div>
          <div className="myself-box">
            <img className="myself" src={myself} alt="Myself" />
            <div className="myself-shadow" />
          </div>
        </div>
      )}

      {currentPage !== "home" && (
        <>
          {currentPage === "about" && (
            <div className="about">
              {language === "jp" && (
                <>
                  <h2>こんにちは！</h2>
                  <p>
                    ルーカスです。旅行好きで、言語愛好家であり、今では熱心なコードジャンキーです。🍃
                  </p>
                  <p>
                    東アジアでの8年間の冒険で、勉強し、働き、日本、台湾と韓国に心を奪われ、
                    今はドイツに戻ってきました。ここで、新しい情熱であるコーディングに専念しています。
                  </p>
                  <p>
                    ITの旅はneuefischeのブートキャンプから始まり、そこでコーディングスキルを向上
                    させただけでなく、論理と創造力で問題を解決することがどれほど好きかも発見しました。
                    クールなプロジェクトを実装することでも、最高のコードについて他の人と話し合うこと
                    でも、私は全力で取り組んでいます！💻
                  </p>
                  <p>
                    コーディングをしていない時は、言語を学んでいるでしょう。英語と日本語は流暢に話せ、
                    マンダリンもプロフェッショナルなレベルで扱えます。また、日常の韓国語にも慣れています。
                    もし古典的なテキストの翻訳者が必要なら、スペイン語やラテン語もお任せください。😉
                  </p>
                  <p>
                    新しい挑戦にはいつもワクワクしており、次の旅が現実の世界かデジタルの世界か、
                    どちらに向かうのか楽しみにしています。
                  </p>
                </>
              )}
              {language === "de" && (
                <>
                  <h2>Hi!</h2>
                  <p>
                    Ich bin Lukas – ein Weltenbummler, Sprachliebhaber und
                    mittlerweile auch begeisterter Code-Junkie. 🍃
                  </p>
                  <p>
                    Nach acht abenteuerlichen Jahren in Ostasien, wo ich
                    studiert, gearbeitet und mein Herz sowohl in Japan als auch
                    in Taiwan und Süd-Korea verloren habe, bin ich zurück in
                    Deutschland gelandet. Hier widme ich mich einer neuen
                    Leidenschaft: dem Programmieren.
                  </p>
                  <p>
                    Meine Reise in die IT-Welt begann mit einem Bootcamp bei
                    neuefische, wo ich nicht nur meine Coding-Skills verbessert,
                    sondern auch entdeckt habe, wie sehr ich es liebe, Probleme
                    mit Logik und Kreativität zu lösen. Ob es darum geht, coole
                    Projekte umzusetzen oder mit anderen Nerds über den besten
                    Code zu fachsimpeln – ich bin voll dabei! 💻
                  </p>
                  <p>
                    Wenn ich nicht gerade an meinem Code tüftle, findest du mich
                    wahrscheinlich beim Sprachenlernen. Englisch und Japanisch
                    spreche ich fließend, Mandarin kann ich auf professionellem
                    Niveau, und mit Alltags-Koreanisch komme ich auch gut
                    zurecht. Spanisch und Latein sind ebenfalls in meinem
                    Repertoire, falls du mal einen Übersetzer für antike Texte
                    brauchst. 😉
                  </p>
                  <p>
                    Ich freue mich immer über neue Herausforderungen und bin
                    gespannt, wohin die nächste Reise geht – ob in der realen
                    Welt oder in der digitalen.
                  </p>
                </>
              )}
              {language === "en" && (
                <>
                  <h2>Hi!</h2>
                  <p>
                    I'm Lukas – a traveler, language lover, and now an
                    enthusiastic code junkie. 🍃
                  </p>
                  <p>
                    After eight adventurous years in East Asia, where I studied,
                    worked, and lost my heart to Japan, Taiwan, and South Korea,
                    I have landed back in Germany. Here, I'm dedicating myself
                    to a new passion: coding.
                  </p>
                  <p>
                    My journey into the IT world began with a bootcamp at
                    neuefische, where I not only improved my coding skills but
                    also discovered how much I love solving problems with logic
                    and creativity. Whether it's about implementing cool
                    projects or nerding out with others about the best code –
                    I'm all in! 💻
                  </p>
                  <p>
                    When I'm not tinkering with my code, you'll probably find me
                    learning languages. I speak English and Japanese fluently,
                    can handle Mandarin at a professional level, and I also get
                    by well with everyday Korean. Spanish and Latin are also in
                    my repertoire if you ever need a translator for ancient
                    texts. 😉
                  </p>
                  <p>
                    I'm always excited about new challenges and can't wait to
                    see where the next journey takes me – whether in the real
                    world or the digital one.
                  </p>
                </>
              )}
            </div>
          )}
          {currentPage === "projects" && (
            <div className="project-list">
              {projects.map((project) => (
                <Project data={project} />
              ))}
            </div>
          )}
          {currentPage === "skills" && (
            <div className="skills-container">
              <h2>I have experience with these technologies:</h2>
              <div className="skills">
                {skills.map((skill) => (
                  <Skill data={skill} />
                ))}
              </div>
              <h2>I can speak the following languages:</h2>
              <div className="skills">
                {languages.map((language) => (
                  <Language data={language} />
                ))}
              </div>
            </div>
          )}
          {currentPage === "contact" && (
            <div className="contact">
              <h2>{language === "en" ? "Get in Touch" : "Kontaktiere mich"}</h2>
              <a href="mailto:klipp.lukas@gmail.com">GoogleMail</a>
              <a href="https://tw.linkedin.com/in/lukas-klipp-2a9011211?trk=public_profile_browsemap">
                LinkedIn
              </a>
              <a href="https://github.com/Inelukas">GitHub</a>
              <a href="https://www.instagram.com/inelukas/">Instagram</a>
              <div className="contact-form">
                <input
                  type="text"
                  placeholder={language === "en" ? "Your Name" : "Ihr Name"}
                />
                <input
                  type="email"
                  placeholder={language === "en" ? "Your Email" : "Ihre E-Mail"}
                />
                <textarea
                  rows={4}
                  placeholder={
                    language === "en" ? "Your Message" : "Ihre Nachricht"
                  }
                />
                <button>{language === "en" ? "Send" : "Senden"}</button>
              </div>
            </div>
          )}
          <div className="links-fixed">
            <h3
              className="link"
              onClick={() => {
                setCurrentPage("home");
              }}
            >
              Home
            </h3>
            <h3
              className="link"
              style={{ color: `${currentPage === "about" ? "red" : ""}` }}
              onClick={() => {
                setCurrentPage("about");
              }}
            >
              About
            </h3>
            <h3
              className="link"
              style={{ color: `${currentPage === "projects" ? "red" : ""}` }}
              onClick={() => {
                setCurrentPage("projects");
              }}
            >
              Projects
            </h3>
            <h3
              className="link"
              style={{ color: `${currentPage === "skills" ? "red" : ""}` }}
              onClick={() => {
                setCurrentPage("skills");
              }}
            >
              Skills
            </h3>
          </div>
        </>
      )}
    </StyledStartPage>
  );
}
