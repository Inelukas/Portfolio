import styled from "styled-components";

const StyledSkill = styled.img`
  box-shadow: 5px 5px 5px 5px var(--shadow-color);
  border-radius: 20px;
  padding: 20px;
  transition: transform 0.3s ease;
`;

export function Skill({ data }) {
  return <StyledSkill src={data.icon} alt={`${data.name} Icon`} />;
}
