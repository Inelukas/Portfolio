import styled from "styled-components";

const StyledNavigation = styled.div`
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

  @media screen and (max-width: 1000px) {
    height: auto;
    width: 100%;
    top: auto;
    bottom: 0px;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;

export function Navigation({ onCurrentPage, currentPage }) {
  return (
    <StyledNavigation>
      <h3
        className="link"
        onClick={() => {
          onCurrentPage("home");
        }}
      >
        Home
      </h3>
      <h3
        className="link"
        style={{
          color: `${currentPage === "about" ? "var(--primary-color)" : ""}`,
        }}
        onClick={() => {
          onCurrentPage("about");
        }}
      >
        About
      </h3>
      <h3
        className="link"
        style={{
          color: `${currentPage === "projects" ? "var(--primary-color)" : ""}`,
        }}
        onClick={() => {
          onCurrentPage("projects");
        }}
      >
        Projects
      </h3>
      <h3
        className="link"
        style={{
          color: `${currentPage === "skills" ? "var(--primary-color)" : ""}`,
        }}
        onClick={() => {
          onCurrentPage("skills");
        }}
      >
        Skills
      </h3>
      <h3
        className="link"
        style={{
          color: `${currentPage === "contact" ? "var(--primary-color)" : ""}`,
        }}
        onClick={() => {
          onCurrentPage("contact");
        }}
      >
        Contact
      </h3>
    </StyledNavigation>
  );
}
