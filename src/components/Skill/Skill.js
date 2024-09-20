import styled from "styled-components";

const StyledSkill = styled.img`
  box-shadow: 3px 3px 3px 3px var(--shadow-color);
  border-radius: 10px;
  padding: 10px;
  transition: transform 0.3s ease;
  width: 20vw;
  max-width: 150px;
`;

export function Skill({ data }) {
  return <StyledSkill src={data.icon} alt={`${data.name} Icon`} />;
}
