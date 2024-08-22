import styled from "styled-components";
import myself from "../../assets/color-final.png";
import { projects, skills, languages } from "../../lib/data";
import { useState } from "react";
import { Project } from "../Project/Project";
import { Skill } from "../Skill/Skill";
import { Language } from "../Language/Language";
import { ContactForm } from "../ContactForm/ContactForm";
import { Navigation } from "../Navigation/Navigation";

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

    @media screen and (max-width: 900px) {
      flex-direction: column;
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

    @media screen and (max-width: 900px) {
      max-width: 200px;
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
    width: 310px;
    height: 148px;
    box-shadow: 20px 20px 10px var(--text-color);

    @media screen and (max-width: 900px) {
      width: 210px;
      height: 100px;
      box-shadow: 15px 15px 10px;
    }
  }

  .about {
    height: auto;
    width: 100%;
    max-width: 700px;
    margin: 5% 10%;
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

  .project-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 5%;
    margin-bottom: 10%;

    @media screen and (max-width: 768px) {
      margin-top: 10%;
      margin-bottom: 20%;
    }
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 10%;

    @media screen and (max-width: 768px) {
      margin-top: 10%;
      margin-bottom: 20%;
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

    @media screen and (max-width: 768px) {
      margin: 10% 0;
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
            <div>
              {language === "en" ? (
                <>
                  <h1>Welcome.</h1>
                  <h2>I'm Lukas.</h2>
                  <h3>
                    Passionate React Developer &nbsp;|&nbsp; Multilingual World
                    Traveller
                  </h3>
                </>
              ) : language === "de" ? (
                <>
                  <h1>Willkommen.</h1>
                  <h2>Ich bin Lukas.</h2>
                  <h3>
                    React Developer aus Leidenschaft &nbsp;|&nbsp;
                    Multilingualer Weltenbummler
                  </h3>
                </>
              ) : (
                <>
                  <h1>ようこそ.</h1>
                  <h2>ルーカスです。</h2>
                  <h3>
                    熱意あるReact開発者 &nbsp;|&nbsp; 多言語を操る世界の旅人
                  </h3>
                </>
              )}
            </div>
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
                    ルーカスです。旅行好きで、言語愛好家であり、今では熱心なコードオタクです。🤓
                  </p>
                  <p>
                    8年間、私は東アジアに心を奪われていた。日本では、毎週地元の銭湯に通うのが日課となり、
                    43度のお湯の中で、名前も知らない年配の裸の紳士たちとおしゃべりを楽しんだ。韓国では、
                    夜中に年中無休のコイン・カラオケに行き、暗い部屋で一人思い切り歌うのが日課になった。
                    台湾ではハイキングの楽しさに目覚め、週末は何度も台北近郊の山に登り、時には断崖絶壁を登った。
                    そして今、私はドイツに戻ってきた。ここでは、旅行と言語学習以外にもうひとつの情熱、
                    プログラミングに打ち込んでいる。
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
                    mittlerweile auch begeisterter Code-"Otaku". 🤓
                  </p>
                  <p>
                    Für acht Jahre habe ich mein Herz in Ostasien verloren. In
                    Japan gehörte es zur Routine, jede Woche ein örtliches
                    "sentou" (öffentliches Bad) zu besuchen, um bei 43 Grad
                    heißem Wasser mit nackten, älteren Herren zu plaudern, deren
                    Namen ich nie erfahren sollte. In Südkorea zog es mich
                    regelmäßig mitten in der Nacht ins 24/7 geöffnete
                    Münz-Karaoke, wo ich mir allein in einer dunklen Kammer die
                    Seele aus dem Leib sang. In Taiwan entdeckte ich die Freude
                    am Wandern und verbrachte an freien Wochenenden oft Zeit auf
                    Bergen nahe Taipehs, manchmal an Abgründen entlang, deren
                    Aussicht auf das nahegelegene Meer die Existenzängste immer
                    wieder wert war. Und jetzt, nach all dieser Zeit, bin ich
                    zurück in Deutschland. Hier widme ich mich einer weiteren
                    Leidenschaft neben dem Reisen und Sprachenlernen: dem
                    Programmieren.
                  </p>
                  <p>
                    Meine Reise in die IT-Welt begann mit einem Web Development
                    Bootcamp, wo ich nicht nur meine Coding-Skills verbessert,
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
                    enthusiastic code junkie. 🤓
                  </p>
                  <p>
                    For eight years, I lost my heart to East Asia. In Japan, it
                    became a routine to visit a local "sentou" (public bath)
                    every week, where I would chat with naked, older gentlemen
                    in 43-degree hot water, whose names I would never learn. In
                    South Korea, I regularly found myself at a 24/7 coin karaoke
                    in the middle of the night, singing my heart out alone in a
                    dark room. In Taiwan, I discovered the joy of hiking and
                    spent many free weekends climbing mountains near Taipeh,
                    sometimes along sheer cliffs where the view of the nearby
                    sea made the existential fears always worthwhile. And now,
                    after all this time, I am back in Germany. Here, I am
                    dedicating myself to another passion besides traveling and
                    learning languages: programming.
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
              <div className="skills">
                {languages.map((lang) => (
                  <Language data={lang} language={language} />
                ))}
              </div>
            </div>
          )}
          {currentPage === "contact" && (
            <div className="contact">
              <h2>
                {language === "en"
                  ? "Get in Touch"
                  : language === "de"
                  ? "Kontaktiere mich"
                  : "連絡をください"}
              </h2>
              <a href="mailto:klipp.lukas@gmail.com">GoogleMail</a>
              <a href="https://tw.linkedin.com/in/lukas-klipp-2a9011211?trk=public_profile_browsemap">
                LinkedIn
              </a>
              <a href="https://github.com/Inelukas">GitHub</a>
              <a href="https://www.instagram.com/inelukas/">Instagram</a>
              <ContactForm language={language} />
            </div>
          )}
          <Navigation
            onCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </StyledStartPage>
  );
}
