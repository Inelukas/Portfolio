import styled from "styled-components";
import myself from "../../assets/pic2.png";
import quizapp from "../../assets/quizapp.png";
import hangman from "../../assets/hangman.png";
import { useState } from "react";

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
    /* box-shadow: 5px 5px 5px var(--primary-color); */
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
    height: 150px;
    box-shadow: 20px 20px 10px var(--primary-color);
  }

  .about {
    height: 75vh;
    min-width: 400px;
    margin: 5% 30%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    gap: 10px;
    line-height: 1.5;
    box-shadow: 5px 5px var(--primary-color);
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

  .project {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* border: 2px solid var(--primary-color); */
    box-shadow: 5px 5px 5px 5px var(--shadow-color);
    border-radius: 20px;
    padding: 20px;
    text-align: center;

    &:hover {
      box-shadow: 10px 10px 10px 10px var(--primary-color);
    }

    h2 {
      font-size: 1.8rem;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: var(--primary-color);
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
    }

    a {
      color: var(--text-color);
      line-height: 2;
      &:hover {
        color: var(--primary-color);
      }
    }
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

  .skill {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* border: 2px solid var(--primary-color); */
    box-shadow: 5px 5px 5px 5px var(--shadow-color);
    border-radius: 20px;
    padding: 20px;

    &:hover {
      box-shadow: 10px 10px 10px 10px var(--primary-color);
    }

    h2 {
      font-size: 2rem;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: var(--primary-color);
      }
    }

    p,
    ul {
      font-size: 1rem;
      line-height: 1.5;
    }
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
        background-color: darken(var(--primary-color), 10%);
      }
    }
  }

  .language-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    background: var(--primary-color);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    z-index: 2;

    &:hover {
      background-color: darken(var(--primary-color), 10%);
    }
  }

  @media screen and (max-width: 1000px) {
    .home {
      flex-direction: column;
    }

    .project-list,
    .skills {
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
      box-shadow: 15px 15px 10px var(--primary-color);
    }
  }
