import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  a {
    z-index: 2;
    color: var(--primary-color);

    &:hover {
      color: var(--text-color);
    }
  }
`;

export default function Footer({ language, onCurrentPage }) {
  return (
    <StyledFooter>
      <Link
        to="/privacy"
        onClick={() => {
          onCurrentPage("privacy");
        }}
      >
        {language === "en"
          ? "Privacy"
          : language === "de"
          ? "Datenschutz"
          : "プライバシーポリシー"}
      </Link>
      <Link
        to="/legal-notice"
        onClick={() => {
          onCurrentPage("legal");
        }}
      >
        {language === "en"
          ? "Legal Notice"
          : language === "de"
          ? "Impressum"
          : "Impressum"}
      </Link>
    </StyledFooter>
  );
}
