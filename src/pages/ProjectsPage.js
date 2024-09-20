import styled from "styled-components";
import { projects } from "../lib/data";
import Project from "../components/Project/Project";

const StyledProjectsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  margin: 10% 5%;
  width: 90%;
  padding-bottom: 100px;

  @media screen and (min-width: 600px) {
    margin: 10% 0%;
    margin-top: 5%;
  }
`;

export default function ProjectsPage({ language }) {
  return (
    <StyledProjectsPage>
      {projects.map((project, index) => (
        <Project key={index} data={project} language={language} />
      ))}
    </StyledProjectsPage>
  );
}