`;

export function StartPage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showProject, setShowProject] = useState("games");
  const [showSkill, setShowSkill] = useState("coding");
  const [language, setLanguage] = useState("en");

  function toggleShowProject(project) {
    setShowProject(project === showProject ? "" : project);
  }

  function toggleShowSkill(skill) {
    setShowSkill(skill === showSkill ? "" : skill);
  }

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
              {language === "jp" ? <h2>こんにちは！</h2> : <h2>Hi!</h2>}
              <p>
                {language === "en"
                  ? "I'm Lukas – a traveler, language lover, and now an enthusiastic code junkie. 🍃"
                  : language === "de"
                  ? "Ich bin Lukas – ein Weltenbummler, Sprachliebhaber und mittlerweile auch begeisterter Code-Junkie. 🍃"
                  : "ルーカスです。旅行好きで、言語愛好家であり、今では熱心なコードジャンキーです。🍃"}
              </p>
              <p>
                {language === "en"
                  ? "After eight adventurous years in East Asia, where I studied, worked, and lost my heart to both Japan and Taiwan, I have landed back in Germany. Here, I'm dedicating myself to a new passion: coding."
                  : language === "de"
                  ? "Nach acht abenteuerlichen Jahren in Ostasien, wo ich studiert, gearbeitet und mein Herz sowohl in Japan als auch in Taiwan verloren habe, bin ich zurück in Deutschland gelandet. Hier widme ich mich einer neuen Leidenschaft: dem Programmieren."
                  : "東アジアでの8年間の冒険で、勉強し、働き、日本と台湾の両方に心を奪われ、今はドイツに戻ってきました。ここで、新しい情熱であるコーディングに専念しています。"}
              </p>
              <p>
                {language === "en"
                  ? "My journey into the IT world began with a bootcamp at neuefische, where I not only improved my coding skills but also discovered how much I love solving problems with logic and creativity. Whether it's about implementing cool projects or nerding out with others about the best code – I'm all in! 💻"
                  : language === "de"
                  ? "Meine Reise in die IT-Welt begann mit einem Bootcamp beineuefische, wo ich nicht nur meine Coding-Skills verbessert, sondern auch entdeckt habe, wie sehr ich es liebe, Probleme mit Logik und Kreativität zu lösen. Ob es darum geht, coole Projekte umzusetzen oder mit anderen Nerds über den besten Code zu fachsimpeln – ich bin voll dabei! 💻"
                  : "ITの旅はneuefischeのブートキャンプから始まり、そこでコーディングスキルを向上させただけでなく、論理と創造力で問題を解決することがどれほど好きかも発見しました。クールなプロジェクトを実装することでも、最高のコードについて他の人と話し合うことでも、私は全力で取り組んでいます！💻"}
              </p>
              <p>
                {language === "en"
                  ? "When I'm not tinkering with my code, you'll probably find me learning languages. I speak English and Japanese fluently, can handle Mandarin at a professional level, and I also get by well with everyday Korean. Spanish and Latin are also in my repertoire if you ever need a translator for ancient texts. 😉"
                  : language === "de"
                  ? "Wenn ich nicht gerade an meinem Code tüftle, findest du mich wahrscheinlich beim Sprachenlernen. Englisch und Japanisch spreche ich fließend, Mandarin kann ich auf professionellem Niveau, und mit Alltags-Koreanisch komme ich auch gut zurecht. Spanisch und Latein sind ebenfalls in meinem Repertoire, falls du mal einen Übersetzer für antike Texte brauchst. 😉"
                  : "コーディングをしていない時は、言語を学んでいるでしょう。英語と日本語は流暢に話せ、マンダリンもプロフェッショナルなレベルで扱えます。また、日常の韓国語にも慣れています。もし古典的なテキストの翻訳者が必要なら、スペイン語やラテン語もお任せください。😉"}
              </p>
              <p>
                {language === "en"
                  ? "I'm always excited about new challenges and can't wait to see where the next journey takes me – whether in the real world or the digital one."
                  : language === "de"
                  ? "Ich freue mich immer über neue Herausforderungen und bin gespannt, wohin die nächste Reise geht – ob in der realen Welt oder in der digitalen."
                  : "新しい挑戦にはいつもワクワクしており、次の旅が現実の世界かデジタルの世界か、どちらに向かうのか楽しみにしています。"}
              </p>
            </div>
          )}
          {currentPage === "projects" && (
            <div className="project-list">
              <div className="project">
                <h2 onClick={() => toggleShowProject("capstone")}>
                  Capstone Project
                </h2>
                {showProject === "capstone" && (
                  <>
                    <p>Das Capstone Projekt bei neuefische</p>
                    <a href="https://new-quiz-app-pi.vercel.app/">
                      Link zum Capstone-Project
                    </a>
                  </>
                )}
              </div>
              <div className="project">
                <h2 onClick={() => toggleShowProject("games")}>
                  {language === "en" ? "Games" : "Spiele"}
                </h2>
                {showProject === "games" && (
                  <>
                    <p>
                      {language === "en"
                        ? "My React game portfolio includes various browser games, such as a Hangman game and a PacMan game. All games are designed with React and styled-components."
                        : "Mein React-Spielportfolio umfasst verschiedene Browsergames, wie ein Galgenraten-Spiel und ein PacMan-Spiel. Alle Spiele sind mit React und styled-components gestaltet."}
                    </p>
                    <ul>
                      <li>
                        <a href="https://chicken-game-jade.vercel.app/">
                          Chicken Game
                        </a>{" "}
                        &nbsp;(
                        <a href="https://github.com/Inelukas/Chicken-Game">
                          GitHub Repo
                        </a>
                        )
                      </li>
                      <li>
                        <a href="https://hangman-lilac-nine.vercel.app/">
                          Hangman
                        </a>{" "}
                        &nbsp;(
                        <a href="https://github.com/Inelukas/Hangman">
                          GitHub Repo
                        </a>
                        )
                      </li>
                      <li>
                        <a href="https://car-game-kohl.vercel.app/">Car Game</a>
                        &nbsp;(
                        <a href="https://github.com/Inelukas/Car-Game">
                          GitHub Repo
                        </a>
                        )
                      </li>
                    </ul>
                    <img src={hangman} alt="Hangman" />
                  </>
                )}
              </div>
              <div className="project">
                <h2 onClick={() => toggleShowProject("more")}>
                  Weitere Projekte
                </h2>
                {showProject === "more" && (
                  <>
                    <p>
                      Im Laufe meiner Studien im Rahmen eines Bootcamps,
                      diverser Kurse auf udemy und im privaten Rahmen habe ich
                      zahlreiche weitere Projekte abgeschlossen. Diese umfassen
                      eine Webseite zum Speichern und Editieren von Farbschemen,
                      einen Kosten-Kalkulator und weitere Projekte.
                    </p>
                    <h4>Projekte:</h4>
                    <ul>
                      <li>
                        <a href="https://recap4-v-2.vercel.app/">
                          Color Theme Creator
                        </a>
                      </li>
                      <li>
                        <a href="https://to-do-list-gamma-one-95.vercel.app/">
                          To-Do-List
                        </a>
                      </li>
                      <li>
                        <a href="https://new-quiz-app-pi.vercel.app/">
                          Quiz App
                        </a>
                      </li>
                    </ul>
                    <img src={quizapp} alt="Quizapp" />
                  </>
                )}
              </div>
            </div>
          )}
          {currentPage === "skills" && (
            <div className="skills">
              <div className="skill">
                <h2 onClick={() => toggleShowSkill("coding")}>
                  {language === "en" ? "Coding" : "Programmieren"}
                </h2>
                {showSkill === "coding" && (
                  <p>
                    Programmieren ist für mich mehr als nur Code schreiben—es
                    ist Problemlösung pur. Mit JavaScript, React, Next.js und
                    Node.js entwickle ich kreative Lösungen und realisiere
                    anspruchsvolle Projekte. Durch enge Teamarbeit habe ich
                    gelernt, wie wichtig offener Austausch und gemeinsame
                    Problemlösung sind. Geduld und Hartnäckigkeit haben mir
                    geholfen, auch hartnäckige Bugs zu überwinden. In einer
                    schnelllebigen IT-Welt bleibe ich durch ständiges Lernen am
                    Puls der Zeit. Mit adaptivem Denken passe ich mich schnell
                    neuen Anforderungen an und bin bereit, jede Herausforderung
                    anzupacken.
                  </p>
                )}
              </div>
              <div className="skill">
                <h2 onClick={() => toggleShowSkill("languages")}>Sprachen</h2>
                {showSkill === "languages" && (
                  <>
                    <p>
                      Ich spreche fließend Englisch und Japanisch, beherrsche
                      Mandarin auf professionellem Niveau und habe gute
                      Kenntnisse in Koreanisch. Zusätzlich habe ich
                      Grundkenntnisse in Spanisch und Latein. Meine
                      Sprachkompetenzen ermöglichen mir, effektiv in
                      internationalen Teams zu arbeiten und komplexe technische
                      Dokumentationen sowie Benutzeroberflächen in mehreren
                      Sprachen zu verstehen und zu erstellen. Diese
                      Vielseitigkeit unterstützt mich bei der globalen
                      Kommunikation und verbessert die Zugänglichkeit meiner
                      Projekte für ein breites Publikum. Ich habe folgende
                      Sprachklausuren bestanden:
                    </p>
                    <ul>
                      <li>Deutsch: Muttersprache</li>
                      <li>Englisch: TOEIC 990pt (2017)</li>
                      <li>Japanisch: JLPT N1 (2017)</li>
                      <li>Mandarin: TOCFL B2 (2021)</li>
                      <li>Koreanisch: TOPIK 4 (2017)</li>
                    </ul>
                  </>
                )}
              </div>
              <div className="skill">
                <h2 onClick={() => toggleShowSkill("translation")}>
                  Übersetzung
                </h2>
                {showSkill === "translation" && (
                  <p>
                    Mit über drei Jahren Erfahrung als Übersetzer und Lektor
                    bringe ich eine präzise und kulturell passende
                    Sprachübertragung mit. Ich habe Fachtexte aus Japanisch und
                    Mandarin (sowohl vereinfachte als auch traditionelle
                    Schrift) ins Englische und Deutsche übersetzt. Meine Arbeit
                    umfasst alles von Videospielen bis zu Webseiten und
                    Kurzgeschichten. Diese Erfahrung hat meine Fähigkeit zur
                    präzisen Kommunikation und kulturellen Anpassung
                    geschärft—Fähigkeiten, die ich in die IT-Welt einbringe, um
                    klare und effektive technische Dokumentationen zu erstellen.
                  </p>
                )}
              </div>
              <div className="skill">
                <h2 onClick={() => toggleShowSkill("soft")}>Soft Skills</h2>
                {showSkill === "soft" && (
                  <p>
                    In der IT-Branche sind Soft Skills genauso wichtig wie
                    technisches Wissen. Meine internationalen Erfahrungen haben
                    mir geholfen, ausgezeichnete Kommunikationsfähigkeiten und
                    kulturelle Sensibilität zu entwickeln. Ich bin flexibel und
                    kann mich schnell an neue Teams und Projekte anpassen. Durch
                    effektives Zeitmanagement und Organisation bringe ich
                    Projekte effizient zum Abschluss, während meine
                    Teamfähigkeit und Konfliktlösungskompetenz für ein
                    harmonisches Arbeitsumfeld sorgen. Ich bin stets offen für
                    Feedback und kontinuierliche Verbesserung, was mir hilft, in
                    dynamischen und schnelllebigen IT-Projekten erfolgreich zu
                    sein.
                  </p>
                )}
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
