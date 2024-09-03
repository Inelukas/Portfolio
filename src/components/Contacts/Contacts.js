import styled from "styled-components";
import gmail from "../../assets/gmail_icon.png";
import linkedin from "../../assets/LinkedIn_logo.png";
import instagram from "../../assets/Instagram_logo.png";
import github from "../../assets/github.png";

const StyledContacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: 5% 0;
  gap: 30px;

  a {
    color: var(--text-color);

    :hover {
      transform: scale(1.2);
    }

    img {
      width: 50px;
    }
  }
`;

export default function Contacts() {
  return (
    <StyledContacts>
      <a href="mailto:klipp.lukas@gmail.com">
        <img src={gmail} alt="Google Mail" />
      </a>
      <a href="https://tw.linkedin.com/in/lukas-klipp-2a9011211?trk=public_profile_browsemap">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://github.com/Inelukas">
        <img src={github} alt="GitHub" />
      </a>
      <a href="https://www.instagram.com/inelukas/">
        <img src={instagram} alt="Instagram" />
      </a>
    </StyledContacts>
  );
}
