import styled from "styled-components";

const StyledAboutPage = styled.div`
  height: auto;
  width: auto;
  margin: 5% 5%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  gap: 10px;
  line-height: 1.5;
  box-shadow: 5px 5px 5px var(--primary-color);
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
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    margin: 5% 20%;
    font-size: 1rem;
  }
`;

const StyledTitle = styled.h2`
  align-self: center;
`;

export default function AboutPage({ language }) {
  return (
    <StyledAboutPage>
      {language === "jp" && (
        <>
          <StyledTitle>こんにちは！</StyledTitle>
          <p>
            ルーカスと申します。幼い頃から日本文化に強く魅了され、アニメやゲームを通して日本語を学び始めました。日本語を学んでかれこれもう10年になります。兄がプログラマーであることと、日本文化以外にもロジカルに物事を考えることが好きだったことから、プログラミングにも深い興味を持っておりましたが、今年ついにその業界に足を踏み入れてみようと思い、三ヶ月間の集中プログラミングコースに参加しました。
          </p>
          <p>
            そこでは、JavaScriptやReact、Next.jsを学びながら、クイズアプリやゲーム、このウェブサイトなど、さまざまなプロジェクトに取り組みました。さらに、GitやGitHub、MongoDBの使い方を学び、Node.jsを通してバックエンド開発の世界にも触れることができました。コースの最後の一ヶ月では、四人グループでペット育成アプリを開発し、プロジェクトを進める中で、マージ衝突の解決方法や他者のコードを読むスキルを身につけることができました。今後も新たなプロジェクトに挑戦しながら、Pythonなど新しいプログラミング言語を学び、フルスタックプログラマーを目指して、IT業界でさらなる成長を遂げたいと考えています。
          </p>
          <p>
            プライベートでは、アニメやゲームだけでなく、ハイキングやカラオケも趣味です。台湾では山からの豊かな自然の景色を楽しんだり（台湾に住んでいたため）、韓国では深夜まで歌を歌ったり（韓国に住んでいたため）しました。（現在はドイツ在住）
          </p>
          <p>
            本ポートフォリオで、私のプログラミングへの思いを受けとっていただけたらうれしいです。
          </p>
        </>
      )}
      {language === "de" && (
        <>
          <StyledTitle>Hi!</StyledTitle>
          <p>
            Ich bin Lukas – ein Weltenbummler, Sprachenthusiast und inzwischen
            auch leidenschaftlicher Web Developer.
          </p>
          <p>
            Schon als Kind hat mich die japanische Kultur total fasziniert, und
            mit 15 Jahren habe ich angefangen, mir Japanisch durch Anime und
            Spiele selbst beizubringen. Meine Liebe zu Sprachen und Logikrätseln
            hat mich dann irgendwann fast schon natürlich in Richtung
            Programmierung gezogen. Dieses Jahr habe ich den Schritt gewagt und
            einen dreimonatigen Intensivkurs in Webentwicklung gemacht. Während
            des Kurses habe ich JavaScript, React, Next.js und Node.js
            kennengelernt und im letzten Monat gemeinsam mit meinem Team eine
            Tamagotchi-App entwickelt. Dabei habe ich nicht nur gelernt, User
            Stories zu schreiben und Merge-Konflikte zu lösen, sondern auch, wie
            spannend es sein kann, den Code anderer zu verstehen. Jetzt, nach
            dem Bootcamp, bin ich voller Motivation, weiter an neuen Projekten
            zu arbeiten, Python zu lernen und mich als Full-Stack-Entwickler
            weiterzuentwickeln.
          </p>

          <p>
            Bevor ich in die IT-Welt eingetaucht bin, habe ich acht Jahre in
            Ostasien gelebt. In Japan habe ich es mir zur Routine gemacht, jede
            Woche ein lokales "sentou" (öffentliches Bad) zu besuchen und mich
            bei 43 Grad heißem Wasser mit älteren Herren zu unterhalten, deren
            Namen ich nie erfahren habe. In Südkorea war ich ein Stammgast in
            den 24/7 geöffneten Münz-Karaoke-Bars, wo ich mir mitten in der
            Nacht in kleinen Kammern die Seele aus dem Leib gesungen habe. Und
            in Taiwan habe ich meine Liebe zum Wandern entdeckt, besonders an
            den Wochenenden, wenn ich oft auf den Bergen rund um Taipeh
            unterwegs war. Der Blick auf das Meer von den steilen Klippen aus
            hat dabei jede Existenzangst mehr als wettgemacht.
          </p>

          <p>
            Ich bin immer offen für neue Herausforderungen und gespannt, wohin
            die nächste Reise mich führt – ob in der realen Welt oder in der
            digitalen.
          </p>
        </>
      )}
      {language === "en" && (
        <>
          <StyledTitle>Hi!</StyledTitle>
          <p>
            Hi, I'm Lukas – a globetrotter, language enthusiast, and now a
            passionate web developer.
          </p>
          <p>
            Ever since I was a kid, I've been fascinated by Japanese culture,
            and at 15, I started teaching myself Japanese through anime and
            games. My love for languages and logic puzzles eventually led me to
            explore the world of programming. This year, I finally took the leap
            and enrolled in a three-month intensive web development course.
            During the course, I got familiar with JavaScript, React, Next.js,
            and Node.js. In the final month, my team and I developed a
            Tamagotchi app, which was an amazing experience to learn how to
            write user stories, handle merge conflicts, and dive into other
            people's code. Now that the bootcamp is behind me, I'm motivated to
            keep working on new projects, learn Python, and continue growing as
            a full-stack developer.
          </p>

          <p>
            Before diving into the tech world, I spent eight years living in
            East Asia. In Japan, it became my weekly routine to visit a local
            "sentou" (public bath) and chat with elderly men in 43-degree water,
            whose names I never learned. In South Korea, I often found myself in
            24/7 coin-operated karaoke rooms, singing my heart out in the middle
            of the night. And in Taiwan, I discovered my passion for hiking,
            spending my weekends on the mountains near Taipei. The breathtaking
            views of the sea from steep cliffs always made the existential fears
            totally worth it.
          </p>

          <p>
            I'm always up for new challenges and excited to see where the next
            journey will take me – whether in the real world or the digital one.
          </p>
        </>
      )}
    </StyledAboutPage>
  );
}
