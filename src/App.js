import AboutPage from "./pages/AboutPage";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import StartPage from "./pages/StartPage";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import useLocalStorageState from "use-local-storage-state";
import Privacy from "./pages/Privacy";
import LegalNotice from "./pages/LegalNotice";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
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

        <Route
          path="/projects"
          element={<ProjectsPage language={language} />}
        />

        <Route path="/skills" element={<SkillsPage language={language} />} />
        <Route
          path="/privacy"
          element={
            <Privacy language={language} onCurrentPage={setCurrentPage} />
          }
        />
        <Route
          path="/legal-notice"
          element={
            <LegalNotice language={language} onCurrentPage={setCurrentPage} />
          }
        />
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
