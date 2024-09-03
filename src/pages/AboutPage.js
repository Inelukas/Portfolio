import styled from "styled-components";

const StyledAboutPage = styled.div`
  height: auto;
  width: auto;
  margin: 5% 5%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  gap: 10px;
  line-height: 1.5;
  box-shadow: 5px 5px var(--primary-color);
  border-radius: 10px;
  font-size: 0.65rem;

  @media screen and (min-width: 600px) {
    padding: 15px;
    margin-top: 15%;
    margin-bottom: 0%;
  }

  @media screen and (min-width: 900px) {
    font-size: 0.8rem;
    margin: 5% 10%;
    width: auto;
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    margin: 5% 20%;
    font-size: 1rem;
  }
`;

export default function AboutPage({ language }) {
  return (
    <StyledAboutPage>
      {language === "jp" && (
        <>
          <h2>こんにちは！</h2>
          <p>
            ルーカスと申します。私はグローバルノマドであり、複数の言語を操るポリグロットです。
            最近では、プログラミングに対する情熱が高まり、熱心なコード愛好者となっております。🤓
          </p>
          <p>
            8年間、私は東アジアに魅了され続けてきた。日本では、毎週地元の銭湯に通うことが習慣となり、
            43度のお湯の中で、名前も知らない年配の男性たちと楽しく会話を交わしました。韓国では、
            夜遅くまで営業しているコインカラオケに足を運び、暗い部屋で一人で思い切り歌うことが日常となりました。
            台湾ではハイキングの楽しさを知り、週末には何度も台北近郊の山々に登り、時には断崖を登ることもありました。
            そして今、私はドイツに戻り、旅行と言語学習に加えて、プログラミングという新たな情熱を見つけました。
          </p>
          <p>
            ITの旅はドイツのコーディングブートキャンプで始まり、そこでコーディングスキルを向上させるだけでなく、
            論理的思考と創造性を駆使して問題を解決する楽しさを見出しました。魅力的なプロジェクトの実装や、
            他者と最高のコードについて議論することに、私は全力で取り組んでいます！💻
          </p>
          <p>
            コーディングをしていない際には、しばしば言語の学習に励んでいます。英語と日本語は流暢に話すことができ、
            中国語もビジネスレベルで話せます。さらに、日常会話の韓国語にも精通しています。
            最近、新しい挑戦を求めてスペイン語の学習に励んでいます。🤯
          </p>
          <p>
            新たな挑戦に対して常に期待感を抱いており、次の冒険が現実の世界であるのか、あるいはデジタルの世界であるのか、非常に楽しみにしています。
          </p>
        </>
      )}
      {language === "de" && (
        <>
          <h2>Hi!</h2>
          <p>
            Ich bin Lukas – ein Weltenbummler, Sprachliebhaber und mittlerweile
            auch begeisterter Code-"Otaku". 🤓
          </p>
          <p>
            Für acht Jahre habe ich mein Herz in Ostasien verloren. In Japan
            gehörte es zur Routine, jede Woche ein örtliches "sentou"
            (öffentliches Bad) zu besuchen, um bei 43 Grad heißem Wasser mit
            nackten, älteren Herren zu plaudern, deren Namen ich nie erfahren
            sollte. In Südkorea zog es mich regelmäßig mitten in der Nacht ins
            24/7 geöffnete Münz-Karaoke, wo ich mir allein in einer dunklen
            Kammer die Seele aus dem Leib sang. In Taiwan entdeckte ich die
            Freude am Wandern und verbrachte an freien Wochenenden oft Zeit auf
            Bergen nahe Taipehs, manchmal an Abgründen entlang, deren Aussicht
            auf das nahegelegene Meer die Existenzängste immer wieder wert war.
            Und jetzt, nach all dieser Zeit, bin ich zurück in Deutschland. Hier
            widme ich mich einer weiteren Leidenschaft neben dem Reisen und
            Sprachenlernen: dem Programmieren.
          </p>
          <p>
            Meine Reise in die IT-Welt begann mit einem Web Development
            Bootcamp, wo ich nicht nur meine Coding-Skills verbessert, sondern
            auch entdeckt habe, wie sehr ich es liebe, Probleme mit Logik und
            Kreativität zu lösen. Ob es darum geht, coole Projekte umzusetzen
            oder mit anderen Nerds über den besten Code zu fachsimpeln – ich bin
            voll dabei! 💻
          </p>
          <p>
            Wenn ich nicht gerade an meinem Code tüftle, findest du mich
            wahrscheinlich beim Sprachenlernen. Englisch und Japanisch spreche
            ich fließend, Mandarin kann ich auf professionellem Niveau, und mit
            Alltags-Koreanisch komme ich auch gut zurecht. Spanisch und Latein
            sind ebenfalls in meinem Repertoire, falls du mal einen Übersetzer
            für antike Texte brauchst. 😉
          </p>
          <p>
            Ich freue mich immer über neue Herausforderungen und bin gespannt,
            wohin die nächste Reise geht – ob in der realen Welt oder in der
            digitalen.
          </p>
        </>
      )}
      {language === "en" && (
        <>
          <h2>Hi!</h2>
          <p>
            I'm Lukas – a traveler, language lover, and now an enthusiastic code
            junkie. 🤓
          </p>
          <p>
            For eight years, I lost my heart to East Asia. In Japan, it became a
            routine to visit a local "sentou" (public bath) every week, where I
            would chat with naked, older gentlemen in 43-degree hot water, whose
            names I would never learn. In South Korea, I regularly found myself
            at a 24/7 coin karaoke in the middle of the night, singing my heart
            out alone in a dark room. In Taiwan, I discovered the joy of hiking
            and spent many free weekends climbing mountains near Taipeh,
            sometimes along sheer cliffs where the view of the nearby sea made
            the existential fears always worthwhile. And now, after all this
            time, I am back in Germany. Here, I am dedicating myself to another
            passion besides traveling and learning languages: programming.
          </p>
          <p>
            My journey into the IT world began with a bootcamp at neuefische,
            where I not only improved my coding skills but also discovered how
            much I love solving problems with logic and creativity. Whether it's
            about implementing cool projects or nerding out with others about
            the best code – I'm all in! 💻
          </p>
          <p>
            When I'm not tinkering with my code, you'll probably find me
            learning languages. I speak English and Japanese fluently, can
            handle Mandarin at a professional level, and I also get by well with
            everyday Korean. Spanish and Latin are also in my repertoire if you
            ever need a translator for ancient texts. 😉
          </p>
          <p>
            I'm always excited about new challenges and can't wait to see where
            the next journey takes me – whether in the real world or the digital
            one.
          </p>
        </>
      )}
    </StyledAboutPage>
  );
}
