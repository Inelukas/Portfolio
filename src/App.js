import AboutPage from "./pages/AboutPage";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import StartPage from "./pages/StartPage";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [currentPage, setCurrentPage] = useLocalStorageState("page", {
    defaultValue: "home",
  });
  const [language, setLanguage] = useLocalStorageState("language", {
    defaultValue: "en",
  });

  function toggleLanguage() {
    setLanguage(language === "en" ? "de" : language === "de" ? "jp" : "en");
  }

  return (
    <>
      <GlobalStyle currentPage={currentPage} />
      <Routes>
        <Route
          path="/"
          element={
            <StartPage language={language} onCurrentPage={setCurrentPage} />
          }
        />
        <Route path="/about" element={<AboutPage language={language} />} />

        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="/skills" element={<SkillsPage language={language} />} />
      </Routes>
      <Navigation
        onToggleLanguage={toggleLanguage}
        onCurrentPage={setCurrentPage}
        currentPage={currentPage}
        language={language}
      />
    </>
  );
}
